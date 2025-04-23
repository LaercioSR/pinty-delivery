const EstabelecimentoCategoria = require('../models/EstabelecimentoCategoria');

module.exports = {
    async index(request, response) {
        const categorias = await EstabelecimentoCategoria.findAll({
            attributes: ['id', 'descricao']
        });

        return response.json(categorias);
    },

    async store(request, response) {
        const { descricao } = request.body;

        const estabelecimentoCategoria = await EstabelecimentoCategoria.create({ descricao });

        return response.json(estabelecimentoCategoria);
    }
}