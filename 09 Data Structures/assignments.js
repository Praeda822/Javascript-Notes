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
// Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted as the following: "The book "${title}" has ${authors.length} authors".

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
// I SHOULD use the MODULO OPERATOR ( % ) to check if the number is even (divisible by two), NOT fucking mathematical operators..

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
//
//
//
//========================================
// Logical Assignment Operators
//========================================
//
//
// 7.1
// Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

// I know edition exists on the first few books, so I should check for the first FALSY value to return
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
  console.log(books);
}

// 7.2
// Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
// Use the &&= operator (tip: you may also need the ! operator)

for (let i = 0; i < books.length; i++) {
  books[0].thirdParty.goodreads.rating <= 4.2
    ? (books[0].highlighted &&= false)
    : (books[0].highlighted &&= true);
  console.log(books);
}

// CORRECT ANSWER (dumbass):
//  for (let i = 0; i < books.length; i++) {
//    books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2)
//  }

// I used the ternary operator unnecessarily (again!)
// The task can (and was meant to) be accomplished more straightforwardly with the &&= operator and a logical NOT ! operator.

// books[i].highlighted
// Checks for a truthy value, and if it is, it will evaluate the right-hand side of the &&= operator, since &&= is checking for the first truthy value
// If it is false, it will skip the evaluation and move on to the next iteration of the loop

// !(books[i].thirdParty.goodreads.rating < 4.2)
// Checks if the rating is NOT less than 4.2, and if the rating is 4.2 or higher, this expression evaluates to true, and books[i].highlighted remains true (default value)
//  If the rating is less than 4.2, the expression evaluates to false, and books[i].highlighted is set to false.

// My error was mainly in my, again incorrect, use of the ternary operator as well as hardcoding both my index value of 0 (instead of the loop variable, i), as well as having all my shit around the wrong fucking way

//========================================
// CODING CHALLENGE #1:
//========================================
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper, and the others are field players. For Bayern Munich (Team 1), create one variable ('gk'), with the goalkeeper's name, and one array ('fieldplayers') with all the remaining 10 field players
// 3. Create an array, 'allPlayers', containing all players of both teams (22 players total)
// 4. During the game, Bayern Munich (Team1) used 3 substitute players. Create a new array ('players1Final') containing all the original team1 players, plus 'Thiago', 'Coutinho', 'Perisic'
// 5. Based on the game.odds objecty, create one variable for each odd (called 'team1', 'draw', 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array), and prints each of them to the console, along with the number of goals scored (number of player names passed in), then, call the function again with the players from game.scored
// 7. The team with the lower odds is more likely to win. Print to the console which team is more likely to win, WITHOUT, using an if/else statement, NOR the ternary operator (logical assignment operators)

// TEST DATA FOR 6:
// 'Davies', 'Muller', 'Lewandowski', 'Kimmich'

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',

  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],

  score: '4.0',
  scored: ['Lewandowksi', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
// const gk = { gk: 'Neuer', fieldPlayers: players1 };
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2, game.odds);

// 6.
// cunt what the FUCK is this ESL garbage get fucked!!!!!
// function printGoals(...names) {
//   const totalGoals = names.length;
//   names.forEach(names => console.log(`${names} scored ${totalGoals} goals`));
// }

// printGoals(game.scored);
// Teacher's version (what the fuck cunt??):
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
console.log(
  `${
    (team1 < team2 && game.team1) || (team2 < team1 && game.team2)
  } is more likely to win`
);
//
//
//========================================
// Looping Arrays: The for-of Loop
//========================================
//
//
// 8.1
// Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.

let pageSum = 0;

for (const item of books) {
  console.log((pageSum += item.pages));
}
//
// Should be called book of books, for readability..
//
//

// 8.2
// Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.
//Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

const allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}

// cunt, what the FUCK...
// The outer for-of loop iterates over each book object in the books array.
// Inside the loop, there's an if statement that checks if the author property of the current book is a string using typeof book.author === 'string'. If it is, it means the book has only one author, and that author's name is added to the allAuthors array with allAuthors.push(book.author).
// The else statement is executed if the author property is not a string. In this case, it's assumed to be an array (since the author property can be either a string or an array, as per the problem statement). This is where the inner for-of loop comes into play:
// The inner for-of loop iterates over each author in the book.author array (since book.author is an array in this case).
// For each author in this array, allAuthors.push(author) is called to add the author's name to the allAuthors array.

// 8.3
// Use the for-of loop together with Array.entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
// Expected output:
// 1. Robert Sedgewick
// 2. Kevin Wayne
// 3. Harold Abelson
//  ...                    // part removed for clarity
// 15. Cal Newport

// Index = i, value = el
for (const [i, el] of allAuthors.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//
//
//
//========================================
// Enhanced Object Literals
//========================================
//
//
// 9.1
// Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

// Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// [0][0] = [0][1]
// So zero zero is equal to position zero one, etc.
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);
//
//
// 9.2
// Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};
//
//
//
//========================================
// Optional Chaining (?.)
//========================================
//
//
// 10.1
// Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.
// Examples:
// getFirstKeyword(book[0]); // "computer science"
// getFirstKeyword(newBook2); // undefined

