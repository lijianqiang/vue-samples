<template>
  <div id="app">
    <ul>
      <li v-for="item in routes">
        <a href="javascript:;" @click="dispatch(item.name)">{{item.name}}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data () {
      let all = this.$router.options.routes;
      let routes = [];
      for (let item of all) {
      if (item.name === 'index' || item.name === '404') {
        continue;
      }
      //console.log(item);
      routes.push(item);
    }
    return {
      routes: routes
    };
  },
  methods: {
    dispatch(name) {
      console.log('click:' + name);
      if ('index' === name) {
        this.$router.push('/');
        return;
      }
      this.$router.push(name);
    }
  },
  created () {
    console.log('created');
  },
  mounted () {
    console.log('mounted');
  },
  updated () {
    console.log('updated');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
