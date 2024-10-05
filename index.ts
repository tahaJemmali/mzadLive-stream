import axios from "axios";
import NodeMediaServer from "node-media-server";
import config from "./config/config";
import StreamEvents from "./utils/enums";

const nms = new NodeMediaServer(config);

nms.on(StreamEvents.PostPublish, (id, streamPath, args) => {
  axios.put(
    "http://localhost:4001/livestream/start",
    {},
    {
      headers: {
        MAZADLIVEKEY: "pbCzImfetHloUcBVjuAXIXwnNbrvUAY4",
        APP: "flutter_mazadLive_app",
      },
    }
  );
});
nms.on(StreamEvents.DonePublish, (id, streamPath, args) => {
  axios.put(
    "http://localhost:4001/livestream/end",
    {},
    {
      headers: {
        MAZADLIVEKEY: "pbCzImfetHloUcBVjuAXIXwnNbrvUAY4",
        APP: "flutter_mazadLive_app",
      },
    }
  );
});

nms.run();
