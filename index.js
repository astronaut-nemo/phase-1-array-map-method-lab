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

function titleCased(){
  return tutorials.map((string) => {
    // Split the elements of the array element into word arrays
    const splitString = string.split(" ")
    
    // For each word array, capitalise the first letter and add it to the rest of the letters sliced    from the word array
    for(let i = 0; i < splitString.length; i++){
      splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
    
    // Join all the word arrays together into a string with a space (" ") as a separator
    const rejoinedString = splitString.join(" ");
    return rejoinedString;
  });
}