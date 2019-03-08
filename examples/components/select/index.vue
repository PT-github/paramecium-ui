<template>
  <div class="select-test">
    <pmc-select v-model="value" :options="options"></pmc-select>
    <pmc-select v-model="value2" :options="options"></pmc-select>
  </div>
</template>
<script>
export default {
  name: 'Select',
  data () {
    return {
      value: '选项2',
      value2: '选项1',
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    }
  }
}
</script>
