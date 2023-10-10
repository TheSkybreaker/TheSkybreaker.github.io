let folderEl = document.getElementById("folderEl");
let warningEl = document.getElementById("warning_modal");
let clickNum = 0;
let glitchArray = [];

const toggleEl = async (el) => {
  document.querySelectorAll("*").forEach((el) => (el.style.cursor = "wait"));
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  el.classList.toggle("active");
  document.querySelectorAll("*").forEach((el) => el.removeAttribute("style"));
};

folderEl.addEventListener("click", async () => {
  if (document.activeElement === folderEl && clickNum == 0) {
    clickNum++;
    return;
  }
  clickNum = 0;

  await toggleEl(warningEl);
  glitchArray = initAllGlitch(".corrupt", ["NO", "YES"]);

  for (let i = 0; i < glitchArray.length; i++) {
    let glitch = glitchArray[i];
    glitch.glitch();
  }
});

let warningBTNs = document.querySelectorAll("button.corrupt");

warningBTNs.forEach((el) => {
  el.addEventListener("click", async () => {
    warningBTNs.forEach((btn)=>btn.disabled = true)
    toggleEl(warningEl);
    await toggleEl(document.querySelector(".folder_content"));
    glitchArray.map((glitch) => glitch.endExecution());
    warningBTNs.forEach((btn) => (btn.disabled = false));
  });
});
