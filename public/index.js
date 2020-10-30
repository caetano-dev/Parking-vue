const currentDate = new Date();
const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();

var CreateCar = new Vue({
  el: "#ParkingContainer",
  data: {
    CarNumber: "",
    price: 0,
    cars: [],
    prices: [],
  },

  methods: {
    AddPrice() {
      if (this.prices.length > 0) {
        this.prices.splice(0);
      }
      const priceId = currentDate.getTime(); //-------
      const leaveTime = hour * 60 + minutes;

      this.prices.push({
        id: priceId,
        pay: leaveTime,
      });
    },

    // create car number
    AddCar() {
      //characters before and after "-"
      const FirstCharacters = this.CarNumber.substring(
        0,
        this.CarNumber.length - 4
      );
      const LastCharacters = this.CarNumber.slice(3);
      const FinalCarNumber = FirstCharacters + "-" + LastCharacters;
      const carminutes =
        currentDate.getMinutes() < 10
          ? "0" + currentDate.getMinutes()
          : currentDate.getMinutes();
      const arriveTime = hour * 60 + minutes;
      const carId = currentDate.getTime();
      if (this.CarNumber != "") {
        this.cars.push({
          id: carId,
          hour: hour,
          minutes: carminutes,
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
