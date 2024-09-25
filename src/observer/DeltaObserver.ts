import { Flight } from "../entity/Flight";
import { FlightFeed } from "../FlightFeed";
import { Observer } from "./Subject";

class DeltaObserver implements Observer {
  private _flightFeed: FlightFeed;
  private _lastFlight: Flight | null = null;

  constructor(flightFeed: FlightFeed) {
    this._flightFeed = flightFeed;
  }

  update() {
    let prevData: Flight | null = this._lastFlight;
    let newData: Flight | null = this._flightFeed._flight;

    if (prevData == null) {
      console.log("DeltaObserver: Delta data unavailable: No prev data to compare with");
    } else if (newData == null) {
      console.log("DeltaObserver: Delta data unavailable: Flight over");
    } else {
      // log deltas
      console.log('DeltaObserver: Delta Data:')
      console.log(`longitude change: ${newData.longitude - prevData.longitude}`);
      console.log(`latitude change: ${newData.latitude - prevData.latitude}`);
      console.log(`velocity change: ${newData.velocity - prevData.velocity}`);
      console.log(`baro_altitude change: ${newData.baro_altitude - prevData.baro_altitude}`);
      console.log(`geo_altitude change: ${newData.geo_altitude - prevData.geo_altitude}`);
    }

    this._lastFlight = this._flightFeed._flight;
  }
}

export default DeltaObserver;
