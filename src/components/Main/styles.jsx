import styled from "styled-components";

export const Container = styled.main`
margin: 6em 0;
display: flex;
justify-content: flex-start;
height: 75vh;
flex-direction: column;
align-items: center;
.carousel{
    display: flex;
    overflow-x: scroll;
    padding: 24px;
    scroll-snap-type: x mandatory;
    scroll-padding: 24px;
    border-radius: 8px;
    gap: 12px;
    width: 300px;
}

.container .item{
    flex: 0 0 100%;
    scroll-snap-align: start;
    padding: 24px;
    
    border: 1px solid red;
    h1{
        font-size: 2rem;
    }

}


@media (max-width: 720px){
    .item{

        h1{
            font-size: 1.6rem;
            
        }

    }
}
`