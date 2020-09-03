// Create a password validator function that takes in the password as its argument and
//  returns an integer value you can evaluate to determine the password strength.
//  Using the following validators:
// 0 -> very weak e.g. a password with only strings
// 1 -> weak e.g. a password with only numbers
// 2 -> strong e.g. a password containing strings and numbers
// 3 -> very strong e.g. a password containing strings, numbers and special characters (!,@,#,$,%, etc)

function regex(password) {
    let strength = 0;

    if (password.match == /^\d+$/) {
        return (strength = 1);
    }
    if (password.match == /([^?=&]+)(=([^&]*))/) {
        return strength;
    }
    if (password.match == /^\d+$/ && /([^?=&]+)(=([^&]*))/) {
        return strength + 2;
    }
    if (
        password.match == /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g &&
        /^\d+$/ &&
        /^\d+$/
    ) {
        return strength + 3;
    } else {
        return "password does not match";
    }
}
