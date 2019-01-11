const express = require('express');
var app = express();

const PORT = 8012;

app.get('/', function(req, res, next) {
  const fileName = 'home.html';
  options = {
    root: `${__dirname}/views/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile(fileName, options, err => {
    if (err) {
      console.log(err);
      next();
    } else {
      console.log(`Sent: ${fileName}`);
    }
  });
});

app.get('/actor', function(req, res, next) {
  const fileName = 'actor.html';
  options = {
    root: `${__dirname}/views/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile(fileName, options, err => {
    if (err) {
      console.log(err);
      next();
    } else {
      console.log(`Sent: ${fileName}`);
    }
  });
});

app.get('/dice', function(req, res, next) {
  const fileName = 'dice.html';
  options = {
    root: `${__dirname}/views/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile(fileName, options, err => {
    if (err) {
      console.log(err);
      next();
    } else {
      console.log(`Sent: ${fileName}`);
    }
  });
});

app.get('/jQuery', function(req, res, next) {
  const fileName = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
  console.log('jQuery: ready');
  res.redirect(fileName);
});

app.get('/util', function(req, res, next) {
  const fileName = 'util.js';
  options = {
    root: `${__dirname}/scripts/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile(fileName, options, err => {
    if (err) {
      console.log(err);
      next();
    } else {
      console.log(`Sent: ${fileName}`);
    }
  });
});

app.get('/kelkubli', function(req, res, next) {

  const fileName = 'dice.js';
  options = {
    root: `${__dirname}/scripts/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      next();
    } else {
      console.log(`Sent: ${fileName}`);
    }
  });
});

app.get('/slide', function(req, res, next) {

  const fileName = 'slidePuzzle.js';
  options = {
    root: `${__dirname}/scripts/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      next();
    } else {
      console.log(`Sent: ${fileName}`);
    }
  });
});

app.listen(PORT);

console.log(`Server running on http://localhost:${PORT}`);
