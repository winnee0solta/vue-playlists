<template>
 <div class="product-list-one">
 <h2>Product List One</h2>
 <ul>
 <li v-for="product in saleProducts" v-bind:key="product.name">
 <span class="name">{{product.name}}</span>
 <span class="price">${{product.price}}</span>
 </li>
 </ul>
 <button v-on:click="reducePrice">Reduce Price</button>
 </div>
</template>

<script>
export default {
  name: 'ProductListOne', 
 computed:{
  products(){
    return this.$store.state.products
  },
  saleProducts(){
    return this.$store.getters.saleProducts
    //
  }
},
methods:{
  reducePrice:function(){
    this.$store.state.products.forEach(product=>{
      product.price -= 1
    })
  }
}

}
</script>

 
<style scoped lang="scss">
 .product-list-one{
   width: 45vw;
   display: inline-block; 
   padding: 30px 20px; 
   padding: 30px 20px; 
   color: #dfe6e9;
   background: #f0932b;

   h2{
     margin-left: 35px;
     font-weight: bold;
     text-transform: uppercase;

   }

   ul{
     list-style: none;

     li{
       
       color: #2d3436;
       background: #dfe6e9;
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
