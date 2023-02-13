import React, { useState } from "react";
import dots from '../../assets/dots.svg';
import perfil from '../../assets/pict.jpeg';
import { Buttons, Container, ContainerButtons, MediaButtons } from './styles';
export function Header() {

    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
        <Container>
            <img src={perfil} />
            <ContainerButtons>

                <MediaButtons className={`fab ${isOpen ? "open" : ''}`}>
                    <button onClick={() => (setIsOpen(!isOpen))}
                        className="material-icon">
                        <img src={dots} alt="dots" />
                    </button>

                    <div className="menu" >
                        <span>Home</span>
                        <span>Sobre nós</span>
                        <span>Blog</span>
                        <span>Contato</span>
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