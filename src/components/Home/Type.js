
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
    "Frontend Developer",
    "React • Next.js • Shopify",
    "Building High-Performance Web Apps",
    "Creating Modern User Experiences",
  ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
