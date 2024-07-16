"use client";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Contact = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://lottie.host/a2ccb5ab-0842-4d77-b376-9a177aa87d71/vX73QFuEWa.json"
        style={{ height: "800px", width: "800px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default Contact;
