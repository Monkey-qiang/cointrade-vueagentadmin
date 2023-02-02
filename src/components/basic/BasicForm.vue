<template>
  <div id="BasicForm" :class="[bindFormOptions.theme == 'black' ? 'black-theme' : 'white-theme']">
    <el-form
      ref="form"
      v-bind="bindFormOptions"
      :class="{ 'hide-margin': bindFormOptions.hideItemMargin }"
      v-on="$listeners"
    >
      <el-row
        type="flex"
        style="flex-wrap: wrap"
        v-bind="bindFormOptions && bindFormOptions.rowOption"
      >
        <el-col
          :span="(item.colOptions && item.colOptions.span) || 6"
          v-bind="item.colOptions"
          v-for="(item, index) in bindFormOptions && bindFormOptions.schemas"
          :key="index"
          @click.native.capture="handleClick(item)"
        >
          {{ item.slot }}
          <el-form-item v-bind="item" style="width: 100%">
            <template v-if="!item.customSlot">
              <template v-if="item.type == 'Input' || !item.type">
                <el-input
                  type="text"
                  v-bind="item.typeOptions"
                  v-model="item.typeOptions.value"
                  v-on="$listeners"
                ></el-input>
              </template>
              <template v-if="item.type == 'Textarea'">
                <el-input
                  v-model="item.typeOptions.value"
                  type="textarea"
                  v-bind="item.typeOptions"
                  v-on="$listeners"
                ></el-input>
              </template>
              <template v-if="item.type == 'Radio'">
                <el-radio-group v-model="item.typeOptions.value" v-bind="item.typeOptions">
                  <el-radio
                    v-bind="radio"
                    v-for="(radio, index) in item.typeOptions.options"
                    :key="index"
                    v-on="$listeners"
                  >
                    {{ radio.text }}</el-radio
                  >
                </el-radio-group>
              </template>
              <template v-if="item.type == 'Checkbox'">
                <el-checkbox-group v-model="item.typeOptions.value" v-bind="item.typeOptions">
                  <el-checkbox
                    v-for="(checkItem, index) in item.typeOptions.options"
                    :key="index"
                    v-bind="checkItem"
                    v-on="$listeners"
                  ></el-checkbox>
                </el-checkbox-group>
              </template>
              <template v-if="item.type == 'Select'">
                <el-select
                  v-on="$listeners"
                  v-model="item.typeOptions.value"
                  v-bind="item.typeOptions"
                  :popper-class="bindFormOptions.theme == 'white' ? 'popper-white' : ''"
                >
                  <el-option
                    v-for="vitem in item.typeOptions.options"
                    :key="(item.typeOptions.customValue && vitem[item.typeOptions.customValue]) || vitem.value"
                    :label="(item.typeOptions.customLabel && vitem[item.typeOptions.customLabel]) || vitem.label"
                    :value="(item.typeOptions.customValue && vitem[item.typeOptions.customValue]) || vitem.value"
                  >
                    <div>{{(item.typeOptions.customLabel && vitem[item.typeOptions.customLabel]) || vitem.label}}</div>
                  </el-option>
                </el-select>
              </template>
              <template v-if="item.type == 'Cascader'">
                <el-cascader
                  v-model="item.typeOptions.value"
                  :options="item.typeOptions.options"
                  v-on="$listeners"
                ></el-cascader>
              </template>
              <template v-if="item.type == 'Switch'">
                <el-switch
                  v-on="$listeners"
                  v-model="item.typeOptions.value"
                  v-bind="item.typeOptions"
                >
                </el-switch>
              </template>
              <template v-if="item.type == 'TimePicker'">
                <el-time-select
                  v-on="$listeners"
                  v-model="item.typeOptions.value"
                  v-bind="item.typeOptions"
                >
                </el-time-select>
              </template>
              <template v-if="item.type == 'DatePicker'">
                <el-date-picker
                  v-on="$listeners"
                  v-bind="item.typeOptions"
                  v-model="item.typeOptions.value"
                >
                </el-date-picker>
              </template>
              <template v-if="item.type == 'DateTimePicker'">
                <el-date-picker
                  v-on="$listeners"
                  v-bind="item.typeOptions"
                  v-model="item.typeOptions.value"
                  :popper-class="bindFormOptions.theme == 'white' ? 'popper-white' : ''"
                >
                </el-date-picker>
              </template>
            </template>
            <template v-if="item.customSlot">
              <slot :name="item.customSlot"></slot>
            </template>
          </el-form-item>
        </el-col>
        <el-col
          v-if="bindFormOptions.showAction"
          v-bind="bindFormOptions && bindFormOptions.actionColOptions"
          :span="(bindFormOptions.actionColOptions && bindFormOptions.actionColOptions.span) || 6"
        >
          <template>
            <el-button
              v-for="(btn, index) in bindFormOptions.actions"
              :key="index"
              v-bind="btn"
              :style="btn.style"
              @click="handleClickAction(btn.event, btn)"
            >
              {{ btn.text }}
            </el-button>
          </template>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 表单类型
