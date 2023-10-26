let textGlitchArray = [];

window.onload = () => {
  textGlitchArray = initAllGlitch("main span");
  textGlitchArray.map((e) => e.glitch());
};
