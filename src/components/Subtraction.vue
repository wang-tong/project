<template>
  <div>
    <!-- <h3>当前最新的count值为：{{count}}</h3> -->
    <h3> {{showNumber}} </h3>

    <button @click="btnHandle1">-1</button>
    <button @click="btnHandle2">Async -1</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['sub']),
    ...mapActions(['subAsync']),

    btnHandle1 () {
      this.sub()
    },
    btnHandle2 () {
      this.subAsync()
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNumber'])

  }
}
</script>
<style lang="scss" scoped></style>
