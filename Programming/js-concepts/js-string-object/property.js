const person = {
    name: 'Sodor Uddin',
    age: 25,
    married: true,
    salary: 50000,
    profession: 'developer',
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

console.log(person);

//changing values 

person.salary = 30000;

console.log(person)



// Dot Notation 

const income = person.salary;


// console.log(person.profession);
// console.log(income);




// Bracket Notation



// console.log(person['age']);

const boyosh = person['age'];

// console.log(boyosh);


//error
// console.log(person.'fav places');

console.log(person["fav places"]);






