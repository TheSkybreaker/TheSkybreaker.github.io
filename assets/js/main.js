const centerDiv = document.querySelector("div#centerDiv");
const topDiv = document.querySelector("div#topDiv");
const bottomDiv = document.querySelector("div#bottomDiv");
const mainIframe = document.querySelector("#mainIframe");
localStorage.setItem("completed", false);

const timer = setInterval(() => {
  if (localStorage.getItem("completed") == "true") {
    localStorage.setItem("completed", false);
    changeView();
  }
}, 100);

mainIframe.onload = () => {
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
    });

    centerDiv.style.display = "none";
  };
};

const changeView = () => {
  clearInterval(timer);
  bottomDiv.animate([{ height: "50%", opacity: 1 }], {
    duration: 400,
    fill: "forwards",
  });

  topDiv.animate([{ height: "50%", opacity: 1 }], {
    duration: 400,
    fill: "forwards",
  }).onfinish = () => {
    centerDiv.style.display = "block";
    centerDiv.animate([{ width: "0%", left: "50%" }], {
      duration: 400,
      fill: "forwards",
    }).onfinish = () => {
      mainIframe.src = "pcContent/";
    };
  };
};
