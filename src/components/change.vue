<template lang="html">
  <mavon-editor class="set" v-model="value" @change="getContent"></mavon-editor>
</template>

<script>
export default {
  data () {

  },
  methods: {
    getContent (value,render) {
      this.content = render
    },
  }
}
</script>

<style lang="css">
</style>
