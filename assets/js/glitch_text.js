const chars = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

var Glitch = function (
  selector,
  index,
  numberOfGlitchedLetter,
  timeGlitch,
  timePerLetter,
  timeBetweenGlitch,
  optionsArray = false
) {
  this.selector = selector;
  this.index = index;
  this.numberOfGlitchedLetter = numberOfGlitchedLetter;
  this.innerText;
  this.charArray = [];
  this.charIndex = [];
  this.timeGlitch = timeGlitch;
  this.timeBetweenGlitch = timeBetweenGlitch;
  this.timePerLetter = timePerLetter;
  this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
  this.count = 0;
  this.execute = true;
  this.optionsArray = optionsArray;
};

Glitch.prototype.init = function () {
  this.innerText = this.selector.innerText;
  this.charArray = this.innerText.split("");
  if (
    this.numberOfGlitchedLetter == undefined ||
    this.numberOfGlitchedLetter > this.innerText.length
  ) {
    this.numberOfGlitchedLetter = this.innerText.length;
  }
  this.defineCharIndexToRandomize();
};

Glitch.prototype.defineCharIndexToRandomize = function () {
  this.charIndex = [];
  for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
    let randCharIndex = Math.floor(Math.random() * this.charArray.length);
    this.charIndex.push(randCharIndex);
  }
};

Glitch.prototype.randomize = function () {
  //copy the char array
  let randomString = Array.from(this.charArray);

  //randomize char
  for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
    let randIndex = Math.floor(Math.random() * chars.length);
    let randCharIndex = this.charIndex[i];
    if (randomString[randCharIndex] !== " ") {
      randomString[randCharIndex] = chars[randIndex];
    }
  }
  this.selector.innerText = randomString.join("");
};

Glitch.prototype.update = async function () {
  if (this.count >= this.maxCount - 1) {
    // TODO rifare
    if (this.optionsArray) {
      this.selector.innerText =
        Math.random() < 0.5 ? this.optionsArray[0] : this.optionsArray[1];
    } else {
      this.selector.innerText = this.innerText;
    }

    this.defineCharIndexToRandomize();
    let ctx = this;
    await new Promise((resolve) => {
      setTimeout(() => resolve((ctx.count = 0)), this.timeBetweenGlitch);
    });
  } else {
    this.randomize();
    this.count++;
  }
};

Glitch.prototype.glitch = async function () {
  let ctx = this;

  while (this.execute) {
    await ctx.update();
    await new Promise((resolve) =>
      setTimeout(() => resolve(), this.timePerLetter)
    );
  }
};

Glitch.prototype.endExecution = function () {
  this.execute = false;
};

function initAllGlitch(selector, optionsArray = false) {
  let glitchArray = [];
  let arrayElements;

  arrayElements = document.querySelectorAll(selector);
  for (let i = 0; i < arrayElements.length; i++) {
    let selector = arrayElements[i];
    let randLetterNumber = 2 + Math.floor(Math.random() * 8);
    let randGlitchPauseTime = 500 + Math.floor(Math.random() * 2500);
    let glitch = new Glitch(
      selector,
      i,
      randLetterNumber,
      600,
      65,
      randGlitchPauseTime,
      optionsArray
    );
    glitch.init();
    glitchArray.push(glitch);
  }

  return glitchArray;
}
