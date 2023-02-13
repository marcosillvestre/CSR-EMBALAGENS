import React from "react";
import Carousel from 'react-elastic-carousel';
import Items from './items';
import { Item } from './styles';

function Carrousel() {

    return (
        <Carousel itemstoShow={1}>

            {
                Items &&
                Items.map(item => (
                    <Item key={item.id}>
                        <div >
                            <img src={item.image} alt={item.imageDesc} />
                            <span>{item.description}</span>
                        </div>
                    </Item>
                ))}

        </Carousel>
    )
}

export default Carrousel