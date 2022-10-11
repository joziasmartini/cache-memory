import './CacheMemory.sass';

// let readAbsolute = 0;
// let readPercentual = 0;
// let writeAbsolute = 0;
// let writePercentual = 0;
// let hitAbsolute = 0;
// let hitPercentual = 0;

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




function CacheMemory() {
  return (
    <main className="cache-memory-container">
      <header className="cache-memory-header">
        <svg className="cpu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path fill="#333333" fill-rule="evenodd" d="M8.75 8a.75.75 0 00-.75.75v6.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-6.5a.75.75 0 00-.75-.75h-6.5zm.75 6.5v-5h5v5h-5z"></path><path fill="#333333" fill-rule="evenodd" d="M15.25 1a.75.75 0 01.75.75V4h2.25c.966 0 1.75.784 1.75 1.75V8h2.25a.75.75 0 010 1.5H20v5h2.25a.75.75 0 010 1.5H20v2.25A1.75 1.75 0 0118.25 20H16v2.25a.75.75 0 01-1.5 0V20h-5v2.25a.75.75 0 01-1.5 0V20H5.75A1.75 1.75 0 014 18.25V16H1.75a.75.75 0 010-1.5H4v-5H1.75a.75.75 0 010-1.5H4V5.75C4 4.784 4.784 4 5.75 4H8V1.75a.75.75 0 011.5 0V4h5V1.75a.75.75 0 01.75-.75zm3 17.5a.25.25 0 00.25-.25V5.75a.25.25 0 00-.25-.25H5.75a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5z"></path></svg>
        <h1 className="cache-memory-header__title">cache-memory</h1>
        <p className="cache-memory-header__subtitle">A cache memory implementation in TypeScript.</p>
      </header>

        <section className="cache-memory-form">
          <input className="cache-memory-input" type="text" placeholder="Write here"/>
          <section className="cache-memory-button-area">
            <span onClick={() => {}} className="cache-memory-button">Read</span>
            <span onClick={() => {}} className="cache-memory-button">Write</span>
            <span onClick={() => {}} className="cache-memory-button">List</span>
          </section>
        </section>

        <section className="cache-memory-option-result">
          <p className="cache-memory-option-return"></p>
        </section>

        <section className="cache-memory-memory-data">
          <div className="cache-memory-cache-area">
            <p>Cache</p>
          </div>
          <div className="cache-memory-memory-area">
            <p>Memory</p>
          </div>
          <div className="cache-memory-hit-area">
            <p>Hit</p>
          </div>
        </section>
    </main>
  );
}

export default CacheMemory;
