"use client";

export default function useSocket() {
  const connect = () => {
    console.log("socket connected");
  };

  return {
    connect,
  };
}