<template>
  <div class="index-wrap">
    <el-container>
      <el-aside><NavMenu></NavMenu></el-aside>
      <el-container id="el-container">
        <el-header><Header></Header></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import NavMenu from '../components/NavMenu'
  export default {
    name: "Index" ,
    components: {
      Header, Footer, NavMenu
    }
  }
</script>