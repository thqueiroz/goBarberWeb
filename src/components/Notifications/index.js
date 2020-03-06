import React from 'react';

import { MDNotifications } from 'react-icons/md';

import { Container, NotificationsList, Notification } from './styles';

export default function Notifications() {
    return (
        <Container>
            <Bags hasUnread>
                <MDNotifications color="#7159c1" size={20} />
            </Bags>

            <NotificationsList>
                <Notification unread>
                    <p>Voce possui um novo agendamento</p>
                    <time>Há 2 dias</time>
                    <button type="button">Marcar como lido</button>
                </Notification>

                <Notification>
                    <p>Voce possui um novo agendamento</p>
                    <time>Há 2 dias</time>
                    <button type="button">Marcar como lido</button>
                </Notification>

                <Notification>
                    <p>Voce possui um novo agendamento</p>
                    <time>Há 2 dias</time>
                    <button type="button">Marcar como lido</button>
                </Notification>
            </NotificationsList>
        </Container>
    );
}
