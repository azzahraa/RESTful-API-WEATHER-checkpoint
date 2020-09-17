// const request = require('request')
const axios = require('axios')
 require('dotenv').config()

// const adress = process.argv[2]

const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=d2a46975292433f9d3c1ab7856fd3ef0`;
const icon = `http://openweathermap.org/img/wn/${Math.random}@2x.png`

const reqOne = axios.get(url);
const reqTwo = axios.get(icon);
axios.all([reqOne, reqTwo])
.then(axios.spread((reqOne,reqTwo) => {
    console.log(reqOne.data, reqTwo.data)
     console.log(`it is currently ${data.main.temp} outside`)
})
)
.catch(err=>console.log(err));