import React, { useState } from "react";

function Form({ id, setGrade, setCredits, onDelete, shouldAnimate }) {
  //
  const formClass = shouldAnimate ?"f1"  : "f1Animated";
  //const [Grade, setGrade] = useState(0);
  //const [Credits, setCredits] = useState(0);
  const handleCreditChange = (e) => {
    setCredits(e.target.valueAsNumber);
  };
  const handleGradeChange = (e) => {
    const numericGrade = convert(e.target.value);
    setGrade(numericGrade);
    changeColor(e.target);
  };
  function convert(grade) {
    switch (grade) {
      case "A":
        return 4;
      case "A-":
        return 3.7;
      case "B+":
        return 3.4;
      case "B":
        return 3;
      case "B-":
        return 2.7;
      case "C+":
        return 2.4;
      case "C":
        return 2;
      case "C-":
        return 1.7;
      case "D+":
        return 1.4;
      case "D":
        return 1;
      case "D-":
        return 0.7;
      case "F":
        return 0;
      default:
        return 0;
    }
  }
  function changeColor(target) {
    target.style.color = "black";
    if (target.value == "A" || target.value == "A-") {
      target.style.backgroundColor = "lightgreen";
      // target.style.color="black";
    } else if (
      target.value == "B+" ||
      target.value == "B-" ||
      target.value == "B"
    ) {
      target.style.backgroundColor = "yellow";
    } else if (
      target.value == "C+" ||
      target.value == "C-" ||
      target.value == "C"
    ) {
      target.style.backgroundColor = "orange";
    } else if (
      target.value == "D+" ||
      target.value == "D-" ||
      target.value == "D"
    ) {
      target.style.backgroundColor = "red";
    } else if (target.value == "F") {
      target.style.backgroundColor = "black";
      target.style.color = "white";
    } else {
      target.style.backgroundColor = "white";
    }
  }
  return (
    <form className={formClass}>
      <div className="grader">
        <input
          type="text"
          placeholder="class category"
          className="class-type"
          list="opt"
        />
        <input
          type="text"
          placeholder="class number"
          className="class-number"
        />
        <input
          type="number"
          placeholder="credits"
          min="0"
          max="6"
          className="class-credit"
          onChange={handleCreditChange}
        />
        <select name="select" className="select" onChange={handleGradeChange}>
          <option value=""></option>
          <option value="A">A</option>
          <option value="A-">A -</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="D-">D-</option>
          <option value="F">F</option>
        </select>
        <button className="trash-button" onClick={() => onDelete(id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </form>
  );
}

export default Form;
