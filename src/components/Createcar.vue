<template>
  <div id="Main">
    <div id="Pricelabel">
      <div class="PriceLabelDiv">
        <div class="LabelContent" id="LabelContent">
          <span>Preço por hora: R$</span>
          <input
            type="number"
            id="Price"
            v-model.number="price"
            @keyup.enter="AddPrice"
          />
        </div>
        <button id="SavePrice" @click="AddPrice">Salvar</button>
      </div>
    </div>
    <div class="CreateCar" id="Createcar">
      <label for="NameInput">Placa:</label>
      <input
        v-model="CarNumber"
        @keyup.enter="AddCar"
        type="text"
        id="NameInput"
        maxlength="7"
      />
      <button @click="AddCar" class="CreateButton">Adicionar</button>
    </div>
    <div class="TableValues" id="Tablevalues">
      <span class="CarSpan">Placa</span>
      <span class="CarSpan">Entrada</span>
      <span class="CarSpan">Preço</span>
    </div>
    <div class="ParkingList" id="ParkingList">
      <div class="ParkingListBackground">
        <li
          class="CarList"
          id="CarList"
          v-for="car in cars"
          v-bind:key="car.id"
        >
          <div class="CarWrapper">
            <p>{{ car.title }}</p>
          </div>

          <div>
            <p>{{ car.hour }}:{{ car.minutes }}</p>
          </div>

          <div>
            <p v-for="price in pricelist" v-bind:key="price.id">
              R${{ car.arriveTime - price.pay }}
            </p>
          </div>

          <button
            @click="RemoveCar(car)"
            class="DeleteButton"
            type="button"
            name="button"
            id="RemoveButton"
          >
            Deletar
          </button>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Createcar",
      CarNumber: "",
      cars: [],
      price: "",
      pricelist: [],
    };
  },

  methods: {
    AddPrice() {
      console.log(this.price);
      if (this.pricelist.length > 0) {
        this.pricelist.splice(0);
      }
      const currentDate = new Date();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes();

      const priceId = currentDate.getTime(); //-------
      const leaveTime = hour * 60 + minutes;

      this.pricelist.push({
        id: priceId,
        pay: leaveTime,
      });
    },
    AddCar() {
      console.log(this.CarNumber);
      const currentDate = new Date();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes();
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
        console.log(this.cars);
      }
    },
    RemoveCar(car) {
      const CarIndex = this.cars.indexOf(car);
      this.cars.splice(CarIndex, 1);
    },
  },
};
</script>
