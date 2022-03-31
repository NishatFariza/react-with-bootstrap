import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card/Card';

const CardGroup2 = () => {
    const products =[
        {id:1, name:'Laptop pro', price:125000},
        {id:2, name:'Laptop mini', price:80000},
        {id:3, name:'Laptop pro x', price:180000}

    ]
    return (
        <div>
            <CardGroup>
            {
                    products.map(product => <Card2 key={product.id} product={product}></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;