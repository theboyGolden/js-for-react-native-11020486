## Student ID - 11020486
# Task One explanation
+ function processArray(numbers)
+ Define the function processArray that takes an array of numbers as input

+ Use the map method on the array to transform each element
+ for each number in numbers do

+ if number is even then
+ If the number is even, square it
+ return square of number
+ else
+ If the number is odd, triple it
+ return triple of number
+ end if conditonal block
+ end for loop

+ Return the new array with transformed values


+ Define the original array of numbers
+ originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

+ Call the processArray function with originalArray and store the result in processedArray
+ processedArray = processArray(originalArray)

+ Print the processedArray
+ print processedArray

# Task 2 explanation
+ +  JavaScript function, `formatArrayStrings`, takes two arrays as input: `strArray` and `numArray`. It processes each element of `strArray` based on the corresponding element in `numArray`. If the number at the same index in `numArray` is even, it capitalizes the string in `strArray`. 
+ If the number is odd, it converts the string to lowercase. The processed strings are returned as a new array.

+ Here's a breakdown of how the function works:
+ It uses the `map` method to iterate over each element of `strArray`.
+ For each element, it checks the corresponding element in `numArray` using the `index` parameter.
+ If the number is even (`numArray[index] % 2 === 0`), it capitalizes the string using the `toUpperCase` method.
+ If the number is odd, it converts the string to lowercase using the `toLowerCase` method.
+ The processed strings are returned as a new array.

+ In the example usage provided:
+ `stringArray` contains five strings: 'Martin', 'Tobius', 'Precious', 'Desmond', and 'Tyler'.
+ `numArray` is obtained by calling the `processArray` function with `[1, 12, 3, 8, 5]`.
+ The `formatArrayStrings` function is then called with `stringArray` and `numArray`.
+ The formatted array, `formattedArray`, is logged to the console.

+ The output would depend on the values in `numArray`. For example, if `numArray` is `[1, 12, 3, 8, 5]`, the output would be `['martin', 'TOBIUS', 'precious', 'DESMOND', 'tyler']`, where 'martin' and 'precious' are lowercase because the corresponding numbers are odd, and 'TOBIUS' and 'DESMOND' are uppercase because the corresponding numbers are even.

# Task 3 explanation
+ This JavaScript function, `createUserProfiles`, takes two arrays as input: `originalNames` and `modifiedNames`. It generates user profiles by pairing each element from `originalNames` with the corresponding element from `modifiedNames`. Each profile consists of an auto-incremented ID, the original name, and the modified name. The generated profiles are returned as an array of objects.

+ Here's how the function works:
+ It uses the `map` method to iterate over each element of `originalNames`.
+ For each element, it retrieves the corresponding element from `modifiedNames` using the `index` parameter.
+ It constructs a user profile object with three properties:
+ 1. `id`: An auto+incremented ID starting from 1, calculated by adding 1 to the current index.
+ 2. `originalName`: The original name from `originalNames`.
+ 3. `modifiedName`: The modified name from `modifiedNames`.
+ The constructed profile objects are returned as an array.

+ In the example usage provided:
+ `originalNames` contains five original names: 'Martin', 'Tobius', 'Precious', 'Dana', and 'Tyler'.
+ `modifiedNames` contains corresponding modified names: 'MARTIN', 'tobius', 'PRECIOUS', 'dana', and 'TYLER'.
+ The `createUserProfiles` function is then called with `originalNames` and `modifiedNames`.
+ The generated user profiles, `userProfiles`, are logged to the console.

+ The output would be an array of user profiles, where each profile object contains an ID, the original name, and the modified name, as demonstrated in the example usage.