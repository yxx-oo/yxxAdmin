<template>
  <div class="order-manager-header">
    <el-cascader
      v-model="selectValue"
      :options="data"
      :show-all-levels="false"
      filterable
      :props="{ expandTrigger: 'hover', value: 'id', label: 'certificationProgram' }"
      :filter-method="filterMethod"
    >
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
      selectValue,
      data
    }
  },
  watch: {
  },
  mothods: {
    filterMethod(val) {
      this.value = val;
      if (val) { //val存在
        this.data = this.optionsCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else { //val为空时，还原数组
        // this.data = this.optionsCopy;
      }
    }
  },
  created() {
    this.data = requedata;
  },
  ethods: {

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
