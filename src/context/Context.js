import React from "react";
import { useState, createContext } from "react";

export const Context = createContext();

function ContextProvider(props) {
  const [timer, settimer] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  // start animation fn
  function startTimer() {
    setStartAnimate(true);
  }
  // pause animation fn
  function pauseTimer() {
    setStartAnimate(false);
  }

  function clearTimer() {
    setStartAnimate(false);
    settimer(0);
  }
  // pass time to counter
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  // clear session storage
  const SettingsBtn = () => {
    setExecuting({});
    settimer(0);
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        settimer(evaluate.work);
        break;
      case "short":
        settimer(evaluate.short);
        break;
      case "long":
        settimer(evaluate.long);
        break;
      default:
        settimer(0);
        break;
    }
  };

  function stopAimate() {
    setStartAnimate(false);
  }

  return (
    <Context.Provider
      value={{
        timer,
        executing,
        updateExecute,
        startAnimate,
        startTimer,
        pauseTimer,
        clearTimer,
        children,
        SettingsBtn,
        setCurrentTimer,
        stopAimate,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
