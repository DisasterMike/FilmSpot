import { Controller } from "@hotwired/stimulus"

// Change these variales if decided to re-color the buttons
const defaultBackgroundClass = "btn-dark";
const selectedBackgroundClass = "btn-warning";

export default class extends Controller {
  static targets = [ "all", "pending", "accepted", "declined", "statusCard", "statusWord" ]

  connect() {
    // console.log("hello from the booking status controller");
  }

  // All Button
  allClicked(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.allTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.allTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("all", this.statusCardTargets); // display all cards
  }

  // Pending Button
  pendingClicked(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.pendingTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.pendingTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("pending", this.statusCardTargets);
  }

  // Accepted Button
  acceptedClicked(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.acceptedTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.acceptedTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("accepted", this.statusCardTargets);
  }

  // Declined Button
  declinedClicked(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.declinedTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.declinedTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("declined", this.statusCardTargets);
  }

  //// Private variables
  ///
  //

  #resetAllButtonTargetsCSS(){
    let targetsArray = [this.allTarget, this.pendingTarget, this.acceptedTarget, this.declinedTarget]
    targetsArray.forEach(element => {
      // Remove both default and highlighted if they have it, and reset all to have default again
      element.classList.remove(defaultBackgroundClass);
      element.classList.remove(selectedBackgroundClass);
      element.classList.add(defaultBackgroundClass);
    });
  }

  #disableUnwantedCards(status, statusCardTargets){

    // Make all visable first...
    statusCardTargets.forEach(element => {
      element.classList.remove("d-none");
    });

    if(status === "all") return; // don't run next code if came from All button

    // find the status from the html and disable card is applicable
    statusCardTargets.forEach(element => {
      if(this.#findWordTarget(this.statusWordTargets, element) !== status){
        element.classList.add("d-none");
      }
    });
  }

  #findWordTarget(statusHTMLText, element){
    // iterate through status targets and if it's in the outer div(element), then return it
    for(let i = 0; i < statusHTMLText.length; i++){
      if(element.contains(statusHTMLText[i])){
        return statusHTMLText[i].innerText;
      }
    }
  }
}
