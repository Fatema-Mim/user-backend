const {readFileSync} = require('fs');

let loadUser = () => JSON.parse(readFileSync('user.json'))

module.exports = loadUser