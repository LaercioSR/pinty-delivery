const Estabelecimento = require('../models/Estabelecimento');
const EstabelecimentoCategoria = require('../models/EstabelecimentoCategoria');
const EmailController = require('./EmailController');
const FileSystem = require('fs');
const Crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const estabelecimentos = await Estabelecimento.findAll({
            attributes: ['id', 'nome', 'sobre', 'endereco', 'imagem', 'whatsapp', 'email'],
            include: [{
                model: EstabelecimentoCategoria,
                as: 'categoria',
                attributes: ['descricao'],
            }],
            // where: { solicitacao: 'S' }
        });

        const estabelecimentosSelerializado = estabelecimentos.map(estabelecimento => {
            const linkImagem = estabelecimento.imagem ? 'uploads/estabelecimento_images/' + estabelecimento.imagem : 'uploads/default.png';
            return {
                id: estabelecimento.id,
                nome: estabelecimento.nome,
                sobre: estabelecimento.sobre,
                endereco: estabelecimento.endereco,
                whatsapp: estabelecimento.whatsapp,
                email: estabelecimento.email,
                categoria: estabelecimento.categoria.descricao,
                // imagem_url: process.env.APP_URL + 'uploads/estabelecimento_images/' + estabelecimento.imagem,
                imagem_url: process.env.APP_URL + linkImagem,
            };
        });

        return response.json(estabelecimentosSelerializado);
    },

    async store(request, response) {
        const { nome, sobre, endereco, imagem, whatsapp, email, categoria_id } = request.body;
        let imagem_nome = '';

        const categoria = await EstabelecimentoCategoria.findByPk(categoria_id);

        if (!categoria) {
            return response.status(400).json({ error: 'Categoria não encontrada' });
        }

        if (imagem != '') {
            imagem_nome = Crypto.randomBytes(8).toString('HEX') + '.png';

            let base64_data = imagem.replace(/^data:image\/png;base64,/, '');
            FileSystem.writeFile('public/uploads/estabelecimento_images/' + imagem_nome, base64_data, 'base64', function (err) {
                console.log(err);
            })
        }

        const estabelecimento = await Estabelecimento.create({
            nome: nome,
            sobre: sobre,
            endereco: endereco,
            imagem: imagem_nome,
            whatsapp,
            email,
            categoria_id: categoria_id,
        });

        EmailController.estabelecimentoCadastrado(estabelecimento);

        return response.json(estabelecimento);
    },
}