import React, { Fragment } from 'react';
import Ingredient from '../Ingredient/Ingredient';

const Burger = props => {
    return (
        <Fragment>
            <Ingredient type='bread-top' />
            <Ingredient type='cheese' />
            <Ingredient type='salad' />
            <Ingredient type='meat' />
            <Ingredient type='bread-bottom' />
        </Fragment>
    )
};

export default Burger;
