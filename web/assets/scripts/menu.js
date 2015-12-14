var remote = require('remote');
var ipc = require('ipc');
var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([
  {
    label: 'proto-k',
    submenu: [
      {
        label: "Sobre o proto-k",
        click: function() {
          ipc.send('show-about');
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Tela cheia',
        click: function() {
          ipc.sendSync('synchronous-message', 'fullscreen');
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Minimizar',
        click: function() {
          ipc.sendSync('synchronous-message', 'minimize');
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Fechar proto-k',
        click: function() {
          ipc.sendSync('synchronous-message', 'quit');
        },
      },
    ],
  },
  {
    label: 'Ajuda',
    submenu: [
      {
        label: 'Guia de Utilização',
        click: function() {
          ipc.send('show-user-guide');
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Perguntas e Sugestões',
        click: function() {
          ipc.send('show-user-feedback');
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Sobre a Nuvem K',
        click: function() {
          ipc.send('show-about-nuvemk');
        },
      },
    ],
  }
]);

Menu.setApplicationMenu(menu);
