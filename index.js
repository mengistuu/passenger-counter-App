//document.getElementById("count-el").innerText=6;


let countEl = document.getElementById("count-el");
let entriesEl = document.getElementById("entries-el")
let count = 0; 
// console.log("count");

function increment () {

count += 1;
countEl.textContent = count;
  
}

function save() {
  console.log(count)
  let countstr = count + " - "
  entriesEl.textContent += countstr; 
  countEl.textContent = 0;
  count = 0;

}


//  let welcomeEl = document.getElementById("welcome-el")

//  let name = "Mengistu Justin"
//  let greetings = "Welcome back "

//  welcomeEl.textContent = greetings + name
// welcomeEl.textContent += " 👋🏻"



