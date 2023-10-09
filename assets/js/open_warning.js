let folderEl = document.getElementById("folderEl");
let warningEl = document.getElementById("warning_modal");
let clickNum = 0;

folderEl.addEventListener("click", () => {
  if (document.activeElement === folderEl && clickNum == 0) {
    clickNum++;
    return;
  }
  clickNum = 0;
  warningEl.style.display = "block";

  let glitchArray = initAllGlitch(".corrupt", ["NO", "YES"]);

  for (let i = 0; i < glitchArray.length; i++) {
    let glitch = glitchArray[i];
    glitch.glitch();
  }
});
