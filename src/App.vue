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
      })
  }

}

</script>
<style lang="scss">
#app{
    h1{
    @media screen and (max-width:480px){
        font-size:6rem;
        margin-top:-10rem;
    }
    }
    nav{
        // display:flex;
        // flex-direction: column;
        ul{
            background:#000;
            display: flex;
            justify-content: space-around;
            list-style: none;
            height:10vh;
            @media screen and (max-width:480px){
                height:20vh;
                flex-wrap: wrap;
                width:auto;
            }
            li{
                }
                a{
                    text-decoration: none;
                    color:#fff;
                    font-size:4rem;
                    padding:3rem 4rem;
                    line-height:10vh;
                    @media screen and(max-width:480px){
                        font-size:2rem;
                        padding:2rem 4rem;
                    }
                }
                .router-link-active{
                    border-bottom:#fff .2rem solid;
                    padding-bottom:.4rem;
                }
            }
        }

    }

</style>
