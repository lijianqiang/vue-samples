<template>
  <div>
    <h1>Placer</h1>
    <h2>Placer Page</h2>
    <div>
      <p>总 {{total}} 条， 当前 {{size}} 条, 第 {{page}} 页</p>
    </div>
    <div v-for="item in placers">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    placers: 'placers',
    total: 'total',
    page: 'page',
    size: 'size'
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
