<template>
  <div>
    <!-- <h3>当前最新的count值为：{{$store.state.count}}</h3> -->
    <h3> {{$store.getters.showNumber}} </h3>
    <a-button @click="btnHandle1">+1</a-button>
    <a-button @click="btnHandle2">Async +1</a-button>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      a: ''
    }
  },
  methods: {
    btnHandle1 () {
      this.$store.commit('add')
    },
    // 异步自增一
    btnHandle2 () {
      this.$store.dispatch('addAsync')
    }
  }

}
</script>
<style lang="scss" scoped></style>
