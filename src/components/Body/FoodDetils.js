import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody } from "reactstrap";
import LoadComments from './LoadComments';
const FoodDetils = (props) => {
    // console.log(props);

    const { image, name, price, consumable, cuisine_name, category_name, comments } = props.FoodDetils;
    console.log(comments);
    return (
        <div>
            <Card style={{ marginTop: '40PX' }}>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>Price : {price}</CardText>
                    <CardText>consumable:{consumable}</CardText>
                    <CardText>cuisine Name:{cuisine_name}</CardText>
                    <CardText>category Name:{category_name}</CardText>
                    <br />

                    <LoadComments Comments={comments}></LoadComments>
                </CardBody>
            </Card>
        </div>
    );
};

export default FoodDetils;