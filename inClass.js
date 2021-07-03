// Dado un Array 

// Example: [“val 1", “val 2”, “val 1"] =====> [“val 1”, “val 2"]



const arrayInterview = function (array){
    let arrayNuevo = [];
    if(array.length >=1){
        arrayNuevo.push(array[0]);
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if ( !arrayNuevo.includes(element) ){
                arrayNuevo.push(element)
            }     
        }
    }
    return arrayNuevo;
};
console.log(arrayInterview(["hola","hola"]));
console.log(arrayInterview(["hola"]));
console.log(arrayInterview(["hola","adios","que tal","muy bien","hola"]));
console.log(arrayInterview([]));