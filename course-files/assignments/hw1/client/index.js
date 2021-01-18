const host = "http://localhost:8081"

const appStatus = document.querySelector("#app-status");
const doctorStatus = document.querySelector("#doctor-status");
const companionStatus = document.querySelector("#companion-status");

let doctors = [];
let companions = [];

const isDoctorImplemented = new Promise((resolve, reject) => {
    fetch(host + "/doctor")
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(() => reject());
});

const isCompanionImplemented = new Promise((resolve, reject) => {
    fetch(host + "/companion")
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(() => reject());
});


document.addEventListener("DOMContentLoaded", () => {
    console.log(appStatus);
    fetch(host)
        .then(response => response.json())
        .then(data => {
            appStatus.textContent = data["data"];
            isDoctorImplemented
                .then(response => response.json())
                .then(data => {
                    doctors = data["data"];
                    doctorStatus.textContent += "\n/doctor implemented.";
                })
                .catch(() => doctorStatus.textContent += "\n/doctor not implemented.")
            isCompanionImplemented
                .then(response => response.json())
                .then(data => {
                    doctors = data["data"];
                    companionStatus.textContent += "\n/companion implemented.";
                })
                .catch(() => companionStatus.textContent += "\n/companion not implemented.")
        })
        .catch(() => {
            // .fetch() Promise only rejects if the resource is offline
            appStatus.textContent = "Error: server not running or not found.";
        });
});


