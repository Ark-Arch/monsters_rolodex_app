// filter as an array method
const myArray = [1,3,5,7,9]

myArray.filter(el => el < 5) 

// filter is a method of an array that returns a new array except
// it filters anything where the function returns false


const myString = ['Clementine','Faith','Then']

console.log(myString.filter(word => word.toLowerCase().startsWith('C')))