"use client";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Email = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://lottie.host/a494dbfe-ddfc-4b49-8fe3-d36a758e9f1e/myAN9iVnZ3.json"
        style={{ height: "450px", width: "450px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default Email;
