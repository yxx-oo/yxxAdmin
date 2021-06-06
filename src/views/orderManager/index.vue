<template>
  <div class="order-manager">
    <OrderManagerHeader />
    <orderManagerContent :table-data="tableData" />
  </div>
</template>
<script>
import OrderManagerHeader from './components/OrderManagerHeader'
import OrderManagerContent from './components/OrderManagerContent'

export default {
  name: 'OrderManager',
  components: { OrderManagerContent, OrderManagerHeader },
  data() {
    return {
      tableData: [
          {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          reprotPhase: '检测中',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          reprotPhase: '检测中',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          reprotPhase: '检测中',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          reprotPhase: '检测中',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          reprotPhase: '已出报告',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: '有限公司有有限公司有有限公司有有限公司有有限公司有有限公司有',
          reprotNum: 'EBO20190910001',
          reprotPhase: '报告编写中',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }, {
          reportDate: '2016-05-02',
          companyName: 'xxxxxxxxxx有限公司',
          reprotNum: 'EBO20190910001',
          isPay: '0',
          orderAmount: '1000',
          reprotType: 'CE/ABC'
        }
      ]

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
.order-manager {
  /* 50= navbar  50  */
  padding: 20px;
}
</style>
