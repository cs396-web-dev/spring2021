const fetchDoctors = () => {
    fetch('https://cs396-hw2.herokuapp.com/doctors/')
        .then(response => response.json())
        .then(displayDoctors);
};
const toHTMLElement = (doctor) => {
    return `
        <section class="post">
            <a class="detail-link" href="/post/#${doctor._id}">
                <h2>${doctor.name}</h2>
            </a>
            <p>${doctor.seasons}</p>
        </section>
    `;
};

const displayDoctors = (data) => {
    const entries = [];
    for (const post of data) {
        entries.push(toHTMLElement(post));
    }
    document.querySelector('#posts').innerHTML = entries.join('\n');
};

fetchDoctors();