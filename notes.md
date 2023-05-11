# CHALLENGES

## Challenge: 01 Render Character Cards in JS

1. Take the hard-coded HTML for the Wizard card, bring it into index.js and then inject it back into its div with JavaScript.
2. Do the same for Orc card. 

## CHALLENGE 02: The renderCharacter() function

1. Strip out the hero and monster data (element id, name, avatar, health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and once with the monster variables to that both are rendered

## CHALLENGE 03: Convert Consts Into Two Objects

1. Convert our consts into two objects called "monster" and "hero".
2. Update the renderCharacter() function so that it accepts a single object "data" as its parameter instead of five string/numbers, reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.

```js

let user = {        // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
}

```

## CHALLENGE 04: Destructure the Data Object

1. Deconstruct the data object 
2. Update the template string as necessary

## CHALLENGE 05: Render Multiple Dice

1. declare a let called diceHtml and initialize it with an empty string. 
2. Use a for loop to update diceHtml so that it contains the HTML for our dice. The number of dice needed is specificed in the diceCount property of the objects.
3. Each dice should have the following HTML: 

```html 
    <div class="dice">6</div>
```

4. For now, each dice will display 6
5. Swap out the diceRoll variable for diceHtml in the template

## CHALLENGE 06: Update for Loop

Update this for loop so it uses a value from the new diceRoll array to render out the dice so the wizard's dice have values of 3, 1 and 4, and the orc's single dice has a value of 2.

## CHALLENGE 07: Replace for Loop with map

1. Instead of the for loop, map over the diceRoll array and save the new array to diceHTML.
2. Remember to deal with the commas between dice.
3. What keyword should be used to declare diceHTML? 

## Challenge 08: Generate Random Value for Dice

1. Create a function called getDiceRollArray that uses a for loop to return an array of random numbers between 1-6. 
2.  The function should have diceCount as a parameter and the array it returns should be diceCount length.
3.  For testing purposes, call the function with a diceCount of 3 and log out the result. 
check out hint.md for extra help!

### Hints: These will be useful:

    1. Math.random() - will generate a random number between 0 and 1 but not inclusive of 1.
    2. Math.floor() - will round a number down to the nearest integer

## Challenge 09: Render Dice With Random Numbers

1. Create a function called getDiceHtml. 
2. getDiceHtml should map over the array of dice rolls returned from getDiceRollArray to generate the html we need to render our dice with random values. This is the HTML: 
```js

`<div class="dice">DICE VALUE HERE</div>`

```
3. Think about the parameters and arguments!
4. Down in renderCharacter(), set diceHtml equals to our new getDiceHtml function. Remember to give it the argument it needs. 
5. Delete any code we no longer need.

### Hints: 
    1. Your function should take in diceCount as a parameter.
    2. It should then return the array it gets by calling 
    getDiceRollArray(). Remember to use as an argument.
    3. There's no need to set up a new variable - you can map 
    over the array returned by getDiceRollArray directly to 
    return the html template for each dice.
    
Changed/Deleted:

```js

function getDiceRollArray(diceCount){
    const newDiceRolls = []
    for(let i = 0; i < diceCount; i++){
        newDiceRolls.push(Math.floor(Math.random() *6 ) + 1)
    }
    return newDiceRolls
}

getDiceRollArray(3)

```

## Note: Chaining .fill() and .map() Onto a New Array

```js 

const poisonMushrooms = new Array(10).fill('🍄').map(function(mushroom){
    return `<div class="box">${mushroom}</div>`
}).join('')

document.getElementById('mushrooms').innerHTML = poisonMushrooms

```

```css

.mushroom-container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 20px;
}

.box{
    padding: 20px;
    border: 3px solid skyblue;
    border-radius: 5px; 
}

```

```html

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <div class="mushroom-container" id="mushrooms"></div>
        <script src="index.pack.js"></script>
    </body>
</html>

```

## Challenge 10: Use Array Constructor Instead of for Loop 

1. Instead of the for loop, use an Array constructor to create a new array which is diceCount length.
2. Fill the new array with zeros as its initial state.
3. Map over the new array directly (no need to declare a new variable) and return a random number from 1-6 in each element.
4. Delete all unnecessary code.

___

# Section 2: Constructor Functions

Note: Constructor Function Example

```js

const animalForRelease1 = {
    name: 'Tilly',
    species: 'tiger',
    weightKg: 56,
    age: 2,
    dateOfRelease: '03-02-2022'
}
const animalForRelease2 = {
    name: 'Nelly',
    species: 'elephant',
    weightKg: 320,
    age: 16,
    dateOfRelease: '03-02-2022'
}

function Animal(data){
    this.name = data.name
    this.species = data.species
    this.weightKg = data.weightKg
    this.age = data.age
    this.dateOfRelease = data.dateOfRelease  
}

const tillyTheTiger = new Animal(animalForRelease1)
const nellyTheElephant = new Animal(animalForRelease2)
console.log(tillyTheTiger)
console.log(nellyTheElephant)

```

## Note: Methods

- Methods are properties on objects that contain functions
- If you can write a function, you can write a method.

```js

function Animal(data){
    this.name = data.name
    this.species = data.species
    this.weightKg = data.weightKg
    this.age = data.age
    this.dateOfRelease = data.dateOfRelease
	this.summariseAnimal = function(){
		console.log(`${this.name} is a ${this.age} year old 
		${this.species} which weighs ${this.weightKg}kg and was 
		released into the wild on ${this.dateOfRelease}`)
	}
}

const tillyTheTiger = new Animal(animalForRelease1)
const nellyTheElephant = new Animal(animalForRelease2)

tillyTheTiger.summariseAnimal()
nellyTheElephant.summariseAnimal()

```

## Challenge 11:

1. Create a new constructor function called Character which takes our data as a paramenter.
2. Set up "this" for each of the 5 properties in our objects (eg: this.health = data.health).

## Challenge 12:

1. Create a method called getCharacterHtml that performs the same tasks as our current renderCharacter function.
2. Create two new instances of Character. One for a hero, called "wizard", and one for a monster, called "orc". Render both of them on the page.
3. Delete both the old renderCharacter function and the two lines of code at the bottom of the page which invoke that function.

# Note: Object.assign

- Object.assign copies properties from a source object to a target object, then returns the new version of the target object

```js
Object.assign(target, source) 
```

For example:
```js

const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
}

function Student(data) {
    // No longer need these four lines of code because Object.assign replaces them.
    
    // this.firstName = data.firstName
    // this.lastName = data.lastName
    // this.age = data.age
    // this.country = data.country
    // this.email = data.email
    // this.discordUsername = data.discordUsername
    
    Object.assign(this, data)
    this.summariseStudent = function () {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old 
        and comes from ${this.country}. Their email is ${this.email} and you can find them on discord as ${this.discordUsername}`)
    }
}

