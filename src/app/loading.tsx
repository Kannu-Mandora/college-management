"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="h-[80dvh] flex justify-center items-center" >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={"var(--secondary)"}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}
