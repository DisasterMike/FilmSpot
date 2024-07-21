import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav-icons"
export default class extends Controller {
  static targets = [ "home" ]

  connect() {
    console.log("hello from the nac-icons controller");
  }

  home(event){
    // console.log(event.currentTarget.classList.contains("home"))
    if(event.currentTarget.classList.contains("home")){
      console.log("yes");
      // turn on pop up
      // this.homeTarget.classList.remove("d-none");
      this.homeTarget.style.transform = "scale(1)";
    }else{
      console.log("no");
      // turn off pop up
      // this.homeTarget.classList.add("d-none");
      this.homeTarget.style.transform = "scale(0)";
    }
  }
}
