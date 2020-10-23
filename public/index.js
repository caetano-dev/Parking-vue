var CreateCar = new Vue({
  el: "#ParkingContainer",
  data: {
    CarNumber: "",
    cars: [],
  },

  methods: {
    AddCar() {
      const FormatCar1 = this.CarNumber.substring(0, this.CarNumber.length - 4);
      const FormatCar2 = this.CarNumber.slice(3);
      const FinalCarNumber = FormatCar1 + "-" + FormatCar2s;
      if (this.CarNumber != "") {
        this.cars.push({
          id: Date.now(),
          complete: false,
          title: FinalCarNumber.toUpperCase(),
        });
        console.log(this.CarNumber);
        this.CarNumber = "";
      }
    },
    RemoveCar(car) {
      const CarIndex = this.cars.indexOf(car);
      this.cars.splice(CarIndex, 1);
    },
  },
});
