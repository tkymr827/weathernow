<template>
  <div class="main" :style="{'background': 'url('+ img + ')center /cover no-repeat'}">
    <h1>{{hour}}:{{min}}:{{sec}}</h1>
    <div class="contents">
        <div class="place">{{place}}</div>
        <div class="tenki">{{tenki}}</div>
        <div class="temperature">{{temperature}}℃</div>
        <div class="humidity">{{humidity}}%</div>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
//   props: {
//     hour: Number,
//     min: Number,
//     sec: Number
//   },
  //   props: ['hour', 'min', 'sec'],

  data () {
    return {
      place: '',
      tenki: '',
      temperature: '',
      humidity: '',
      img: '',
      hour: '',
      min: '',
      sec: ''
    }
  },
  created () {
    setInterval(() => {
      let time = new Date()
      this.hour = time.getHours()
      this.min = time.getMinutes()
      this.sec = time.getSeconds()

      if (this.hour < 10) {
        this.hour = '0' + this.hour
      }
      if (this.min < 10) {
        this.min = '0' + this.min
      }

      if (this.sec < 10) {
        this.sec = '0' + this.sec
      }
    }, 1000)
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&APPID=367ebe7f5381fe5d715ffedc8e4a8262')
      .then(response => {
        this.tenki = response.data.weather[0].main
        this.humidity = response.data.main.humidity
        this.place = response.data.name
        this.temperature = Math.round(response.data.main.temp) - 273

        switch (this.tenki) {
          case 'Clear':
            this.img = require('../assets/img/sunny.jpg')
            break
          case 'Clouds':
            // this.img = require('./assets/img/cloudy.jpg')
            this.img = require('../assets/img/cloudy.jpg')
            break
          case 'Rain':
            this.img = require('../assets/img/rainy.jpg')
            break
          case 'Mist':
            this.img = require('../assets/img/mist.jpg')
            break
          case 'Snow':
            this.img = require('../assets/img/snowy.jpg')
            break
          case 'Thunderstorm':
            this.img = require('../assets/img/thunderstorm.jpg')
            break
        }
      })
  }

}

</script>

<style lang="scss">
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
html{
    font-size:62.5%;
    font-family: 'Courier Prime', monospace;

}
.main {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height:90vh;
    font-size:6rem;
    h1{
        margin-top:8rem;
    }
    .place,.tenki,.temperature{
        margin:2rem auto;
        font-size:9rem;
        -webkit-text-stroke: #000 thin;
        color:#fff;
    }
    .router-link-active{
        height:20rem;
    }
}
</style>
