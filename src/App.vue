<template>
  <div id="app">
      <nav>
          <ul>
          <li><router-link to="/tokyo">TOKYO</router-link></li>
          <li><router-link to="/hokkaido"> HOKKAIDO</router-link></li>
          <li><router-link to="/newyork">NEW YORK</router-link></li>
          <li><router-link to="/riodejaneiro">RIO DE JANEIRO</router-link></li>
          </ul>
        <router-view></router-view>
        <!-- <h1>{{newyorktime}}</h1> -->
      </nav>
      <!-- <tokyo/>
      <newyork/>
      <australia/>
      <mexico/>
      <test/> -->

      <!-- <div class="timer">{{hour}}:{{min}}:{{sec}}</div> -->
  </div>
</template>

<script>
// import tokyo from './components/tokyo.vue'
// import newyork from './components/newyork.vue'
// // import australia from './components/australia.vue'
// import riodejaneiro from './components/riodejaneiro.vue'
// import hokkaido from './components/hokkaido.vue'

export default {
//   components: {
//     tokyo,
//     newyork,
//     // australia,
//     riodejaneiro,
//     hokkaido
//   },
  data () {
    return {
      hour: 0,
      min: 0,
      sec: 0,
      newyorktime: 0
    }
  },
  created () {
    setInterval(() => {
      let time = new Date()
      this.hour = time.getHours()
      this.min = time.getMinutes()
      this.sec = time.getSeconds()

      this.newyorktime = new Date()

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
  }
}

</script>
<style lang="scss">
#app{
    .timer{
        font-size:10rem;
    }
    h1{
        color:#bd8888;
        -webkit-text-stroke: #000 thin;
        font-size:8rem;
        margin-top:-2rem;
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
            @media screen and (max-width:1170px){
                height:20vh;
                flex-wrap: wrap;
                width:auto;
            }
            // @media screen and (max-width:480px){
            //     height:20vh;
            //     flex-wrap: wrap;
            //     width:auto;
            // }
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
        .place,.tenki,.temperature,.humidity{
            margin:2rem auto;
            font-size:8.5rem;
            -webkit-text-stroke: #000 thin;
            color:#fff;
            @media screen and (max-width:480px){
                font-size:5rem;
            }
        }

    }

</style>