function getFirstKeyword(book) {
  return book.keywords?.[0];
}
console.log(getFirstKeyword(books[0]));
//
//
//
//
//========================================
// Looping Objects: Keys, Values and Entries
//========================================
//
//
// 11.1
// Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.
// In the end, the entries array should be filled with arrays containing keys:
// [
//   ['rating'],
//   ['ratingsCount'],
//   ['reviewsCount'],
//   ['fiveStartRatingCount'],
//   ['oneStartRatingCount'],
// ];
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
console.log(entries);
// didn't read it properly and totally fucked it...
// Answer provided is the correct one FML

// 11.2
// The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.
// Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.
// Push each value to the appropriate inner array in the entries array (use index from entries()).

//Ok, shit for brains, break it down into little parts:
// Create a NEW variable to store ALL THE VALUES of thirdParty.goodreads from the FIRST BOOK, in an array
const newValues = Object.values(books[0].thirdParty.goodreads);

// Now use the entries method on the NEW array I just made
// const newEntries = Object.entries(newValues);
//Use the entries() method on the newValues array: THIS IS WHERE I FUCKED UP. I need to use newValues.entries() instead of Object.entries(newValues). The entries() method is a method of arrays, not objects, and it gives you an iterator that returns [index, value] pairs for each element in the array.

const newEntries = newValues.entries();

// for of loop over that new entries array of arrays
// destructure the key/value pairs in the loop argument to index, value

// for (const [index, value] of Object.entries(
//   Object.values(books[0].thirdParty.goodreads)
// )) {
//   entries.push([index, value]);
// }
// console.log(entries);
// WRONG; USELESS CUNT
// I need to loop over newValues.entries() instead of using Object.entries() on the array of values.

for (const [i, v] of newEntries) {
  // now push each value to the appropriate inner array IN THE ENTRIES ARRAY
  // So for each index, push the corresponding value to THAT index
  entries[i].push(v);
}
//
// 11.3
// Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.

const entries2 = Object.entries(books[0].thirdParty.goodreads);

//
//
// 11.4
// Log the entries and entries2 variables to the console, and compare them. They should look the same.

// THEY ARE THE SAME HOORAY
console.log(entries);
console.log(entries2);
//
//
//========================================
// CODING CHALLENGE #2:
//========================================

// 1.
// Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [goal, kicker] of game.scored.entries()) {
  console.log(`Goal ${goal + 1} : ${kicker}`);
}

// 2.
// Use a loop to calculate the average odd and log it to the console
let sum = 0;

for (let i = 0; i < game.odds.length; i++) {
  sum += game.odds[i];
}

console.log(sum); // FUCK this shit cunt

//========================================
// Working with Strings: Part 1
//========================================
//
// 15.1
// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

console.log(books[0].ISBN[6]);
console.log(books[0].ISBN[4]);
console.log(books[0].ISBN[9]);
console.log(books[0].ISBN[8]);

// 15.2
// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));
// 15.3
// Extract the word "boxing" from the same quote string, and log it to the console.

console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 15.4
// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.
// Examples:
// isContributor('Julie Sussman (Contributor)'); true
// isContributor('Robert Sedgewick'); false

// Use lastIndexOf() method is used on the author string to find the last occurrence of the substring '(Contributor)'
// Function checks if the returned index is not equal to -1, and if not, then the substring '(Contributor)' was found in the author string,and will return true
// If the substring '(Contributor)' is not found in the author string, the lastIndexOf() method will return -1, and the function will return false, indicating that the author is not a contributor.
function isContributor(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}
console.log(isContributor('Robert Sedgewick'));
//
//
//========================================
// Working with Strings: Part 2
//========================================
//
// 16.1
// Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).
// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

function normaliseAuthorName(author) {
  author = author.replace('(Contributor)', '').trim();
  const firstName = author.slice(0, author.indexOf(' '));
  const lastName = author.slice(author.indexOf(' ') + 1);
  const fixedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const fixedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  return fixedFirstName + ' ' + fixedLastName;
}

normaliseAuthorName('  JuliE sussMan (Contributor)');
// 16.2
// Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

// 16.3
// Write a function called logBookTheme that takes book's title (string), and logs to the console:

function logBookTheme(title) {
  if (title.startsWith('Computer')) {
    console.log('This book is about computers');
  } else if (title.includes('algorithms', 'structures')) {
    console.log('This book is about algorithms and data structures');
  } else if (
    title.endsWith('system', 'systems') &&
    title.includes('operating')
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  } else console.log('Idek what the fuck this book is about');
}
logBookTheme('IDK');

// WRONGGGGGGGG
// Retarded cunt
// you fucked your operators up, shit for brains, had it right the first time....
// CORRECT CODE:

// function logBookTheme(title) {
//   title = title.toLowerCase();

//   if (title.startsWith('computer')) {
//     console.log('This book is about computers');
//   } else if (title.includes('algorithms') && title.includes('structures')) {
//     console.log('This book is about algorithms and data structures');
//   } else if ((title.endsWith('system') || title.endsWith('systems')) && !title.includes('operating')) {
//     console.log('This book is about some systems, but definitely not about operating systems');
//   }
// }
