import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap';

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
            <button className="btn btn-danger mr-3">Less</button>
            <button className="btn btn-success">More</button>
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
                            return <BuildControl key={Math.random()} label={item.label} type={item.type} />
                        })
                    }
                </CardBody>
                <CardFooter style={{background:'#000'}}>
                    <h5 style={{color:'#fff'}}>Price: 0.00 BDT </h5>
                </CardFooter>
            </Card>
        </div>
    )
};

export default Controls;
