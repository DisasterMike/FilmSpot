import { Controller } from "@hotwired/stimulus"

// Change these variales if decided to re-color the buttons
const defaultBackgroundClass = "btn-dark";
const selectedBackgroundClass = "btn-warning";

// Connects to data-controller="booking-status"
export default class extends Controller {
  static targets = [ "all", "pending", "accepted", "declined", "status" ]

  connect() {
    // console.log("hello from the booking status controller");
  }

  // All Button
  allClicked(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.allTarget.classList.remove(defaultBackgroundClass); // remove dark bg
    this.allTarget.classList.add(selectedBackgroundClass); // add warning bg
    this.#disableUnwantedCards("all", this.statusTargets); // display all cards
  }

  // Pending Button
  pendingClicked(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.pendingTarget.classList.remove(defaultBackgroundClass); // remove dark bg
    this.pendingTarget.classList.add(selectedBackgroundClass); // add warning bg
    this.#disableUnwantedCards("pending", this.statusTargets);
  }

  // Accepted Button
  acceptedClicked(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.acceptedTarget.classList.remove(defaultBackgroundClass); // remove dark bg
    this.acceptedTarget.classList.add(selectedBackgroundClass); // add warning bg
    this.#disableUnwantedCards("accepted", this.statusTargets);
  }

  // Declined Button
  declinedClicked(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.declinedTarget.classList.remove(defaultBackgroundClass); // remove dark bg
    this.declinedTarget.classList.add(selectedBackgroundClass); // add warning bg
    this.#disableUnwantedCards("declined", this.statusTargets);
  }

  //// Private variables
  ///
  //

  #resetAllButtonTargetsCSS(){
    let targetsArray = [this.allTarget, this.pendingTarget, this.acceptedTarget, this.declinedTarget]
    targetsArray.forEach(element => {
      // Remove both dark and warning if they have it, and reset all to have dark again
      element.classList.remove(defaultBackgroundClass);
      element.classList.remove(selectedBackgroundClass);
      element.classList.add(defaultBackgroundClass);
    });
  }

  #disableUnwantedCards(status, statusTargets){

    // Make all visable first...
    statusTargets.forEach(element => {
      element.classList.remove("d-none");
    });

    if(status === "all") return; // don't run next code if came from All button

    // find the status from the html and disable card is applicable
    statusTargets.forEach(element => {
      if(element.children[0].children[3].children[1].innerText !== status){
        element.classList.add("d-none");
      }
    });
  }
}
