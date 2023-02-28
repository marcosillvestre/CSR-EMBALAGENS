import React from "react";
import cofee from '../../assets/cofee.svg';
import gift from '../../assets/gift.svg';
import meet from '../../assets/meet.svg';
import { Container } from './styles';


export function Main() {
    return (

        <Container>
            <h1>Como trabalhamos</h1>

            <div className="carousel">
                <div className="item">
                    <img src={cofee} alt="" />

                    <h3> Primeiro passo </h3>
                    <p>
                        Reunião inicial de idéias e
                        brainstorm para criação do produto de
                        acordo com a marca e o desejo do cliente.
                    </p>
                    <a href="*">Saiba mais</a>
                </div>

                <div className="item">
                    <img src={meet} alt="" />

                    <h3> Segundo passo</h3>
                    <p>
                        Alinhamento com a equipe manufatureira.
                        Aqui que vamos trabalhar pra fazer um serviço com muito amor e
                        que caiba no seu bolso.
                    </p>
                    <a>Saiba mais</a>
                </div>

                <div className="item">
                    <img src={gift} alt="" />

                    <h3> Terceiro passo</h3>
                    <p>
                        Início da produção e montagem do produto conforme alinh
                        amento dos passos 1 e 2. E por fim a entrega do produto.
                    </p>
                    <a>Saiba mais</a>
                </div>
            </div>


        </Container>


    )
}