import { TextField } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import appFb from "../services/firebaseConfig";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



export const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth(appFb);
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Вы зарегистрированы');
            setEmail('');
            setPassword('');

        } catch (er) {
            toast.error('Повторите попытку');
            console.error(er);
        };
    }



    return <div>
        <ToastContainer />
        <form onSubmit={onSubmit}>
            <h2>Registration</h2>
            <TextField placeholder="Введите почту" name="email" type='email' onChange={handleEmailChange} value={email} required />
            <TextField placeholder="Введите пароль" name="password" type='password' onChange={handlePasswordChange} value={password} required />
            <br />
            <div>
                {error && <p>{error}</p>}
                <button type="submit">Зарегистрироваться</button>
            </div>
            <p>
                <Link to='/Login'>Войти</Link>
            </p>
        </form>
    </div>;
};

