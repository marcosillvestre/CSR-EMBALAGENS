import React, { useState } from "react";
import dots from '../../assets/dots.svg';
import perfil from '../../assets/pict.jpeg';
import { Buttons, Container, ContainerButtons, MediaButtons } from './styles';
export function Header() {

    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
        <Container>
            <img className="logo" src={perfil} />
            <ContainerButtons>

                <MediaButtons className={`fab ${isOpen ? "open" : ''}`}>
                    <button onClick={() => (setIsOpen(!isOpen))}
                        className="material-icon">
                        <img className="dots" src={dots} alt="dots" />
                    </button>

                    <div className="menu" >
                        <a href="*">Home</a>
                        <a href="*">Sobre nós</a>
                        <a href="*">Blog</a>
                        <a href="*">Contato</a>
                    </div>
                </MediaButtons>

                <Buttons>Home</Buttons>
                <Buttons>Sobre nós</Buttons>
                <Buttons>Blog</Buttons>
                <Buttons>Contato</Buttons>

            </ContainerButtons>

        </Container>
    )
}