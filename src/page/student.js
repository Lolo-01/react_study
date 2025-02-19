import '../App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [kor, setKor] = useState('');
  const [eng, setEng] = useState('');
  const [math, setMath] = useState('');
  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    if (!name || !kor || !eng || !math) {
      alert('모든 입력값을 채워주세요!');
      return;
    }

    const newStudent = {
      name,
      kor: Number(kor), 
      eng: Number(eng),
      math: Number(math),
    };

    setStudents([...students, newStudent]);

    // 입력 필드 초기화
    setName('');
    setKor('');
    setEng('');
    setMath('');
  };

  return (
    <div className="app-container">
      <h1>학생 성적</h1>
      <div className="input-container">
        <span>입력</span>
        <br />
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="국어"
          value={kor}
          onChange={(e) => setKor(e.target.value)}
        />
        <input
          type="number"
          placeholder="영어"
          value={eng}
          onChange={(e) => setEng(e.target.value)}
        />
        <input
          type="number"
          placeholder="수학"
          value={math}
          onChange={(e) => setMath(e.target.value)}
        />
        <input type="button" value="추가" onClick={handleAddStudent} />
      </div>

      {/* 학생 리스트 출력 */}
      <StudentList students={students} />
    </div>
  );
}

// 학생 리스트를 출력하는 컴포넌트
function StudentList({ students }) {
  return (
    <div className="student-list">
      <h2>리스트</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.kor}</td>
              <td>{student.eng}</td>
              <td>{student.math}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
