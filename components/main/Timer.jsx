"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
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
import { LuRefreshCcw } from "react-icons/lu";
import Label from "../label/Label";

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
  const [mode, setMode] = useState("focus");
  const [status, setStatus] = useState(Status.PAUSED);
  const [time, setTime] = useState(25 * 60);
  const [isReset, setIsRest] = useState(false);
  const [bgPage, setBgPage] = useState("#0d0404");
  const [startBg, setStartBg] = useState("#a33030");
  const [btBgRs, setBtBgRs] = useState("#471515");

  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio("/assets/audio.mp3");
    }
  }, []);

  useEffect(() => {
    if (time === 0 && !isReset) {
      audioRef.current.play();
    }   
  }, [time, isReset]);

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
    setIsRest(false)
  };

  const handlePause = () => {
    setStatus(Status.PAUSED);
  };

  const handleReset = () => {
    setIsRest(true);
    setStatus(Status.PAUSED);
    if (mode === "focus") {
      setTime(25 * 60);
      
    } else if (mode === "shortBreak") {
      setTime(5  * 0.6);
    } else if (mode === "longBreak") {
      setTime(15 * 60);
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleModeChange = () => {
    setStatus(Status.PAUSED);
    if (mode === "focus") {
      setMode("shortBreak");
      setTime(5 * 0.6);
      setBgPage("#040d06");
      setStartBg("#328c45");
      setBtBgRs("#0f2c15");

    } else if (mode === "shortBreak") {
      setMode("longBreak");
      setBgPage("#04090d");
      setStartBg("#306ea3");
      setBtBgRs("#0e2231");

      setTime(15 * 60);
    } else {
      setMode("focus");
      setTime(25 * 60);
      setBgPage("#0d0404");
      setStartBg("#a33030");
      setBtBgRs("#471515");
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <TimerContainer $color={bgPage}>
      {mode === PomoMode.FOCUS && (
        <Label
          icon={PiBrainLight}
          text="Focus"
          $mode="focus"
          $active={mode === "focus"}
        />
      )}
      {mode === PomoMode.SHORT_BREAK && (
        <Label
          icon={PiCoffee}
          text="Short Break"
          $mode="shortBreak"
          $active={mode === "shortBreak"}
        />
      )}
      {mode === PomoMode.LONG_BREAK && (
        <Label
          icon={PiCoffee}
          text="Long Break"
          $mode="longBreak"
          $active={mode === "longBreak"}
        />
      )}

      <TimerDisplay>
        <div>
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
        </div>
        <div>{(time % 60).toString().padStart(2, "0")}</div>
      </TimerDisplay>
      <ButtonContainer>
        <TimerButton $buttonColor={btBgRs} onClick={handleModeChange}>
          <TbPlayerTrackNextFilled size={20} />
          {status}
        </TimerButton>
        <TimerButton
          $buttonColor={startBg}
          onClick={status === Status.PAUSED ? handleStart : handlePause}
          $isBig={true}
        >
          {status === Status.PAUSED ? (
            <FaPlay size={20} />
          ) : (
            <FaPause size={20} />
          )}
        </TimerButton>
        {/* {status === Status.PAUSED ? (
        ) : (
          <TimerButton buttonColor={startBg} isBig={true} onClick={handlePause}>
            <FaPause size={20}/>
          </TimerButton>
        )} */}
        <TimerButton $buttonColor={btBgRs} onClick={handleReset}>
          <LuRefreshCcw size={20} />
        </TimerButton>
      </ButtonContainer>
    </TimerContainer>
  );
}
