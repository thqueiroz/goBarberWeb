import React from 'react';

import { MDNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Scroll, Notification } from './styles';

export default function Notifications() {
    return (
        <Container>
            <Badge hasOnRead>
                <MDNotifications color="#7159c1" size={20} />
            </Badge>

            <NotificationList>
                <Scroll>
                    <Notification unRead>
                        <p>Voce possui um agendamento para amanhã</p>
                        <time>Há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>

                    <Notification>
                        <p>Voce possui um agendamento para amanhã</p>
                        <time>Há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>

                    <Notification>
                        <p>Voce possui um agendamento para amanhã</p>
                        <time>Há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                </Scroll>
            </NotificationList>
        </Container>
    );
}
