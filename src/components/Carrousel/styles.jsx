import Carousel from 'react-elastic-carousel';
import styled from "styled-components";

export const Item = styled.div`
/* padding: 5rem; */

div > img {
    border-radius: 5rem;
}
`

export const CarouselEdited = styled(Carousel)`
padding: 2rem 35rem;

@media (max-width: 718px){
    padding: 2rem 0;

    div > img {
    border-radius: 2rem;
    width: 90vw;
}
}
`