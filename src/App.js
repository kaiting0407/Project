import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import "./styles/style.css";

function App() {
  const [forms, setForms] = useState([
    { id: 0, credits: 0, grade: 0, animate: false },
    { id: 1, credits: 0, grade: 0, animate: false },
    { id: 2, credits: 0, grade: 0, animate: false },
  ]);
  const [TotalCredits, setTotalCredits] = useState(0);
  const [Sum, setSum] = useState(0);
  /* useEffect(() => {
    setTotalCredits(Credits1 + Credits2 + Credits3);
  }, [Credits1, Credits2, Credits3]);
  useEffect(() => {
    setSum(Credits1*grade1 + Credits2*grade2 + Credits3*grade3);
  }, [Credits1, Credits2, Credits3,grade1,grade2,grade3]);*/
  useEffect(() => {
    const totalCredits = forms.reduce((acc, form) => acc + form.credits, 0);
    const sum = forms.reduce((acc, form) => acc + form.credits * form.grade, 0);
    setTotalCredits(totalCredits);
    setSum(sum);
  }, [forms]);

  const addForm = () => {
    const newForm = {
      id: forms.length, // 有不同的key
      credits: 0,
      grade: 0,
      animate: true,
    };
    setForms([...forms, newForm]); // 新表單
  };

  const deleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <main className="Main">
        <h1>Grade Input form</h1>
        <div className="all-input">
          {forms.map((form, index) => (
            <Form
              key={form.id}
              id={form.id}
              setCredits={(credits) => {
                const newForms = [...forms];
                newForms[index].credits = parseInt(credits, 10) || 0;
                setForms(newForms);
              }}
              setGrade={(grade) => {
                const newForms = [...forms];
                newForms[index].grade = parseFloat(grade) || 0;
                setForms(newForms);
              }}
              onDelete={deleteForm}
              shouldAnimate={form.animate}
            />
          ))}
        </div>

        <button type="button" className="plus-btn" onClick={addForm}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="result">
          <p>
            Your semester <br />
            GPA is
          </p>
          <h1>{TotalCredits > 0 ? (Sum / TotalCredits).toFixed(2) : "0.00"}</h1>
        </div>
      </main>

      <datalist id="opt">
        <option value="ACCT">Accounting</option>
        <option value="ASL">American Sign Language</option>
        <option value="ANTH">Anthropology</option>
        <option value="ART">Art</option>
        <option value="BIOL">Biological Science</option>
        <option value="BUSM">Business Mgt</option>
        <option value="CRDEV">Career Development</option>
        <option value="CHEM">Chemistry</option>
        <option value="CHIN">Chinese</option>
        <option value="COMM">Communication Studies</option>
        <option value="CIS">Computer & Information Sciences</option>
        <option value="CS">Computer Science</option>
        <option value="CRMJ">Criminal Justice</option>
        <option value="ECON">Economics</option>
        <option value="EDU">Education</option>
        <option value="ELED">Elementary Education</option>
        <option value="EMGT">Emergency Management</option>
        <option value="ENGL">English</option>
        <option value="EIL">English as Int'l Language</option>
        <option value="ENTR">Entrepreneurship</option>
        <option value="EXS">Exercise Sport Science</option>
        <option value="FILM">Film</option>
        <option value="FIN">Finance</option>
        <option value="FORS">Forensic Science</option>
        <option value="FREN">French</option>
        <option value="GEOG">Geography</option>
        <option value="HAWN">Hawaiian</option>
        <option value="HWST">Hawaiian Studies</option>
        <option value="HLTH">Health</option>
        <option value="HIST">History</option>
        <option value="HEC">Home Economics</option>
        <option value="HTM">Hospitality Tourism Mgt</option>
        <option value="HUM">Humanities</option>
        <option value="IS">Information System</option>
        <option value="IT">Information Technology</option>
        <option value="ICS">International Cultural Studies</option>
        <option value="IPB">Intercultural Peacebuilding</option>
        <option value="JPN">Japanese</option>
        <option value="LING">Linguistics</option>
        <option value="AMOR">Maori</option>
        <option value="MATH">Mathematics</option>
        <option value="MUSC">Music</option>
        <option value="OCEN">Oceanography</option>
        <option value="PAIS">Pacific Island Studies</option>
        <option value="PHSC">Physical Science</option>
        <option value="POSC">Political Science</option>
        <option value="PSYC">Psychology</option>
        <option value="PMGT">Public Management</option>
        <option value="REL">Religion</option>
        <option value="SCI">Science</option>
        <option value="SAMN">Samoan</option>
        <option value="SCED">Secondary Education</option>
        <option value="SOCW">Social Work</option>
        <option value="SPAN">Spanish</option>
        <option value="SPED">Special Education</option>
        <option value="STDEV">Student Development</option>
        <option value="TESOL">TESOL</option>
        <option value="THEA">Theatre</option>
        <option value="TONG">Tongan</option>
        <option value="WLNG">World Language</option>
      </datalist>
    </div>
  );
}

export default App;
