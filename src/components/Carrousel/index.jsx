import React from "react";
import Items from './items';
import { CarouselEdited, Item } from './styles';

function Carrousel() {

    return (
        <CarouselEdited itemstoShow={1}>

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

        </CarouselEdited>
    )
}

export default Carrousel