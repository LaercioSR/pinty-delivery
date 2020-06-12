const Estabelecimento = require('../models/Estabelecimento');
const EstabelecimentoCategoria = require('../models/EstabelecimentoCategoria');

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
            return {
                id: estabelecimento.id,
                nome: estabelecimento.nome,
                sobre: estabelecimento.sobre,
                endereco: estabelecimento.endereco,
                whatsapp: estabelecimento.whatsapp,
                email: estabelecimento.email,
                categoria: estabelecimento.categoria,
                imagem_url: process.env.APP_URL + '/uploads/estabelecimento_images/' + estabelecimento.imagem,
            };
        });

        return response.json(estabelecimentosSelerializado);
    },

    async store(request, response) {
        const { nome, sobre, endereco, imagem, whatsapp, email, categoria_id, categoria_desc } = request.body;

        const categoria = await EstabelecimentoCategoria.findByPk(categoria_id);

        if (categoria_id == 0) {
            await EstabelecimentoCategoria.create({ descricao: categoria_desc });
        } else if (!categoria) {
            return response.status(400).json({ error: 'Categoria não encontrada' });
        }

        const estabelecimento = await Estabelecimento.create({
            nome: nome,
            sobre: sobre,
            endereco: endereco,
            imagem: request.file.filename,
            whatsapp,
            email,
            categoria_id: categoria_id,
        });

        return response.json(estabelecimento);
    },
}