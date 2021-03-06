"use strict";

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let window = null;

app.once('ready', () => {
    // Create a new window
    window = new BrowserWindow({
       width: 500,
       height: 400,
       backgroundColor: '#111',
       show: false
   });

    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    window.once('ready-to-show', () => {
        window.show()
    });
});