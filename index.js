import characterData from '/data.js'
import Character from '/Character.js'

function render(){
    document.getElementById('light-side').innerHTML = rey.getCharacterHtml()
    document.getElementById('dark-side').innerHTML = stormTrooper.getCharacterHtml()
}


const rey = new Character(characterData.lightSide)
const stormTrooper = new Character(characterData.darkSide)
render()
