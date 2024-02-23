'use strict';
// Test Data

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//========================================
// Destructuring Arrays
//========================================

// 1.1
// Destructure the books array into two variables called firstBook and secondBook:

const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// 1.2
// Destructure the books array into a variable called thirdBook. You must skip the first two books:

const [, , thirdbook] = books;
console.log(thirdbook);

// 1.3
// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

// 1.4
// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//========================================
// Destructuring Objects
//========================================

// 2.1
// Destructure the first book object from the books array into variables called title, author and ISBN.

const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

// 2.2
// Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

const { keywords: tags } = books[0];
console.log(tags);

// 2.3
// The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

// 2.4
// Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

// 2.5
// Each book object has a deeply nested rating property.Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.
// Please do most of the work on the left side of the assignment operator: const ... = books[0];

const { bookRating } = books[0].thirdParty.goodreads.rating;
console.log(bookRating);
// Useless cunt you're shit at this

// CORRECT ANSWER:
// const {thirdParty: {goodreads: {rating: bookRating}}} = books[0];
// I needed to ACCESS the thirdparty object,
// THEN the goodreads object,
// THEN the rating object, which I destructured into the bookRating variable like I was asked...

// 2.6
// Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".
// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title}, by ${author}, ${year}`);
}

// Function call
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
// Missing book
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

//========================================
// The Spread Operator
//========================================

// 3.1
// Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.
//Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

const bookAuthors = { ...author };
console.log(bookAuthors);

// CORRECT CODE:
//const bookAuthors = [...books[0].author, ...books[1].author];

// 3.2
// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

function spellWord(str) {
  console.log(...str);
}

spellWord('Patrick');
//
//
//
//========================================
// Rest Patterns and Parameters
//========================================
//
// 4.1
// Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

// 4.2
// Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const [bookPublisher, ...restOfTheBook] = [books[1].publisher];
console.log(bookPublisher, restOfTheBook);
// WRONG
// READ THE QUESTION, DICKHEAD
// CORRECT ANSWER:
// const {publisher: bookPublisher, ...restOfTheBook} = books[1];

// 4.3
// Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
//
//
//========================================
// PRACTICE BECAUSE I'M A DICKHEAD
//========================================
//
// For each question try to use a loop to iterate over the array and apply the logic for it
//
// 1.
// Write a function that takes an array of numbers as an argument and returns the sum of all even numbers in the array.

// here is my fucking DOGSHIT attempt at question one...
//========================================
//
// function sumEvenNumbers(...numbers) {
//   let sumEven = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (
//       numbers[i] / 2 == true
//         ? console.log((sumEven += numbers[i] / 2))
//         : 'No valid numbers, bro..'
//     ) {
//     }
//   }
// }
//
// sumEvenNumbers(1, 2, 3, 4, 5, 6);
//
//========================================
//
// I fucked it up completely until the if conditional..

//I'm getting undefined because I''m trying to console.log inside the ternary operator..
// CONSOLE.LOG OUTSIDE OF LOOPS, IDIOT
// Instead, I should add the even number to sumEven AND THEN log sumEven after the loop
// I can use the MODULO OPERATOR ( % ) to check if the number is even (divisible by two), NOT fucking mathematical operators..

// numbers[i] % 2 === 0 ? numbers[i] : 0;
// condition ? value_if_true : value_if_false
// is the number, inside the numbers array, at index value i, even? If it is, add it to the sumEven variable

// Finally I can check for the false conditional by checking if sumEven is equal to 0
// Otherwise ( : ), don't add anything ( 0 )

function sumEvenNumbers(...numbers) {
  let sumEven = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumEven += numbers[i] % 2 === 0 ? numbers[i] : 0;
  }
  console.log(sumEven);
}
// 1. sumEven initialised with a value of zero
// 2. for loop that, when function is called, loops over the entire "numbers array" (numbers.length) by use of REST parameter ( "..." left of the assignment operator)
// 3. conditional statement  declaring that the sumEven variable should be summed up, and equalled to the sum of, whether each number at each of the index values, starting from the first array index value ( numbers[i] ), is divisible by two by use of the MODULO OPERATOR ( % 2 ) by checking if the remainder of that number is equal to 0 when it is divided by 2 ( === 0 ? )
// 4. If that condition is met, then it adds that number at the integer position ( [numbers[i] ) , to sumEven ( sumEven += numbers[i] )
// 5. Otherwise, nothing gets added to sumEven variable ( : 0 )
//
//
//========================================
//
// 2.
// Write a function that takes an array and a target value as arguments and returns the number of times the target value appears in the array.

