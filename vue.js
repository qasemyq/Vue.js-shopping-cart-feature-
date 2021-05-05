
const products = [
  { id: 1, name: "PC", price: 10, count: 1 },
  { id: 1, name: "Mobile", price: 20, count: 1 },
  { id: 1, name: "Headphone", price: 30, count: 1 },
  { id: 1, name: "Manitor", price: 40, count: 1 },
  { id: 1, name: "Mouse", price: 50, count: 1 },
];
//
const app = new Vue({
  el: "#app",
  data: {
    items: products,
  },
  methods: {
    plus: function (item) {
      if (item.count < 10) {
        item.count++;
      }
    },
    minus: function (item) {
      if (item.count > 0) {
        item.count--;
      }
    },
    getSubTotal: function (item) {
      let result = item.count * item.price;
      if (item.count > 5) {
        result *= 0.95;
      }
      return result;
    },
    getTotal: function () {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        let currentItem = this.items[i];
        total += this.getSubTotal(currentItem);
      }
      return total;
    },
  },
});
