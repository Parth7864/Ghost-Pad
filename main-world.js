console.log(
    "InputBridge loaded"
);


// Fake Xbox controller

const virtualController = {

    id:
    "InputBridge Virtual Xbox Controller",

    index:0,

    connected:true,

    mapping:"standard",


    buttons:
    Array.from(
        {length:17},
        () => ({
            pressed:false,
            touched:false,
            value:0
        })
    ),


    axes:[
        0,
        0,
        0,
        0
    ],

    timestamp:0
};



// Replace browser gamepad list

navigator.getGamepads = function(){

    return [
        virtualController
    ];

};



window.inputBridgeController =
    virtualController;



console.log(
    "Virtual controller ready"
);



//
// Keyboard input
//

const keys = {};



window.addEventListener(
    "keydown",
    e => {

        keys[e.code] = true;

    }
);



window.addEventListener(
    "keyup",
    e => {

        keys[e.code] = false;

    }
);




function updateMovement(){

    let x = 0;
    let y = 0;


    if(keys.KeyW)
        y -= 1;

    if(keys.KeyS)
        y += 1;

    if(keys.KeyA)
        x -= 1;

    if(keys.KeyD)
        x += 1;


    virtualController.axes[0] = x;
    virtualController.axes[1] = y;


    virtualController.timestamp =
        performance.now();


}


