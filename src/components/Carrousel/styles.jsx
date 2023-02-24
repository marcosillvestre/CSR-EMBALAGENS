import Carousel from 'react-elastic-carousel';
import styled from "styled-components";

export const Item = styled.div`
div{
display: grid;
place-items: center;
}

div > img {
    border-radius: 2rem;
    min-width: 15.3em;
    height: 70vh;
}

div > span {
    text-align: start;
    width: 80%;
}
    
`

export const CarouselEdited = styled(Carousel)`
padding: 2rem 20rem;
display: grid;
place-items: center;

@media (max-width: 718px){
    
padding: 0;

.hJErft{
    display: none;
}
.cELvbP {
    display: none;
}
    div{
    width: 100%;

    span{
        width: 100%;
        text-align: center;
    }
    }

    div > img {
    border-radius: 1.4rem;
    width: 100%;
    height: auto;
}
}
`