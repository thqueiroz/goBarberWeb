import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

import AvatarInput from './AvatarInput';

export default function Profile() {
    const dispath = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispath(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispath(signOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />

                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Endereço de email"
                />
                <br />

                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Sua senha antiga"
                />

                <Input
                    name="password"
                    type="password"
                    placeholder="Nova senha"
                />

                <Input
                    name="password"
                    type="password"
                    placeholder="Confimação de senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="button" onClick={handleSignOut}>
                Sair do GoBarber
            </button>
        </Container>
    );
}
