
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const searchButton = document.getElementById('searchButton');
const tableInfo = document.getElementById('tableInfo');
const tr = document.getElementById('tr');
const td = document.getElementById('td');

searchButton.addEventListener("click", () => {
    let nameValue = fname.value;
    console.log(nameValue);
    let lastNameValue = lname.value;
    console.log(lastNameValue);
    let emailValue = email.value;
    console.log(emailValue);
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };  
    let getInfo = async function getRepos() {
    const responseAPI = await fetch(`localhost:3000/${nameValue}`,requestOptions);
        const data = await responseAPI.json();
        const namePerson= data.name;
        console.log(namePerson);
        const lastNamePerson = data.lastname;
        console.log(lastNamePerson);
        const emailPerson = data.email;
        console.log(email);
        tableInfo.appendChild.tr;
        tr.appendChild.td;
        td.textContent = namePerson;
        tr.appendChild.td;
        td.textContent = lastNamePerson;
        tr.appendChild.td;
        td.textContent = emailPerson;
    };
});

