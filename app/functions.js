//Declare arrays and variables
var cacheVector = new Array(8);
var memoryVector = new Array(8);
var hitVector = new Array(8);
var replacementPolicyCounter = 0;
var validationBit = 0;
var lines = 8;

//Cache and memory constructors
function cacheConstructor(data) { this.data = data; }
function memoryConstructor(data) { this.data = data; }
function hitConstructor(data) { this.data = data; }

//Declare html elements
const cache = document.getElementById("cache");
const memory = document.getElementById("memory");
const form = document.getElementById("form");
const input = document.getElementById("input");
const option = document.getElementById("option-return");

//Function thats generate random number
function generateRandomNumber(count) {
  let generatedCache = "";
  for (let i = 0; i < count; i++) {
    generatedCache += Math.round(Math.random()) + "";
  }
  return generatedCache;
}

//Function that generates cache, memory and hit data
function generateCacheAndMemory() {
  for (let i = 0; i < lines; i++) {

    let cacheConstructorReturn = new cacheConstructor(generateRandomNumber(4));
    cacheVector[i] = cacheConstructorReturn.data;

    let memoryConstructorReturn = new memoryConstructor(generateRandomNumber(8));
    memoryVector[i] = memoryConstructorReturn.data;

    let hitConstructorReturn = new hitConstructor(generateRandomNumber(1));
    hitVector[i] = hitConstructorReturn.data;
  }
}

//Display and refresh data on screen
function displayDataOnScreen() {

  cache.innerHTML = "<p>Cache</p>";
  memory.innerHTML = "<p>Memory</p>";
  hit.innerHTML = "<p>Hit</p>";

  for (let i = 0; i < lines; i++) {
    cache.innerHTML += cacheVector[i] + "<br/>";
    memory.innerHTML += memoryVector[i] + "<br/>";
    hit.innerHTML += hitVector[i] + "<br/>";
  }
}

//Option read
function optionRead() {
  let position = input.value;
  let valueInPosition = memoryVector[position];
  option.innerHTML = "O valor na posição " + position + " é " + valueInPosition + ".";
}

//Option write
function optionWrite() {
  let inputData = input.value;
  let valueFinded = false;
  for (i = 0; i < memoryVector.length; i++) {
    if (inputData == memoryVector[i]) {
      valueFinded = true;
      option.innerHTML = "The value " + inputData + " is in the position [" + i + "]";
    }
    if (valueFinded == false) {
      option.innerHTML = "The value " + inputData + " is not in the memory and will be added";
      memoryVector.pop();
      memoryVector.push(inputData);

      displayDataOnScreen();
    }
  }
}

//Option list
function optionList() {
  let readAbsolute = 0;
  let readPercentual = 0;
  let writeAbsolute = 0;
  let writePercentual = 0;
  let hitAbsolute = 0;
  let hitPercentual = 0;

  option.innerHTML = 
  "Os resultados finais são: " + 
  "<br/><br/>" + 
  " Read abs.: " + readAbsolute + 
  " Read per.: " + readPercentual +
  " Write abs.: " + writeAbsolute + 
  "<br/>" + 
  " Write per.: " + writePercentual +
  " Hit abs.: " + hitAbsolute + 
  " Hit per.: " + hitPercentual;
}

//Option exit
function optionExit() {
  let finishedMessage = "<p class='finished-message'>Finished.</p>";
  form.innerHTML = finishedMessage;
}

//Start algorithm
generateCacheAndMemory();
displayDataOnScreen()