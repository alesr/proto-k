var mainMenu = (function() {
    var remote = require('remote');
    var Menu = remote.require('menu');

    var menu = Menu.buildFromTemplate([
      {
        label: 'proto-k',
        submenu: [
          {
            label: 'About',
            click: function() {
              alert("open about page or popup");
            }
          }
        ],
        label: 'Help',
        submenu: [
          {
            label: 'Guia do Utilizador',
            click: function() {
              alert("open guide page");
            }
          }
        ]
      }
    ]);
    Menu.setApplicationMenu(menu);
})();
