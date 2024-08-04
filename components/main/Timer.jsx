"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  TimerContainer,
  TimerDisplay,
  ButtonContainer,
  TimerButton,
  ModeButton,
  ButtonDisplay,
} from "./Timer.styled";
import { FaPlay, FaPause } from "react-icons/fa";
import { PiBrainLight, PiCoffee } from "react-icons/pi";
import { TbPlayerTrackNextFilled } from "react-icons/tb";


const PomoMode = {
  FOCUS: "focus",
  SHORT_BREAK: "shortBreak",
  LONG_BREAK: "longBreak",
};

const Status = {
  PAUSED: "",
  RUNNING: null,
};

export default function Timer() {
  const [mode, setMode] = useState(PomoMode.FOCUS);
  const [status, setStatus] = useState(Status.PAUSED);
  const [time, setTime] = useState(25 * 60);

  useEffect(() => {
    let interval = null;
    if (status === Status.RUNNING) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (status === Status.PAUSED && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [status, time]);

  const handleStart = () => {
    setStatus(Status.RUNNING);
  };

  const handlePause = () => {
    setStatus(Status.PAUSED);
  };

  const handleReset = () => {
    setStatus(Status.PAUSED);
    if (mode === PomoMode.FOCUS) setTime(25 * 60);
    else if (mode === PomoMode.SHORT_BREAK) setTime(5 * 60);
    else if (mode === PomoMode.LONG_BREAK) setTime(15 * 60);
  };

  const handleModeChange = () => {
    setStatus(Status.PAUSED);
    if (mode === PomoMode.FOCUS) {
      setMode(PomoMode.SHORT_BREAK);
      setTime(5 * 60);
    } else if (mode === PomoMode.SHORT_BREAK) {
      setMode(PomoMode.LONG_BREAK);
      setTime(15 * 60);
    } else {
      setMode(PomoMode.FOCUS);
      setTime(25 * 60);
    }
  };
  //   const formatTime = (seconds) => {
  //     const minutes = Math.floor(seconds / 60);
  //     const remainingSeconds = seconds % 60;
  //     return `${minutes < 10 ? '0' : ''}${minutes}\n${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  //   };

  return (
    <TimerContainer>
      <ButtonDisplay>
        <ModeButton
          onClick={() => handleModeChange("focus")}
          active={mode === "focus"}
        >
          <PiBrainLight size={32} /> Focus
        </ModeButton>
        <ModeButton
          onClick={() => handleModeChange("shortBreak")}
          active={mode === "shortBreak"}
        >
          <PiCoffee size={32} />
          Short Break
        </ModeButton>
        <ModeButton
          onClick={() => handleModeChange("longBreak")}
          active={mode === "longBreak"}
        >
          <PiCoffee size={32} /> Long Break
        </ModeButton>
      </ButtonDisplay>
      {/* {formatTime(time)} */}
      <TimerDisplay>
        <div>
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
        </div>
        <div>{(time % 60).toString().padStart(2, "0")}</div>
      </TimerDisplay>
      <ButtonContainer>
        <TimerButton onClick={handleModeChange}>
          <TbPlayerTrackNextFilled />
          {status}
        </TimerButton>
        {status === Status.PAUSED ? (
          <TimerButton onClick={handleStart}>
            <FaPlay />
          </TimerButton>
        ) : (
          <TimerButton onClick={handlePause}>
            <FaPause />
          </TimerButton>
        )}
        <TimerButton onClick={handleReset}>Reset</TimerButton>
      </ButtonContainer>
    </TimerContainer>
  );
}
