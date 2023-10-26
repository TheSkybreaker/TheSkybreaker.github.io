window.onload = () => {
  const centerDiv = document.querySelector("div#centerDiv");
  const topDiv = document.querySelector("div#topDiv");
  const bottomDiv = document.querySelector("div#bottomDiv");

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
      });
    };
  };
};
