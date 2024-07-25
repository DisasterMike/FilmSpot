import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-filter"
export default class extends Controller {
  static targets = [ "filterBox" ]

  connect() {
    // console.log("hello from the booking filter controller");
  }

  enableFilterList(event){
    this.filterBoxTarget.classList.toggle("d-none");
  }

  disableFilterList(){
    this.filterBoxTarget.classList.add("d-none");
  }

}
