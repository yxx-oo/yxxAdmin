<template>
  <div class="order-create">
    <OrderCreateContent />
  </div>
</template>
<script>
import OrderCreateContent from './components/OrderCreateContent'
export default {
  name: 'OrderCreate',
  components: { OrderCreateContent },
  data() {
    return {

    }
  },
  computed: {
  },
  created() {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.order-create {
  /* 50= navbar  50  */
  padding: 20px;
  height: 100%;
}
</style>
