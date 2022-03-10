"use strict"

let allRoastsRadioBtns = Array.from(document.querySelectorAll(".all-roasts"));
let coffeeOutputWrapper = document.querySelector(".coffee-output-wrapper");
let coffeeInputSearch = document.querySelector("#coffee-input-search");
// console.log(allRoastsRadioBtns)

let coffees = [
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

// ***** SEARCH FOR COFFEE BY TYPING IN NAME INTO INPUT *****