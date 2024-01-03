import React, { useState, useEffect } from 'react';

const FlipClockPiece = ({ property, value }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (value[property] === undefined) {
      setShow(false);
      return;
    }

    const val = value[property] < 0 ? 0 : value[property];

    if (val !== current) {
      setPrevious(current);
      setCurrent(val);
      setShow(true);
    }
  }, [value, property, current]);

  return (
    show && (
      <span className="flip-clock__piece">
        <span className="flip-clock__card flip-card">
          <b className="flip-card__top">{String(current).padStart(2, '0')}</b>
          <b className="flip-card__bottom" data-value={String(current).padStart(2, '0')}></b>
          <b className="flip-card__back" data-value={String(previous).padStart(2, '0')}></b>
          <b className="flip-card__back-bottom" data-value={String(previous).padStart(2, '0')}></b>
        </span>
        <span className="flip-clock__slot">{property}</span>
      </span>
    )
  );
};

const Timer = () => {
  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const countdownDate = new Date('2024-03-02T23:59:59'); // Mettre la date du compte à rebours ici

      const diff = countdownDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ Days: days, Hours: hours, Minutes: minutes, Seconds: seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flip-clock">
      {Object.keys(time).map((key) => (
        <FlipClockPiece key={key} property={key} value={time} />
      ))}
    </div>
  );
};

export default Timer;
