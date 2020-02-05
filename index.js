const express = require('express')
const consign = require('consign')

const app = express();

consign()
    .include("models/index.js")
    .then("config/middlewares.js")
    .then("routes")
    .then("controls")
    .then("config/boot.js")
    .into(app)