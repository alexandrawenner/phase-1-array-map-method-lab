const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(function (letter)) => {

//   return tutorials
// }

//function declaration
const titleCased =  tutorial.map(function (capLetter) {
  return capLetter.LowerCase().split(' ').map(function(lyric) {
    return (lyric.charAt(0).toUpperCase() + word.slice(1))
  }) .join(' ')
})


//tutorials is never called

// const titleCased = function (tutorials){
//   return function firstLetterCaps(tutorials) {
//     tutorials = tutorials.toLowerCase().split(' ').map(function(letter){
//       return (letter.charAt(0).toUpperCase() + letter.slice(1))
//     }) .join(' ')
//   }
//   return titleCased
// }




//return letter.toUpperCase


// let tutorialsSplit = tutorials.split(' ')
// tutorials[i].charAt(0).toUpperCase()
// tutorials[i].slice(1)

// function titleCase(tutorials) {
//   tutorials = tutorials.toLowerCase();
//   tutorials = tutorials.split(' ');
//   for (let i = 0; i < tutorials.length; i++) {
//     tutorials[i] = tutorials[i].charAt(0).toUpperCase() + tutorials[i].slice(1);
//     return tutorials.join(' ')
//   }
//   return titleCase
// }




// const titleCased = tutorials() {
//   return
// }




//Have to include TitleCased 
// ReferenceError: titleCased is not defined

// function loopAndCaps(tutorials) {
//   const capTitles = [];
//   for(let letter of tutorials) {
//     capTitles.push(letter.toUpperCase)
//   }
//   return capTitles
// }