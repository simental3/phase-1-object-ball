// Object Ball Lab

function gameObject () {
    const object = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
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
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
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
    return object;
}

// Global Variables
const game = gameObject();
const players = playersObject();
const teams = Object.values(game);



function numPointsScored(playerName) {
    return players[playerName].points;
}
// Helper Function
function playersObject(){
    // return Object.assign({}, game.home.players, game.away.players)
    return {...game.home.players, ...game.away.players};
}


function teamColors(teamName){
    return findByTeamName(teamName).colors;
}
// Helper Function
function findByTeamName(teamName){
    return Object.values(game).find((team) => team.teamName === teamName);
}

function shoeSize(playerName){
    return players[playerName].shoe
}


function allShoeSizes(){
    const stats = Object.values(players);
    // debugger;
    return stats.map((stat) => stat.shoe);
}


function teamNames(){
    return teams.map((team) => team.teamName);
}


function playerNumbers(teamName){
    for (const team of teams){
        // debugger;
        if (team.teamName === teamName){
            let stats = Object.values(team.players)
            // debugger;
            return stats.map((stat) => stat.number)
        }
    }    
}



// debugger;


/*
// Deliverables
1. numPointsScored() - takes in an argument of a player's name & returns the number of points scored for that player.
    - Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.
2. shoeSize() - that takes in an argument of a player's name & returns the shoe size for that player.
    - Think about how you will find the shoe size of the correct player. How can you check & see if a player's name matches the name that has been passed into the function as an argument?
3. teamColors() - that takes in an argument of the team name & returns an array of that teams colors.
4. teamNames() - that operates on the game object to return an array of the team names.
5. playerNumbers() - that takes in an argument of a team name & returns an array of the jersey number's for that team.
6. playerStats() - that takes in an argument of a player's name & returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:
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
7. bigShoeRebounds() - returns the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
    - First, find the player with the largest shoe size
    - Then, return that player's number of rebounds
    - Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why
// Bonus Questions
8. Define functions to return the answer to the following questions:
    (1) mostPointsScored() - returns the player that has the most points
    (2) winningTeam() - returns the team that has the most points
    (3) playerWithLongestName() - returns the team with the longest name 
// Super Bonus
9. doesLongNameStealATon() - returns true if the player with the longest name had the most steals
*/