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
    // TODO - change the cards order!
  }

  filterByName(){
    // do a fetch request into the database,
    // then remove all current cards
    // repopulate the cards with SORTED array of new cards from the database

    this.statusCardTargets.forEach(card => {
      // card.remove();
    });

    fetch("http://localhost:3000/owner/bookings/all")
      .then(response => response.json())
      .then(data => {
        data.forEach(element => {
          console.log(element);
          // this.bookingsRowTarget.insertAdjacentHTML("beforeend",
          //   "<h2>test</h2>"
          // )
        });
      })
  }
}
