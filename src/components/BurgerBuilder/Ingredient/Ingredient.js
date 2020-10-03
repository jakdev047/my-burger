import React from 'react';

// images
import breadTop from '../../../assets/images/top.png';
import breadBottom from '../../../assets/images/bottom.png';
import meat from '../../../assets/images/meat.png';
import salad from '../../../assets/images/salad.png';
import cheese from '../../../assets/images/cheese.png';


const Ingredient = props => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-top':
            ingredient = <div><img src={breadTop} alt="bread-top" /></div>;
            break;
        case 'bread-bottom':
            ingredient = <div><img src={breadBottom} alt="bread-bottom" /></div>;
            break;
        case 'meat':
            ingredient = <div><img src={meat} alt="meat" /></div>;
            break;
        case 'salad':
            ingredient = <div><img src={salad} alt="salad" /></div>;
            break;

        case 'cheese':
            ingredient = <div><img src={cheese} alt="cheese" /></div>;
            break;

        default:
            ingredient = null;
            break;
    }


    return (
        <div className="ingredient">
            {ingredient}
        </div>
    )
};

export default Ingredient;
