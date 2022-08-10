import React from 'react';
import ToAnimate from "./ToAnimate";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from 'react-bootstrap';

const Animate = ({selectedId , setSelectedId , infoaboutmeItem}) => {
    return (
        <div className='m-2' key={selectedId}>
            <AnimatePresence>

                {selectedId && (

                    <motion.div  key={selectedId} layout layoutId={selectedId}>
                        <motion.div >
                            <Card className="toanimate-container">
                                <ToAnimate images={infoaboutmeItem.images[selectedId].certificate} />
                            </Card>

                        </motion.div>
                        <motion.button onClick={() => setSelectedId(null)} >X</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>

                {selectedId === 0 && (

                    <motion.div  key={selectedId} layout layoutId={selectedId}>
                        <motion.div >
                            <Card.Img style={{ width: "20%" }} src={infoaboutmeItem.images[selectedId].certificate} />
                        </motion.div>
                        <motion.button onClick={() => setSelectedId(null)} >X</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Animate;