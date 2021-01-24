const axios = require("axios");

const data = require("../response_data.json");

const host = "http://localhost:8081";

describe("/doctor", () => {
    describe("GET", () => {
        it("should return a list of all Doctor ids", done => {
            axios.get(host + "/doctor")
                .then(response => {
                    if (response.status === 501) {
                        done("Status code 501 received; Function not implemented.");
                    }
                    if (response.data === data.doctorIds) {
                        done();
                    } else {
                        done(`Received data ${response.data} does not match the expected ${data.doctorIds}`);
                    }
                })
                .catch(err => done(err));
        });
    });
    describe("POST", () => {

    });
});