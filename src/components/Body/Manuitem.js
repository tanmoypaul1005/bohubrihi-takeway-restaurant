import React from 'react';
import { Card, CardTitle } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
import CardImg from 'reactstrap/lib/CardImg';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';
const Manuitem = (props) => {
    const { name, image } = props.food;
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardBody onClick={props.onFoodselect}>
                    <CardImg
                        width="100%"
                        alt={name}
                        src={image}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle style={{ curser: "pointer" }} onClick={props.onFoodselect}>{name}</CardTitle>
                    </CardImgOverlay>
                    <CardTitle onClick={props.onFoodselect}>{name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default Manuitem;