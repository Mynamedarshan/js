const accountNumber = 12445
let accountEmail = "darshan@gmail.com"
var accountPassword = "12345"
accountCity = "Gujrat"
let accountState 


// accountNumber = 3434; // not allowed bcz its const

accountEmail = "test@gmail.com"
accountPassword = "444444"
accountCity = "Banglore"

/* prefer not to use var
bcz of issue in block scope and functional scope
*/

// console.log(accountNumber);

console.table([accountEmail, accountNumber, accountPassword, accountState, accountCity]);