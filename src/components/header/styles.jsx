import styled from "styled-components";

export const Container = styled.header`
display: flex;
padding: 1rem 10rem;
gap: 10rem;
height: 5em;
min-width: 100vw ;
margin-bottom: 12rem;
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
        display: flex;
    flex-direction: column;
    gap: 20px;

    img{
    height: 2.7rem;
        display: none;

    }
        .menu{
        display: flex;
        flex-direction: column;
        position: relative;
        scale:0 ;
        transform-origin: 50% 50%;
        translate: 0 80%;
        transition: 0.375s;
        background: #e4ecee;
        border-radius:  10px;
        padding: 10px;
span{
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
    display: inline;

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
}
.fab > button{
    z-index: 1;
    background: 0;
    border: 0;
    transition: 0.2s;

}
.fab.open > button {
rotate: 90deg;
}

.fab.open .menu {
scale: 1;
translate: 10% -10%;

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
