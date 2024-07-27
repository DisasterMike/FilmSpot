import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-notifications"
export default class extends Controller {
  static targets = [ "notifications" ]
  static values = { user: Boolean, spots: Array }

  connect() {
    // this.update();

    // this._timer = setInterval(() => {
    //   this.update();
    // }, 5000);

    if(this.userValue) return;

    // let pendingCount = this.spotsValue.length;
    let pendingCount = 0;
    this.spotsValue.forEach(element => {
      if(element.status === "pending"){
        pendingCount += 1;
      }
    });


    this.notificationsTarget.innerText = pendingCount;

    if(pendingCount === 0){
      this.notificationsTarget.classList.add("d-none");
    }else{
      this.notificationsTarget.classList.remove("d-none");
    }

  }

  // update(){
  //   let pendingCount = 0;
  //   // window.location.hostname
  //   // console.log(`https://${window.location.host}/owner/bookings/all`);
  //   // console.log(window.location.origin);
  //   fetch(`${window.location.origin}/owner/bookings/all`)
  //   .then(response => response.json())
  //   .then((data) => {
  //     // console.log(data);
  //     data.forEach(element => {
  //       if(element.status === "pending"){
  //         pendingCount += 1;
  //       }
  //     });
  //     // console.log(pendingCount);
  //     this.notificationsTarget.innerText = pendingCount;

  //     if(pendingCount === 0){
  //       this.notificationsTarget.classList.add("d-none");
  //     }else{
  //       this.notificationsTarget.classList.remove("d-none");
  //     }
  //   });
  // }

  // static afterLoad(identifier, application){
  //   console.log("hello yooo");
  // }
}
