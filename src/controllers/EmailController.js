const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

function enviarEmail(opcoesEmail) {
    transporter.sendMail(opcoesEmail, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    estabelecimentoCadastrado(estabelecimento) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: estabelecimento.email,
            subject: 'Cadastro de Estabelecimento',
            text: `Olá ${estabelecimento.nome},\n\nSua solicitação de cadastro no Pinty Delivery foi realizada com sucesso`
        };

        enviarEmail(mailOptions);
    }
}



