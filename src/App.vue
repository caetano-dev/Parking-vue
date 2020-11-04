<template>
  <div id="app">
    <div class="Container">
      <Sidebar />
      <main class="ParkingContainer" id="ParkingContainer">
        <div class="CarInputText">
          <h4>Adicionar um carro</h4>
        </div>
        <div class="AddCarWrapper">
          <Createcar />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Createcar from "./components/Createcar";
export default {
  name: "App",
  components: {
    Sidebar,
    Createcar,
  },
};
</script>

<style>
@import './components/styles.css';
</style>
