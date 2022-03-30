import React from 'react';

const CardGroup = () => {

    const products =[
        {id:1, name:'Laptop pro', price:125000},
        {id:2, name:'Laptop mini', price:80000},
        {id:3, name:'Laptop pro x', price:180000}

    ]
    return (
        <div>
            <h2>This is my cards</h2>
            <div className="card-group">
                {
                    products.map(product =>)
                }
            </div>
        </div>
    );
};

export default CardGroup;