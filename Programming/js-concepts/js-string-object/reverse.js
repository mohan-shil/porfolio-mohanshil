const sentence = " I am learning web dev";

let reverse = '';


// For of loop 

for ( letter of sentence){
    // console.log(letter);

    reverse = letter + reverse;
}

// console.log(reverse);


// for loop 

let rev = '';

for( let i = 0 ; i < sentence.length; i++){
    // console.log(i);
    const letter = sentence[i];

    rev = letter + rev;
}

// console.log(rev);


//shortcut 


const reversed = sentence.split('').reverse().join('');
console.log(reversed);