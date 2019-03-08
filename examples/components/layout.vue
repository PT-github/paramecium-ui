<template>
  <div class="layout">
    <div class="left">
      <router-link :to="'/select'" tag="a" :class="{active: $route.path === '/select'}">select组件</router-link>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  
}
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  .left {
    width: 200px;
    height: 100%;
    overflow-y: auto;
    border-right: 1px solid #CCC;
    text-align: center;
    > a {
      height: 35px;
      line-height: 35px;
      display: block;
      &.active {
        border: 1px solid blue;
      }
    }
  }
  .right {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding: 10px;
  }
}
</style>
