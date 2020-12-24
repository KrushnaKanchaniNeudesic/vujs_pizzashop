<template>
  <div id="app" class="container">
 
    
    <b-button id="show-btn" @click="showModal">New Order</b-button>
      <create-component :showcreateorder="showcreateorder"></create-component>
      <table>
         <thead>
        <tr>
          <th scope="col" class="padding20px">Order Number </th>
          <th scope="col"  class="padding20px">Customer Name</th>
          <th scope="col"  class="padding20px">Total Cost</th>
          </tr>
           </thead>
           <tbody>
        <tr v-for="(item, $index) in orders" :key="$index">
          <td  class="paddingleft20px">{{item.id}} </td>
          <td  class="paddingleft20px">{{item.customername}} </td>
          <td  class="paddingleft20px">{{item.price}} </td>
        </tr>
        </tbody>
      </table>
  </div>
  
</template>

<script>
import  EventBus from './service';
export default {
  name: 'Pizza shop',
  data () {
    return {
      msg: 'Pizza Shop',
      orders: EventBus.orders,
      pizzas:  Object.assign([],EventBus.pizzas),
      CGST: 6,
      SGST: 6,
      totalprice: 0,
      customername:'',
      showcreateorder : false
    }
  },
  methods: {
      showModal() {
        this.showcreateorder = true;
      },
      hideModal() {
        this.showcreateorder = false;
      }
    },
    mounted () {
    EventBus.$on('create-order', (payload) => {
      if(payload){
     this.orders.push(payload);
      }
     this.showcreateorder = false;
    })
  }
}
</script>

<style lang="scss">
 .padding20px{
   padding: 20px;
 }
  .paddingleft20px{
   padding-left: 20px;
 }
</style>
