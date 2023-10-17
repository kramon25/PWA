const btnInstall = document.getElementById("buttonInstall");
let installPrompt = null;
// Logic for installing the PWA
//  Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  btnInstall.style.visibility = "visible";
  textHeader.textContent = "Click the button to install!";
});

//  Implement a click event handler on the `butInstall` element
btnInstall.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  installPrompt = null;
  btnInstall.setAttribute("disabled", true);
  btnInstall.textContent = "Installed!";
});

//  Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  textHeader.textContent = "Successfully installed!";
  console.log("👍", "appinstalled", event);
});
