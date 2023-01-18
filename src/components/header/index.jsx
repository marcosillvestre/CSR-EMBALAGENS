import React from "react";
import perfil from '../../assets/pict.jpeg';
import { Container } from './styles';

export function Header() {

    return (
        <Container>
            <img src={perfil} />

        </Container>
    )
}