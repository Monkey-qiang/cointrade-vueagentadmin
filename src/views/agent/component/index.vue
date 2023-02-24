<template>
  <el-dropdown trigger="click" placement="tbottom-start" @visible-change="checkArea">
    <div class="flex justify-between align-center b-1-solid-DFE1E5 p-lr-20 h-52 b-r-4 cursor-point">
      <img class="area_logo" :src="form.area_logo" alt="">
      <span class="flex-1">{{ form.country }}</span>
      <i class="el-icon-arrow-down" />
    </div>
    <el-dropdown-menu ref="areaDropdown" slot="dropdown" class="area_menu scroll_view" style="margin-top: 0;">
      <el-dropdown-item class="input_item" @click.native="handleCommand('input')">
        <el-input ref="searchArea" class="w-700" v-model.trim="searchText" :class="{ 'is_focus': isFocus }"
          @input="search()" @focus="isFocus = true" @blur="isFocus = false" @keyup.enter.native="search()">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
        </el-input>
      </el-dropdown-item>
      <el-dropdown-item v-for="item in filterList" :key="item.id" class="p-lr-12 font-16 ff-Regular text-c1A1F2A"
        @click.native="handleCommand(item)">
        <div class="area_item flex align-center">
          <img class="w-30 h-30 m-r-12 b-r-p50" :src="item.countryicon" alt="">
          <div class="flex justify-between w-p100 l-h-19">
            <span>{{ item.nameen }}</span>
          </div>
        </div>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { defaultCountry } from '@/utils/country'
export default {
  props: {
    areaList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    const country = defaultCountry().country
    const area_logo = defaultCountry().area_logo
    return {
      searchText: '',
      isFocus: false,
      form: {
        area_logo,
        country
      },
      filterList: []
    }
  },
  methods: {
    // 选择区号
    checkArea(visible) {
      if (visible) {
        this.filterList = [...this.areaList]
        this.$nextTick(() => {
          this.searchText = ''
          this.$refs.searchArea.focus()
        })
      }
    },
    handleCommand(command) {
      if (command === 'input') {
        this.$refs.areaDropdown.$data.showPopper = true
      } else {
        this.$refs.areaDropdown.$data.showPopper = false
        this.selectArea(command)
      }
    },
    // 选中当前地区
    selectArea(item) {
      // debugger
      this.form.area_logo = item.countryicon
      this.form.country = item.nameen
      this.$emit('updataArea', item)
    },
    // 搜索地区
    search() {
      this.filterList = []
      this.filterList = this.areaList.filter(item => item.nameen.indexOf(this.searchText.toUpperCase()) > -1)
    }
  }
}
</script>
<style lang="scss" scoped>
.area_logo {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
<style lang="scss">
.scroll_view {
  overflow: auto;
  will-change: transform;
  direction: ltr;
}

.area_menu {
  width: 794px;
  height: 240px;
  background-color: #FFFFFF;
  box-shadow: 2px 4px 4px 0px rgba(44, 57, 74, 0.1);
  border-radius: 4px;
  border: 1px solid #DFE1E5;
  margin: 0;

  // overflow: scroll;
  // overflow-y: auto;
  .popper__arrow {
    display: none;
  }

  .el-dropdown-menu__item {
    line-height: 46px !important;

    &:hover {
      background-color: transparent;
      color: #1A1F2A;
    }
  }

  .area_item {
    padding: 12px 28px 5px 10px;

    &:hover {
      background-color: #F6F6F6;
      color: #1A1F2A;
    }
  }

  .input_item {
    .el-input {
      margin: 18px 0 12px;
      border: 1px solid #DFE1E5;
      border-radius: 4px;
      padding: 0 12px 0 30px;

      &:hover {
        border-color: #ededed;
      }

      &:focus {
        border-color: #ededed;
      }
    }

    .el-input-group__prepend {
      border: none;
      padding: 0;

      .el-button {
        padding: 0;
      }
    }

    .el-input__inner {
      color: #1A1F2A !important;
      height: 33px;
      border: none;
      padding: 0;
    }

    .is_focus {
      border-color: #ededed;
    }
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #DFE1E5;
  }
}
</style>
