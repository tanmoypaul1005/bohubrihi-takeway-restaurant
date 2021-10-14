import React, { useEffect, useState } from 'react';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import Data from '../../Data/Data'
import FoodDetils from './FoodDetils';
import Manuitem from './Manuitem';
const Manu = () => {
    const [Food, setFood] = useState([]);
    const [FoodDetil, setFoodDetil] = useState({});
    useEffect(() => {
        setFood(Data);
    }, [])

    const onFoodselect = Food => {
        // console.log(FoodDetil);
        setFoodDetil(Food);
        toggle();
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    document.title = "Manu"
    return (
        <div className="container">
            <div className="row">
                <CardColumns>
                    {
                        Food.map(item => <Manuitem food={item} key={item.id} onFoodselect={() => onFoodselect(item)} ></Manuitem>)
                    }
                </CardColumns>
                <Modal isOpen={modal} onClick={toggle} >
                    <ModalBody>
                        <FoodDetils FoodDetils={FoodDetil}></FoodDetils>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={toggle} colur="secondary" >Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        </div>
    );
};

export default Manu;