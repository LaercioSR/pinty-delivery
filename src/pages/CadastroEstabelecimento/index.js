import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import ReactCrop from 'react-image-crop';

import NavbarPintyDelivery from '../../componets/NavbarPintyDelivery';
import ImageCrop from '../../componets/ImageCrop';

import api from '../../services/api';
import './style.css';

export default function Home() {
    const history = useHistory();

    const [categorias, setCategorias] = useState([]);

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
            whatsapp,
            endereco,
            sobre,
            categoria_id,
            imagem
        }

        await api.post('estabelecimentos', data);

        alert('Estabelecimento cadastrado');

        history.push('/');
    }

    return (
        <div>
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
                            <label htmlFor="nome">Nome do Estabelecimento</label>
                            <input type="text" name="nome" id="nome" onChange={tratarAlteracaoInput} required />
                        </div>

                        <div className="field">
                            <label htmlFor="categoria">Categoria</label>
                            <select name="categoria" id="categoria" value={categoriaSelecionada} onChange={selecionarCategoria} required >
                                <option value="0">Selecione uma Categoria</option>
                                {categorias.map(categoria => (
                                    <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
                                ))}
                            </select>
                        </div>

                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" onChange={tratarAlteracaoInput} required />
                            </div>
                            <div className="field">
                                <label htmlFor="whatsapp">Whatsapp</label>
                                <input type="text" name="whatsapp" id="whatsapp" onChange={tratarAlteracaoInput} required />
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
        </div>
    );
}