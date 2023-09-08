const database = [];

function addToDatabase(data) {
    database.push(data);
}

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = parseInt(document.getElementById('age').value);
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const hobbies = document.getElementById('hobbies').value;

    if (age < 18) {
        alert('Users under the age of 18 may not register.');
        return;
    }

    if (name.length < 3 || surname.length < 3) {
        alert('Name and surname must be at least 3 letters.');
        return;
    }
    const registrationData = {
        name,
        surname,
        age,
        password,
        email,
        gender,
        hobbies
    };

    addToDatabase(registrationData);

    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
    document.getElementById('gender').value = ''; 
    document.getElementById('hobbies').value = '';
});

function clearAdditionalInputs() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
    document.getElementById('gender').value = ''; 
    document.getElementById('hobbies').value = '';
}

function logDatabaseObjects() {
    database.forEach((obj, index) => {
        console.log(`Object ${index + 1}:`, obj);
    });
}

function logElementNames() {
    database.forEach((obj, index) => {
        console.log(`Element ${index + 1}: ${obj.name} ${obj.surname}`);
    });
}

logDatabaseObjects();
logElementNames();
