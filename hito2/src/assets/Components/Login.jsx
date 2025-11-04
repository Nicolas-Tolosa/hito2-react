import React from 'react';
import { useState } from 'react';

const Login = () => {
    // Estados del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Estados del error del formulario
    const [errorValues, setErrorValues] = useState(false);
    const [errorPasswordLength, setErrorPasswordLength] = useState(false);

    // Estado de exito
    const [success, setSuccess] = useState(false)


    // Funcion para antes de enviar el formulario
    const validarFormulario = (element) => {
        element.preventDefault();

        if (!email.trim() || !password.trim()) {
            setErrorValues(true);
            setSuccess(false)
            return;
        }
        if (password.length < 6) {
            setErrorPasswordLength(true);
            setSuccess(false)
            return;
        }
        setErrorValues(false);
        setErrorPasswordLength(false);
        setEmail('');
        setPassword('');
        setSuccess(true)
    };
    return (
        <>
            <h1>Login</h1>
            <form className='form' onSubmit={validarFormulario}>
                {errorValues ? <p>Todos los campos son obligatorios</p> : null}
                {errorPasswordLength ? <p>La contraseña debe tener al menos 6 caracteres</p> : null}
                {success && <p>Felicidades estás logeado</p>}
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        className='form-control'
                        onChange={(element) => setEmail(element.target.value)}
                        value={email}
                    />
                </div>
                <div className='form-group'>
                    <label>Contraseña</label>
                    <input
                        type='password'
                        name='contraseña'
                        className='form-control'
                        onChange={(element) => {
                            setPassword(element.target.value);
                            setErrorValues('');
                            setErrorPasswordLength('');
                        }}
                        value={password}
                    />
                </div>
                <button type='submit' className='submit-button'>
                    Enviar
                </button>
            </form>
        </>
    )
}

export default Login