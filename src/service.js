import Vue from 'vue';
export default new Vue({
    data() {
        return {
            orders: [],
            pizzas: [
                { id: 1, name: "Formhouse with twist", price: 250, count:0 },
                { id: 2, name: "Pepper Lover", price: 220, count:0 },
                { id: 3, name: "Spicy Cheese burst", price: 250, count:0 }],
            CGST: 6,
            SGST: 6
        }
    }
});