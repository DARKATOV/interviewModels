
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

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("localhost:3000/users/ricardo", requestOptions)
        .then(response => response.json())
        .then(data => {
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
            td.textContent = emailPerson;})
        .catch(error => console.log('error', error));
});

