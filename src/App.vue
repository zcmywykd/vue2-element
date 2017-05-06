<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">

      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from  './components/header/header.vue';
  const ERR_OK=0;
  export default {
    data(){
      return{
        seller:{}
      }
    },
    created () {
      this.$http.get('/api/seller').then((response)=>{
        //这里response拿到的是一个属性，他有一个方法叫rsponse.json(),转化成一个json对象
        response=response.body;
        if(response.errno===ERR_OK){
            this.seller=response.data;
          console.log(this.seller)
        }
      })
    },
    components: {
      "v-header": header
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
@import "common/scss/mixin.scss";
  #app {
    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
     /* border-bottom: 1px solid #7e8c8d;*/
      @include border-1px(#fff);
      .tab-item {
        flex: 1;
        text-align: center;
        display: block;
        font-size: 14px;
        color: rgb(77,85,93);
        .router-link-active {
          color: rgb(240,20,20);
        }
      }
    }
  }
</style>
