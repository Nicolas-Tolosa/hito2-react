import React from 'react'
import { useState } from 'react'

const Register = () => {
    // Estados del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Estados del error del formulario
    const [errorValues, setErrorValues] = useState(false);
    const [errorPasswordLength, setErrorPasswordLength] = useState(false)
    const [errorPasswordMatch, setErrorPasswordMatch] = useState(false)


    // Funcion para antes de enviar el formulario
    const validarFormulario = (element) => {
        element.preventDefault();

        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            setErrorValues(true);
            return;
        }
        if (password.length < 6) {
            setErrorPasswordLength(true);
            return;
        }
        if (password !== confirmPassword) {
            setErrorPasswordMatch(true);
            return;
        }
        setErrorValues(false);
        setErrorPasswordLength(false);
        setErrorPasswordMatch(false);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <h1>Registro</h1>
            <form className='form' onSubmit={validarFormulario}>
                {errorValues ? <p>Todos los campos son obligatorios</p> : null}
                {errorPasswordLength ? <p>La contraseña debe tener al menos 6 caracteres</p> : null}
                {errorPasswordMatch ? <p>Las contraseñas no coinciden</p> : null}
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
                            setErrorPasswordMatch('')}}
                        value={password}
                    />
                </div>
                <div className='form-group'>
                    <label>Confirmar contraseña</label>
                    <input
                        type='password'
                        name='confirmar-contraseña'
                        className='form-control'
                        onChange={(element) => {
                            setConfirmPassword(element.target.value); 
                            setErrorValues(''); 
                            setErrorPasswordLength(''); 
                            setErrorPasswordMatch('')}}
                        value={confirmPassword}
                    />
                </div>
                <button type='submit' className='submit-button'>
                    Enviar
                </button>
            </form>
        </>
    )
}

export default Register