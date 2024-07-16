import './App.css';
import { useState } from 'react';


 const App=()=>{
  const [student, setStudent] = useState('')

  let studentName=()=>{
    console.log(student)
  }
  return (
    <div>
      <form>
      <label>Enter your name: <br />
        <input type="text" value={student} onChange={(event) => {setStudent(event.target.value)}}/> <br />
      </label>
      <input type="button" onClick={studentName} name="Name" value="Save Student"/>
    </form>
    </div>
  )
};

export default App;