// intialize the count as 0
let count = 0;
// listen for clicks on the increment button

// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countDash = count + ' - ';
    saveEl.textContent += countDash;
    countEl.textContent = 0;
    count = 0;
}