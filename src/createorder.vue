<template>
  <div id="app" class="container">

    <b-modal ref="my-modal" hide-footer title="Create Order">
      Coustomer Name : <input type="text" v-model="customername"/>
      <div class="d-block text-center" v-for="(item, $index) in pizzas" :key="$index">
        {{item.name + ' - '+ item.price + '/-'}}
        <button @click="removePizza($index)">-</button>
        {{item.count}}
  
        <button @click="addPizza($index)">+</button>
      </div>
      <hr>
        <p>{{ "Total Price :" + totalprice}}</p>
        <hr>
      <b-button class="mt-3" variant="outline-danger" block @click="createOrder">Create</b-button>
    </b-modal>
  </div>
  
</template>

<script>
import  EventBus from './service';
export default {
   props: ['showcreateorder'],
  data () {
    return {
      orders: EventBus.orders,
      pizzas:  Object.assign([],EventBus.pizzas),
      totalprice: 0,
      customername:''
    }
  },
  watch: { 
          showcreateorder: function(newVal, oldVal) { // watch it
          if(newVal){
              this.showModal();
          }
          else{
              this.hideModal();
          }
        }
      },
  methods: {
      showModal() {
        this.pizzas.forEach(x=> {
          x.count = 0;
        })
        this.customername = '';
        this.totalprice = 0;
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
        EventBus.$emit('create-order', null)
      },

      createOrder(){
      this.hideModal();
      const itemData = {id:Math.floor(Math.random()*10000000), items: this.pizzas, price: this.totalprice, customername: this.customername};
      EventBus.$emit('create-order', itemData)
      },

      addPizza(id){
        this.pizzas[id].count = this.pizzas[id].count + 1;
       this.calculateTotal();
      },

      removePizza(id){
        if(this.pizzas[id].count > 0){
        this.pizzas[id].count = this.pizzas[id].count - 1;
        this.calculateTotal();
        }
      },
      calculateTotal(){
        this.totalprice = 0;
        this.pizzas.forEach(x=>{
        this.totalprice = this.totalprice + (x.price * x.count);
        });
        this.totalprice = this.totalprice +  (this.totalprice * (EventBus.CGST/100))+ (this.totalprice * (EventBus.SGST/100));
      }
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
