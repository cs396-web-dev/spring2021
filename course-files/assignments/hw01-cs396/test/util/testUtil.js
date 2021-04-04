const { response } = require("express");
const process = require("process");

module.exports = {
    mockDoctor: {
        "name": "Sarah Van Wart",
        "seasons": [1, 2, 3, 4, 5, 6]
    },
    mockCompanion: {
        "name": "Cooper Barth",
        "character": "Crash Override",
        "doctors": ["d4"],
        "seasons": [12, 13, 14],
        "alive": true
    },
    mockId: "this_is_a_fake_id",
    mockPatchData: {
        name: "new_name",
        seasons: [0]
    },
    mockPatchCompanion: {
        name: "new_name",
        "seasons": [12, 13],
        "character": "Zer0",
    },
    route: route => {
        const endpoint = (process.env.CURRENT_ENDPOINT || "http://localhost:8081") + route;
        // console.log('ENDPOINT:', endpoint);
        return endpoint;
    },
    testImplemented: (response, done) => {
        if (response.status === 501) {
            done("Status code 501 received: Not Implemented.");
        }
    }
}
