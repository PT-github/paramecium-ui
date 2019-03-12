<template>
  <div ref="select" class="pmc-select-container" @click="toogleSelect">
    <div class="pmc-select-value">{{ newValue ? optionFormatter[newValue] : '' }}</div>
    <div class="iconfont" :class="{ iconjiantoushang: toogleActive, iconjiantouxia: !toogleActive }"></div>
    <div class="pmc-select-options" v-if="options.length > 0" :class="{ active: toogleActive }">
      <div
        class="pmc-select-option"
        v-for="(item, index) in options"
        :key="index + '_pmc-option'"
        @click.stop="selectOption(item.value)"
      >{{ item.label }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pmc-select",
  props: {
    value: {
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      newValue: "",
      toogleActive: false
    };
  },
  mounted () {
    let _this = this
    window.addEventListener('click', function (e) {
      if (_this.$refs.select.contains(e.target)) {
        _this.stopEvent(e)
      } else {
        _this.toogleActive = false
      }
    })
  },
  computed: {
    optionFormatter () {
      let o = {}
      for (let i = 0; i < this.options.length; i++) {
        o[this.options[i]['value']] = this.options[i]['label']
      }
      return o
    }
  },
  created () {
    this.newValue = this.value
  },
  methods: {
    stopEvent (e) {
      window.event? window.event.cancelBubble = true : e.stopPropagation();
    },
    selectOption (value) {
      this.newValue = value
      this.toogleActive = false
      this.$emit('input', this.newValue)
    },
    toogleSelect() {
      this.toogleActive = !this.toogleActive;
    }
  }
};
</script>
<style lang="less" scoped>
.pmc-select-container {
  cursor: pointer;
  width: 240px;
  height: 40px;
  position: relative;
  border: 1px solid #d0d3da;
  border-radius: 4px;
  position: relative;
  display: inline-block;
  .pmc-select-value {
    height: 100%;
    padding: 0 15px;
    line-height: 38px;
    color: #606266;
  }
  .pmc-select-options {
    &.active {
      display: block;
    }
    display: none;
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px #ccc;
    border-radius: 4px;
    .pmc-select-option {
      width: 100%;
      height: 34px;
      line-height: 34px;
      padding: 0 20px;
    }
  }
  .iconfont {
    position: absolute;
    right: 10px;
    top: 11px;
    color: #c0c4cc;
    font-size: 12px;
  }
}
</style>
