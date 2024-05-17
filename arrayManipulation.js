
function processArray(numbers) {
    //callback function
    return numbers.map(number => {
        if (number % 2 === 0) {
            // If the number is even, square it
            return number * number;
        } else {
            // If the number is odd, triple it
            return number * 3;
        }
    });
}


const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const processedArray = processArray(originalArray);
console.log(processedArray);  




function formatArrayStrings(strArray, numArray) {
    return strArray.map((str, index) => {
        if (numArray[index] % 2 === 0) {
            // If the corresponding number is even, capitalize the string
            return str.toUpperCase();
        } else {
            // If the corresponding number is odd, convert the string to lowercase
            return str.toLowerCase();
        }
    });
}

// Example usage:
const stringArray = ['Martin', 'Tobius', 'Precious', 'Desmond', 'Tyler'];
const numArray = processArray([1, 12, 3, 8, 5]); 
const formattedArray = formatArrayStrings(stringArray, numArray);
console.log(formattedArray);  