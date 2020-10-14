import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../redux/actions/burger';

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    componentDidUpdate() {
        console.log(this.props)
    }
    render(){
        return (
            <div className="container">
                <h2>Orders</h2>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        orders: state.burger.orders,
        orderLoading: state.burger.orderLoading,
        orderErr: state.burger.orderErr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Orders);
