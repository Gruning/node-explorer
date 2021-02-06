const fs = require('fs')
const { log } = require('console')

const username = "John Doe"
console.log(username)

fs.writeFile('user-data.txt',`name: ${username}`,err=>{
    if (err) {
        console.log(err)
        return
    } 
    console.log(`Wrote File`)
        
    
})

// const userName = 'Max';

// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('WROTE FILE');
// });
