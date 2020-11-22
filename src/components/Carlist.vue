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
          <p>{{ car.title }}</p>
        </div>

        <div>
          <p>{{ car.hour }}:{{ car.minutes }}</p>
        </div>

        <div>
          <p v-for="price in UpdatePricelist" v-bind:key="price.id">
            R${{ price.newprice }}
          </p>
        </div>
        <button
        @click="UpdatePrice"
          class="CalculateButton"
          type="button"
          id="CalculateButton"
        >
          Calcular Preço
        </button>
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
      currentDate: new Date(),
      name: "Carlist",
      CarNumber: "",
      cars: [],
      price: 0,
      // pricelist: [],
      UpdatePricelist: [],
    }
  },

  methods: {
    // AddPrice() {
      // if (this.pricelist.length) {
      //   this.pricelist.splice(0);
      // }
      // const price = this.price
      // console.log(price)
      // this.pricelist.push({
      //   price: price,
      // });
    // },

    UpdatePrice(){
      if (this.UpdatePricelist.length) {
        this.UpdatePricelist.splice(0);
      }
      const newprice = this.price * 100
      const priceId = Math.floor(Math.random() * 100)
      this.UpdatePricelist.push({
        id: priceId,
        newprice: newprice,
      });
    },
    AddCar() {
      const hour = this.currentDate.getHours();
      const minutes = this.currentDate.getMinutes();
      const FirstCharacters = this.CarNumber.substring(
        0,
        this.CarNumber.length - 4
      );
      const LastCharacters = this.CarNumber.slice(3);
      const FinalCarNumber = (FirstCharacters + "-" + LastCharacters).toUpperCase();
      const carminutes = minutes < 10
          ? "0" + minutes
          : minutes
      const arriveTime = hour * 60 + minutes;
      const carId = Math.floor(Math.random() * 100)
      if (this.CarNumber) {
        this.cars.push({
          id: carId,
          hour: hour,
          minutes: carminutes,
          title: FinalCarNumber,
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
};
</script>

<style>
@import "./styles/Carlist.css";
</styles>