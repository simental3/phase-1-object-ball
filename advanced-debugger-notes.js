// Nested Iterators Example (to traverse through a nested Object, but there is a more effective, refactored method)

// /*
console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
    let game = gameObject();                                            // game = {home: {...}, away: {...}}
    for (let gameKey in game) {
        // are you ABSOLUTELY SURE what 'gameKey' is?                               // 'gameKey' is going to be the top level of the nested object: 'away' , 'home'
        // use the debugger to find out!
        debugger;
        let teamObj = game[gameKey]         // teamObj = {teamName: 'Brooklyn Nets', colors: Array(2), players {...}}, game = {home: {...}, {away: {...}}, gameKey = "home"
        for (let teamKey in teamObj) {
            // are you ABSOLUTELY SURE what 'teamKey' is?                           // 'teamKey' is going to be the next layer of the nested object: 'teamName' , 'colors' , 'players' for either 'home' or 'away'
            // use debugger to find out!
            debugger;
          
            // what is 'data' at each loop through out this block?                  // 'data' is the deepest level ('', '', '') of the nested object, it grabs only the keys 'players'
            // when will the following line of code work and when will it break?    // it will break at Line 20: teamObj.player  . It should be '.players' not '.player'
/*DEBUG-->*/let data = teamObj.player                                  // data = undefined, teamObj = {teamName: 'Brooklyn Nets', colors: Array(2), players {...}}
// WORKS--> // let data = teamObj.players                              // data = {Alan Anderson: {…}, Reggie Evans: {…}, Brook Lopez: {…}, Mason Plumlee: {…}, Jason Terry: {…}}
            for (let key in data) {
                debugger;
            }
        }
    }
}

// then, call the function so it runs!
goodPractices()
// */