const newStudent = new Student(studentDetails)
newStudent.summariseStudent()

```

## CHALLENGE 13: Simplify Constructor Function - Part 1

-Use what you learned in the previous scrim to remove the following 5 lines of code:

```js
    this.elementId = data.elementId
    this.name = data.name
    this.avatar = data.avatar
    this.health = data.health
    this.diceCount = data.diceCount
```

## CHALLENGE 14: Simplify Constructor Function - Part 2
1. Add this function as a method of our character constructor

```js
function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(num){ 
        return  `<div class="dice">${num}</div>`
    }).join('')
}
```
2. Make a small change to getCharacterHtml to make the app work again

## CHALLENGE 15: Stop Setting The innerHTML Inside The Constructor Function

- instead of setting the innerHTML from right here in the contructor (see below for before change), make it so that we just return that literal string of HTML
- This will break the app. Don't worry!

```js
this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this;
        let diceHtml = this.getDiceHtml(diceCount);

        document.getElementById(elementId).innerHTML =
            `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceHtml}
            </div>
        </div>`;
```

## CHALLENGE 15: Fix the Broken Rendering

- Make the wizard and orc render

### Note: Help.md

- The .getCharacterHtml method of our constructor is returning a string containing HTML.
- For each character we need to call the .getCharacterHtml method so that the HTML it returns goes into the innerHTML of the correct div.
- Each character in our objects has an elementId property.
- Use that property to grab the right element and then set it equals to the render method for that character.

## CHALLENGE 15b: Single Render Function
1. Create one render() function that calls both wizard and orc so we can control when they render. 
2. Call the function.

## CHALLENGE 16: Amalgamate the Objects

-Create a new const called characterData and set it equals to an object which holds both our hero and monster objects. 
-Think about how we access the data from our new object when we set up new characters down at the very bottom of the app. 
-See if you can work out what needs to change there to keep the app working.

## CHANGE: Move Data to New data.js file

## CHALLENGE 16: Add utils.js

1. Create a file called 'utils.js'.
2. Cut and paste the getDiceRollArray() function into it.
3. Decide if this should be a default or named export. Think about this!!
4. Import back it into index.js

## CHALLENGE 17: Move the Character Constructor Function to new Character.js file

1. Create a file called 'Character.js'
2. Cut and paste the constructor function into it.
3. Decide if this should be a default or named export. Think about this!!
4. Import it into index.js
5. You will hit a problem! Solve the problem!

## Note: Part 2 Skills Summary

- Constructor Functions
- The "this" keyword
- Methods on constructor functions
- Object.assign
- Import/Export

___



  


