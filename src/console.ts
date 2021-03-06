import Logger, { ConsoleTransport, DefaultFormatter } from "@ayanaware/logger";
import { ConsoleFormatter } from "./struct/ConsoleFormatter";

Logger.setFormatter(new DefaultFormatter({
  disableDefaultColors: true
}));

Logger.addTransport(new ConsoleTransport({
  formatter: new ConsoleFormatter()
}));

Logger.disableDefaultTransport();