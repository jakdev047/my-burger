import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]

const BuildControl = props => {
    return (
        <div>
            <div>
                <p className="my-2">{props.label}</p>
            </div>
            <button className="btn btn-danger mr-3" onClick={()=>props.removed(props.type)}>Less</button>
            <button className="btn btn-success" onClick={()=>props.added(props.type)}>More</button>
            <hr/>
        </div>
    );
}

const Controls = props => {
    return (
        <div style={{textAlign:'center'}}>
            <Card>
                <CardHeader style={{background:'#000'}}>
                    <h4 style={{color:'#fff'}}>Add Ingredients</h4>
                </CardHeader>
                <CardBody style={{background:'#eee'}}>
                    {
                        controls.map(item=>{
                            return <BuildControl key={Math.random()} label={item.label} type={item.type} added={props.ingredientAdded} removed={props.ingredientRemoved}/>
                        })
                    }
                </CardBody>
                <CardFooter style={{background:'#000'}}>
                    <h5 style={{color:'#fff'}}>Price: {props.price} BDT </h5>
                </CardFooter>
                <Button color="secondary" onClick={props.toggleModal} disabled={!props.purchaseable}>Order Now</Button>
            </Card>
        </div>
    )
};

export default Controls;
