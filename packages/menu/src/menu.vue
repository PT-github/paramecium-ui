<template>
  <div class="pmc-menu">
    <div class="pmc-menu-level_1" v-for="(item, index) in menuData" :key="'pmc-menu_' + index">
      <div class="pmc-menu-level_1-box" @click.stop="handlerClick(index, item)">
        <span class="pcm-menu-level_1-icon" v-if="item.icon">
          <i class="iconfont" :class="item.icon"></i>
        </span>
        <span class="pmc-menu-level_1-title">{{ item.title }}</span>
        <span class="pmc-menu-level_1-arrow" v-if="item.children && item.children.length > 0">
          <i
            class="iconfont"
            :class="{iconjiantouxia: active !== index, iconjiantoushang: active === index}"
          ></i>
        </span>
        <span class="pmc-menu-level_1-arrow" v-else>
          <i class="iconfont iconjiantouxia trans-z"></i>
        </span>
      </div>
      <div
        :ref="'childBox_' + index"
        class="pmc-menu-level_2-box"
        :class="{ hide: active !== index }"
        v-if="item.children && item.children.length > 0"
      >
        <router-link
          class="pmc-menu-level_2-title"
          v-for="(cd, idx) in item.children"
          :key="'pmc-menu-child_' + idx"
          :to="cd.path"
        >{{ cd.title }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pmc-menu",
  props: {
    defaultOpen: {
      type: Number,
      default: 0
    },
    menuData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: "",
      cssHeight: 0
    };
  },
  mounted() {
    this.active = this.defaultOpen < this.menuData.length ? this.defaultOpen : 0;
    let dom = document.querySelector(".pmc-menu-level_2-title");
    dom && (this.cssHeight = document.querySelector(".pmc-menu-level_2-title").offsetHeight) &&
      this.setChildHeight(this.active, this.menuData[this.active].children.length);
  },
  methods: {
    handlerClick(index, item) {
      if (item.path) {
        this.$router.push({
          path: item.path
        })
        return
      }
      if (item.children && item.children.length > 0) {
        if (this.active === index) {
          this.active = "";
        } else {
          this.active = index;
          this.setChildHeight(index, item.children.length);
        }
      }
    },
    setChildHeight(index, l) {
      this.$refs["childBox_" + index][0].style.height =
        this.cssHeight * l + "px";
    }
  }
};
</script>
<style lang="less" scoped>
.pmc-menu {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  cursor: pointer;
  .pmc-menu-level_1 {
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    position: relative;
    .pmc-menu-level_1-box {
      display: flex;
      padding: 0 15px;
    }
    .pmc-menu-level_2-box {
      height: 0;
      transition: height 0.5s;
      overflow: hidden;
      &.hide {
        height: 0 !important;
      }
      .pmc-menu-level_2-title {
        line-height: 38px;
        padding: 0 40px;
        font-size: 12px;
        display: block;
        &:active, &:hover, &:visited {
          color: inherit;
        }
      }
    }
    .pmc-menu-level_1-arrow {
      .iconfont {
        font-size: 12px;
        color: #c0c4cc;
      }
      .trans-z {
        transform: rotateZ(270deg)
      }
    }
    .pmc-menu-level_1-title {
      flex: 1;
      padding-left: 10px;
    }
    .pcm-menu-level_1-icon {
      padding-right: 2px;
    }
  }
}
</style>
