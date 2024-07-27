import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"

// Connects to data-controller="datepicker"
export default class extends Controller {
  static targets = ["startDate", "endDate"]
  connect() {
    flatpickr( this.startDateTarget,  {
      minDate: "today",
      mode: "range",
      dateFormat: "Y-m-d",

    })
    flatpickr( this.endDateTarget,  {
      minDate: "today",
      mode: "range",
      dateFormat: "Y-m-d",
    })



  }

  handleDateChange (){
    // Get the date range from the input (2024-08-01 to 2024-08-10)
    const startInputDate = this.startDateTarget.value
    // const endInputDate = this.endDateTarget.value

    // Split the string and get the booking_date, end_date
    const start = startInputDate.split("to")[0];
    const end = startInputDate.split("to")[1];

    // Override the input form field values with the text from the split
    this.startDateTarget.value = start;
    this.endDateTarget.value = end || start;
  }
}
