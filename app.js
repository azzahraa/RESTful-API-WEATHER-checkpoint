const request = require('request')
const axios = require('axios')
 require('dotenv').config()

const adress = process.argv[2]

const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=d2a46975292433f9d3c1ab7856fd3ef0`;


axios.get(url)
.then((response) => {
    console.log(response.data)
    //  console.log(`it is currently ${data.main.temp} outside`)
})
.catch(err=>console.log(err))