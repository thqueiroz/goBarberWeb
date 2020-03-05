import React from 'react';

import { MDNotifications } from 'react-icons/md';

import { Container } from './styles';

export default function Notifications() {
    return (
        <Container>
            <Bags />
            <MDNotifications color="#7159c1" size={20} />
        </Container>
    );
}
