let press = document.getElementById("press");
let release = document.getElementById("release");

const btnTurnOn = document.getElementById("btnTurnOn");
const btnTurnOff = document.getElementById("btnTurnOff");

let status = document.getElementById("statusText");

btnTurnOn.addEventListener("click", () => {
    document.addEventListener("keydown", pressfunction);
    document.addEventListener("keyup", releasefunction);

    status.innerHTML = "Key logger is ON";
    console.log("Key logger turned on");
})

btnTurnOff.addEventListener("click", () => {
    // Remove event listeners to stop logging keys
    document.removeEventListener("keydown", pressfunction);
    document.removeEventListener("keyup", releasefunction);
    press.innerHTML = "";
    release.innerHTML = "";

    status.innerHTML = "Key logger is OFF";
    
    console.log("Key logger turned off");
});

function pressfunction(event){
    press.innerHTML = `User Pressed: ${event.key}`;
}

function releasefunction(event){
    release.innerHTML = `User Released: ${event.key}`;
}


