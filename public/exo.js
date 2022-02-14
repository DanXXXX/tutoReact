// const array = ["Mark", "Léa","Justine"];



// const [userOne, userTwo, userThree] = array;

// eslint-disable-next-line no-unused-vars
// let [userOne, ...rest] = array;

// console.log(rest);


// Destructuring en Javascript ES6

const members = {
    userOne: "Mark",
    userTwo: "Léa",
    userThree: "Justine"
}

    // let membOne = members.userOne;

   var {userOne: Hulk, userTwo: Spiderman, userThree: Thor} = members;

console.log(Hulk);

