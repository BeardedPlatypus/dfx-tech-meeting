import React from 'react'
import Particles from 'react-particles-js'
import { motion, AnimatePresence } from "framer-motion"

export const BackgroundBubbles = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key="particle-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Particles
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zindex: - 1,
                    }}
                    params={{
                        "particles": {
                            "number": {
                                "value": 400,
                                "density": {
                                    "enable": false,
                                    value_area: 1100
                                }
                            },
                            "color": {
                                "value": "#3273dc"
                            },
                            "size": {
                                "value": 10,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    sync: false
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": false,
                                "speed": 1.2,
                                "direction": "top",
                                "out_mode": "out",
                                "straight": false,
                                "bounce": false
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default BackgroundBubbles