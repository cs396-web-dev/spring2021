let doctors;
const fetchDoctors = () => {
    fetch('https://cs396-hw2.herokuapp.com/doctors/')
        .then(response => response.json())
        .then(storeDoctors)
        .then(displayDoctors)
        .then(attachEventHandlers);
};

const getDoctorFromId = id => {
    return doctors.filter(doc => doc._id == id)[0];
};

const fetchCompanionsByDoctor = id => {
    fetch(`https://cs396-hw2.herokuapp.com/doctors/${id}/companions`)
        .then(response => response.json())
        .then(displayCompanions)
        .then(attachCompanionEventHandlers);
};

const displayCompanions = companions => {
    const tags = [];
    companions.forEach(companion => {
        const template = `
            <div data-id="${companion._id}">
                <p>
                    <a class="edit-companion" data-id="${companion._id}" href="#"><i class="fas fa-edit"></i></a> 
                    <a class="delete-companion" data-id="${companion._id}" href="#"><i class="fas fa-trash"></i></a> 
                    ${companion.name}
                <p>
            </div>
        `;
        tags.push(template);
    });
    document.querySelector('#companions').innerHTML = `
        <h2>Companions</h2>
        ${tags.join('\n')}
    `;
};

const attachCompanionEventHandlers = () => {
    document.querySelectorAll('.edit-companion').forEach(elem => {
        elem.onclick = ev => {
            alert('edit: ' + ev.currentTarget.dataset.id);
            ev.preventDefault();
        };
    });
    document.querySelectorAll('.delete-companion').forEach(elem => {
        elem.onclick = ev => {
            alert('delete: ' + ev.currentTarget.dataset.id);
            ev.preventDefault();
        };
    });
};

const storeDoctors = data => doctors = data;

const displayDoctors = () => {
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
        <h2>
            <a href="#" class="edit-doctor" data-id="${doctor._id}"><i class="fas fa-edit"></i></a> 
            ${doctor.name}
        </h2>
        <p>Seasons: ${doctor.seasons.join(', ')}</p>
    `;
    document.querySelector('.edit-doctor').onclick = ev => {
        const doctor = getDoctorFromId(ev.currentTarget.dataset.id);
        displayEditDoctorForm(doctor);
        ev.preventDefault();
    };
};

const displayEditDoctorForm = doctor => {
    document.querySelector('#doctor').innerHTML = `
        <form id="edit-doctor-form">
            <div class="input-section">
                <label for="title">Name</label>
                <input type="text" name="name" id="name" value="${doctor.name}">
            </div>
            <div class="input-section">
                <label for="seasons">Seasons</label>
                <input type="text" name="seasons" id="seasons" value="${doctor.seasons.join(', ')}">
            </div>
            <button class="btn btn-main" id="save" type="submit">Save</button>
            <a class="btn" href="/">Cancel</a>
        </form>`;
}



const showDoc = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.dataset.id);
    const doc = getDoctorFromId(elem.dataset.id);
    displayDoctor(doc);
    // displayEditDoctorForm(doc);
    fetchCompanionsByDoctor(elem.dataset.id);
}

const attachEventHandlers = () => {
    document.querySelectorAll('aside a').forEach(a => {
        a.onclick = showDoc;
    })
};

fetchDoctors();