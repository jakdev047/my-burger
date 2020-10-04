import React, {  } from 'react';
import Ingredient from '../Ingredient/Ingredient';

const Burger = props => {

    let ingredientArr = props.ingredients.map(item => {
        let amountArry = [...Array(item.amount).keys()];
        return amountArry.map(_ => {
            return <Ingredient key={Math.random()} type={item.type} />
        });
    }).reduce((arr,element)=>{
        return arr.concat(element);
    },[]);

    if(ingredientArr.length === 0) {
        ingredientArr = <p className="my-3" style={{color:'red',fontWeight:'bold'}}>Please add some Ingredients!</p>
    }

    return (
        <div className="burger">
            <Ingredient type='bread-top' />
            {ingredientArr}
            <Ingredient type='bread-bottom' />
        </div>
    )
};

export default Burger;
