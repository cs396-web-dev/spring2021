const ws = require("ws");

const port = process.env.PORT || 8081;
const wss = new ws.Server({ port });
console.log("Application listening on PORT: " + port);

const loggedInUsers = new Set();

const sendJSON = (json, client) => {
    client.send(JSON.stringify(json));
};

wss.on("connection", socket => {
    console.log("Client connected on PORT: " + port);
    socket.on("message", message => {
        const json = JSON.parse(message);
        console.log(json);
        wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                switch(json.type) {
                    case "login":
                        // TODO: Add the user to loggedInUsers and use sendJSON(json, client) to send a list of updated users
                        break;
                    case "disconnect":
                        // TODO: Remove the user from loggedInUsers and use sendJSON(json, client) to send a list of updated users
                        break;
                    case "chat":
                        // TODO: Use sendJSON(json, client) to send back the received json
                        break;
                    default:
                        console.error("Message type not recognized");
                        console.log(message);
                }
            }
        });
    });
});
