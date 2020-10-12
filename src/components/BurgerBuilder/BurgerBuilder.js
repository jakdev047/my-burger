import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';

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
        totalPrice: 80,
        modalOpen: false,
        purchaseable: false
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

        this.updatePurchaseable(ingredients);
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

        this.updatePurchaseable(ingredients);
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    updatePurchaseable = ingredients => {
        const sum = ingredients.reduce((sum,element)=>{
            return sum += element.amount;
        },0);

        this.setState({
            purchaseable: sum > 0
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
                                toggleModal={this.toggleModal}
                                purchaseable={this.state.purchaseable}
                            />
                        </div>
                    </div>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalHeader>Your Order Summary</ModalHeader>
                        <ModalBody>
                            <h5>Total Price: {this.state.totalPrice.toFixed(0)} BDT </h5>
                            <Summary ingredients={this.state.ingredients}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggleModal}>Continue to Checkout</Button>
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Fragment>
        )
    }
};

export default BurgerBuilder;
