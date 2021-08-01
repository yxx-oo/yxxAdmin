<template>
  <div class="order-create-content">
    <div class="basic-information">
      <div>基本信息卡</div>
      <el-form ref="form" :model="form" label-width="auto">
        <div class="company-name-item">
          <el-form-item style="width: 48%;" label="申请公司名称">
            <el-input v-model="form.companyName"></el-input>
          </el-form-item>
          <el-form-item style="width: 48%;" label="申请公司英文名称">
            <el-input v-model="form.companyNameEN"></el-input>
          </el-form-item>
        </div>
        <div class="company-address-item">
          <el-form-item style="width: 48%;" label="申请公司地址">
            <el-input v-model="form.companyAddress"></el-input>
          </el-form-item>
          <el-form-item style="width: 48%;" label="申请公司英文地址">
            <el-input v-model="form.companyAddressEN"></el-input>
          </el-form-item>
        </div>
        <div class="sample-name-item">
          <el-form-item style="width: 48%;" label="样品名称">
            <el-input v-model="form.sampleName"></el-input>
          </el-form-item>
          <el-form-item style="width: 48%;" label="样品英文名称">
            <el-input v-model="form.sampleNameEN"></el-input>
          </el-form-item>
        </div>
        <div class="company-msg-item">
          <el-form-item style="width: 48%;" label="联系人">
            <el-input v-model="form.contact"></el-input>
          </el-form-item>
          <el-form-item style="width: 48%;" label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </div>
        <div class="company-msg-item">
          <el-form-item style="width: 48%;" label="电话/手机">
            <el-input v-model="form.phoneNum"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="project-information">
      <div>项目信息卡</div>
      <div>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="order-information">
      <div>订单信息卡</div>
      <el-form ref="form" :model="form" label-width="auto">
        <div class="order-time-item">
          <el-form-item label="订单时间">
            <el-col :span="8">
              <el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="8">
              <el-date-picker type="date" placeholder="选择结束日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </div>
        <el-form-item label="样品收取">
          <el-radio-group v-model="form.sampleStatus">
            <el-radio label="已收样品"></el-radio>
            <el-radio label="未收样品"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="收款情况">
          <el-radio-group v-model="form.moneyStatus">
            <el-radio label="已收款"></el-radio>
            <el-radio label="未收款"></el-radio>
            <el-radio label="有尾款"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.moneyStatus === '已收款'" class="amount-item">
          <el-form-item style="width: 48%;" label="全款金额">
            <el-input v-model="form.companyAddress"></el-input>
          </el-form-item>
        </div>
        <div v-if="form.moneyStatus === '有尾款'" class="amount-item">
          <el-form-item style="width: 48%;" label="首款金额">
            <el-input v-model="form.companyAddress"></el-input>
          </el-form-item>
          <el-form-item style="width: 48%;" label="尾款金额">
            <el-input v-model="form.companyAddress"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="是否返样">
          <el-radio-group v-model="form.isSampleBack">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="form.isSampleBack === '是'" label="返样地址">
          <el-input v-model="form.sampleBackAddress"></el-input>
        </el-form-item>
        <el-form-item label="是否开具发票">
          <el-radio-group v-model="form.isinvoice">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="form.isinvoice === '是'" label="发票抬头公司">
          <el-input v-model="form.sampleBackAddress"></el-input>
        </el-form-item>
        <el-form-item v-if="form.isinvoice === '是'" label="发票邮寄地址">
          <el-input v-model="form.sampleBackAddress"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </div>
</template>

<script>

export default {
  name: 'OrderCreateContent',
  props: {
  },
  data() {
    return {
      form: {
        companyName: '',
        companyNameEN: '',
        companyAddress: '',
        companyAddressEN: '',
        contact: '',
        phoneNum: '',
        email: '',
        sampleStatus: '',
        moneyStatus: '',
        isSampleBack: '',
        invoice: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [{
        value: '选项1',
        label: '化学模板'
      }, {
        value: '选项2',
        label: '模板2'
      }, {
        value: '选项3',
        label: '模板3'
      }, {
        value: '选项4',
        label: '模板4'
      }, {
        value: '选项5',
        label: '模板5'
      }],
      value: '选项1'
    }
  },
  created() {
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    handleDetails() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .order-create-content {
    margin-top: 20px;
    box-shadow: 0 0 15px 0 rgba(55,63,82,0.19);
    border-radius: 10px;
    padding: 20px;
    height: 100%;
    .basic-information {
      width: 80%;
      .company-name-item {
        display: flex;
        justify-content: space-between;
      }
      .company-address-item {
        display: flex;
        justify-content: space-between;
      }
      .sample-name-item {
        display: flex;
        justify-content: space-between;
      }
      .company-msg-item {
        display: flex;
        justify-content: space-between;
      }
    }
    .order-information {
      .order-time-item {
        width: 40%;
      }
      .amount-item {
        display: flex;
        width: 30%;
        justify-content: space-between;
      }
    }
  }
</style>
