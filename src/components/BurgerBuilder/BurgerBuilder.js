import React, { Component, Fragment } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';

class BurgerBuilder extends Component {
    state = {
        ingredients: [
            {type: 'salad', amount:0},
            {type: 'cheese', amount:0},
            {type: 'meat', amount:0},
        ]
    }

    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];

        for( let item of ingredients) {
            if( item.type === type ) item.amount++;
        }

        this.setState({
            ingredients
        })
    }

    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];

        for( let item of ingredients) {
            if( item.type === type ) {
                if(item.amount <= 0) return;
                item.amount--;
            };
        }

        this.setState({
            ingredients
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
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default BurgerBuilder;
