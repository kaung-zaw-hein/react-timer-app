import React, { useEffect, useContext } from "react";
import SetPomodoro from './components/SetPomodoro/SetPomodoro'
import Button from './components/UI/Button'
import CountdownAnimation from "./components/UI/CountdownAnimation";
import { Context } from "./context/Context";
import './App.css';

function App() {

  const {
    timer,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    clearTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(Context);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate,updateExecute]);

  return (
    <div className="App">
      <div className="title">
        <h1>Timer</h1>
        <small>Be productive the right way.</small>
      </div>
      {timer === 0 ? (
        <SetPomodoro />
      ) : (
        <div>
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={
                  executing.active === "work" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={
                  executing.active === "short" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={
                  executing.active === "long" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingsBtn} />
          <div className="timer-container">
            <div className="time-wrapper">
              <CountdownAnimation
                key={timer}
                timer={timer}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              title="Start"
              activeClass={!startAnimate ? "active" : undefined}
              _callback={startTimer}
            />
            <Button
              title="Pause"
              activeClass={startAnimate ? "active" : undefined}
              _callback={pauseTimer}
            />
             <Button
              title="Clear"
              activeClass={startAnimate ? "active" : undefined}
              _callback={clearTimer} disabled={!startAnimate}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
