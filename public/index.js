var create_car = new Vue({
    el: '#parking_container',
    data: {
        car_number: '',
        cars: []
    },
    methods: {
      add_car() {
        if(this.car_number != ''){
            this.cars.push({
                title: this.car_number,
                complete: false  
            })
          console.log(this.car_number)
            }
        },
        remove_car(car){
            const car_index = this.cars.indexOf(car)
            this.cars.splice(car_index, 1)
        }
      }
  })
