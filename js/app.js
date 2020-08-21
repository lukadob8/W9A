// var userAge = 19;
// var is_subscribed = false;

// if (userAge >= 18) {
//     console.log ("User is 18 or older")
// } else {
//     console.log ("User is younger than 18")
// }

// if (is_subscribed == true) {
//     console.log ("User is subscribed")
// } else {
//     console.log ("User is not subscribed")
// }

var userAge = [15, 17, 19, 22, 25];
var is_subscribed = [false, false, true, true, true];
var arrayLength = userAge.length;

for(var users = 0; users < arrayLength; users++) {
    if ((userAge[users] >= 18) && is_subscribed[users] == true) {
        console.log ("User is 18 or older and is subscribed")
    } else if ((userAge[users] < 18) && is_subscribed[users] == true) {
        console.log ("User is younger than 18 and is subscribed")
    } else if ((userAge[users] >= 18) && is_subscribed[users] != true) {
        console.log ("User is 18 or older and is not subscribed")
    } else if ((userAge[users] < 18) && is_subscribed[users] != true) {
        console.log ("User is younger than 18 and is not subscribed")
    } else {
        console.log ("A horrible error occured")
    }
}


// if ((userAge >= 18) && is_subscribed == true) {
//     console.log ("User is 18 or older and is subscribed")
// } else if ((userAge < 18) && is_subscribed == true) {
//     console.log ("User is younger than 18 and is subscribed")
// } else if ((userAge >= 18) && is_subscribed != true) {
//     console.log ("User is 18 or older and is not subscribed")
// } else if ((userAge < 18) && is_subscribed != true) {
//     console.log ("User is younger than 18 and is not subscribed")
// } else {
//     console.log ("A horrible error occured")
// }


