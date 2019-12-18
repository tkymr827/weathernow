<template>
  <div id="app">
      <nav>
          <ul>
          <li><router-link to="/tokyo">TOKYO</router-link></li>
          <li><router-link to="/newyork">NEW YORK</router-link></li>
          <li><router-link to="/mexico">MEXICO</router-link></li>
          <li><router-link to="/test"> HOKKAIDO</router-link></li>
          </ul>
        <router-view></router-view>
      </nav>
      <!-- <tokyo/>
      <newyork/>
      <australia/>
      <mexico/>
      <test/> -->
  </div>
</template>

<script>
import axios from 'axios'
// import tokyo from './components/tokyo.vue'
// import newyork from './components/newyork.vue'
// // import australia from './components/australia.vue'
// import mexico from './components/mexico.vue'
// import test from './components/test.vue'

export default {
//   components: {
//     tokyo,
//     newyork,
//     // australia,
//     mexico,
//     test
//   },
  data () {
    return {
      place: '',
      tenki: '',
      temperature: '',
      img: ''
    }
  },
  created () {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&APPID=367ebe7f5381fe5d715ffedc8e4a8262')
      .then(response => {
        this.tenki = response.data.weather[0].main
        this.place = response.data.name
        this.temperature = Math.round(response.data.main.temp) - 273

        switch (this.tenki) {
          case 'Clear':
            this.img = require('./assets/imgs/sunny.jpg')
            break
          case 'Clouds':
            this.img = require('./assets/imgs/cloudy.jpg')
            break
          case 'Rain':
            this.img = require('./assets/imgs/rainy.jpg')
            break
          case 'Mist':
            this.img = require('./assets/imgs/mist.jpg')
            break
          case 'Snow':
            this.img = require('./assets/imgs/snowy.jpg')
            break
          case 'Thunderstorm':
            this.img = require('./assets/imgs/thunderstorm.jpg')
            break
        }
      })
  }

}

</script>
<style lang="scss">
#app{
    nav{
        ul{
            background:#000;
            display: flex;
            // justify-content: center;
            list-style: none;
            height:10vh;
            li{
                }
                a{
                    text-decoration: none;
                    color:#fff;
                    font-size:4rem;
                    padding:3rem 4rem;
                    line-height:10vh;
                }
                .router-link-active{
                    border-bottom:#fff .2rem solid;
                    padding-bottom:.4rem;
                }
            }
        }

    }

</style>
