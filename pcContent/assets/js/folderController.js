function randn_bm(min, max, skew) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0)
    num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
  else {
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
  }
  return num;
}

document.querySelector("#folder_close").addEventListener("click", async () => {
  await toggleEl(document.querySelector(".folder_content"));
  glitchArray.map((glitch) => glitch.endExecution());
});

let filesArray = ["id", "past", "off", "meetings"];

let documentList = document.querySelectorAll(".document");
let iframe = document.querySelector("#doc_src");
let wordsNumber = document.querySelector("#doc_word_field");
let cpuUsage = document.querySelector("#doc_cpu_usage");
let title = document.querySelector("#doc_title");
let textGlitchArray = [];
let oldDocFocus;
let iframeDocument;

iframe.onload = () => {
  iframeDocument = iframe.contentWindow.document;
  wordsNumber.innerText = iframeDocument
    .querySelector("main")
    .innerText.trim()
    .split(/\s+/).length;

  cpuUsage.innerText = Math.floor(randn_bm(0, 100, 1));
  toggleEl(document.querySelector(".text_content"));
};

let folderClickNum = 0;
documentList.forEach((docEl) => {
  docEl.addEventListener("click", async () => {
    if (
      document.activeElement === docEl &&
      folderClickNum == 0 &&
      !hasTouchScreen
    ) {
      folderClickNum++;
      oldDocFocus = document.activeElement;
      return;
    }

    if (oldDocFocus !== docEl && !hasTouchScreen) {
      folderClickNum = 0;
      return;
    }

    folderClickNum = 0;
    let openFile = docEl.innerText.replace(".txt", "").toLowerCase();

    if (filesArray.includes(openFile)) {
      iframe.src = `assets/content/${openFile}.html`;
      title.innerText = docEl.innerText;
    } else {
      iframe.src = `assets/content/corvus.html`;
      title.innerText = "CORVUS.txt";
    }
  });
});

document.querySelector("#doc_close").addEventListener("click", async () => {
  await toggleEl(document.querySelector(".text_content"));
});
