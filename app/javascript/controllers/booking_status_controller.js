import { Controller } from "@hotwired/stimulus"

// Change these variales if decided to re-color the buttons
const defaultBackgroundClass = "btn-dark";
const selectedBackgroundClass = "btn-warning";

export default class extends Controller {
  static targets = [ "all", "pending", "accepted", "declined", "canceled", "statusCard", "statusWord" ]

  connect() {
    // console.log("hello from the booking status controller");

    // get the current URL
    let thisPage = new URL(window.location.href);
    // check the params and set the button to what it was before
    if(thisPage.searchParams.get("t") === "all"){
      this.#setAllStatus();
    }
    if(thisPage.searchParams.get("t") === "pending"){
      this.#setPendingStatus();
    }
    if(thisPage.searchParams.get("t") === "accepted"){
      this.#setAcceptedStatus();
    }
    if(thisPage.searchParams.get("t") === "declined"){
      this.#setDeclinedStatus();
    }
    if(thisPage.searchParams.get("t") === "canceled"){
      this.#setCanceledStatus();
    }
  }

  // All Button
  allClicked(){
    // get the current URL
    let thisPage = new URL(window.location.href);
    // set the url to have a param t=all
    thisPage.searchParams.set('t', "all");
    // reload the page with the new params
    window.location.search = thisPage.searchParams.toString()
  }

  // Pending Button
  pendingClicked(){
    // get the current URL
    let thisPage = new URL(window.location.href);
    // set the url to have a param t=pending
    thisPage.searchParams.set('t', "pending");
    // reload the page with the new params
    window.location.search = thisPage.searchParams.toString()
  }

  // Accepted Button
  acceptedClicked(){
    // get the current URL
    let thisPage = new URL(window.location.href);
    // set the url to have a param t=accepted
    thisPage.searchParams.set('t', "accepted");
    // reload the page with the new params
    window.location.search = thisPage.searchParams.toString()
  }

  // Declined Button
  declinedClicked(){
    // get the current URL
    let thisPage = new URL(window.location.href);
    // set the url to have a param t=declined
    thisPage.searchParams.set('t', "declined");
    // reload the page with the new params
    window.location.search = thisPage.searchParams.toString()
  }

  canceledClicked(){
    // get the current URL
    let thisPage = new URL(window.location.href);
    // set the url to have a param t=declined
    thisPage.searchParams.set('t', "canceled");
    // reload the page with the new params
    window.location.search = thisPage.searchParams.toString()
  }

  //// Private variables
  ///
  //

  #setAllStatus(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.allTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.allTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("all", this.statusCardTargets); // display all cards
  }
  #setPendingStatus(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.pendingTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.pendingTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("pending", this.statusCardTargets);
  }
  #setAcceptedStatus(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.acceptedTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.acceptedTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("accepted", this.statusCardTargets);
  }
  #setDeclinedStatus(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.declinedTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.declinedTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("declined", this.statusCardTargets);
  }
  #setCanceledStatus(){
    this.#resetAllButtonTargetsCSS(); // reset...
    this.canceledTarget.classList.remove(defaultBackgroundClass); // remove default bg
    this.canceledTarget.classList.add(selectedBackgroundClass); // add highlighted bg
    this.#disableUnwantedCards("canceled", this.statusCardTargets);
  }


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
