<template>
    <div class="m-l-230 p-t-24" v-if="!$route.meta.hidden">
        <el-menu
        class="w-188 p-lr-24"
        :default-active="activeMenu"
        :collapse="false"
        text-color="#001529"
        active-text-color="#001529"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        @select="menuSelect"
      >
        <el-menu-item class="b-r-4" v-for="(route, index) in routerOptions" :key="route.path" :index="route.path">
          <img class="m-l-24 m-r-12" :src="require(`../../../assets/asideIcon/aside_icon_${(index+1) }.png`)" alt=""/>
          <span slot="title">{{ $t(route.meta.title) }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      routerOptions: []
    }
  },
  created() {
    this.routerOptions = this.$router.options.routes
    this.routerOptions = this.routerOptions.filter(route => {
      return !route.hidden
    })
  },
  computed: {
    activeMenu() {
      const route = this.$route
      // console.log(route)
      const { path } = route
      return path
    }
  },
  methods: {
    menuSelect(index) {
      this.$router.push(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu{
  border-right: 0;
}
.el-menu-item{
  font-family: 'PingFang SC-Semibold, PingFang SC';
  font-weight: 600;
  padding: 0!important;
  &:hover{
    background-color: #FFC304;
  }
}
.is-active{
  background-color: #FFC304;
}
</style>
