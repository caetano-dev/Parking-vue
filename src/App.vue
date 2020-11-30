<template>
  <div id="app">
    <div class="Container">
      <Sidebar />
      <main class="ParkingContainer" id="ParkingContainer">
        <div class="CarInputText">
          <h2>Adicionar um carro</h2>
        </div>
        <div class="AddCarWrapper">
          <Carlist />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Carlist from "./components/Carlist";
export default {
  name: "App",
  components: {
    Sidebar,
    Carlist,
  },
};
</script>

<style>
@import "./styles/App.css";
</style>
