import React, { Component, Fragment } from 'react';
import Burger from './Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Burger />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default BurgerBuilder;
