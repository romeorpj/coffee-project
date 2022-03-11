"use strict"

let allRoastsRadioBtns = Array.from(document.querySelectorAll(".all-roasts"));
let coffeeOutputWrapper = document.querySelector(".coffee-output-wrapper");
let coffeeInputSearch = document.querySelector("#coffee-input-search");

// console.log(allRoastsRadioBtns)

let coffees= [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


// console.log(coffees)
// console.log(coffees.push({id: 15, name: 'jjjjrench', roast: 'dark'}))
// console.log(coffees)
// let localStorageCoffeesArray = localStorage.getItem("coffees")
// if(localStorageCoffeesArray === null){
//     coffees = [
//         {id: 1, name: 'Light City', roast: 'light'},
//         {id: 2, name: 'Half City', roast: 'light'},
//         {id: 3, name: 'Cinnamon', roast: 'light'},
//         {id: 4, name: 'City', roast: 'medium'},
//         {id: 5, name: 'American', roast: 'medium'},
//         {id: 6, name: 'Breakfast', roast: 'medium'},
//         {id: 7, name: 'High', roast: 'dark'},
//         {id: 8, name: 'Continental', roast: 'dark'},
//         {id: 9, name: 'New Orleans', roast: 'dark'},
//         {id: 10, name: 'European', roast: 'dark'},
//         {id: 11, name: 'Espresso', roast: 'dark'},
//         {id: 12, name: 'Viennese', roast: 'dark'},
//         {id: 13, name: 'Italian', roast: 'dark'},
//         {id: 14, name: 'French', roast: 'dark'},
//     ];
// }else{
//     coffees = JSON.parse(localStorageCoffeesArray)
// }
//
// localStorage.setItem("coffees",JSON.stringify(coffees))
// console.log(coffees)


// coffees = localStorage.getItem("coffeesStorageObject");
// if(localStorage.getItem("coffeeStorageObject")){
//     let getCoffeeFromStorage = JSON.parse(localStorage.getItem(coffeeStorageObject));
//     coffees += getCoffeeFromStorage
//     console.log(coffees);
// }else{
//     localStorage.setItem("coffeeStorageObject",JSON.stringify(newLocalObject));
//
// }




// console.log(coffees);

//REUSABLE FUNCTION THAT DISPLAYS COFFEES ONSCREEN
function displayCoffee(coffeesParam) {
    coffeeOutputWrapper.innerHTML  = coffeesParam.map((coffee) => {
        return `
            <div class="coffee-item-output-div">
        <p>${coffee.name}</p>
        <p class="form-text my-0 sub-roast-styles">${coffee.roast}</p>
    </div>
        `
    }).join("");
}

// ***** SEARCH FOR COFFEE BY ROAST TYPE USING RADIO BUTTONS*****

    for(let i = 0; i < allRoastsRadioBtns.length;i++){
        allRoastsRadioBtns[i].addEventListener("change",function(){
            let checkedVal = this.value.toLowerCase();
            let filteredCoffeesByRoast = coffees.filter(coffee => {
                return coffee.roast.toLowerCase().includes(checkedVal);
            })
            displayCoffee(filteredCoffeesByRoast);
        })


// ***** SEARCH FOR COFFEE BY TYPING IN NAME INTO INPUT *****
coffeeInputSearch.addEventListener("keyup",(e)=> {
    let searchValue = e.target.value.toLowerCase();
    //  So convert search input to lowercase M -> m && m -> m
    // then convert name and roast to lowercase then compare
    let filteredCoffees = coffees.filter(coffee => {
        // filters based on finding the charcters in the coffee,name AND the coffee.roast
        return coffee.name.toLowerCase().includes(searchValue) || coffee.roast.toLowerCase().includes(searchValue)
    })
    displayCoffee(filteredCoffees);
})}

//*****ADD COFFEE TO COFFEES ARRAY, SET TO LOCAL STORAGE FOR PERSISTENCE
// let newLocalArray = [];
    let newLocalObject = {};

let selectRoastDropdown = document.querySelector("#select-roast-dropdown");
let addCoffeeInput = document.querySelector(".add-coffee-input");
let addCoffeeButton = document.querySelector(".add-coffee-button");

addCoffeeButton.addEventListener('click', addYourOwnCoffee);
function addYourOwnCoffee(e){
    e.preventDefault();
    let newCoffeeObj = {
        id: coffees.length + 1,
        name: addCoffeeInput.value,
        roast: selectRoastDropdown.value
    }
    coffees.push(newCoffeeObj);
    console.log(coffees);
}
// addYourOwnCoffee(e);



// function submitCoffeeObject(){
//     let addCoffeeInput = document.querySelector(".add-coffee-input");
//     let addCoffeeButton = document.querySelector(".add-coffee-button");
//     addCoffeeButton.addEventListener("click",()=>{
//         // console.log(addCoffeeFunction())
//         newLocalObject.name = addCoffeeInput.value;
//         coffees += newLocalObject;
//         console.log(newLocalObject)
//
//         // console.log(newLocalObject)
//         addCoffeeInput.value = "";
//
// let coffeeStorageObject=localStorage.getItem("coffeeStorageObject");
//         if(localStorage.getItem("coffeeStorageObject")){
//             let getCoffeeFromStorage = JSON.parse(localStorage.getItem(coffeeStorageObject));
//             coffees += getCoffeeFromStorage
//             console.log(coffees);
//         }else{
//             localStorage.setItem("coffeeStorageObject",JSON.stringify(newLocalObject));
//
//         }
//     })
//
// }
//
// submitCoffeeObject();

