const allDishesUL = document.getElementById("allDishesUL");
const startersUL = document.getElementById("startersUL");
const mainUL = document.getElementById("entreesUL");
const sidesUL = document.getElementById("sidesUL");
const specialsUL = document.getElementById("specialsUL");
const kidsUL = document.getElementById("kidsUL");
const drinksUL = document.getElementById("drinksUL");

const btnAll = document.getElementById("btnAll");
const btnStarters = document.getElementById("btnStarters");
const btnMains = document.getElementById("btnMains");
const btnSides = document.getElementById("btnSides");
const btnSpecials = document.getElementById("btnSpecials");
const btnKids = document.getElementById("btnKids");
const btnDrinks = document.getElementById("btnDrinks");


const starters = dishes.filter(function(dish) {
    return dish.course == "Starters"
})

const sides = dishes.filter(function(dish) {
    return dish.course == "Sides"
})

const mains = dishes.filter(function(dish) {
    return dish.course == "Main"
})

const specials = dishes.filter(function(dish) {
    return dish.course == "Specials"
})

const kids = dishes.filter(function(dish) {
    return dish.course == "Kids"
})

const drinks = dishes.filter(function(dish) {
    return dish.course == "Drinks"
})

const all = dishes.filter(function(dish) {
    return dish.title
})

function nullCheck (label) {
    if (label == null) {
        return label = ""
    }
    else {
        return label
    }
}

// To have all dishes visible on initial page load:

// for (let index = 0; index < dishes.length; index++) {
//     let meat = meats[index]  
//     let meatItem = `
//                         <li>
//                             <h4><b>${meat.Spanish}</b>&nbsp&nbsp&nbsp&nbsp$${dish.price}&nbsp&nbsp</h4>
//                             <br/>${dish.descriptionEsp}
//                             <br/><br/><i>${dish.descriptionEng}</i>
//                         </li>
//                         <br>
//                         `
//     allDishesUL.insertAdjacentHTML('beforeend', dishItem)
// }

for (let index = 0; index < dishes.length; index++) {
    let dish = dishes[index]  
    let dishItem = `
                        <li>
                            <b>${dish.title}</b>&nbsp&nbsp&nbsp&nbsp$${dish.price}&nbsp&nbsp
                            <br/><br/>${nullCheck(dish.descriptionEsp)}
                            <br/><br/><i>${nullCheck(dish.descriptionEng)}</i>
                        </li>
                        <br/><br/>
                        `
    allDishesUL.insertAdjacentHTML('beforeend', dishItem)
}

