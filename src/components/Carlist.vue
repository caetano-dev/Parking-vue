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
            @keyup.enter="UpdatePrice"
          />
        </div>
        <button id="SavePrice" @click="UpdatePrice">Salvar</button>
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
      <li class="CarList" id="CarList" v-for="car in cars" v-bind:key="car.id">
        <div class="CarWrapper">
          <p>{{ car.title | capitalize }}</p>
        </div>

        <div>
          <p>{{ car.hour }}:{{ car.minutes }}</p>
        </div>

        <div>
          <p>
            R${{ Math.floor(price * (updatedTime - car.arriveTime) / 60)}}
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
</template>

<script>
export default {
  data() {
    return {
      name: "Carlist",
      CarNumber: "",
      cars: [],
      price: 1,
      UpdatePricelist: [],
      updatedTime: 0,
    };
  },
  created() {
    setInterval(this.getPrice, 5000);
  },
  methods: {
    getPrice() {
      const today = new Date();
      const time = today.getHours() * 60 + today.getMinutes() 
      this.updatedTime = time;
    },
    UpdatePrice() {
      if (this.UpdatePricelist.length) {
        this.UpdatePricelist.splice(0);
      }
      const priceId = Math.floor(Math.random() * 100);
      this.UpdatePricelist.push({
        id: priceId,
      });
    },
    AddCar() {
      let currentDate = new Date();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const carminutes = minutes < 10 ? "0" + minutes : minutes;
      const arriveTime = hour * 60 + minutes;
      const carId = Math.floor(Math.random() * 100);
      if (this.CarNumber) {
        this.cars.push({
          id: carId,
          hour: hour,
          minutes: carminutes,
          title: this.CarNumber,
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
  filters: {
    capitalize(value) {
      return (
        value.substring(0, value.length - 4) +
        "-" +
        value.slice(3)
      ).toUpperCase();
    },
  },
};
</script>

<style>
@import "../styles/Carlist.css";
</styles>