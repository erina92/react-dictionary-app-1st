import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results mt-5">
        <section>
          <h1 className="capitalize">{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            if (index < 3) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            } else {
              return null;
            }
          })}
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
