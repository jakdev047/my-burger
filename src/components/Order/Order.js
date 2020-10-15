import React from 'react'

const Order = ({ order }) => {
    const ingredientSummary = order.ingredients.map(item => {
        return (
            <span 
                key={item.type} 
                style={{
                    marginRight:"10px",
                    border: "1px solid gray",
                    boxShadow: "1px 1px #888",
                    borderRadius: "5px",
                    padding: "10px", 
                }}
            >
                {item.amount}x
                <span style={{ textTransform: 'capitalize',marginRight:"5px" }}>{item.type}</span>
            </span>
        )
    })
    return (
        <div style={{
            border: "1px solid gray",
            boxShadow: "1px 1px #888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px"
        }}>
            <p>Order Name: {order.id} </p>
            <p>Delivery Address: {order.customer.deliveryAddress} </p>
            <hr />
            {ingredientSummary}
            <hr />
            <p>Total: {order.price} BDT</p>
        </div>
    )
};

export default Order;
