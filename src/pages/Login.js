import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvaider";
import { TextField } from "@mui/material";
import { ToastContainer } from 'react-toastify';

export const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || '/';

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await auth.signin({ email, password }, () => {
                setTimeout(navigate(from, { replace: true }), 1000);
            });
        } catch (er) {
            setError(er);
            console.error(er);
        }
    };


    return < div >
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <TextField placeholder="Введите почту" name="email" type='email' onChange={handleEmail} value={email} required />
            <TextField placeholder="Введите пароль" name="password" type='password' onChange={handlePassword} value={password} required />
            <br />
            <div>
                {error && <p>{error}</p>}
                <button variant='outlined' type="submit">Войти</button>
            </div>
        </form>
    </div>;
};