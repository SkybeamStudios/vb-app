const { app, BrowserWindow } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    autoHideMenuBar: true,
    // Window + taskbar icon (Linux/Windows; macOS uses the bundled icns).
    icon: path.join(__dirname, "..", "build", "icon.png"),
  });
  win.loadFile(path.join(__dirname, "app", "index.html"));
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());
