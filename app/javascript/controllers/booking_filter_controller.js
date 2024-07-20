import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-filter"
export default class extends Controller {
  static targets = [ "filterBox", "currentFilter" ]
  static values = { bookingsDate: Array, bookingsName: Array, bookingsViewer: Array }

  connect() {
    // console.log("hello from the booking filter controller");
    // console.log(this.bookingsDateValue);
    // console.log(this.bookingsNameValue);
    // console.log(this.bookingsViewerValue);
  }

  enableFilterList(event){
    this.filterBoxTarget.classList.toggle("d-none");
  }

  disableFilterList(){
    this.filterBoxTarget.classList.add("d-none");
  }

  filterType(event){
    this.currentFilterTarget.innerText = event.currentTarget.innerText
    let allBookings = this.bookingsDateValue;
    switch (event.currentTarget.innerText) {
      case "Date":
        allBookings = this.bookingsDateValue;
        console.log("Date")
        break;
      case "Spot":
        allBookings = this.bookingsNameValue;
        console.log("Spot")
        break;
      case "Viewer":
        allBookings = this.bookingsViewerValue;
        console.log("Viewer")
        break;
      default:
        break;
    }
    // MAYBE TODO - sort the bookings depending on event.currentTarget.innerText instead of passing all in html
    // TODO - change the cards order! -
    // - either 1) change current card info, 2) remove cards and add new ones
    console.log(allBookings);
  }

  //// Private variables
  ///
  //

}
