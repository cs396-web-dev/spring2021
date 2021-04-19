const fetchDoctors = () => {
    fetch('https://cs396-hw2.herokuapp.com/doctors/')
        .then(response => response.json())
        .then(displayDoctors)
        .then(attachEventHandlers);
};

const fetchDoctor = id => {
    fetch(`https://cs396-hw2.herokuapp.com/doctors/${id}`)
        .then(response => response.json())
        .then(displayDoctor);
}

const fetchCompanionsByDoctor = id => {
    fetch(`https://cs396-hw2.herokuapp.com/doctors/${id}/companions`)
        .then(response => response.json())
        .then(displayCompanions);
}

const displayDoctors = doctors => {
    const tags = [];
    doctors.forEach(doctor => {
        const template = `
            <li>
                <a href="#" data-id="${doctor._id}">${doctor.name}</a>
            </li>
        `;
        tags.push(template);
    });
    const items = tags.join('\n');
    document.querySelector('aside').innerHTML = `<ul>${items}</ul>`;
};

const displayDoctor = doctor => {
    document.querySelector('#doctor').innerHTML = `
        <h2>${doctor.name}</h2>
    `;
};

const displayCompanions = companions => {
    const tags = [];
    companions.forEach(companion => {
        const template = `
            <div data-id="${companion._id}">
                <p>${companion.name}<p>
            </div>
        `;
        tags.push(template);
    });
    const items = tags.join('\n');
    document.querySelector('#companions').innerHTML = items;
};

const showDoc = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.dataset.id);
    fetchDoctor(elem.dataset.id);
    fetchCompanionsByDoctor(elem.dataset.id);
}

const attachEventHandlers = () => {
    document.querySelectorAll('aside a').forEach(a => {
        a.onclick = showDoc;
    })
};

fetchDoctors();