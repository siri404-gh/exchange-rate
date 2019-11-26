/* eslint-disable no-magic-numbers */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/checksum', (req, res) => {
  res.send("3817iH3IQV2/tYwCJ7Mwn2/Zkw+mpmivoXGuxnFVWyYxtVHCjOQvjjcfD1dte7JhD0xMz1CCH/BAaoTqdv4QlHLTfJlzTs/OI2BH4wd4D8g=");
});

app.post('/paymentprocess', (req, res) => {
  if(req.body.STATUS && req.body.STATUS === 'TXN_SUCCESS') {
    return res.redirect(302, '/?payment=true');
  }
  return res.redirect(302, '/?payment=false');
});

app.get('/data', (req, res) => {
  const { folder, subfolder, post } = req.query;
  var file = fs.readFileSync(`./posts/${folder}/${subfolder}/${post}.md`, 'utf8');
  res.set('Content-type', 'text/plain');
  // eslint-disable-next-line global-require
  res.send(file.toString());
});

app.get('/rates', (req, res) => {
  res.send({
    usd: 1,
    gbp: 0.79,
    eur: 0.91,
    inr: [ 70, 71, 72, 73, 74, 75 ][Math.floor(Math.random() * 5) + 1],
  });
});

app.get('/pockets', (req, res) => {
  res.send({
    usd: 100,
    gbp: 100,
    eur: 100,
    inr: 100,
  });
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);