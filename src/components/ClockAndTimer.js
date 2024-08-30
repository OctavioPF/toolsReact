// src/components/ClockAndTimer.js
import React, { useState, useEffect } from "react";
import "./ClockAndTimer.css";

function ClockAndTimer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timer, setTimer] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timerInterval;
    if (isRunning) {
      timerInterval = setInterval(() => {
        setMilliseconds((prev) => (prev + 10) % 1000);
        if (milliseconds === 990) {
          setTimer((prev) => prev + 1);
        }
      }, 10);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, milliseconds]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
    setMilliseconds(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="clockAndTimer">
        <h2 className="textH2-clock">Clock and Timer</h2>
      <div className="clock">
        <p>Current Time: {time}</p>
      </div>
      <div className="timer">
        <p>Timer: {formatTime(timer)}.{String(milliseconds / 10).padStart(2, '0')}s</p>
        <div className="buttons">
          <button onClick={startTimer} className="btn start-btn">Start</button>
          <button onClick={stopTimer} className="btn stop-btn">Stop</button>
          <button onClick={resetTimer} className="btn reset-btn">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default ClockAndTimer;
