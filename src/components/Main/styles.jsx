import styled from "styled-components";

export const Container = styled.main`
margin: 6em 0;
display: flex;
gap: 35px;
align-items: center;
height: 75vh;
flex-direction: column;


.carousel{
    display: flex;
    justify-content: space-around;

     img{
        width: 20em;
        aspect-ratio: 3/2;
        object-fit: contain;
        mix-blend-mode: color-burn;
    }
}
.item{
    display: grid;
    gap: 25px;
    width: 30em;
    a{
        text-align: center;
    }

    
}




@media (max-width: 720px){
.carousel{
    display: grid;
    overflow-x: scroll;
    gap: 1px;
    img{
        width: 17.5em;
        aspect-ratio: 3/2;
        object-fit: contain;
    }
    a{
        font-size: 1.7rem;
    }
}

.item{
    height: 42vh;
    margin-top: 5em;
    display: grid;
    gap: 1.5em;
    align-items: center;
    padding: 5rem;    
}


}
`