// Radio, Checkbox, Input, Textarea, InputNumber, Select , Cascader, Switch ,TimePicker ,
// DatePicker, DateTimePicker, Upload
export default {
  name: 'BasicForm',
  data() {
    return {
      defaultOptions: {
        showAction: true,
        theme: 'white',
        hideItemMargin: true
      }
    }
  },
  computed: {
    bindFormOptions() {
      // console.log(this.$attrs, 'attrs')
      return { ...this.defaultOptions, ...this.$attrs }
    }
  },
  methods: {
    handleClickAction(type, btn) {
      const formData = this.bindFormOptions.schemas
      const obj = {}
      formData.forEach((v) => {
        obj[v.prop] = v.typeOptions.value
      })
      this.$emit(type, { btn, obj })
    },
    //  获取表单实例
    getFormRef() {
      if (this.$refs.form) {
        return this.$refs.form
      }
    },
    handleClick(item) {
      this.$emit('curitem', item)
    },
    // 获取值
    getFormValue() {
      const formData = this.bindFormOptions.schemas
      const obj = {}
      formData.forEach((v) => {
        if (!v.customSlot) {
          obj[v.prop] = v.typeOptions.value
        }
      })
      if (obj.time && obj.time.length > 0) {
        obj.time = obj.time.map(item => {
          item = item / 1000
          return item
        })
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
.white-theme {
  ::v-deep .el-input__inner {
    height: 40px;
    color: #636b75 !important;
    border-color: #b7bdc6 !important;
    font-family: PingFang_Regular;
  }

  // ::v-deep .el-input__suffix::before {
  //   content: "";
  //   position: absolute;
  //   width: 1px;
  //   background-color: #b7bdc6;
  //   left: -5px;
  //   top: 12px;
  //   bottom: 12px;
  // }

  ::v-deep .el-select .el-input .el-select__caret {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
}

.hide-margin {
  ::v-deep .el-form-item {
    margin-bottom: 0 !important;
  }
}

.black-theme {
  ::v-deep .el-input__inner {
    height: 40px;
    font-family: PingFang_Regular;
  }
}
</style>
<style lang="scss">
.el-select-dropdown__item {
  font-family: PingFang_Regular;
}
.popper-white {
  &.el-select-dropdown {
    background-color: #fff !important;
    border-color: #d8d8d8;
  }
  &.el-popper .popper__arrow {
    border-bottom-color: #d8d8d8 !important;
  }

  &.el-popper .popper__arrow::after {
    border-bottom-color: #fff !important;
  }
  .el-select-dropdown__item.hover {
    background-color: rgba(71, 77, 87, 0.1);
  }
  .el-select-dropdown__item {
    color: #070707;
  }

  &.el-picker-panel {
    background-color: #fff !important;
    border-color: #d8d8d8;
  }

  .el-date-table th {
    color: #070707;
  }
  .el-date-range-picker__header div {
    color: #070707;
  }
  .el-picker-panel__icon-btn {
    color: #070707;
  }
  .el-date-picker__header-label {
    color: #070707;
  }
  td.available {
    color: #070707;
  }
  .el-date-table th {
    border-bottom-color: #e4e4e4;
  }
  .el-date-range-picker__content.is-left {
    border-right: 1px solid #e4e4e4;
  }

  .el-date-editor .el-range-input {
    font-family: PingFang_Regular;
  }
}
</style>
