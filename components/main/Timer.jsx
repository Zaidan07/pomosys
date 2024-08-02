"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import {
  TimerContainer,
  TimerDisplay,
  ButtonContainer,
  TimerButton,
  ModeButton,
} from './Timer.styled';
import { Roboto } from 'next/font/google';
import {FaPlay, FaPause} from "react-icons/fa"

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})


export default function Timer () {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('focus');

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    if (mode === 'focus') setTime(25 * 60);
    else if (mode === 'shortBreak') setTime(5 * 60);
    else if (mode === 'longBreak') setTime(15 * 60);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIsActive(false);
    if (newMode === 'focus') setTime(25 * 60);
    else if (newMode === 'shortBreak') setTime(5 * 60);
    else if (newMode === 'longBreak') setTime(15 * 60);
  };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes < 10 ? '0' : ''}${minutes}\n${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

  return (
    <TimerContainer>
      <ModeButton onClick={() => handleModeChange('focus')} active={mode === 'focus'}>
        Focus
      </ModeButton>
      <ModeButton onClick={() => handleModeChange('shortBreak')} active={mode === 'shortBreak'}>
        Short Break
      </ModeButton>
      <ModeButton onClick={() => handleModeChange('longBreak')} active={mode === 'longBreak'}>
        Long Break
      </ModeButton>
      {/* {formatTime(time)} */}
      <TimerDisplay className={roboto.className}>
      <div>{Math.floor(time / 60).toString().padStart(2, '0')}</div>
      <div>{(time % 60).toString().padStart(2, '0')}</div>
      </TimerDisplay>
      <ButtonContainer>
        {!isActive ? (
          <TimerButton onClick={handleStart}><FaPlay/></TimerButton>
        ) : (
          <TimerButton onClick={handlePause}><FaPause/></TimerButton>
        )}
        <TimerButton onClick={handleReset}>Reset</TimerButton>
      </ButtonContainer>
    </TimerContainer>
  );
};

