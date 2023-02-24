import styled from "styled-components";

export const Container = styled.section`
display: flex;
height: 90vh;
align-items: center;
max-width: 100vw;
diV{
    position: absolute;
    transform: translate(20em, -8em);
    display: grid;
    gap: 1rem;
    h1{
    font-size: 2rem;
    }
    button{
        background-color: #5e3232;
        border: none;
        border-radius: 20px 5px 20px 5px ;
        width: 88%;
        height: 7em;
        a{
        color: #fff;
        font-weight: bold;
        font-size: 30px;
        }
        &:hover{
            opacity: 0.9;
        }
        &:active{
            opacity: 0.6;
        }
    }
}
img{
    position: absolute;
    z-index: 100;
    right: 15%;
    transform: translateY(-20px);
}
.clip{
    height: 500px;
    width: 31vw;
    background: #5e3232;
    position: absolute;
    right: 0;
    clip-path: polygon(58% 0, 100% 0, 100% 100%, 30% 100%, 0 42%);
}
@media  (max-width: 720px ){
    width: 96vw;
    justify-content: center;
    div{
        position: absolute;
        transform: translate(1em,-7em);
        display: grid;
        gap: 0.7em;
        h1{
            font-size: 1.6em;
        }
        h4{
            width: 24em;
        }
    }
    button{
        width: 82%;
        height: 4.7rem;
    }
    img{
        height: 24em;
        bottom: 0;
    transform: translateY(20px);
    }

    .clip{
        clip-path: polygon(100% 0, 100% 38%, 100% 100%, 40% 100%, 0 47%);
        height: 400px;
        width: 74vw;
        bottom: 0;
    }


}
`