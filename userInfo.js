
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
        id: index + 1, // Auto-incremented ID starting from 1
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage:
const originalNames = ['Martin', 'Tobius', 'Precious', 'Dana', 'Tyler'];
const modifiedNames = ['MARTIN', 'tobius', 'PRECIOUS', 'dana', 'TYLER'];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);


