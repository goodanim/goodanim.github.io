
tsParticles.load("tsparticles", {
    "autoPlay": true,
    "backgroundMask": {
        "composite": "destination-out",
        "cover": {
            "color": {
                "value": "#000"
            },
            "opacity": 0.2    // 0.2 TOP
        },
        "enable": true
    },
    "backgroundMode": {
        "enable": false,
        "zIndex": -1
    },
    "detectRetina": true,
    "fpsLimit": 30,
    "infection": {
        "cure": false,
        "delay": 0,
        "enable": false,
        "infections": 0,
        "stages": []
    },
    "interactivity": {
        "detectsOn": "canvas",
        "events": {
            "onHover": {
                "enable": true,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "attract": {
                "distance": 200,
                "duration": 0.4,
                "speed": 1
            },
            "bounce": {
                "distance": 200
            },
            "bubble": {
                "distance": 400,
                "duration": 20,
                "opacity": 1,
                "color": {
                    "value": "#fff"
                },
                "size": 90															//MAX SIZE
            },
            "connect": {
                "distance": 80,
                "links": {
                    "opacity": 1
                },
                "radius": 60
            },
            "grab": {
                "distance": 400,
                "links": {
                    "blink": false,
                    "consent": false,
                    "opacity": 1
                }
            },
            "light": {
                "area": {
                    "gradient": {
                        "start": {
                            "value": "#ffffff"
                        },
                        "stop": {
                            "value": "#000000"
                        }
                    },
                    "radius": 1500
                },
                "shadow": {
                    "color": {
                        "value": "#000000"
                    },
                    "length": 2000
                }
            },
            "push": {
                "quantity": 8
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4,
                "speed": 1
            },
            "slow": {
                "factor": 3,
                "radius": 200
            },
            "trail": {
                "delay": 1,
                "quantity": 1
            }
        }
    },
    "manualParticles": [],
    "motion": {
        "disable": false,
        "reduce": {
            "factor": 4,
            "value": false
        }
    },
    "particles": {
        "move": {
            "angle": {
                "offset": 45,
                "value": 90
            },
            "attract": {
                "enable": false,
                "rotate": {
                    "x": 700,
                    "y": 1200
                }
            },
            "direction": "none",
            "distance": 0,
            "enable": true,
            "gravity": {
                "acceleration": 9.81,
                "enable": false,
                "maxSpeed": 50
            },
            "noise": {
                "delay": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0
                },
                "enable": false
            },
            "outModes": {
                "default": "out",
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "random": true,				//random size
            "size": true,
            "speed": 3,				//speed position
            "straight": true,
            "trail": {
                "enable": true,
                "length": 10,
                "fillColor": {
                    "value": "#000000"
                }
            },
            "vibrate": false,
            "warp": false
        },
        "number": {
            "density": {
                "enable": true,
                "area": 800,
                "factor": 1000
            },
            "limit": 0,
            "value": 22
        },
        "opacity": {
            "random": {
                "enable": true,
                "minimumValue": 0.8
            },
            "value": 0.5,
            "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 1,
                "sync": false
            }
        },
        "reduceDuplicates": true, //default falese
        "rotate": {													//rotate
            "random": {
                "enable": true,
                "minimumValue": 360
            },
            "value": 0,
            "animation": {
                "enable": true,			//default falese
                "speed": 0.80,			//default 0
                "sync": true 			//default falese
            },
            "direction": "clockwise",
            "path": false
        },
        "shadow": {
            "blur": 5,
            "color": {
                "value": "#ffffff"
            },
            "enable": true,		//default falese
            "offset": {
                "x": 3,
                "y": 3
            }
        },
        "shape": {														//shape
            "options": {
                "polygon": {
                    "nb_sides": 3
                },
                "star": {
                    "nb_sides": 5
                }
            },
            "type": "polygon"
        },
        "size": {
            "random": {
                "enable": true,
                "minimumValue": 20
            },
            "value": 30
        }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": false,
    "themes": []
});
