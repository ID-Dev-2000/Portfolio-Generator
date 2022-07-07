/*
create arrays containing words, values
randomly generate number from count of each array
new variable to select object from array using number value
insert new variable into template literal to insert array object into string
variable in template literal will display random array object
*/

/*
data to change:
- main name
- header text in body
- subtext in body
- icon color
- background colors for bottom and top sections (text will automatically format)
*/

// Element selection
const generateButton = document.getElementById('generateButton')
const headlineText = document.getElementById('headlineText')
const headerSubText = document.getElementById('headerSubText')
const bottomDiv = document.getElementById('bottomDiv')

generateButton.addEventListener('click', function() {
    bottomDiv.className = `w3-row-padding w3-${colors[Math.floor(Math.random() * colors.length)]} w3-padding-64 w3-container`
    headlineText.innerHTML = `${headlineArray[Math.floor(Math.random() * headlineArray.length)]} TECH`
    headerSubText.innerHTML = `WE ${verbs[Math.floor(Math.random() * verbs.length)]} THE MOST ${adjectives[Math.floor(Math.random() * adjectives.length)]} TECHNOLOGY`
})
