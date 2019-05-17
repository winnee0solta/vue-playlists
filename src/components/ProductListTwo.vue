<template>
 <div class="product-list-two">
 <h2>Product List Two</h2>
 <ul>
 <li v-for="product in products" v-bind:key="product.name">
 <span class="name">{{product.name}}</span>
 <span class="price">${{product.price}}</span>
 </li>
 </ul>
 </div>
</template>

<script>
export default {
  name: 'ProductListTwo',
  props:[
    'products'
  ],
 data(){
   return {

   }
 },

}
</script>

 
<style scoped lang="scss">
 .product-list-two{
     width: 45vw;
   display: inline-block;
   padding: 30px 20px;
   background: #f9ca24;
   color: #2d3436;

   h2{
      margin-left: 35px;
     font-weight: bold;
     text-transform: uppercase;

   }

   ul{
     list-style: none;

     li{
       background: #2d3436;
       color: #dfe6e9;
       padding:20px;
       margin: 20px;
       margin-left: 0px;
     }
   }

   .price{
     float : right;
   }
 }
</style>
