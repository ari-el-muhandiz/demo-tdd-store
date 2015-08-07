'use strict';

global.CONFIG = require('./environment')[process.env.ENV || 'development'];

global.MODULES = {};
MODULES.express = require('express');
MODULES.mongoose = require('./mongo');
