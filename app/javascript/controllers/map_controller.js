import { Controller } from "@hotwired/stimulus"
import mapboxgl from 'mapbox-gl'

// Connects to data-controller="map"
export default class extends Controller {
  static values = {
    apiKey: String,
    marker: Object
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10"
    })
    this.#addMarkerToMap()

  }

  #addMarkerToMap() {
    new mapboxgl.Marker()
      .setLngLat([ this.markerValue.lng, this.markerValue.lat  ])
      .addTo(this.map)
  }
}
