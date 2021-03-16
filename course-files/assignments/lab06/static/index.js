const cookieCountDiv = document.getElementById("cookie-count");
const robotCountDiv = document.getElementById("robot-count");
const factoryCountDiv = document.getElementById("factory-count");

const BASE_URL = "http://localhost:8081";

window.onload = () => fetch(`${BASE_URL}/initialize`)
                        .then(() => {
                            // TODO: start timers
                        })
                        .catch(err => console.error(err));

function makeCookie() {
    fetch(`${BASE_URL}/cookie/1`, { method: "PUT" })
        .then(() => {
            // TODO: update number of cookies
            console.log(getCookie("cookies"));
        })
        .catch(err => console.error(err));
}

function purchaseRobot() {
    fetch(`${BASE_URL}/robot`, { method: "PUT" })
        .then(() => {
            // TODO: update number of cookies and robots
            console.log(getCookie("cookies"));
            console.log(getCookie("robots"));
            
            // TODO: start new timer
        })
        .catch(err => console.error(err));
}

function purchaseFactory() {
    fetch(`${BASE_URL}/factory`, { method: "PUT" })
        .then(() => {
            // TODO: update number of cookies and factories
            console.log(getCookie("cookies"));
            console.log(getCookie("factories"));

            // TODO: start new timer
        })
        .catch(err => console.error(err));
}

function getCookie(name) {
    return document.cookie
            .split("; ")
            .find(cookie => cookie.startsWith(`${name}=`))
            .split("=")[1];
}
