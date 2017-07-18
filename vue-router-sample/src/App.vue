<template>
  <div id="app">
    <ul>
        <ol v-for="item in routes">
            {{item.path}}
        </ol>
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
            if (item.name === '404') {
                continue;
            }
            console.log(item);
            routes.push(item);
        }
        return {
            routes: routes
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
</style>
