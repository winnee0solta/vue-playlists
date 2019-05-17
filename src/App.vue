<template>
  <div id="app">
    <product-list-one ></product-list-one>
    <product-list-two ></product-list-two>
  </div>
</template>


<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'
export default {
name : 'app',
components:{
'product-list-one':ProductListOne,
'product-list-two':ProductListTwo,
},
// data (){
//   return {
//     products :[
//       {name:'Banana 1 ',price:320},
//       {name:'Banana 2',price:520},
//       {name:'Banana 3',price:420},
//       {name:'Banana 4',price:220},
//       {name:'Banana 5',price:120},
//     ]
//   }
// },

}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
  
</style>
