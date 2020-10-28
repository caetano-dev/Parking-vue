var CreateCar = new Vue({
  el: "#ParkingContainer",
  data: {
    CarNumber: "",
    price: 0,
    cars: [],
    prices: [],
  },

  methods: {
    AddPrice(){
      //remove last price from list
      if(this.prices.length > 0){
        this.prices.splice(0);
      }
      const currentDate = new Date();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes()
      const priceId = currentDate.getTime();
      //fix this
      const leaveTime = hour * 60 + minutes
      
      this.prices.push({
        id: priceId,
        // pay: this.price,
        pay: leaveTime,
      });
    },

    // create car number
    AddCar() {
      //characters before and after "-"
      const FirstCharacters = this.CarNumber.substring(0, this.CarNumber.length - 4);
      const LastCharacters = this.CarNumber.slice(3);
      const FinalCarNumber = FirstCharacters + "-" + LastCharacters;
      // create time
      const currentDate = new Date();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()
      const calculateMinutes = currentDate.getMinutes()
      //fix this
      const arriveTime = hour * 60 + calculateMinutes
      // ID
      const carId = currentDate.getTime();
      if (this.CarNumber != "") {
        this.cars.push({
          id: carId,
          hour: hour,
          minutes: minutes,
          title: FinalCarNumber.toUpperCase(),
          arriveTime: arriveTime,
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