// BackgroundVideo.js
import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-65 overflow-hidden">
      {/* Content at the Top */}
      <h1 className="text-black text-3xl font-bold text-center">
        Navigate your next
      </h1>
      <br></br>

      {/* Background Video */}
      <video className="min-w-full object-cover" style={{height : "500px"}} autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2018/02/19/14385-256955049_large.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default BackgroundVideo;
