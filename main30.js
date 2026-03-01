//Handling Events

//Adding Event Listner

// window.addEventListener("click", () =>{
//     console.log("You knocked");
// });

//Using click

// let button = document.querySelector("button");

// button.addEventListener("click", () =>{
//     console.log("Button clicked.");
// });

//Using onClick

// let secondButton = document.createElement('button');
// secondButton.textContent = 'click me';
// secondButton.appendChild(document.createTextNode('click me'))
// secondButton.onclick = function(){
//     console.log("Second button clicked");
// }

// document.body.appendChild(secondButton);


//Removing Event Listener

// let button = document.querySelector("button");
// function once(){
//     console.log("Done.");

//     button.removeEventListener("click", once);
// }

// button.addEventListener("click", once);

//Event Objects

// let button = document.querySelector("button");

// button.addEventListener("mousedown", event =>{
//     if(event.button == 0){
//         console.log("Left button");
//     }else if(event.button == 1){
//         console.log("Middle button");
//     }else if(event.button == 2){
//         console.log("Right button")
//     }
// });

//Propagation

//  let para = document.querySelector("p");
//  let button = document.querySelector("button");
//  para.addEventListener("mousedown", ()=>{
//     console.log("Handler for paragraph.");
//  });

//  button.addEventListener("mousedown", event =>{
//     console.log("Handler for button.");
//     if(event.button ==2) event.stopPropagation();
//  });

//Target property

// document.body.addEventListener("click", event=>{
//     if(event.target.nodeName == "BUTTON"){
//         console.log("Clicked", event.target.textContent);
//     }
// });

//Default Actions

// let link = document.querySelector("a");

// link.addEventListener("click", event =>{
//     console.log("Nope.");
//     event.preventDefault();
// });

//Key Events

// window.addEventListener("keydown", event => {
//     if(event.key == "v"){
//         document.body.style.background = "violet";
//     }
// });
// window.addEventListener("keyup", event =>{
//     if(event.key == "v"){
//         document.body.style.background = "";
//     }
// });

// window.addEventListener("keydown", event =>{
//     if(event.key == " " && event.ctrlKey){
//         console.log("Continuing");
//     }
// });

//Mouse clicks
// window.addEventListener('click', event =>{
//     let dot = document.createElement("div");
//     dot.className = "dot";
//     dot.style.left = (event.pageX - 4) + "px";
    //Handling Events 253
//     dot.style.top = (event.pageY -4) + "px";

//     document.body.appendChild(dot);
// });

//Mouse Motion

let lastX; //Tracks the last observed mouse X position

let bar = document.querySelector("div");
bar.addEventListener("mousedown", event =>{
    if(event.button == 0){
        lastX = event.clientX;
        window.addEventListener("mousemove", moved);
        event.preventDefault();//prevent selection
    }
});

function moved(event){
    if(event.buttons == 0){
        window.removeEventListener("mousemove", moved);
    }else{
        let dist = event.clientX - lastX;
        let newWidth = Math.max(10, bar.offsetWidth + dist);
        bar.style.width = newWidth + "px";
        lastX = event.clientX;

    }
}

//Touch Events
// function update(event){
//     for(let dot; dot = document.querySelector("dot");){
//         dot.remove();
//     }

//     for(let i = 0; i < event.touches.length; i++){
//         let{pageX, pageY} = event.touches[i];
//         let dot = document.createElement("dot");
//         dot.style.left = (pageX - 50) + "px";
//         dot.style.top = (pageY - 50) + "px";
//         document.body.appendChild(dot);
//     }
// }

// window.addEventListener("touchstart", update);
// window.addEventListener("touchmove", update);
// window.addEventListener("touchend", update);

//Scroll Events

//Create some content
// document.body.appendChild(document.createTextNode("supercalifragilisticexpialidocious".repeat(1000)));

// let baR = document.querySelector("#progress");

// window.addEventListener("scroll", ()=>{
//     let max = document.body.scrollHeight - innerHeight;
//     baR.style.width = `${(pageYOffset/max) * 100}%`;
// });

//Focus Events
let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
for(let field of Array.from(fields)){
    field.addEventListener("focus", event =>{
        let text = event.target.getAttribute("data-help");
        help.textContent = text;
    });
    field.addEventListener("blur", event =>{
        help.textContent ="";
    });
}

//Load Event
//Events and Event loop

let squareWorker = new Worker("code/squareWorker.js")

squareWorker.addEventListener("message", event =>{
    console.log("The worker responded:", event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(14);


//Timers

let bombTimer = setTimeout(()=>{
    console.log("BOOM!");
}, 500);

// if(Math.random() < 0.5){
    //50% chance
//     console.log("Defused.");
//     clearTimeout(bombTimer);
// }

// let ticks = 0;
// let clock = setInterval(()=>{
//     console.log("tick", ticks++);
//     if(ticks == 10){
//         clearInterval(clock);
//         console.log("stop");
//     }
// }, 200);

//Debouncing
let textarea = document.querySelector("textarea");
let timeout;
textarea.addEventListener("input", ()=>{
    clearTimeout(timeout);
    timeout = setTimeout(()=> console.log("Typed!"), 500);
});

let scheduled = null;
window.addEventListener("mousemove", event=>{
    if(!scheduled){
        setTimeout(()=>{
            document.body.textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
            scheduled = null;
        }, 250);
    }
    scheduled = event;
});