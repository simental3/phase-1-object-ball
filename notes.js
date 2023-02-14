// Object Ball Lab Notes

// Build a function that contains & returns a nested object:
function gameObject () {                                        // Nested Objects - are utilized to store the properties of an object in another object. These objects can be accessed through dot '.' as well as bracket '[ ]' notation. These nested objects are useful for storing the different properties & specifying the value based on user needs
    const object = {                                            // you can name the object variable anything you want (example: 'NBA' or 'data'). An object is a collection of properties, & a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method
        home: {                                 // gameKey = 'home'
            teamName: "Brooklyn Nets",          // teamKey = 'teamName'
            colors: ["Black", "White"],         // teamKey = 'colors'
            players: {                          // teamKey = 'players'
                "Alan Anderson": {              // data = 'Alan Anderson: {...}'
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {               // data = 'Reggie Evans: {...}'
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {                // data = 'Brook Lopez: {...}'
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {              // data = 'Mason Plumlee: {...}'
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {                // data = 'Jason Terry: {...}'
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {                                 // gameKey = 'away'
            teamName: "Charlotte Hornets",      // teamKey = 'teamName'
            colors: ["Turquoise", "Purple"],    // teamKey = 'colors'
            players: {                          // teamKey = 'players'
                "Jeff Adrien": {                // data = 'Jeff Adrien: {...}'
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {             // data = 'Bismak Biyombo: {...}'
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {               // data = 'DeSagna Diop: {...}'
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {                 // data = 'Ben Gordon: {...}'
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {            // data = 'Brendan Haywood: {...}'
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            },
        },
    };
    return object;                                              // retuns undefined without this very important keyword 'return' that returns the object variable on Line 5 
}

// Global Variables                                             // we can set a 'Watch' on 'game' in our DevTools 'Sources' >> 'Scope' >> 'Script' >> 'game' >> right click: 'add property to path watch'
const game = gameObject();                                      // gets the nested object out of the function and assigns it to an easily accessible variable since we will be using the nested object frequently. 
const players = playersObject();                                // save it to a variable so we can reuse 'players' without having to call the function 'playersObject()' all the time 
const teams = Object.values(game);                              // saves our new array of 'home' & 'away' team values to the teams variable incase we want to reuse it (makes our code more abstract). 'game' is the Object that we pass into 'Object.values()' to get their values into an array


// 1. numPointsScored() - takes in an argument of a player's name & returns the number of points scored for that player:
function numPointsScored(playerName){
    return players[playerName].points
}
// numPointsScored('Ben Gordon'); // => 33

// Helper Function (not a part of the deliverables). uses the spread '[...]' or '{...}' operator to copy things from an array OR object, into a new array or object:
function playersObject(){
    // return Object.assign({}, game.home.players, game.away.players) // alternate method that uses Object.assign() to create a new Object. 1st argument is an object '{ }' to create the new object. 2nd argument is going to be whatever you want to place inside the new Object
    return {...game.home.players, ...game.away.players};        // '...' copies, 'game.home.players' is what is going to be copied into the new array traverses the nested object to grab the list of players from both the home & away team'
}


// 3. teamColors() - that takes in an argument of the team name & returns an array of that teams colors.
function teamColors(teamName){
    return findByTeamName(teamName).colors;                     // 
}
// Helper Function
function findByTeamName(teamName){
    // return Object.values(game)                               // If you call '.values' on an Object and pass in an object (the 'game' object in this instance) it will give you an array of all the values of that Object ('game'). Use Object.values because we want the team information, the objects contained in away & home together, not just away & home. => (2) [{…}, {…}]   0: {teamName: 'Brooklyn Nets', colors: Array(2), players: {…}}   1: {teamName: 'Charlotte Hornets', colors: Array(2), players: {…}}
    // return Object.values(game).find((team) => team.teamName == teamName); // Object.find() is going to iterate through the new array of all the values of 'home' & 'away'. Less abstract than the next line of refactored code 
    return teams.find((team) => team.teamName == teamName);
}
teamColors('Charlotte Hornets');
// => (2) ['Turquoise', 'Purple']

// 2. shoeSize() - that takes in an argument of a player's name & returns the shoe size for that player.
function shoeSize(playerName){
    return players[playerName].shoe;
}
shoeSize('Jason Terry')
// => 15


// creates an array '[]' of all of the shoe sizez:
function allShoeSizes(){
    const stats = Object.values(players);                       // Object.values(players) gets an array just of those stats down at that level 'shoe',
    // debugger;                                                // use the debugger to see what stats returns. '//' the other debugger. stats returns an Array '[]' of Objects '{}' that has all of the player's stats
    return stats.map((stat) => stat.shoe);                      // maps over ("looks through") the stats Array '[]' and looks at each Object's stats, & returns just the shoe from each Object stat's 
}                                                               // map this way is really useful. If you have an Array '[]' of Objects '{}' & you want to get an Array of 1 value from each object, jsut use map. Instead of calculating something, you just return with dot notation '.' that 1 values out of each object, to get an Array of just those things
allShoeSizes(); 
// => (10) [16, 14, 17, 19, 15, 18, 16, 14, 15, 15]
// stats;
// => (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//    0: {number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, …}
//    1: {number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, …}
//    2: {number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, …}
//    3: {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, …}
//    4: {number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, …}
//    5: {number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, …}
//    6: {number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, …}
//    7: {number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, …}
//    8: {number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, …}
//    9: {number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, …}


// 4. teamNames() - operates on the game object to return an array of the team names:
function teamNames(){
    return teams.map((team) => team.teamName);                  // use global variable 'teams' to get the array of team names & .map to iterate through each team & return the teamNames value in a new array 
}
teamNames();
// => (2) ['Brooklyn Nets', 'Charlotte Hornets']


// 5. playerNumbers() - that takes in an argument of a team name & returns an array of the jersey number's for that team:
function playersNumbers(teamName) {                             // we want an array of the numbers based on a 'teamName', which will be the parameter
    for (const team in teams){                                  // use an iterator: for (const team in teams) to iterate through
        if (team.teamName === teamName){                        // brings us to the right team
            let stats = Object.values(team.players);            // team.players is an Object that holds all of the stats, we only grab the values from the stats and save the newly made Array in the stats variable
            return stats.map((stat) => stat.number);            // we now have the Array we can .map() over
        }
    }
}
playerNumbers('Brooklyn Nets');
// => [0, 30, 11, 1, 31]


// 6. playerStats() - that takes in an argument of a player's name & returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:
function playerStats(playerName) {
    return players[playerName];
}
playerStats('Mason Plumlee');
// => {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, …}
//     assists: 6
//     blocks: 8
//     number: 1
//     points: 26
//     rebounds: 12
//     shoe: 19
//     slamDunks: 5
//     steals: 3


// 7. bigShoeRebounds() - returns the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps: (I.) find the player with the largest shoe size, (II.) Then, return that player's number of rebounds, (III.) Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why
function bigShoeRebounds() {                                // since Math.max only works with an array of numbers, not objects, we need another approach. We can sort an array of objects based on comparing one of the
    const biggest = Object.values(players).sort((a, b) => { // object properties. Then the object with the highest property will be at the beginning or end of sorted array (depending on how the sort is written)
        if (a.shoe > b.shoe) return -1;                     // shorthand syntax for an if-block omitting {}
        if (a.shoe < b.shoe) return 1;
        if (a.shoe == b.shoe) return 0;
})[0];

    return biggest.rebounds;
}
bigShoeRebounds();
// => 12


// 8.1 mostPointsScored() - returns the player that has the most points:
function mostPointsScored() {                               // in this solution I use Object.entries() so that I have an array that is sortable, but I also still keep the key
    const sorted = Object.entries(players).sort((a, b) => { // with it's associated value, necessary since the players' names are the keys and that's what I want to return
        if (a[1].points > b[1].points) return -1;  
        if (a[1].points < b[1].points) return 1;
        if (a[1].points == b[1].points) return 0;
    });
    return sorted[0][0];                                    // syntax for accessing a value in a nested array => array[outer-array-index][inner-array-index]
}
mostPointsScored();
// => 'Ben Gordon'


// 8.2 winningTeam() - returns the team that has the most points:
function winningTeam() {                                    // this approach only works because we know the teams are specificaly 'home' and 'away'
    const homeStats = Object.values(game.home.players);     // a more robust approach would need to iterate through the keys of the game object and reduce a total score for each team
    const awayStats = Object.values(game.away.players);
    const homeScore = homeStats.reduce((total, stat) => total + stat.points, 0);
    const awayScore = awayStats.reduce((total, stat) => total + stat.points, 0);
    debugger;
    if (homeScore > awayScore) {
        return game.home.teamName;
    } else if (awayScore > homeScore) {
        return game.away.teamName;
    } else {
        return "Teams are tied!";                           // This is an edge case which doesn't apply with the given data
    }                                                       // but would be handled given a different data set
}
winningTeam();
// => 'Brooklyn Nets'


// 8.3 playerWithLongestName() - returns the team with the longest name:
function playerWithLongestName() {
    return Object.keys(players).sort((a, b) => {
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        if (a.length == b.length) return 0;
    })[0];
}                                                               // 'Bismack Biyombo' and 'Brendan Hayword' are actually equal in length, but this function just returns 'Bismack Biyombo'
playerWithLongestName();
// => 'Brendan Haywood'


// 9. doesLongNameStealATon() - returns true if the player with the longest name had the most steals:
function doesLongNameStealATon() {
    const allStats = Object.values(players);
    const maxSteals = Math.max(allStats.map((s) => s.steals));
    const longNameSteals = playerStats(playerWithLongestName()).steals;
    return longNameSteals === maxSteals;                        // since playerWithLongestName() returns 'Bismack Biyombo', this function returns false, but if you used 'Brendan Hayword' instead, the return would be true
}                                                               // (I think this exercise needs to be updated so that there is one player with the longest name)
doesLongNameStealATon();
false

debugger;                                                        // adding the debugger & looking at the 'Sources' >> 'Scope' >> 'Script' , you will see that both 'game' and 'players' are newly created objects that were not there before



// spread operator example:
const evens = [2, 4, 6];                                        // you can do the same with Objects 
const odds = [1, 3, 5];
const nums = [...evens, odds]; // => [2, 4, 6, 1, 3, 5]

// ACCESSING KEY VALUES AND ITERATING THROUGH OBJECTS
/*
There are 3 ways to iterate through objects in JavaScript:
    1. Use a key you know & type the key as a string manually oo['some_key']
    2. Use a key you know & type it after a dot manually oo.some_key
    3. Notice that you can only access keys via the '.' if they have a name like a legal JavaScript variable (basically it can't have spaces, you'd have to use the string way)

Use a for..in loop to iterate over all of the keys and access their value through brackets:
*/
    let oo = { foo: 42, bar: 83, baz: 79 };
    for (let key in oo) {
        let value = oo[key];
        console.log("key:", key, "value:", value);
    }
/*
Use built-in functions attached to the Object class to access keys, values, or entries:
    - Object.keys(oo) returns an array '[]' of all keys
    - Object.values(oo) returns an array '[]' of all values
    - Object.entries(oo) returns an array '[]' of arrays containing [key, value] together
*/



/*
// Deliverables
1. Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
    - Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.
2. Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
    - Think about how you will find the shoe size of the correct player. How can you check and see if a player's name matches the name that has been passed into the function as an argument?
3. Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
4. Build a function, teamNames, that operates on the game object to return an array of the team names.
5. Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
6. Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:
        playerStats("Alan Anderson")
        // returns:
        {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
        }
7. Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
    - First, find the player with the largest shoe size
    - Then, return that player's number of rebounds
    - Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why
// Bonus Questions
8. Define functions to return the answer to the following questions:
    (1) Which player has the most points? Call the function mostPointsScored.
    (2) Which team has the most points? Call the function winningTeam.
    (3) Which player has the longest name? Call the function playerWithLongestName.
// Super Bonus
9. Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.
*/