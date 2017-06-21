/**
 * Created by gohan95 on 6/21/2017.
 */

const http = require('http');
const api = require('./api.json');

function printTemperature(tempK, name) {
    console.log(`The current temperature at ${name} is ${Math.round(9/5 * (tempK - 273) + 32)} Fahrenheit`);
}

module.exports.get = function getWeather(query) {
    if (/^\d+$/.test(query)) {
        const queryString = `http://api.openweathermap.org/data/2.5/weather?zip=${query}&APPID=${api.key}`;
        getWeatherData(queryString);
    } else {
        const queryString = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${api.key}`;
        getWeatherData(queryString);
    }
}

function getWeatherData(queryString) {
    const request = http.get(queryString, res => {
        const statusCode = res.statusCode;
        const contentType = res.headers['content-type'];

        let error;
        if (!/^application\/json/.test(contentType)) {
            error = new Error(`Invalid content-type.
                         Expected application/json but recieved ${contentType}`);
        }

        if (error) {
            console.error(error.message);
            res.resume();

            return;
        }

        let body = '';
        res.on('data', data => {
            body += data;
        });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(body);

                if (parsedData.cod === 200) {
                    printTemperature(parsedData.main.temp, parsedData.name);
                } else {
                    console.error(parsedData.message);
                }
            } catch(e) {
                console.log(body);
                console.error(`Parse Error: ${e.message}`);
            }
        }).on('error', e => {
            console.error(`Got error: ${e.message}`);
        });
    });
}