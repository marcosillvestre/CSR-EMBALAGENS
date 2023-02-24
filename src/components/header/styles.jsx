import styled from "styled-components";

export const Container = styled.header`
display: flex;
align-items: center;
padding: 1rem 10rem;
gap: 10rem;
height: 10vh;
min-width: 100vw ;
margin-bottom: 1rem;
.logo{
    height: 5em;
    transform: translateY(15px);
    border-radius:100%;
}
.dots{
    display: none;
}



@media  (max-width: 718px ){
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
.dots{
    display: block;
    height: 3em;
    transform: translate(18px, -6px);
}
}
`
export const MediaButtons = styled.div`
    display: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

        .logo{
        height: 2.9rem;
        display: none;

    }
        .menu{
        display: flex;
        flex-direction: column;
        position: relative;
        scale:0 ;
        transform-origin: 10% 10%;
        translate: 0 80%;
        transition: 0.375s;
        background: #e4ecee;
        border-radius:  10px;
        padding: 10px;
a{
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
}
    }



@media (max-width: 718px){
    display: flex;
    flex-direction: column;
    gap: 20px;
img{
    display: block;

}
    
    .material-icon{
    display: inline ;
}

}
`
export const ContainerButtons = styled.div`
display: flex;
gap: 3rem;
.fab{
    position: fixed;
    right: 1em;
    top: 2em;
    z-index: 10000;
}
.fab > button{
    z-index: 1;
    background: 0;
    border: 0;
    transition: 0.3s;

}
.fab.open > button {
rotate: 90deg;
}

.fab.open .menu {
scale: 1;
translate: -10% -15%;

}



`
export const Buttons = styled.a`
border: none;
background: none;
font-weight:${props => props.active ? 'bold' : 'thin'};

@media  (max-width: 718px ){
display: none;

}
`
