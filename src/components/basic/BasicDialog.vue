<template>
  <el-dialog
    ref="dialog"
    id="BasicDialog"
    :class="[bindDefaultOptions.theme == 'black' ? 'black-theme' : 'white-theme']"
    v-bind="bindDefaultOptions"
    v-on="$listeners"
  >
    <div slot="title" class="p-t-40 p-lr-40" :style="[bindDefaultOptions.titleStyle]">{{ bindDefaultOptions.title }}</div>
    <div class="search_box" v-if="bindDefaultOptions.showSearch">
      <el-input
        v-model="search_text"
        class="search_input"
        v-bind="inputOptions"
        @input="search"
        @keyup.enter.native="search"
      >
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <slot></slot>
    <template v-if="bindDefaultOptions.showBtn">
      <template v-if="$scopedSlots.btn">
        <slot name="btn"></slot>
      </template>
      <template v-else>
        <div slot="footer" :style="bindDefaultOptions.BtnStyle" class="flex justify-between p-lr-40 p-t-19 p-b-40">
          <div
            class="flex-1 m-r-20 text-center bg-EDEDED font-16 ff-Medium text-c636B75 p-tb-11 b-r-4 cursor-point"
            v-if="bindDefaultOptions.showCancelBtn"
            :style="[bindDefaultOptions.cancalBtnStyle]"
            @click="cancel"
          >
            {{ bindDefaultOptions.cancelText }}
          </div>
          <div
            class="flex-1 text-center bg-FFC304 font-16 ff-Medium text-c222326 p-tb-11 b-r-4 cursor-point"
            v-if="bindDefaultOptions.showComfirmBtn"
            @click="confirm"
            :style="[bindDefaultOptions.confrimBtnStyle]"
          >
            {{ bindDefaultOptions.confirmText }}
          </div>
        </div>
      </template>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'BasicDialog',
  data() {
    return {
      defaultOptions: {
        title: '这是一个标题',
        titleStyle: {},
        visible: false,
        top: '25vh',
        modal: true,
        showClose: true,
        width: '480px',
        showSearch: false,
        appendBody: false,
        'close-on-click-modal': false,
        'close-on-press-escape': false,
        showBtn: false,
        cancelText: '取消',
        confirmText: '确定',
        showCancelBtn: true,
        showComfirmBtn: true,
        BtnStyle: {},
        cancalBtnStyle: {},
        confrimBtnStyle: {},
        data: {},
        theme: 'black'
      },
      search_text: '',
      inputOptions: {
        placeholder: 'Search'
      }
    }
  },
  computed: {
    bindDefaultOptions() {
      // console.log("attrs", this.$attrs);
      return {
        ...this.defaultOptions,
        ...this.$attrs
      }
    }
  },
  methods: {
    setInputOptions(options = {}) {
      this.inputOptions = {
        ...this.inputOptions,
        ...options
      }
    },
    cancel() {
      this.defaultOptions.visible = false
      this.$emit('cancel')
    },
    confirm() {
      this.$emit('confirm', {
        data: this.bindDefaultOptions.data
      })
    },
    search() {
      this.bindDefaultOptions.data.input_text = this.search_text
      this.$emit('search', {
        data: this.bindDefaultOptions.data
      })
    },
    getRef() {
      return this.$refs.dialog
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  border-radius: 4px 4px 4px 4px;
}

::v-deep .el-dialog__header {
  //   padding: 30px 24px 0;
  padding: 0;
}

::v-deep .el-dialog__body {
  padding: 0;
}

::v-deep .el-dialog__footer {
  padding: 0;
}

::v-deep .el-dialog__headerbtn {
  font-size: 22px;
  top: 44px;
}

.search_box {
  padding-top: 20px;
  text-align: center;
  margin-bottom: 1px;
}

::v-deep .el-dialog__close {
  color: #474d57;
  font-weight: bold;
}

.search_input {
  border: 1px solid #b7bdc6;
  width: 432px;
  height: 41px;
  border-radius: 21px;
}

::v-deep .el-input-group__append {
  border: 0;
  border-color: #474d57;
  background-color: transparent;
}

.black-theme {
  ::v-deep .el-dialog {
    background-color: #2b3139;
    border-radius: 4px;
  }

  .el-button {
    color: #b7bdc6;
    font-size: 16px;
  }

  ::v-deep .el-dialog__title {
    font-size: 20px;
    font-family: PingFang_Regular;
    font-weight: 400;
    color: #ffffff;
    padding: 30px 24px 0;
  }

  ::v-deep .el-dialog__header {
    font-size: 20px;
    font-family: PingFang_Regular;
    font-weight: 400;
    color: #ffffff;
  }
  ::v-deep .el-dialog__headerbtn {
    font-size: 22px;
    top: 30px;
    z-index: 1;
  }
  ::v-deep .el-dialog__close {
    color: #636B75;
    font-weight: bold;
  }
  .search_box {
    padding-top: 20px;
    text-align: center;
    margin-bottom: 1px;
  }

  ::v-deep .el-input-group__append {
    border: 0;
    border-color: #474d57;
    background-color: transparent;
  }

  .search_input {
    ::v-deep .el-input__inner {
      border-radius: 21px 21px 21px 21px;
      background-color: transparent;
      font-family: PingFang_Regular;
      border: none;
      border-color: #474d57;
      color: #fff !important;
    }
  }
}
</style>
