import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-notifications"
export default class extends Controller {
  static targets = [ "notifications" ]
  static values = { spots: Array }

  connect() {
    console.log("hello from notifications");

    this._timer = setInterval(() => {
      this.update();
    }, 5000);

  }

  update(){
    console.log("hello");
    console.log(this.notificationsTarget.innerText);
  }

  // static afterLoad(identifier, application){
  //   console.log("hello yooo");
  // }
}
