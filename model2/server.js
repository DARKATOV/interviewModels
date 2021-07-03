/* inicio  11:14  03/07/2021 */

const express = require('express');
const users = require("./users.json");
const app = express();

app.get('/test', (req, res) => {
    res.send('Hello');
});

app.get('/users', (req, response) => {
    // const arrayUsers = ['antonio','ronar','diego','leon','manuel','juan'];
    response.send(users);
});

app.get("/users/:name", (request, response) => {
    // const arrayUsers = ['antonio','ronar','diego','leon','manuel','juan'];
    let name = request.params.name;
    const person = users.find((per)=>per.name === name);
    // resultado de filter si se sabe que solamente un elemento cumplia con la condicion filtro, y acceder luego al valor cero de esa nueva array resltandte 
    response.send(person);
});

app.use(express.json());

app.listen(3000, () => console.log("Server is up and running"))