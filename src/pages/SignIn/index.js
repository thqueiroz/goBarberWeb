import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido')
        .required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }
    return (
        <>
            <img src={logo} alt="goBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />

                <button type="submit">
                    {loading ? 'Carregando...' : 'Acessar'}
                </button>
                <Link to="/register">Criar conta gratuita</Link>
            </Form>
        </>
    );
}
