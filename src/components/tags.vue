<template lang="html">
  <div>{{result}}</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      result: ''
    }
  },
  methods: {
    init () {
      axios.get('/admin').then((response)=>{
        this.result = response.data
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="css">
</style>