let numArr = [2, 50, 6, 2, 27, 51, 9, 2];

function countOccurrences(array, target) {
  let occurence = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      occurence++;
    }
  }
  return occurence;
}

countOccurrences(numArr, 2);
console.log(countOccurrences(numArr, 2));
//
// Almost..
//
//========================================
//
// 3.
// Write a function that takes an array as an argument and returns a new array that contains the elements of the original array in reverse order.

let myStr = "Gday, cunt, I'm Pat and I suck at this shit";

function reverseArray(arrStr) {
  return arrStr.split('').reverse().join('');
}
console.log(reverseArray(myStr));
//
// Returns "tihs siht ta kcus I dna taP m'I ,tnuc ,yadG"
// I can return the string backwards by splitting it up, then reversing it, then joining it back together
// Doesn't work with just argument.reverse()
//
//========================================
// 4.
// Write a function that takes an array of numbers as an argument and returns the largest number in the array
//
function findMax(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    return Math.max(...numbers);
  }
}
//
// I don't actually need the for loop here since Math.max can take multiple arguments and return the largest one
// I can directly use the spread operator with my numbers variable to pass all my array elements as arguments:
//
function findMax(...numbers) {
  return Math.max(...numbers);
}
//
//========================================
// 5.
// Write a function that takes an array of numbers as an argument and returns a new array that contains only the odd numbers from the original array.

// I initialize an empty array myNewArr to store the odd numbers.
// I use a for loop to iterate through each number in the numbers array.
// Inside the loop, I check if the number is odd using numbers[i] % 2 !== 0. If it is, I use the push method to add it to myNewArr.
// After the loop, I return myNewArr, which now contains only the odd numbers from the original array.

function filterOddNumbers(...numbers) {
  let myNewArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      myNewArr.push(numbers[i]);
    }
  }
  return myNewArr;
}

console.log(filterOddNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
// [1, 3, 5, 7, 9]

//========================================
// Short Circuiting (&& and ||)
//========================================

// 5.1
// Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example:
//
// {
//   title: 'Algorithms',
//   author: ['Robert Sedgewick', 'Kevin Wayne'],
//   ...
//   programmingLanguage: 'Java',     // <-- HERE
// }
//
//Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.
// Ensure you use short-circuiting.
// Examples:
// hasExamplesInJava(books[0]); // true
// hasExamplesInJava(books[1]); // "no data available"
//
//========================================
// Here's my really shitty attempt, again...
//
// function hasExamplesInJava(obj) {
//   if (obj.programmingLanguage === 'Java') {
//     return true;
//   } else {
//     return 'No data available';
//   }
// }
// hasExamplesInJava(books[0]);
//
// I don't even need the if conditional
// Because I didn't read the question properly, all I needed to do was use the || or operand and check for the first **truthy** value to return
// Then subsequently pass in the books object as my obj argument.

function hasExamplesInJava(obj) {
  return obj.programmingLanguage === 'Java' || 'no data available';
}
console.log(hasExamplesInJava(books[0])); //true
//
//========================================

// 5.2
// Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
// {
//   title: 'Operating System Concepts',
//   // ... removed for clarity
//   onlineContent: false,          // <-- HERE
// },

// So in my for loop, I'm checking for the onlineContent property on each book at its respective integer value in the array by looping over the length of the array
// Then I short-circuit the evaluation since in JS the && operator reads L>R, so if the first operand (left-hand side) is falsy, it immediately returns that value without evaluating the second operand (right-hand side)
// If the first operand is truthy, it evaluates and returns the second operand
// So if books[i].onlineContent is true (truthy), the console.log statement is executed, logging the message. If books[i].onlineContent is false (falsy), the console.log statement is skipped

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} provides online content.`);
}
//
//
//========================================
// The Nullish Coalescing (??) Operator
//========================================
//
//
// 6.1
// There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provides no data about its online content`);
}
