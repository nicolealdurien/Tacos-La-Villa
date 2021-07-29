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

// To have all dishes visible on initial page load:
for (let index = 0; index < dishes.length; index++) {
    let dish = dishes[index]  
    let dishItem = `
                        <li>
                            <h3><b>${dish.title}</b>&nbsp&nbsp&nbsp&nbsp$${dish.price}&nbsp&nbsp</h3>
                            <p><i>${dish.descriptionEsp}</i></p>
                        </li>
                        <br>
                        `
    allDishesUL.insertAdjacentHTML('beforeend', dishItem)
}

