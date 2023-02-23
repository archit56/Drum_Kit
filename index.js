let key_press;

for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        key_press = this.innerHTML; // contains the HTML of clicked button tag
        click_triggger(key_press); // triggers when a mouse click is encountered
        animate_button_press(key_press); // plays a animation when a button is pressed
    });
}

document.addEventListener("keydown", function (event) {
    key_press = event.key.toLowerCase(); // extracts the key pressedon keyboard
    click_triggger(key_press);
    animate_button_press(key_press);
});


// note that click_trigger is written instead of click_trigger() even tho it is a fucntion
// reason: click_trigger() will directly call the fucntion even when click is not encountered 

function click_triggger(key_press) {
    switch (key_press) {
        case "w":
            let audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;

        case "a":
            let audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;

        case "s":
            let audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;

        case "d":
            let audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;

        case "j":
            let audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;

        case "k":
            let audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;

        case "l":
            let audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;

    }

}

function animate_button_press(key_press) {

    active_button = document.querySelector("." + key_press);

    // add the class "pressed" to the HTML element
    active_button.classList.add("pressed");


    // setTimeout(function(), time_period)
    // after the time_period passes, the function() executes 
    setTimeout(function () {
        active_button.classList.remove("pressed");
    }, 30);
}
