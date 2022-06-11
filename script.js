// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
function getInputValue() {
  let title = document.getElementById('title').value;
  let desc = document.getElementById('description').value;
  console.log(title);
}
