const EstabelecimentoCategoria = require('../models/EstabelecimentoCategoria');

module.exports = {
    async store(request, response) {
        const { descricao } = request.body;

        const estabelecimentoCategoria = await EstabelecimentoCategoria.create({ descricao });

        return response.json(estabelecimentoCategoria);
    }


}