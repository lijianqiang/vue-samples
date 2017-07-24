<template>
  <div>
    <h1>Placer</h1>
    <h2>Placer Page</h2>
    <div v-for="item in placers">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    placers: 'placers'
  }),
  methods: {
  },
  created () {
    console.log('created');
    this.$store.dispatch('vListByCondition')
  },
  mounted () {
    console.log('mounted');
  }
}
</script>
