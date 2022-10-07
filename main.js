// 1. Funciones flecha
// Convierte la siguiente función en una función flecha:

// function saludar() {
//   return "Hola";
// }

const saludito = () => "Hola";
console.log(saludito());



// Convierte la siguiente función en una función flecha en línea:

// function division(a,b) {
//     return a / b; 
// }

const divi = (a,b) => a / b;
console.log(divi(92,8))

// Convierte la siguiente función en una función flecha:

// function miNombre(nombre) {
//     return `Mi nombre es ${nombre}`;
//   }
  
const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre('Daniela'))


// Convierte las siguientes funciones en funciones flecha:

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }	

// const test1 = (callback) => callback();
// test1(test2);

const test2 = () => {
  console.log("Función test 2 ejecutada.");
};

const test1 = (test2) => {
  test2();
};

test1(test2);




// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    

// Crea un array con la gente mayor de 25 años y muéstralo por consola

const mayor25=[ ];
      gente.forEach((personas) =>{
        if(personas.edad >25) 
        mayor25.push(personas)
      } )
        console.log(mayor25)

// Crea un array con la gente que empieza por J. 

const soloJ=[ ];
      gente.forEach((personas) =>{
        if(personas.nombre [0] ==='J') 
        soloJ.push(personas)
      } )
        console.log(soloJ)


        // 3. Map
        // Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

        const Mayor25 = gente.map((personas) => {
            if (personas.edad > 25) {
                return personas;
            }
        });
        console.log(Mayor25);

        //Porque los demas me dan undefined?


        // Crea un array con la gente que empieza por J. 

        const nombresoloJ = gente.map((personas) => {
            if(personas.nombre [0] ==='J') 
            return personas;
          } )
        console.log(nombresoloJ);

        // Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
        const numbers = [ 4, 5, 6, 7, 8, 9, 10];

        const numeroElevado = numbers.map((numero) => numero ** numero);
        console.log(numeroElevado);

        // Resultado esperado
        // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
 
 
 
// 4. Filter
// Crea un segundo array que devuelva los impares
 const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
 const numImpares =  numbers2.filter ( numbers2 => numbers2 % 2 !==0)
console.log(numImpares);



// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 
const foodList = [
        {
          name: 'Tempeh',
          isVeggie: true
        },
        {
          name: 'Cheesbacon burguer',
          isVeggie: false
        },
        {
          name: 'Tofu burguer',
          isVeggie: true
        },
        {
          name: 'Entrecot',
          isVeggie: false
        }
      ];
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */

         const foodIs = foodList.filter((food) => food.isVeggie).map((food) => `Que rico ${food.name} me voy a comer!`);
         console.log(foodIs);


         //Todavia no me queda claro del todo



// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];

const multiplicaNum = numeros.reduce((a, b) => a * b);
console.log(multiplicaNum);


// Salida--> 483600


