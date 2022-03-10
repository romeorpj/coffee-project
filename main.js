"use strict"
//
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         console.log(coffees[i])
//         // console.log(coffees[0])
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);
//
// let lite = document.querySelector(".light-roast")
// console.log(lite.value)
let allRoastsRadioBtns = Array.from(document.querySelectorAll(".all-roasts"));
let coffeeOutputWrapper = document.querySelector(".coffee-output-wrapper");
let coffeeInputSearch = document.querySelector("#coffee-input-search");
// console.log(allRoastsRadioBtns)

var coffees = [
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

//SELECT COFFEE BY ROAST RADIO BUTTONS
function selectAllRoasts(){
    for(let i = 0; i < allRoastsRadioBtns.length;i++){
        allRoastsRadioBtns[i].addEventListener("change",function(){
            let checkedVal = this.value;
            // remove all divs in the container
            let coffeeOutputWrapperParent = document.querySelector(".coffee-output-wrapper");
            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            removeAllChildNodes(coffeeOutputWrapperParent);
            // console.log(checkedVal);
            coffees.map((coffeeItem)=>{
                if(coffeeItem.roast === checkedVal){
                    createDivsAndPs(coffeeItem)
                    //create div inside of coffee-output-wrapper
                    // let allRoastsDiv = document.createElement("div");
                    // allRoastsDiv.classList.add("coffee-item-output-div")
                    // //    append it to the coffee-output-wrapper
                    // coffeeOutputWrapper.appendChild(allRoastsDiv);
                    // //    create p tag with coffee name
                    // let allRoastsCoffeeNameP = document.createElement("p");
                    // //insert coffe name
                    // allRoastsCoffeeNameP.textContent = coffeeItem.name;
                    // //    append it to the coffee-item-output-div/allroastsdiv
                    // allRoastsDiv.appendChild(allRoastsCoffeeNameP);
                    // //    create p tag with roast title
                    // let allRoastsCoffeeRoastP = document.createElement("p");
                    // //    add class for styling
                    // allRoastsCoffeeRoastP.classList.add("form-text", "my-0", "sub-roast-styles")
                    // //insert roast name
                    // allRoastsCoffeeRoastP.textContent = coffeeItem.roast;
                    // //    append it to the coffee-item-output-div/allroastsdiv
                    // allRoastsDiv.appendChild(allRoastsCoffeeRoastP);

                }

            })
        })
    }
}
selectAllRoasts();

// createDivsAndPs
function createDivsAndPs(arrayItem){
    let allRoastsDiv = document.createElement("div");
    allRoastsDiv.classList.add("coffee-item-output-div")
    //    append it to the coffee-output-wrapper
    coffeeOutputWrapper.appendChild(allRoastsDiv);
    //    create p tag with coffee name
    let allRoastsCoffeeNameP = document.createElement("p");
    //insert coffe name
    allRoastsCoffeeNameP.textContent = arrayItem.name;
    // allRoastsCoffeeNameP.textContent = coffeeItem.name;
    //    append it to the coffee-item-output-div/allroastsdiv
    allRoastsDiv.appendChild(allRoastsCoffeeNameP);
    //    create p tag with roast title
    let allRoastsCoffeeRoastP = document.createElement("p");
    //    add class for styling
    allRoastsCoffeeRoastP.classList.add("form-text", "my-0", "sub-roast-styles")
    //insert roast name
    allRoastsCoffeeRoastP.textContent = arrayItem.roast;
    //    append it to the coffee-item-output-div/allroastsdiv
    allRoastsDiv.appendChild(allRoastsCoffeeRoastP);
}



// ***** SEARCH FOR COFFEE BY TYPING IN NAME INTO INPUT *****
function inputSearch(){
    coffeeInputSearch.addEventListener("keyup", (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        let inputValue = e.target.value.toLowerCase();
        let filteredCoffeeNames= coffees.filter((element)=>{
return element.name.toLowerCase().includes(inputValue)});

filteredCoffeeNames.forEach((element)=>{
    createDivsAndPs(element)
})
// createDivsAndPs()
//     let filteredCoffeeNames = coffees.filter((element)=>{
//         element.name.includes(inputValue);
//     console.log(filteredCoffeeNames);
// })

    })
}
inputSearch()

// const coffee = coffees.filter(nescof => console.log(nescof.name) );