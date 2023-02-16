let firstColumn = document.querySelector(".firstColumn");
let secondColumn = document.querySelector(".secondColumn");
let firstSection = document.querySelector(".firstSection");

// firstColumn.style.paddingTop = "200px"
// secondColumn.style.paddingTop = "250px"
// firstColumn.style.transition = "all 1s"
// secondColumn.style.transition = "all 1.4s"
// firstColumn.style.visibility ="hidden";
// secondColumn.style.visibility ="hidden";


window.onload = function(){
        firstColumn.style.visibility ="visible";
        secondColumn.style.visibility ="visible";
        // firstColumn.style.paddingTop = "0px"
        // secondColumn.style.paddingTop = "0px"
}


/*####################################################*/


let secondSection = document.querySelector(".secondSection")
let Built = document.querySelector(".Built")
let design = document.querySelector(".design")
let docum = document.querySelector(".docum")

let sample = document.querySelector(".sample")
let resource = document.querySelector(".resource")

// sample.style.opacity = "0"
// resource.style.opacity = "0"




Built.style.opacity = "0"
Built.style.paddingTop = "50px"
Built.style.transition = "0.5s"

design.style.opacity = "0"
design.style.paddingTop = "50px"
design.style.transition = "0.7s"

docum.style.opacity = "0"
docum.style.paddingTop = "50px"
docum.style.transition = "0.9s"


window.onscroll = function(){
    if(window.scrollY > firstSection.offsetTop ){
        Built.style.opacity = "1"
        Built.style.paddingTop = "0px"
        design.style.opacity = "1"
        design.style.paddingTop = "0px"
        docum.style.opacity = "1"
        docum.style.paddingTop = "0px"
    }
}






/*######################################################## */

let point = document.querySelector(".point");
let switcher = document.querySelector(".switcher");
let price = document.querySelector(".price");
let monthGoal = price.dataset.month;
let yearGoal = price.dataset.year;
price.innerHTML = yearGoal




function monthPrice(){
    let price = document.querySelector(".price");
    let monthGoal = price.dataset.month;
    let counter = setInterval(() => {
        price.textContent++;
        if(price.textContent == monthGoal){
            clearInterval(counter)
        }
    }, 50);
}

function yearPrice(){
    let price = document.querySelector(".price");
    let yearGoal = price.dataset.year;
    let counter = setInterval(() => {
        price.textContent--;
        if(price.textContent == yearGoal){
            clearInterval(counter)
        }
    }, 50);
}


switcher.addEventListener("click",function(){
    point.classList.toggle("monthlyActivated");
    if(point.classList.contains("monthlyActivated")){
        switcher.style.backgroundColor = "blue";
        monthPrice();
    } else{
        switcher.style.backgroundColor = "lightgray";
        yearPrice();
    }
})

/* ########################################################*/

