const ws = window.WebSocket || window.MozWebSocket;
let connection;
let username = "";

const chatList = document.querySelector("#chat");
const messageInput = document.querySelector("#message");
const usersList = document.querySelector("#users-list");

// TODO: Optionally add other chat servers
const servers = [
    "localhost:8081"
];

function handleReceivedMessage(json) {
    switch(json.type) {
        case "login":
            // TODO: clear usersList and re-populate it using the received data
            break;
        case "disconnect":
            // TODO: clear usersList and re-populate it using the received data
            break;
        case "chat":
            // TODO: update chatList
            break;
        default:
            console.error("Message type not recognized");
            console.log(json);
    }
}

function handleChat() {
    connection.send(JSON.stringify({
        type: "chat",
        text: messageInput.value,
        username: username
    }));
}

function handleDisconnect() {
    connection.send(JSON.stringify({
        type: "disconnect",
        username
    }));
}

function handleLogin() {
    connection.send(JSON.stringify({
        type: "login",
        username
    }));
}

// -------------------------------------------------------------------------------
// Don't edit the below code
// -------------------------------------------------------------------------------

const dropdownButton = document.querySelector("#dropdown-button");
const dropdownContent = document.querySelector("#dropdown-content");
const nameContainer = document.querySelector("#name-container");
const nameDisplay = document.querySelector("#name-display");
const sendButton = document.querySelector("#send");
const sendContainer = document.querySelector("#send-container");
const setName = document.querySelector("#set-name");
const usersContainer = document.querySelector("#users-container");
const wsStatus = document.querySelector("#ws-status");

function resetApp() {
    connection = null;
    wsStatus.style.display = "inline";
    nameContainer.style.display = "none";
    nameDisplay.style.display = "none";
    sendContainer.style.display = "none";
    usersContainer.style.display = "none";
    while (chatList.firstChild) {
        chatList.removeChild(chatList.firstChild);
    }    
}

const initializeConnection = url => {
    connection = new ws(url);
    console.log(`Connecting to ${url}...`);

    connection.onopen = () => {
        console.log("WebSocket connection is open.");
        wsStatus.style.display = "inline";
        wsStatus.textContent = "Connected";
        nameContainer.style.display = "block";
    };
    
    connection.onclose = () => {
        console.log("WebSocket connection is closed.");
        wsStatus.textContent = "Not Connected";
        resetApp();
        handleDisconnect();
    };
    
    connection.onerror = e => {
        console.error("WebSocket error observed:", e);
        wsStatus.textContent = "Error: Check Console for Details";
        resetApp();
    };
    
    connection.onmessage = e => {
        handleReceivedMessage(JSON.parse(e.data));
    };
}

setName.addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    if (name !== "") {
        username = name;
        nameDisplay.style.display = "block";
        nameDisplay.textContent = `Signed in as ${name}.`;
        nameContainer.style.display = "none";
        sendContainer.style.display = "block";
        usersContainer.style.display = "block";

        // Student code
        handleLogin();
    }
});

sendButton.addEventListener("click", () => {
    if (connection === null || !servers.includes(dropdownButton.textContent)) {
        alert("Please connect to a valid server.");
        return;
    }
    if (messageInput.value !== "") {
        handleChat();
        messageInput.value = "";
    }
});

servers.forEach(server => {
    const button = document.createElement("button");
    button.textContent = server;
    button.addEventListener("click", () => {
        if (connection) {
            connection.close();
            connection = null;
        }
        dropdownButton.textContent = button.textContent;
        initializeConnection(`ws://${dropdownButton.textContent}`);
    });
    dropdownContent.appendChild(button);
});

window.onbeforeunload = () => {
    handleDisconnect();
}
