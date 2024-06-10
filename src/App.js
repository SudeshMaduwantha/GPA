import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Input from './components/Input';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [gpa, setGpa] = useState(null);
  const [gradeInput, setGradeInput] = useState({ credit: '', grade: '' });

  const addSubject = () => {
    const credit = parseFloat(gradeInput.credit);
    const grade = parseFloat(gradeInput.grade);
    if (!isNaN(credit) && !isNaN(grade)) {
      setSubjects([...subjects, { credit, grade }]);
      setGradeInput({ credit: '', grade: '' });
    }
  };

  const calculateGpa = () => {
    const totalCredits = subjects.reduce((acc, subject) => acc + subject.credit, 0);
    const totalGradePoints = subjects.reduce((acc, subject) => acc + (subject.credit * subject.grade), 0);
    const gpa = totalGradePoints / totalCredits;
    setGpa(gpa.toFixed(2));
  };

  return (
    <>
      <Container>
        <center><h1 className='text'><br></br>GPA Calculator</h1></center>
        <div>
          <Input 
            placeholder="Credit Value" 
            value={gradeInput.credit}
            onChange={(e) => setGradeInput({ ...gradeInput, credit: e.target.value })}
          />
          <Input 
            placeholder="Grade Value" 
            value={gradeInput.grade}
            onChange={(e) => setGradeInput({ ...gradeInput, grade: e.target.value })}
          >
            <Button variant="outline-success" onClick={addSubject}>ADD</Button>
          </Input>
        </div>
        <br/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Credit Value</th>
              <th>Grade Value</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{subject.credit}</td>
                <td>{subject.grade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" onClick={calculateGpa}>Calculate GPA</Button>
        {gpa && (
          <><div> <br></br>
            <h2>Your GPA is: {gpa}</h2> <br></br>

          </div><div>
             <center> <h6 className='color'>developed by SUDESH MADUWANTHA KUMARASIRI</h6></center>
            </div></>
        )}
      </Container>
    </>
  );
}

export default App;
