import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-filter"
export default class extends Controller {
  static targets = [ "filterBox", "currentFilter" ]

  connect() {
    // console.log("hello from the booking filter controller");
  }

  enableFilterList(event){
    // console.log("enable");
    this.filterBoxTarget.classList.toggle("d-none");
  }

  disableFilterList(){
    // console.log("disable");
    this.filterBoxTarget.classList.add("d-none");
  }

  filterType(event){
    // console.log(event.currentTarget.innerText);
    this.currentFilterTarget.innerText = event.currentTarget.innerText
    console.log(this.#filterBookings());
    let bookings = this.#filterBookings();
    console.log(typeof(bookings));
    // console.log(bookings);
    // TODO - sort the bookings depending on event.currentTarget.innerText
    // TODO - change the cards order! -
    // - either 1) change current card info, 2) remove cards and add new ones
  }

  //// Private variables
  ///
  //

  #filterBookings(){
    let bookingsArray = [];

    const url = `${window.location.href}/all`;
    // console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(element => {
          bookingsArray.push(element);
        });
      })

      return bookingsArray;
  }
}
