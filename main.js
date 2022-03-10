"use strict"

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
            // let coffeeOutputWrapperParent = document.querySelector(".coffee-output-wrapper");
            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }

            removeAllChildNodes(coffeeOutputWrapper);
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
function displayCoffee(coffeesParam) {
    let coffeeString = coffeesParam.map((coffee) => {
        return `
            <div class="coffee-item-output-div">
        <p>${coffee.name}</p>
        <p class="form-text my-0 sub-roast-styles">${coffee.roast}</p>
    </div>
        `
    }).join("");
    coffeeOutputWrapper.innerHTML = coffeeString;
}

displayCoffee(coffees)


function inputSearch(coffeesArray) {
    coffeeInputSearch.addEventListener("keyup", (e) => {
        e.preventDefault();
        let inputValue = coffeeInputSearch.value.toUpperCase();
        // console.log(coffeesArray);
        // let noObjArray =[];
        // let coffeesArrayNoObj = coffeesArray.map((item)=>{
        //     // noObjArray.push(item);
        //     // return item;
        // })
        // console.log(coffeesArrayNoObj);

        let noObjArray = [];
        let objAccess;
        for (let i = 0; i < coffeesArray.length; i++) {
            objAccess = coffeesArray[i].name;
            noObjArray.push(objAccess);
        }
        // console.log(noObjArray)

        const result = noObjArray.filter(item => item.toUpperCase().includes(inputValue));
        console.log(result)
        if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
                let allRoastsDiv = document.createElement("div");
                allRoastsDiv.classList.add("coffee-item-output-div")
                //    append it to the coffee-output-wrapper
                coffeeOutputWrapper.appendChild(allRoastsDiv);
                //    create p tag with coffee name
                let allRoastsCoffeeNameP = document.createElement("p");
                //insert coffe name
                allRoastsCoffeeNameP.textContent = coffeesArray[i].name;
                // allRoastsCoffeeNameP.textContent = coffeeItem.name;
                //    append it to the coffee-item-output-div/allroastsdiv
                allRoastsDiv.appendChild(allRoastsCoffeeNameP);
                //    create p tag with roast title
                let allRoastsCoffeeRoastP = document.createElement("p");
                //    add class for styling
                allRoastsCoffeeRoastP.classList.add("form-text", "my-0", "sub-roast-styles")
                //insert roast name
                allRoastsCoffeeRoastP.textContent = coffeesArray[i].roast;
                //    append it to the coffee-item-output-div/allroastsdiv
                allRoastsDiv.appendChild(allRoastsCoffeeRoastP);
            }
        } else {
            let allRoastsDiv = document.createElement("div");
            allRoastsDiv.classList.add("coffee-item-output-div")
        }
        // const result = coffeesArray.filter(item => item.toUpperCase().includes(inputValue));

        // // console.log(inputValue);
        // let temp = "";
        // const result = coffeesArray.filter(item => item.toUpperCase().includes(inputValue));
        // console.log(result);
//        Loop through coffees array
//         let coffeeName;
//         for (let i = 0; i < coffeesArray.length; i++) {
// coffeeName = coffeesArray[i].name.toUpperCase();
// console.log(coffeeName);
//         //if matched
//             if (coffeeName.indexOf(inputValue) > -1){
// return createDivsAndPs(coffeeName);
//             }
//         }
//         let filteredCoffeeNames= coffees.filter((element)=>{
// return element.name.toLowerCase().includes(inputValue)});

// filteredCoffeeNames.forEach((element)=>{
//     createDivsAndPs(element)
// })
// createDivsAndPs()
//     let filteredCoffeeNames = coffees.filter((element)=>{
//         element.name.includes(inputValue);
//     console.log(filteredCoffeeNames);
// })

    })
}

inputSearch(coffees);

// const coffee = coffees.filter(nescof => console.log(nescof.name) );