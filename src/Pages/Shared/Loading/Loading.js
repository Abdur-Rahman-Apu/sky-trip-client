import Lottie from "lottie-react";
import React from "react";
import loadingAnimation from "../../../assets/loading.json";
export default function Loading() {
  return (
    <div className="w-96 mx-auto">
      <Lottie animationData={loadingAnimation} loop={true} />

      <p className="text-lg font-bold text-center mb-10">Loading...</p>
    </div>
  );
}
