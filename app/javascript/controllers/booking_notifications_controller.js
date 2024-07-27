import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-notifications"
export default class extends Controller {
  static targets = [ "notifications" ]
  static values = { userNil: Boolean }

  connect() {
    // if(this.userNilValue) return;

    this.update();

    // this._timer = setInterval(() => {
    //   this.update();
    // }, 5000);

  }

  update(){
    if(this.userNilValue) return;

    let pendingCount = 0;
    fetch(`${window.location.origin}/owner/bookings/all`)
    .then(response => response.text()) // Parse the response as text
    .then(text => {
      try {
        const data = JSON.parse(text); // Try to parse the response as JSON
        // The response was a JSON object
        // Do your JSON handling here
        data.forEach(element => {
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
      } catch(err) {
        // The response wasn't a JSON object
        // Do your text handling here
        console.log(err);
      }
    });


    // fetch(`${window.location.origin}/owner/bookings/all`)
    // .then(response => response.json())
    // .then((data) => {
    //   // console.log(data);
    //   data.forEach(element => {
    //     if(element.status === "pending"){
    //       pendingCount += 1;
    //     }
    //   });
    //   // console.log(pendingCount);
    //   this.notificationsTarget.innerText = pendingCount;

    //   if(pendingCount === 0){
    //     this.notificationsTarget.classList.add("d-none");
    //   }else{
    //     this.notificationsTarget.classList.remove("d-none");
    //   }
    // });
  }
}
