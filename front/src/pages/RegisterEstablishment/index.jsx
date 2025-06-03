import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Spinner } from "react-bootstrap";

import NavbarPintyDelivery from "../../componets/NavbarPintyDelivery";
import ImageCrop from "../../componets/ImageCrop";

import api from "../../services/api";
import "./style.css";

export default function RegisterEstablishment() {
  //   const history = useHistory();]

  const [categories, setCategories] = useState([]);
  const [registered, setRegistered] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    address: "",
    about: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("0");
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("establishments/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  function formatPhoneNumber() {
    const phoneInput = document.getElementById("whatsapp");

    let value = phoneInput.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d\d)(\d)/g, "($1) $2");
    if (value.length === 14) {
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
    } else {
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }

    phoneInput.value = value;
  }

  function handleCategoryChange(event) {
    const category = event.target.value;
    setSelectedCategory(category);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const { name, email, whatsapp, address, about } = formData;
    const category_id = selectedCategory;
    const image = selectedImage;

    const data = {
      name,
      email,
      whatsapp: whatsapp
        .replace(" ", "")
        .replace("(", "")
        .replace(")", "")
        .replace("-", ""),
      address,
      about,
      category_id,
      image,
    };

    await api.post("establishments", data);

    setTimeout(() => {
      setRegistered(true);
    }, 500);

    setTimeout(() => {
      redirectToHome();
    }, 5000);
  }

  function redirectToHome() {
     // history.push("/");
  }

  return (
    <div>
      {registered ? (
        <div className="registered-success" onClick={redirectToHome}>
          <BsCheckCircle color="920000" size={60} />
          <h1>
            Solicitação de cadastro de <br />
            estabelecimento feito com sucesso!
          </h1>
          <p>Redirecionando...</p>
        </div>
      ) : (
        <>
          <div id="navbar-pintydelivery">
            <NavbarPintyDelivery />
          </div>

          <div id="register-establishment">
            <form onSubmit={handleSubmit}>
              <h1>Cadastro de Estabelecimento</h1>

              <div className="dropzone-image">
                <ImageCrop onFileUploaded={setSelectedImage} />
              </div>

              <fieldset>
                <legend>
                  <h2>Dados</h2>
                </legend>

                <div className="field">
                  <label htmlFor="name">
                    Nome do Estabelecimento{" "}
                    <span className="required-field">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="category">
                    Categoria <span className="required-field">*</span>
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="0">Select a Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.description}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field-group">
                  <div className="field">
                    <label htmlFor="email">
                      Email<span className="required-field">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="whatsapp">
                      Whatsapp<span className="required-field">*</span>
                    </label>
                    <input
                      type="text"
                      name="whatsapp"
                      id="whatsapp"
                      onKeyUp={formatPhoneNumber}
                      onChange={handleInputChange}
                      placeholder="xx xxxxx-xxxx"
                      maxLength="15"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="field">
                  <label htmlFor="about">Sobre</label>
                  <textarea
                    name="about"
                    id="about"
                    onChange={handleInputChange}
                    rows="5"
                    maxLength="255"
                  />
                </div>
              </fieldset>

              <button type="submit">
                {loading ? (
                  <Spinner
                    animation="border"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <span>Cadastrar estabelecimento</span>
                )}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
