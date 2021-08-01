const allDishesUL = document.getElementById("allDishesUL");
const startersUL = document.getElementById("startersUL");
const mainUL = document.getElementById("entreesUL");
const sidesUL = document.getElementById("sidesUL");
const specialsUL = document.getElementById("specialsUL");
const kidsUL = document.getElementById("kidsUL");
const drinksUL = document.getElementById("drinksUL");
const meatsUL = document.getElementById("meatsUL");

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
    return dish.course == "Mains"
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

for (let index = 0; index < dishes.length; index++) {
    let dish = dishes[index]  
    let dishItem = `
                        <li>
                            <b>${dish.title}</b>
                            <br/><br/>${nullCheck(dish.descriptionEsp)}
                            <br/><br/><i>${nullCheck(dish.descriptionEng)}</i>
                        </li>
                        <br/><br/>
                        `
    allDishesUL.insertAdjacentHTML('beforeend', dishItem)
}

btnMains.addEventListener("click", function() {
    allDishesUL.innerHTML = ''
    startersUL.innerHTML = ''
    mainsUL.innerHTML = ''
    sidesUL.innerHTML = ''
    specialsUL.innerHTML = ''
    kidsUL.innerHTML = ''
    drinksUL.innerHTML = ''
    for (let index = 0; index < mains.length; index++) {
        let main = mains[index]  
        let mainItem = `
                            <li>
                                <b>${main.title}</b>
                                <br/><br/>${nullCheck(main.descriptionEsp)}
                                <br/><br/><i>${nullCheck(main.descriptionEng)}</i>
                            </li>
                            <br/><br/>
                            `
        mainsUL.insertAdjacentHTML('beforeend', mainItem)
    }
})  

btnSides.addEventListener("click", function() {
    allDishesUL.innerHTML = ''
    startersUL.innerHTML = ''
    mainsUL.innerHTML = ''
    sidesUL.innerHTML = ''
    specialsUL.innerHTML = ''
    kidsUL.innerHTML = ''
    drinksUL.innerHTML = ''
    for (let index = 0; index < sides.length; index++) {
        let side = sides[index]  
        let sideItem = `
                            <li>
                                <b>${side.title}</b>
                            </li>
                            <br/><br/>
                            `
        sidesUL.insertAdjacentHTML('beforeend', sideItem)
    }
})  

btnStarters.addEventListener("click", function() {
    allDishesUL.innerHTML = ''
    startersUL.innerHTML = ''
    mainsUL.innerHTML = ''
    sidesUL.innerHTML = ''
    specialsUL.innerHTML = ''
    kidsUL.innerHTML = ''
    drinksUL.innerHTML = ''
    for (let index = 0; index < starters.length; index++) {
        let starter = starters[index]  
        let starterItem = `
                            <li>
                                <b>${starter.title}</b><br/>
                                <br/><br/>${nullCheck(starter.descriptionEsp)}
                                <br/><br/><i>${nullCheck(starter.descriptionEng)}</i>
                            </li>
                            <br/><br/>
                            `
        startersUL.insertAdjacentHTML('beforeend', starterItem)
    }
})  

btnSpecials.addEventListener("click", function() {
    allDishesUL.innerHTML = ''
    startersUL.innerHTML = ''
    mainsUL.innerHTML = ''
    sidesUL.innerHTML = ''
    specialsUL.innerHTML = ''
    kidsUL.innerHTML = ''
    drinksUL.innerHTML = ''
    for (let index = 0; index < specials.length; index++) {
        let special = specials[index]  
        let specialItem = `
                            <li>
                                <b>${special.title}</b>
                                <br/><br/>${nullCheck(special.descriptionEsp)}
                                <br/><br/><i>${nullCheck(special.descriptionEng)}</i>
                            </li>
                            <br/><br/>
                            `
        specialsUL.insertAdjacentHTML('beforeend', specialItem)
    }
})  

btnDrinks.addEventListener("click", function() {
    allDishesUL.innerHTML = ''
    startersUL.innerHTML = ''
    mainsUL.innerHTML = ''
    sidesUL.innerHTML = ''
    specialsUL.innerHTML = ''
    kidsUL.innerHTML = ''
    drinksUL.innerHTML = ''
    for (let index = 0; index < drinks.length; index++) {
        let drink = drinks[index]  
        let drinkItem = `
                            <li>
                                <b>${drink.title}</b
                            </li>
                            <br/><br/>
                            `
        drinksUL.insertAdjacentHTML('beforeend', drinkItem)
    }
}) 

btnKids.addEventListener("click", function() {
    allDishesUL.innerHTML = ''
    startersUL.innerHTML = ''
    mainsUL.innerHTML = ''
    sidesUL.innerHTML = ''
    specialsUL.innerHTML = ''
    kidsUL.innerHTML = ''
    drinksUL.innerHTML = ''
    for (let index = 0; index < kids.length; index++) {
        let kid = kids[index]  
        let kidItem = `
                            <li>
                                <b>${kid.title}</b>
                            </li>
                            <br/><br/>
                            `
        kidsUL.insertAdjacentHTML('beforeend', kidItem)
    }
}) 

btnAll.addEventListener("click", function() {
    allDishesUL.innerHTML = ''
    startersUL.innerHTML = ''
    mainsUL.innerHTML = ''
    sidesUL.innerHTML = ''
    specialsUL.innerHTML = ''
    kidsUL.innerHTML = ''
    drinksUL.innerHTML = ''
    for (let index = 0; index < dishes.length; index++) {
        let dish = dishes[index]  
        let dishItem = `
                            <li>
                                <b>${dish.title}</b>
                                <br/><br/>${nullCheck(dish.descriptionEsp)}
                                <br/><br/><i>${nullCheck(dish.descriptionEng)}</i>
                            </li>
                            <br/><br/>
                            `
        allDishesUL.insertAdjacentHTML('beforeend', dishItem)
    }
}) 