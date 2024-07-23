import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["panel"];

  connect() {
    // Optionally initialize the accordion state
    console.log("Accordion controller connected");
  }

  toggle(event) {
    const button = event.currentTarget;
    const panel = button.nextElementSibling;

    button.classList.toggle("active");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
