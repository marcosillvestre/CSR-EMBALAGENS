import React from "react";
import gift from '../../assets/gift.svg';
import { Container } from './styles';


export function Main() {
    return (

        <Container>
            <h1>Como trabalhamos</h1>

            <div className="carousel">
                <div className="item">
                    <img src={gift} alt="" />

                    <h4> Serviços</h4>
                    <p>texto como funciona o trabalho</p>
                    <button>Saiba mais</button>
                </div>

                <div className="item">
                    <img src={gift} alt="" />

                    <h4> Serviços</h4>
                    <p>texto como funciona o trabalho</p>
                    <button>Saiba mais</button>
                </div>
            </div>


        </Container>


    )
}