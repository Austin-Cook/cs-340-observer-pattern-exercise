import { FlightFeed } from "./FlightFeed";
import DeltaObserver from "./observer/DeltaObserver";
import StatusObserver from "./observer/StatusObserver";

main();

function main() {
  let feed = new FlightFeed();
  feed.attach(new StatusObserver(feed));
  feed.attach(new DeltaObserver(feed));
  feed.start();
}
