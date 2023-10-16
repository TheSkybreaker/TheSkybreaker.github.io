let textGlitchArray = [];

window.onload = () => {
  textGlitchArray = initAllGlitch("main");
  textGlitchArray.map((e) => e.glitch());
};

window.close = () => {
  if (textGlitchArray.length) {
    textGlitchArray.map((glitch) => glitch.endExecution());
    textGlitchArray = [];
  }
};
