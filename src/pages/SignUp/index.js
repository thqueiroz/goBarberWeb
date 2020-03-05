import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um email válido')
        .required('O email é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
        .required('A senha é obrigatória')
});

export default function SignUp() {
    const dispatch = useDispatch();
    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }
    return (
        <>
            <img src={logo} alt="goBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}
