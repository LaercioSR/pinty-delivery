const Estabelecimento = require('../models/Estabelecimento');
const EstabelecimentoCategoria = require('../models/EstabelecimentoCategoria');
const FileSystem = require('fs');
const Crypto = require('crypto');
const path = require('path');

module.exports = {
    async index(request, response) {
        const estabelecimentos = await Estabelecimento.findAll({
            attributes: ['id', 'nome', 'sobre', 'endereco', 'imagem', 'whatsapp'],
            include: [{
                model: EstabelecimentoCategoria,
                as: 'categoria',
                attributes: ['descricao'],
            }],
            // where: { solicitacao: 'S' }
        });

        const estabelecimentosSelerializado = estabelecimentos.map(estabelecimento => {
            return {
                id: estabelecimento.id,
                nome: estabelecimento.nome,
                sobre: estabelecimento.sobre,
                endereco: estabelecimento.endereco,
                whatsapp: estabelecimento.whatsapp,
                categoria: estabelecimento.categoria,
                imagem_url: process.env.APP_URL + '/uploads/estabelecimento_images/' + estabelecimento.imagem,
            };
        });

        return response.json(estabelecimentosSelerializado);
    },

    async store(request, response) {
        const { nome, sobre, endereco, imagem, whatsapp, categoria_id, categoria_desc } = request.body;

        const categoria = await EstabelecimentoCategoria.findByPk(categoria_id);

        if (categoria_id == 0) {
            await EstabelecimentoCategoria.create({ descricao: categoria_desc });
        } else if (!categoria) {
            return response.status(400).json({ error: 'Categoria não encontrada' });
        }

        let nome_imagem = Crypto.randomBytes(8).toString('HEX') + '.png';

        let base64_data = imagem.replace(/^data:image\/png;base64,/, '');
        FileSystem.writeFile('public/uploads/' + nome_imagem, base64_data, 'base64', function (err) {
            console.log(err);
        })

        const estabelecimento = await Estabelecimento.create({
            nome: nome,
            sobre: sobre,
            endereco: endereco,
            imagem: nome_imagem,
            whatsapp,
            categoria_id: categoria_id,
        });

        return response.json(estabelecimento);
    },

    getImagem(request, response) {
        const { imagem } = request.params;

        return response.sendFile(path.resolve(__dirname, '..', '..', 'public', 'uploads', imagem));
    },
}