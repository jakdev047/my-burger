import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import Order from '../components/Order/Order';
import { fetchOrders } from '../redux/actions/burger';

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders(this.props.token,this.props.userId);
    }
    render(){
        let orders = null;
        if(this.props.orderErr) {
            orders = <p>Sorry Failed to Load Orders!</p>
        }
        else {
            if(this.props.orders.length === 0 ) {
                orders = <p>You have no Orders!</p>
            }
            else {
                orders =  this.props.orders.map(order=>{
                    return <Order key={order.id} order={order}/>
                })
            }
        }
        return (
            <div className="container my-5">
                {this.props.orderLoading ? <Spinner /> : orders}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        orders: state.burger.orders,
        orderLoading: state.burger.orderLoading,
        orderErr: state.burger.orderErr,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token,userId) => dispatch(fetchOrders(token,userId))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Orders);
