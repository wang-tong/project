/*
 * @Author: WangTong
 * @Date: 2020-10-21 12:11:21
 * @Last Modified by:   WangTong
 * @Last Modified time: 2020-10-21 12:11:21
 */
<template>
  <div>
    <my-addition></my-addition>
    <my-subtraction></my-subtraction>
  </div>
</template>
<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'
export default {
  name: '',
  data () {
    return { a: '' }
  },
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>
<style lang="scss" scoped></style>
