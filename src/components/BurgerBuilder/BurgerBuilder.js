import React, { Component, Fragment } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';

const ingredientsPrice = {
    salad: 20,
    cheese: 40,
    meat: 90
}

class BurgerBuilder extends Component {
    state = {
        ingredients: [
            {type: 'salad', amount:0},
            {type: 'cheese', amount:0},
            {type: 'meat', amount:0},
        ],
        totalPrice: 80
    }

    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];

        const newPrice = this.state.totalPrice + ingredientsPrice[type];

        for( let item of ingredients) {
            if( item.type === type ) item.amount++;
        }

        this.setState({
            ingredients,
            totalPrice: newPrice
        })
    }

    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];

        const newPrice = this.state.totalPrice - ingredientsPrice[type];

        for( let item of ingredients) {
            if( item.type === type ) {
                if(item.amount <= 0) return;
                item.amount--;
            };
        }

        this.setState({
            ingredients,
            totalPrice: newPrice
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-6">
                            <Burger ingredients={this.state.ingredients}/>
                        </div>
                        <div className="col-lg-6">
                            <Controls 
                                ingredientAdded = {this.addIngredientHandle}
                                ingredientRemoved = {this.removeIngredientHandle}
                                price={this.state.totalPrice}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default BurgerBuilder;
