<template>
  <div class="order-manager-content">
    <el-table
      :data="tableData"
      stripe
      size="mini"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="序号"
        min-width="3%"
      />
      <el-table-column
        prop="reprotNum"
        label="报告编号"
        min-width="6%"
      />
      <el-table-column
        prop="companyName"
        label="公司名称"
        min-width="20%"
      />
      <el-table-column
        prop="reprotType"
        label="报告类型"
        min-width="5%"
      />
      <el-table-column
        prop="reportDate"
        label="创建日期"
        min-width="5%"
      />
      <el-table-column
        prop="orderAmount"
        label="订单金额"
        min-width="5%"
      />
      <el-table-column
        prop="isPay"
        label="是否付款"
        min-width="5%"
      >
        <template slot-scope="scope">
          <p>{{ scope.row.isPay === '0'?'未付款':'已付款' }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="reportDate"
        label="出报告截止日期"
        min-width="6%"
      />
      <el-table-column
        prop="reprotPhase"
        label="报告阶段"
        min-width="10%"
      />
      <el-table-column
        label="操作"
        min-width="10%"
      >
        <el-button
          size="mini"
          @click="handleDetails(scope.$index, scope.row)"
        >查看详情</el-button>
      </el-table-column>
      <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ 'dddd' }}</span>
          </el-form-item>
        </el-form>
        <el-form label-position="right" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ 'dddd' }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import openWindow from '@/utils/open-window'
import { orderManagerList } from '@/api/orderManager'

export default {
  name: 'OrderManagerContent',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  },
  created() {
    // return new Promise((resolve, reject) => {
      orderManagerList({}).then(response => {
        debugger
        }).catch(error => {
        // reject(error)
      })
    // })
    // const req = orderManagerList();
    // console.log(req);
    debugger;
  },
  methods: {
    handleDetails() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .order-manager-content {
    margin-top: 20px;
    box-shadow: 0 0 15px 0 rgba(55,63,82,0.19);
    border-radius: 10px;
    padding: 20px;
    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
</style>
