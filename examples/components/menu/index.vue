<template>
  <div class="menu-test">
    <pmc-menu :defaultOpen="defaultOpen" :menuData="menuData"></pmc-menu>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      defaultOpen: 1,
      menuData: [
        {
          title: "导航一",
          icon: "iconlianwangdanwei",
          children: [
            {
              title: "select组件1",
              path: "/select"
            },
            {
              title: "select组件2",
              path: "/select"
            },
            {
              title: "select组件3",
              path: "/select"
            }
          ]
        },
        {
          title: "导航二",
          icon: "iconweixiubeijing",
          children: [
            {
              title: "select组件4",
              path: "/select"
            }
          ]
        },
        {
          title: "导航三",
          icon: "iconxiaofangzhanzongliangbeijing",
          path: '/select'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.menu-test {
  width: 300px;
  height: 500px;
  border: 1px solid red;
}
</style>
