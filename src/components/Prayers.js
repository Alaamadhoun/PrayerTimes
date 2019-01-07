import React from "react";

const Prayer = props => (
  <div className="prayer__info">
    {props.city && props.country && (
      <p className="prayer__key">
        Location:
        <span className="prayer__value">
          {props.city}, {props.country}
        </span>
      </p>
    )}

    {props.Fajr && (
      <p className="prayer__key">
        Fajr:
        <span className="prayer__value">{props.Fajr} </span>
      </p>
    )}

    {props.Sunrise && (
      <p className="prayer__key">
        Sunrise:
        <span className="prayer__value"> {props.Sunrise} </span>
      </p>
    )}

    {props.Dhuhr && (
      <p className="prayer__key">
        Dhuhr:
        <span className="prayer__value"> {props.Dhuhr} </span>
      </p>
    )}

    {props.Asr && (
      <p className="prayer__key">
        Asr:
        <span className="prayer__value"> {props.Asr} </span>
      </p>
    )}

    {props.Maghrib && (
      <p className="prayer__key">
        Maghrib:
        <span className="prayer__value"> {props.Maghrib} </span>
      </p>
    )}
    {props.Isha && (
      <p className="prayer__key">
        Isha:
        <span className="prayer__value"> {props.Isha} </span>
      </p>
    )}
    {props.error && <p className="prayer__error">{props.error}</p>}
  </div>
);

export default Prayer;
