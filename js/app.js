var userAge = 17;
var is_subscribed = false;

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

if ((userAge >= 18) && is_subscribed == true) {
    console.log ("User is 18 or older and is subscribed")
} else if ((userAge < 18)&& is_subscribed == true) {
    console.log ("User is younger than 18 and is subscribed")
} else if ((userAge >= 18)&& is_subscribed != true) {
    console.log ("User is 18 or older and is not subscribed")
} else if ((userAge < 18)&& is_subscribed != true) {
    console.log ("User is younger than 18 and is not subscribed")
} else {
    console.log ("A horrible error occured")
}


