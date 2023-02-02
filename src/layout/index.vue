<template>
    <div>
      <Header />
      <div class="flex">
        <Aside/>
        <Main/>
      </div>
    </div>
  </template>
<script>
// import { Header, Main } from './components'
import Header from './components/header'
import Main from './components/main'
import Aside from './components/aside'
export default {
  data() {
    return {
    }
  },
  components: {
    Header,
    Main,
    Aside
  }
}
</script>

