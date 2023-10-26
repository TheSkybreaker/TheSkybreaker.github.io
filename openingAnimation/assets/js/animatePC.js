const centerDiv = document.querySelector("div#centerDiv");
const topDiv = document.querySelector("div#topDiv");
const bottomDiv = document.querySelector("div#bottomDiv");
const terminalText = document.querySelector("#content");
const cursorText = document.querySelector("#cursor_text");

Element.prototype.writeText = async function (content) {
  let contentArray = content.split("");
  elem = this;
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (const element of contentArray) {
    elem.textContent = `${elem.textContent}${element}`;
    await wait(100);
  }
};

window.onload = () => {
  centerDiv.animate([{ width: "100%", left: "0%" }], {
    duration: 700,
    fill: "forwards",
  }).onfinish = () => {
    bottomDiv.animate([{ height: "0%" }], {
      duration: 400,
      fill: "forwards",
    });

    topDiv.animate([{ height: "0%" }], {
      duration: 400,
      fill: "forwards",
    }).onfinish = () => {
      centerDiv.animate([{ opacity: 0 }], {
        duration: 200,
        fill: "forwards",
      }).onfinish = () => {
        terminalText.style.display = "block";
        textDisplay();
      };
    };
  };
};

const textDisplay = async () => {
  await cursorText.writeText("login -u Run1c0rder -p");
  cursorText.innerText += `\nroot@000378:/home/user/login# `;
  await cursorText.writeText("***********");
};
