let folderEl = document.getElementById("folderEl");
let warningEl = document.getElementById("warning_modal");
let clickNum = 0;
let glitchArray = [];
let hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
}

const toggleEl = async (el) => {
  document.querySelectorAll("*").forEach((el) => el.classList.add("wait"));
  if (!hasTouchScreen) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  }
  el.classList.toggle("active");
  document.querySelectorAll("*").forEach((el) => el.classList.remove("wait"));
};

folderEl.addEventListener("click", async () => {
  if (document.activeElement === folderEl && clickNum == 0 && !hasTouchScreen) {
    clickNum++;
    return;
  }
  clickNum = 0;

  glitchArray = initAllGlitch(".corrupt", ["NO", "YES"]);
  toggleEl(warningEl);

  for (let i = 0; i < glitchArray.length; i++) {
    let glitch = glitchArray[i];
    glitch.glitch();
  }
});

let warningBTNs = document.querySelectorAll("button.corrupt");

warningBTNs.forEach((el) => {
  el.addEventListener("click", async () => {
    warningBTNs.forEach((btn) => (btn.disabled = true));
    toggleEl(warningEl);
    await toggleEl(document.querySelector(".folder_content"));
    glitchArray.map((glitch) => glitch.endExecution());
    warningBTNs.forEach((btn) => (btn.disabled = false));

    glitchArray = initAllGlitch(".corrupt");
    glitchArray.map((e) => e.glitch());
  });
});
