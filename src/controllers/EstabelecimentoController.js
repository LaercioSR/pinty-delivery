const Estabelecimento = require('../models/Estabelecimento');

module.exports = {
    async index(request, response) {
        const estabelecimentos = await Estabelecimento.findAll({
            attributes: ['id', 'nome', 'sobre', 'horario_funcionamento', 'endereco', 'foto', 'whatsapp'],
            include: [{
                model: EstabelecimentoCategoria
            }]
        });

        return response.json(estabelecimentos);
    },

    async store(request, response) {
        const { nome, sobre, horario_funcionamento, endereco, foto, whatsapp, categoria_id } = request.body;

        const estabelecimento = await Estabelecimento.create({ nome, sobre, horario_funcionamento, endereco, foto, whatsapp, categoria_id });

        return response.json(estabelecimento);
    }
}