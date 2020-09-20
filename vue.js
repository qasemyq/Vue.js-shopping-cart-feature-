// Vue.js Shopping Cart feature

const products = [
  { id: 1, name: "PC", price: 10, count: 1 },
  { id: 1, name: "Mobile", price: 20, count: 1 },
  { id: 1, name: "Headphone", price: 30, count: 1 },
  { id: 1, name: "Manitor", price: 40, count: 1 },
  { id: 1, name: "Mouse", price: 50, count: 1 },
];

const app = new Vue({
  el: "#app",
  data: {
    items: products,
  },
  methods: {
    plus: function (item) {
      if (item.count < 10) {
        // age fagta benviam item.count++ na mahdud mire bala amma injuri migam ta zamani ke az 10 kuchikar hast yeki behesh ezafe kon
        item.count++;
      }
    },
    minus: function (item) {
      if (item.count > 0) {
        //injam migam ta zamani ke az 0 bozorgtar hast azash kam kon ke nemizare manfi beshe
        item.count--;
      }
    },
    getSubTotal: function (item) {
      let result = item.count * item.price;
      if (item.count > 5) {
        result *= 0.95;
        // yani age bishtar az 5 ta kharid kard kasi behesh 5% takhfif midim , result ro *= mikonam ba 0.95 kolle gimat ke 5% be dast miyad
      }
      return result;
    },
    getTotal: function () {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        let currentItem = this.items[i];
        //  ye motaggayer tarif mikonam ke va megdare i ro dar har bar mirizam tush
        total += this.getSubTotal(currentItem);
        // inja ham megdare total ro ba komake function getSubTotal be dast miyaram ke dg niyaz nabashe ta if va 5% takhfif barayaye kharide balaye 5 adad ro dobare benevisam
      }
      return total;
    },
  },
});
