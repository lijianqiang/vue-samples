<template>
  <div>
    <h1>District</h1>
    <h2>District Page</h2>
    <div v-for="item in provinces">
      <p>{{item.provinceName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      provinces: []
    }
  },
  methods: {
    listProvince() {
      console.log('listProvince');
      let that = this
      this.$http.get('/district/provinces')
      .then(function (response) {
        console.log(response);
        that.provinces = response.data.data.rows
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  created () {
    console.log('created');
  },
  mounted () {
    console.log('mounted');
    this.listProvince();
  }
}
</script>
