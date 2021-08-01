<template>
  <div class="order-manager-header">
    <el-cascader
      v-model="selectValue"
      :options="data"
      :show-all-levels="false"
      filterable
      :filter-method="dataFilter"
      :props="{ expandTrigger: 'hover', value: 'id', label: 'certificationProgram' }"
      placeholder="可输入关键字搜索项目"
    >
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="input2">
    </el-input>
    </el-cascader>
  </div>
</template>

<script>
// import openWindow from '@/utils/open-window'
import requedata from '../config.json'

export default {
  name: 'OrderManagerHeader',
  data() {
    return {
      selectValue: '',
      data: {},
      input2: ''
    }
  },
  
  created() {
    this.data = requedata;
    this.selectValue = '';
  },
  methods: {
    /* 搜索项目  cascader事件区域*/
    dataFilter(node, val) {
      //不区分大小写
      if (!!~node.text.indexOf(val) || !!~node.text.toUpperCase().indexOf(val.toUpperCase())) {
        return true
      }
    }
    /* end */

    /* 搜索公司名称  input事件区域*/
    
    /* end */
  }
}
</script>

<style lang="scss" scoped>
  .order-manager-header {
    box-shadow: 0 0 15px 0 rgba(55,63,82,0.19);
    border-radius: 10px;
    padding: 20px;
    height: 100px;
    width: 100%;
  }
</style>
