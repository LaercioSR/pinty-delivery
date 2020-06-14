import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCheckCircle } from "react-icons/bs";

import NavbarPintyDelivery from '../../componets/NavbarPintyDelivery';
import ImageCrop from '../../componets/ImageCrop';

import api from '../../services/api';
import './style.css';

export default function Home() {
    const history = useHistory();

    const [categorias, setCategorias] = useState([]);
    const [cadastrado, setCadastrado] = useState(false);

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        whatsapp: '',
        endereco: '',
        sobre: '',
    });

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('0');
    const [imagemSelecionada, setImagemSelecionada] = useState('');

    useEffect(() => {
        api.get('estabelecimentos/categorias').then(response => {
            setCategorias(response.data);
        })
    }, []);

    function telefone() {
        const inputTelefone = document.getElementById('whatsapp');

        let valor = inputTelefone.value;
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d\d)(\d)/g, "($1) $2");
        if (valor.length === 14) {
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        } else {
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
        }

        document.getElementById('whatsapp').value = valor;
    }

    function selecionarCategoria(event) {
        const categoria = event.target.value;
        setCategoriaSelecionada(categoria);
    }

    function tratarAlteracaoInput(event) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function cadastrarEstabelecimento(event) {
        event.preventDefault();

        const { nome, email, whatsapp, endereco, sobre } = formData;
        const categoria_id = categoriaSelecionada;
        const imagem = imagemSelecionada;

        const data = {
            nome,
            email,
            whatsapp: whatsapp.replace(' ', '').replace('(', '').replace(')', '').replace('-', ''),
            endereco,
            sobre,
            categoria_id,
            imagem
        }

        console.log(data);

        await api.post('estabelecimentos', data);

        setTimeout(() => {
            setCadastrado(true);
        }, 500)

        setTimeout(() => {
            irParaHome();
        }, 5000)
    }

    function irParaHome() {
        history.push('/');
    }

    return (
        <div>
            {
                cadastrado ?
                    (
                        <div className="cadastrado-sucesso" onClick={irParaHome}>
                            <BsCheckCircle color="920000" size={60} />
                            <h1>Solicitação de cadastro de <br />estabelecimento feito com sucesso!</h1>
                            <p>Redirecionando</p>
                        </div>
                    ) : (
                        <>
                            <div id="navbar-pintydelivery">
                                <NavbarPintyDelivery />
                            </div>

                            <div id="cadastrar-estabelecimento">
                                <form onSubmit={cadastrarEstabelecimento}>
                                    <h1>Cadastro de Estabelecimento</h1>

                                    <div className="dropzone-image">
                                        <ImageCrop onFileUploaded={setImagemSelecionada} />
                                    </div>

                                    <fieldset>
                                        <legend>
                                            <h2>Dados</h2>
                                        </legend>

                                        <div className="field">
                                            <label htmlFor="nome">Nome do Estabelecimento <span className="campo-obrigatorio">*</span></label>
                                            <input type="text" name="nome" id="nome" onChange={tratarAlteracaoInput} required />
                                        </div>

                                        <div className="field">
                                            <label htmlFor="categoria">Categoria <span className="campo-obrigatorio">*</span></label>
                                            <select name="categoria" id="categoria" value={categoriaSelecionada} onChange={selecionarCategoria} required >
                                                <option value="0">Selecione uma Categoria</option>
                                                {categorias.map(categoria => (
                                                    <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="field-group">
                                            <div className="field">
                                                <label htmlFor="email">E-mail <span className="campo-obrigatorio">*</span></label>
                                                <input type="email" name="email" id="email" onChange={tratarAlteracaoInput} required />
                                            </div>
                                            <div className="field">
                                                <label htmlFor="whatsapp">Whatsapp <span className="campo-obrigatorio">*</span></label>
                                                <input type="text" name="whatsapp" id="whatsapp" onKeyUp={telefone} onChange={tratarAlteracaoInput} placeholder="xx xxxxx-xxxx" maxLength="15" required />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label htmlFor="endereco">Endereço</label>
                                            <input type="text" name="endereco" id="endereco" onChange={tratarAlteracaoInput} />
                                        </div>

                                        <div className="field">
                                            <label htmlFor="sobre">Sobre</label>
                                            <textarea name="sobre" id="sobre" onChange={tratarAlteracaoInput} rows="5" maxLength="255" />
                                        </div>
                                    </fieldset>

                                    <button type="submit">
                                        Cadastrar estabelecimento
                                </button>
                                </form>
                            </div>
                        </>
                    )
            }

        </div>
    );
}