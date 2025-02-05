// definim el component RegistrationForm

import React, { useState } from 'react';
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // maneix els errors de validació
    const [errors, setErrors] = useState({});

    // Estat per mostrar el missatge de confirmació
    const [successMessage, setSuccessMessage] = useState('');

    // Funció per manejar els canvis en el formulari
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Funció per validar el formulari
    const validateForm = () => {
        const newErrors = {};

        if (!formData.username) {
            newErrors.username = "El nom d'usuari és obligatori";
        }
        if (!formData.email) {
            newErrors.email = "L'email és obligatori";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "L'email és invàlid";
        }
        if (!formData.password) {
            newErrors.password = "La contrasenya és obligatòria";
        } else if (formData.password.length < 8) {
            newErrors.password = "La contrasenya ha de tenir almenys 8 caràcters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // funció per manejar l'enviament del formulari
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            toast.success('Formulari enviat correctament!',{
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="registration-form">
            <h2>Registre</h2>
            {successMessage && <p className="success">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom d'usuari:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>

                <div>
                    <label>Correu electrònic:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div>
                    <label>Contrasenya:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
