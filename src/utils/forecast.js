const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/970285c5e79ed8a081ea91c6c5edd0df/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services.')
        } else if (body.error) {
            callback('Invalid input. Please try again.')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees fahrenheit out. The highest and lowest temperatures today will be around ' + body.daily.data[0].temperatureHigh + ' and ' + body.daily.data[0].temperatureLow + ' degrees fahrenheit. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast;