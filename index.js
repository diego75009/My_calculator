const decreased_btn = document.getElementById("decreased_button");
const reset_btn = document.getElementById("reset_button");
const increase_btn = document.getElementById("increase_button");
const countLabel = document.getElementById("countLabel");

let count = 0;

increase_btn.onclick = function(){
    count++
    countLabel.textContent = count;
}
decreased_btn.onclick = function(){
    count--
    countLabel.textContent = count;
}
reset_btn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}