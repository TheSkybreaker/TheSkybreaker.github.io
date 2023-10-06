let folderEl = document.getElementById("folderEl");
let warningEl = document.getElementById('warning_modal')
let clickNum = 0;

folderEl.addEventListener("click", () => {
  if (document.activeElement === folderEl && clickNum == 0) {
    clickNum++;
    return;
  }
  clickNum = 0;
  warningEl.style.display = 'block'

  initAllGlitch(".corrupt");
  update();
});
