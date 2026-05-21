"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

const STATIONS = [
  { id: "d1", name: "NapNest Premium - District 1 (Bitexco)", city: "Ho Chi Minh City" },
  { id: "d3", name: "NapNest Cosy - District 3 (Turtle Lake)", city: "Ho Chi Minh City" },
  { id: "hightech", name: "NapNest Tech - District 9 (Hi-Tech Park)", city: "Ho Chi Minh City" }
];

const INITIAL_PODS = [
  { id: 1, name: "Pod Alpha-01", status: "Available" },
  { id: 2, name: "Pod Alpha-02", status: "Occupied" },
  { id: 3, name: "Pod Alpha-03", status: "Available" },
  { id: 4, name: "Pod Alpha-04", status: "Available" },
  { id: 5, name: "Pod Beta-01", status: "Occupied" },
  { id: 6, name: "Pod Beta-02", status: "Sterilizing", countdown: 45 },
  { id: 7, name: "Pod Beta-03", status: "Available" },
  { id: 8, name: "Pod Beta-04", status: "Available" },
  { id: 9, name: "Pod Gamma-01", status: "Available" },
  { id: 10, name: "Pod Gamma-02", status: "Occupied" },
  { id: 11, name: "Pod Gamma-03", status: "Available" },
  { id: 12, name: "Pod Gamma-04", status: "Available" }
];

export function BookingProvider({ children }) {
  const [stations] = useState(STATIONS);
  const [selectedStation, setSelectedStation] = useState(STATIONS[0]);
  const [pods, setPods] = useState(INITIAL_PODS);
  const [selectedPodId, setSelectedPodId] = useState(null);
  
  // Hours: default 2h base, bounds 2 to 12
  const [bookingHours, setBookingHours] = useState(2);
  
  // Simulator active session
  const [activeSession, setActiveSession] = useState(null); // stores { podId, hours, price } if active
  
  // LED Glowing color (Warm Amber -> Deep Cyber Cyan)
  const [ledColor, setLedColor] = useState("#F59E0B"); // default amber
  
  // Sound waves ambient
  const [ambientTrack, setAmbientTrack] = useState("None"); // None, Rain, Ocean, Forest

  // Calculate pricing: 69k for base 2h, +15k each additional hour
  const calculatePrice = (hours) => {
    const baseHours = 2;
    const basePrice = 69000;
    const extraHourRate = 15000;
    
    if (hours <= baseHours) {
      return basePrice;
    }
    
    const extraHours = Math.max(0, Math.ceil(hours - baseHours));
    return basePrice + (extraHours * extraHourRate);
  };

  // Keep track of UVC Countdown decrement interval
  useEffect(() => {
    const timer = setInterval(() => {
      setPods((prevPods) =>
        prevPods.map((pod) => {
          if (pod.status === "Sterilizing") {
            const nextCountdown = pod.countdown - 1;
            if (nextCountdown <= 0) {
              return { ...pod, status: "Available", countdown: undefined };
            }
            return { ...pod, countdown: nextCountdown };
          }
          return pod;
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const selectPod = (podId) => {
    const pod = pods.find((p) => p.id === podId);
    if (!pod || pod.status !== "Available") return; // denyOccupied / Sterilizing clicks
    setSelectedPodId(podId);
  };

  const handleCheckout = () => {
    if (!selectedPodId) return;
    
    const pod = pods.find((p) => p.id === selectedPodId);
    if (!pod || pod.status !== "Available") return;

    // Transition selected pod to Occupied and activate Simulator session
    setPods((prev) =>
      prev.map((p) => (p.id === selectedPodId ? { ...p, status: "Occupied" } : p))
    );

    const price = calculatePrice(bookingHours);
    setActiveSession({
      podId: selectedPodId,
      podName: pod.name,
      hours: bookingHours,
      price: price
    });
    
    setSelectedPodId(null); // Reset grid selection
  };

  const handleEndSession = () => {
    if (!activeSession) return;
    
    const targetPodId = activeSession.podId;
    
    // Transition pod status to Sterilizing with 60-second countdown
    setPods((prev) =>
      prev.map((p) =>
        p.id === targetPodId
          ? { ...p, status: "Sterilizing", countdown: 60 }
          : p
      )
    );
    
    // Reset Simulator settings & active session
    setActiveSession(null);
    setAmbientTrack("None");
    setLedColor("#F59E0B");
  };

  const currentPrice = calculatePrice(bookingHours);

  return (
    <BookingContext.Provider
      value={{
        stations,
        selectedStation,
        setSelectedStation,
        pods,
        selectedPodId,
        selectPod,
        bookingHours,
        setBookingHours,
        currentPrice,
        activeSession,
        setActiveSession,
        ledColor,
        setLedColor,
        ambientTrack,
        setAmbientTrack,
        handleCheckout,
        handleEndSession,
        calculatePrice
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
