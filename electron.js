var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var ipc = require('ipc'); // To comunicate between the server and client*

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  //
  // if (process.platform != 'darwin') {
  //   app.quit();
  // }
  app.quit();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    fullscreen: true,
    kiosk: false,
  });

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/web/html/index.html');

  // Open the DevTools.
  mainWindow.openDevTools();

  // Hide default menu
  mainWindow.setMenu(null);


  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  app.on('activate', function() {
    mainWindow.restore();
  });

  // When enabled on menu, creates and displays about.html
  ipc.on('show-about', function() {
    // Creates about window.
    var aboutWindow = new BrowserWindow({
      width: 800,
      height: 600,
      fullscreen: false
    });

    // On window close.
    aboutWindow.on('close', function() {
      aboutWindow = null;
    });

    // Loading about.html.
    aboutWindow.loadUrl('file://' + __dirname + '/web/html/about.html');

    // Hide menu.
    aboutWindow.setMenu(null);
  });

  // When enabled on menu, creates and displays user-guide.html
  ipc.on('show-user-guide', function() {
    // Creates about window.
    var userGuideWindow = new BrowserWindow({
      width: 800,
      height: 600,
      fullscreen: false
    });

    // On window close.
    userGuideWindow.on('close', function() {
      userGuideWindow = null;
    });

    // Loading userGuide.html.
    userGuideWindow.loadUrl('file://' + __dirname + '/web/html/user-guide.html');

    // Hide menu.
    userGuideWindow.setMenu(null);
  });

  // When enabled on menu, creates and displays user-feedback.html
  ipc.on('show-user-feedback', function() {
    // Creates about window.
    var userFeedbackWindow = new BrowserWindow({
      width: 800,
      height: 600,
      fullscreen: false
    });

    // On window close.
    userFeedbackWindow.on('close', function() {
      userFeedbackWindow = null;
    });

    // Loading userFeedback.html.
    userFeedbackWindow.loadUrl('file://' + __dirname + '/web/html/user-feedback.html');

    // Hide menu.
    userFeedbackWindow.setMenu(null);
  });

  // When enabled on menu, creates and displays user-feedback.html
  ipc.on('show-about-nuvemk', function() {
    // Creates about window.
    var aboutNuvemkWindow = new BrowserWindow({
      width: 800,
      height: 600,
      fullscreen: false
    });

    // On window close.
    aboutNuvemkWindow.on('close', function() {
      aboutNuvemkWindow = null;
    });

    // Loading aboutNuvemk.html.
    aboutNuvemkWindow.loadUrl('file://' + __dirname + '/web/html/about-proto-k.html');

    // Hide menu.
    aboutNuvemkWindow.setMenu(null);
  });



  ipc.on('synchronous-message', function(event, arg) {
    if (arg == 'fullscreen') {
      mainWindow.setFullScreen(true);
    } else if (arg == 'minimize') {
      //mainWindow.minimize();
      mainWindow.hide();
    } else if (arg == 'quit') {
      app.quit();
    }
  });

});
