/* inicio  11:14  03/07/2021 */

// import { nameValue as nameRight } from "./script";  /* duda */

const express = require('express');
const users = require("./users.json");
const app = express();

// const nameRigh =


app.get(`/test`, (req, res) => {
    res.send('Hello');
});

app.get(`/users`, (req, res) => {
    // const arrayUsers = ['antonio','ronar','diego','leon','manuel','juan'];
    res.send(users);
});

app.get("/users/:name", (req, res) => {
    // const arrayUsers = ['antonio','ronar','diego','leon','manuel','juan'];
    let name = req.params.name;
    const person = users.find((per)=>per.name === name);
    // resultado de filter si se sabe que solamente un elemento cumplia con la condicion filtro, y acceder luego al valor cero de esa nueva array resltandte 
    res.send(person);
});
 
app.use(express.json());

app.listen(3000, () => console.log("Server is up and running"))