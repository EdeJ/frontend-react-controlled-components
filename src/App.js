import React, { useState } from 'react';
import './App.css';

function App() {

  const [formValues, setFormValues] = useState({
    name: '',
    age: 0
  });

  return (
    <div>
      <form>
        <label htmlFor="name">
          <input name="name" type="text" value={formValues.name} />
        </label>
        <label htmlFor="age">
          <input name="age" type="text" value={formValues.age} />
        </label>
      </form>
    </div>
  );
}

export default App;
