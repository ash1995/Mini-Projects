/**
 * Created by gohan95 on 6/21/2017.
 */

const weather = require('./weather.js');

const query = process.argv.slice(2).join('_').replace(' ', '_');

weather.get(query);