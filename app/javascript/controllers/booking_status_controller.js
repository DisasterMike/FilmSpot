import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-status"
export default class extends Controller {
  static targets = [ "all", "pending", "accepted", "declined", "status" ]

  connect() {
    // console.log("hello from the booking status controller");
  }

  allClicked(){
    this.#resetAllTargets(); // reset...
    this.allTarget.classList.remove("btn-dark"); // remove dark bg
    this.allTarget.classList.add("btn-warning"); // add warning bg
    this.#disableUnwantedCards("all", this.statusTargets); // display all cards
  }

  pendingClicked(){
    this.#resetAllTargets(); // reset...
    this.pendingTarget.classList.remove("btn-dark"); // remove dark bg
    this.pendingTarget.classList.add("btn-warning"); // add warning bg
    this.#disableUnwantedCards("pending", this.statusTargets);
  }

  acceptedClicked(){
    this.#resetAllTargets(); // reset...
    this.acceptedTarget.classList.remove("btn-dark"); // remove dark bg
    this.acceptedTarget.classList.add("btn-warning"); // add warning bg
    this.#disableUnwantedCards("accepted", this.statusTargets);
  }

  declinedClicked(){
    this.#resetAllTargets(); // reset...
    this.declinedTarget.classList.remove("btn-dark"); // remove dark bg
    this.declinedTarget.classList.add("btn-warning"); // add warning bg
    this.#disableUnwantedCards("declined", this.statusTargets);
  }

  #resetAllTargets(){
    let targetsArray = [this.allTarget, this.pendingTarget, this.acceptedTarget, this.declinedTarget]
    targetsArray.forEach(element => {
      // Remove both dark and warning if they have it, and reset all to have dark again
      element.classList.remove("btn-dark");
      element.classList.remove("btn-warning");
      element.classList.add("btn-dark");
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
