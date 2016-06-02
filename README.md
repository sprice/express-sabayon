# Express Sabayon

Express middleware for [Sabayon](https://github.com/dmathieu/sabayon)

## Description

Easily add automated SSL to your Express apps on Heroku. This middeware
adds the required validation route required by Sabayon.

## Usage

```
var sabayon = require('express-sabayon');
app.use(sabayon());
```
