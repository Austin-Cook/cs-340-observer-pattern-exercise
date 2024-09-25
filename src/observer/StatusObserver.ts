import { FlightFeed } from "../FlightFeed";
import { Observer } from "./Subject";

class StatusObserver implements Observer {
  private _flightFeed: FlightFeed;

  constructor(flightFeed: FlightFeed) {
    this._flightFeed = flightFeed;
  }

  update() {
    if (this._flightFeed._flight == null) {
      console.log("StatusObserver: Flight does not exist");
    } else {
      console.log("StatusObserver: New Status:")
      console.log(this._flightFeed._flight);
    }
  }
}

export default StatusObserver;
