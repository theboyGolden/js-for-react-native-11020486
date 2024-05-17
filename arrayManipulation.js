/* function processArray(numbers)
    // Define the function processArray that takes an array of numbers as input

    // Use the map method on the array to transform each element
    for each number in numbers do
        if number is even then
            // If the number is even, square it
            return square of number
        else
            // If the number is odd, triple it
            return triple of number
        end if conditonal block
    end for loop

    // Return the new array with transformed values
end function

// Define the original array of numbers
originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Call the processArray function with originalArray and store the result in processedArray
processedArray = processArray(originalArray)

// Print the processedArray
print processedArray
 */


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
const stringArray = ['Hello', 'World', 'Test', 'Array', 'Manipulation'];
const numArray = processArray([1, 12, 3, 8, 5]); 
const formattedArray = formatArrayStrings(stringArray, numArray);
console.log(formattedArray);  