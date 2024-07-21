import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav-icons"
export default class extends Controller {
  static targets = [ "icon" ]

  connect() {
    // console.log("hello from the nav-icons controller");
  }

  popUp(event){

    if(!event.currentTarget.classList.contains("popUp")){
      this.iconTargets.forEach(element => {
        element.style.transform = "scale(0)";
      });
      return;
    }

    this.iconTargets.forEach(element => {
      if(event.currentTarget.contains(element)){
        element.style.transform = "scale(1)";
      }else{
        element.style.transform = "scale(0)";
      }
    });

  }
}
