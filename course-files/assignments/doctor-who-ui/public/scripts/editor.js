const baseURL = 'http://localhost:8081';

/****************************************/
/* Functions that issue server requests */
/****************************************/

const initResetButton = () => {
    document.querySelector('#reset').onclick = ev => {
        fetch(`${baseURL}/reset/`)
            .then(response => response.json())
            .then(data => {
                console.log('reset:', data);
            });
    };
};

initResetButton();