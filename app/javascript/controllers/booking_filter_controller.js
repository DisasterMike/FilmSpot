import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-filter"
export default class extends Controller {
  static targets = [ "filterBox", "currentFilter", "bookingsRow" ]
  static values = { bookingsDate: Array, bookingsName: Array, bookingsViewer: Array }

  connect() {
    // console.log("hello from the booking filter controller");
    // console.log(this.bookingsDateValue);
    // console.log(this.bookingsNameValue);
    // console.log(this.bookingsViewerValue);
  }

  enableFilterList(event){
    this.filterBoxTarget.classList.toggle("d-none");
  }

  disableFilterList(){
    this.filterBoxTarget.classList.add("d-none");
  }

  filterType(event){
    this.currentFilterTarget.innerText = event.currentTarget.innerText

    // set the variable used for the sorted list
    let allBookings = this.bookingsDateValue;
    switch (event.currentTarget.innerText) {
      case "Date":
        allBookings = this.bookingsDateValue;
        console.log("Date")
        break;
      case "Spot":
        allBookings = this.bookingsNameValue;
        console.log("Spot")
        break;
      case "Viewer":
        allBookings = this.bookingsViewerValue;
        console.log("Viewer")
        break;
      default:
        break;
    }
    // MAYBE TODO - sort the bookings depending on event.currentTarget.innerText instead of passing all in html
    // TODO - change the cards order! -
    // - either 1) change current card info, 2) remove cards and add new ones
    console.log(this.bookingsRowTarget);

    // Remove previous cards
    this.bookingsRowTarget.innerHTML = "";

    // Add cards back in sorted order
    // --> allBookings
    console.log(allBookings);
    console.log(typeof(allBookings));
    allBookings.forEach(element => {
      // this.bookingsRowTarget.insertAdjacentHTML("beforeend", `<h2>${element.booking_date}<h2>`);
      this.bookingsRowTarget.insertAdjacentHTML("beforeend", `
      <div data-booking-status-target="statusCard" class="col-sm-6 col-lg-4 booking-item">
        <div class="info m-3 border border-2 rounded-5 bg-light b-card" style="overflow: hidden;">
          <div class="b-back p-3">
            <div class="d-flex justify-content-between">
              <div class="d-flex gap-3">
                <p><i class="fa-solid fa-location-pin"></i></p>
                <p><%= booking.spot.address %></p>
              </div>
              <%= link_to booking_path(booking) do %>
                <i class="fa-solid fa-circle-info text-primary" style="font-size: 1.5rem;"></i>
              <% end %>
            </div>
            <% status_color = "text-success" if booking.status == "accepted" %>
            <% status_color = "text-danger" if booking.status == "declined" %>
            <%# image_tag("https://pbblogassets.s3.amazonaws.com/uploads/2016/07/Professional-Cinema-Camera.jpg", alt: "generic movie shooting image", width: 200) %>
            <h3><strong><%= booking.spot.name %></strong></h3>
            <p><i class="fa-regular fa-calendar-days"></i> <span><%= booking.booking_date %></span></p>
            <p class="b-main-text"><strong>Requested by:</strong> <%= booking.user.name %></p>
            <p class="b-main-text"><strong>Booking status:</strong> <span data-booking-status-target="statusWord" class="<%= status_color %>"><%= booking.status %></span></p>
          </div>
          <% if booking.status == "pending" %>
            <div class="accept-buttons d-flex justify-content-around p-3">
              <%# link_to "Accept", owner_booking_path(booking), :method => :patch %>
              <%= button_to("Accept", {controller: "bookings", action: "update", id: booking.id}, method: :patch, class: "btn btn-success rounded-pill text-light", params: { status: "accept" } ) %>
              <div class="border-start border-2"></div>
              <%= button_to("Decline", {controller: "bookings", action: "update", id: booking.id}, method: :patch, class: "btn btn-danger rounded-pill text-light", params: { status: "decline" } ) %>
            </div>
          <% end %>
        </div>
      </div>`);
    });
  }

  //// Private variables
  ///
  //

}
