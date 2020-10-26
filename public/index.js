var CreateCar = new Vue({
  // el: "#ParkingContainer",
  el: "#ParkingContainer",
  data: {
    CarNumber: "",
    price: 0,
    cars: [],
    prices: [],

  },

  methods: {
    AddPrice(){
      // pay = this.price
      const value = this.price.toString()
      if(this.prices.length > 0){
        this.prices.splice(0);
      }
      const currentDate = new Date();
      const priceId = currentDate.getTime();

      this.prices.push({
        id: priceId,
        pay: value,
      });
    },

    // create car number
    AddCar() {
      const FormatCar1 = this.CarNumber.substring(0, this.CarNumber.length - 4);
      const FormatCar2 = this.CarNumber.slice(3);
      const FinalCarNumber = FormatCar1 + "-" + FormatCar2;
      // create time
      const currentDate = new Date();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()
      // : '' + currentDate.getMinutes() ;

      const dateString = hour + ":" + minutes;
      // ID
      const carId = currentDate.getTime();
      if (this.CarNumber != "") {
        this.cars.push({
          id: carId,
          time: dateString,
          title: FinalCarNumber.toUpperCase(),
          // price: 
        });
        this.CarNumber = "";
      }
    },
    RemoveCar(car) {
      const CarIndex = this.cars.indexOf(car);
      this.cars.splice(CarIndex, 1);
    },
  },
});

// v-bind:price="price"
// v-bind:CarNumber="car"