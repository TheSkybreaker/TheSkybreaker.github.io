document
  .querySelector(".title-bar-controls > button")
  .addEventListener("click", async () => {
    await toggleEl(document.querySelector(".folder_content"));
    glitchArray.map((glitch) => glitch.endExecution());
  });

  let filesArray = ['id', 'past', 'corvus', 'off']
