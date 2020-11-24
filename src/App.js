import React, { useState } from 'react';
import './App.css';

function App() {

  const [formValues, setFormValues] = useState({
    name: '',
    age: 0
  });

  function onChangeHandler(event) {
    console.log(event.target.name + ' = ' + event.target.value);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  }

  function onSubmitHandler(event) {
    console.log(formValues);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} >
        <fieldset>
          <legend>Gegevens</legend>
          <label>Naam:
            <input
              name="name"
              type="text"
              value={formValues.name}
              onChange={onChangeHandler}
            />
          </label>
          <label>Leeftijd:
            <input
              name="age"
              type="text"
              value={formValues.age}
              onChange={onChangeHandler}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Jouw review</legend>
          <label>Hoe heb je dit recept gevonden?
            <select
              name="source"
              value={formValues.source}
              onChange={onChangeHandler}
            >
              <option value="google">Google</option>
              <option value="friend">vriend</option>
              <option value="advertisement">Advertentie</option>
              <option value="nonOfAbove">Anders</option>
            </select>
          </label>
          <label>Opmerkingen:
            <textarea
              name="comments"
              value={formValues.comments}
              onChange={onChangeHandler}
            />
          </label>
        </fieldset>
        <button type="submit">Versturen</button>
      </form>
    </div>
  );
}

export default App;
