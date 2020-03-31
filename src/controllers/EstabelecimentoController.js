const Estabelecimento = require('../models/Estabelecimento');
const EstabelecimentoCategoria = require('../models/EstabelecimentoCategoria');

module.exports = {
    async index(request, response) {
        const estabelecimentos = await Estabelecimento.findAll({
            attributes: ['id', 'nome', 'sobre', 'horario_funcionamento', 'endereco', 'foto', 'whatsapp'],
            include: [{
                model: EstabelecimentoCategoria,
                as: 'categoria',
                attributes: ['descricao'],
            }]
        });

        return response.json(estabelecimentos);
    },

    async store(request, response) {
        let { nome, sobre, horario_funcionamento, endereco, foto, whatsapp, categoria_id } = request.body;

        const categoria = await EstabelecimentoCategoria.findByPk(categoria_id);

        if(!categoria) {
            return response.status(400).json({ error: 'Categoria não encontrada' });
        }

        whatsapp = '+55'+whatsapp; 

        const estabelecimento = await Estabelecimento.create({ 
            nome, 
            sobre, 
            horario_funcionamento, 
            endereco, 
            foto, 
            whatsapp, 
            categoria_id 
        });

        return response.json(estabelecimento);
    }
}