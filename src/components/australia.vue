<template>
  <div class="tokyo" :style="{'background': 'url('+ img + ')center /cover no-repeat'}">
    <h1>Weather now</h1>
    <div class="contents">
        <div class="place">{{place}}</div>
        <div class="tenki">{{tenki}}</div>
        <div class="temperature">{{temperature}}℃</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      place: '',
      tenki: '',
      temperature: '',
      img: ''
    }
  },
  created () {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=commonwealth of australia,au&APPID=367ebe7f5381fe5d715ffedc8e4a8262')
      .then(response => {
        this.tenki = response.data.weather[0].main
        this.place = response.data.name
        this.temperature = Math.round(response.data.main.temp) - 273

        switch (this.tenki) {
          case 'Clear':
            this.img = require('../assets/imgs/sunny.jpg')
            break
          case 'Clouds':
            // this.img = require('./assets/imgs/cloudy.jpg')
            this.img = require('../assets/imgs/cloudy.jpg')
            break
          case 'Rain':
            this.img = require('../assets/imgs/rainy.jpg')
            break
          case 'Mist':
            this.img = require('../assets/imgs/mist.jpg')
            break
          case 'Snow':
            this.img = require('../assets/imgs/snowy.jpg')
            break
          case 'Thunderstorm':
            this.img = require('../assets/imgs/thunderstorm.jpg')
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
.tokyo {
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
}
</style>
