import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { Card } from "react-bootstrap";


const Item = ({ item }) => {
    const y = useMotionValue(0);

    return (
        <Reorder.Item value={item} id={item} style={{ y }}>
            <Card style={{cursor: "pointer"}}>
                <Card.Body>
                    <Card.Text>{item}</Card.Text>
                </Card.Body>
            </Card>
        </Reorder.Item>
    );
};

export default Item;
