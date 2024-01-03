const centerDiv = document.querySelector("div#centerDiv");
const topDiv = document.querySelector("div#topDiv");
const bottomDiv = document.querySelector("div#bottomDiv");
const terminalText = document.querySelector("#content");
const cursorText = document.querySelector(".cursor_text");
const endText = document.querySelector("#second_cursor");
const errorText = document.querySelector("#error_text");
const skipBTN = document.querySelector("#skipBTN");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

Element.prototype.writeText = async function (content) {
  let contentArray = content.split("");
  elem = this;

  for (const element of contentArray) {
    elem.textContent = `${elem.textContent}${element}`;
    await wait(75);
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
        terminalText.style.opacity = 1;
        textDisplay();
      };
    };
  };
};

const textDisplay = async () => {
  await wait(500);
  await cursorText.writeText("login -u Run1c0rder -p\n");
  await wait(1000);
  cursorText.textContent += "root@000378:/home/user# password: ";
  await wait(1500);
  await cursorText.writeText("***********\n");
  await wait(2000);
  cursorText.textContent += "wrong credentials \n";
  await wait(1750);
  cursorText.textContent += "root@000378:/home/user# password: ";
  await wait(1750);
  await cursorText.writeText("****************\n");
  await wait(3000);
  cursorText.textContent += "login successful \n";
  await wait(1500);
  cursorText.textContent += "select operation: \n";
  await wait(1000);
  await cursorText.writeText("1. Enter Safe Mode\n");
  await cursorText.writeText("2. Access Terminal\n");
  await cursorText.writeText("3. Shut Down\n");
  await wait(750);
  cursorText.textContent += "root@000378:/home/user/Run1c0rder# ";
  await wait(750);
  await cursorText.writeText("2\n");
  await wait(1000);
  await cursorText.writeText("Access Terminal selected\n");
  await cursorText.writeText("Loading memory...\n");
  await cursorText.writeText("Loading files...\n");
  await cursorText.writeText("Restoring GUI (this may take a while)...\n");
  await wait(5000);
  errorText.textContent += "!!ERROR!!\n";
  await wait(1750);
  await errorText.writeText(
    "!!FILE SYSTEM IS CORRUPTED!!\nBOOT ANYWAY? [y/N]\n"
  );
  await wait(2000);
  endText.textContent += "root@000378:/home/user/Run1c0rder# ";
  await wait(1500);
  endText.writeText("Y");
  localStorage.setItem("completed", true);
};

skipBTN.addEventListener("click", () => {
  localStorage.setItem("completed", true);
});
