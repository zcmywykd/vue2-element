<template>
  <div class="header">
    <div class="content-wrapper">
    <div class="avatar"><img :src="seller.avatar" width="64" height="64" alt=""></div>
    <div class="content">
      <div class="title">
        <span class="brand"></span>
        <span class="name">{{seller.name}}</span>
      </div>
      <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
      <div v-if="seller.supports" class="support">
        <span class="icon" :class="classMap[seller.supports[0].type]"></span>
        <span class="text">{{seller.supports[0].description}}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
   props:{
     seller:{
       type:Object
     }
   },
    created(){
     this.classMap=['decrease','discount','guarantee','invoice','special']
    }
  };

</script>

<style lang="scss" rel="stylesheet/scss">

@import "../../common/scss/mixin";
  .header{
    color: #fff;
    background: #000;
    .content-wrapper{
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar{
        display: inline-block;
        vertical-align: top;
        >img{
          border-radius: 2px;
        }
      }
      .content{
        display: inline-block;
        font-size: 14px;
        margin-left: 16px;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            display: inline-block;
            width: 30px;
            height: 18px;
            @include bg-image($url:brand);
            background-size: 30px 18px;
            background-repeat: no-repeat;
            vertical-align: top;
          }
          .name{
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description{
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support{
          .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease{
              @include bg-image($url:decrease_1);
            }
            &.discount{
              @include bg-image($url:discount_1);
            }
            &.guarantee{
              @include bg-image($url:guarantee_1);
            }
            &.invoice{
              @include bg-image($url:invoice_1);
            }
            &.special{
              @include bg-image($url:special_1);
            }
          }
          .text{
            line-height: 12px;
            vertical-align: top;
            font-size: 12px;
            color: #fff;

          }
        }
      }
    }
  }
</style>
