import React from "react";
import flowers from '../../assets/flowers.svg';
import { Container } from './styles';

export function Section() {
    return (

        <Container>
            <div>
                <h1>A melhor solução para suas Embalagens </h1>
                <h4>Desde 2010 vendendo nao só caixas mas também sonhos</h4>

                <button><a href="*">Fazer orçamento </a></button>

            </div>
            <img src={flowers} alt="perfil" />
            <span className="clip" />
            {/* <Carousel /> */}

        </Container>


    )
}