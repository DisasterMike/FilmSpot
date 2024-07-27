import { Controller } from "@hotwired/stimulus"

let previousReview;
const fake_reviews = [
  "This app is so cool! I found some really cool places!",
  "I made some extra bucks, I can't complain",
  "I needed a place for my student project, this site saved me a bunch of hassle",
  "I was able to rent out my restaurant to a Youtuber. It really helped my business grow!",
  "I'm so glad I found this app, it's helped me out so much!"
]

// Connects to data-controller="fake-reviews"
export default class extends Controller {
  // static values = { reviews: Array }
  static targets = [ "review" ]

  connect() {
    // console.log("hello from fake reviews controller");

    previousReview = this.#getRandomReview("");
    // console.log(previousReview);

    this.update(previousReview);

    this._timer = setInterval(() => {
      this.update(previousReview);
    }, 5000);
  }

  update(previous){
    const newReview = this.#getRandomReview(previous);
    // console.log(newReview);
    this.reviewTarget.innerText = newReview;
  }

  #getRandomReview(oldReview){
    let currentReview = fake_reviews[Math.floor(Math.random()*fake_reviews.length)];
    while(oldReview === currentReview){
      currentReview = fake_reviews[Math.floor(Math.random()*fake_reviews.length)];
    }
    previousReview = currentReview;
    return currentReview;
  }
}
