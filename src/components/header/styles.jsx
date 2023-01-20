import styled from "styled-components";

export const Container = styled.header`
display: flex;
padding: 1rem 10rem;
gap: 10rem;
height: 5em;
min-width: 100vw ;
img{
height: 5em;
border-radius:100%;
}

@media  (max-width: 718px ){
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
}
`
export const MediaButtons = styled.div`
    display: none;

    img{
    height: 2.7rem;
    }

@media (max-width: 718px){
    display: inline;
    .material-icon{
    display: inline ;
}
    .menu{
        display: inline;
        position: absolute;
        scale: 0;
        translate: 0 80%;
        transform-origin: 50% 50%;
        visibility: hidden;
        transition: 0.375s;
        opacity: 0;
    }
    .menu > button{
        display: inline;
        position: relative;
        transition: 0.5s;
    }

}
`
export const ContainerButtons = styled.div`
display: flex;
gap: 3rem;
.closed > button{
    z-index: 1;
    background: 0;
    border: 0;
    transition: 0.2s;

}
.closed.open > button {
rotate: 90deg;
}

.closed.open.menu {
    scale: 1;
    translate: 0;
    visibility: visible;
    opacity: 1;
}

`
export const Buttons = styled.button`
border: none;
background: none;
font-weight:${props => props.active ? 'bold' : 'thin'};

@media  (max-width: 718px ){
display: none;

}
`
