import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products :[
      {name:'Banana 1 ',price:320},
      {name:'Banana 2',price:520},
      {name:'Banana 3',price:420},
      {name:'Banana 4',price:220},
      {name:'Banana 5',price:120},
    ]
  },
  getters:{
    saleProducts: state=>{
 var saleProducts = state.products.map(product => {
   return {
     name: '**' + product.name + '**',
     price: product.price / 2
   };
 });
 return saleProducts;
    }
      
  },
  mutations: {

  },
  actions: {

  }
})
