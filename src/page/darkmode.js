import { useState } from 'react';
function App() {
  const [다크모드, set다크모드] = useState('false');
  return (
    <div className="App">
      <input type="button" value="다크모드" onClick={
        () => {
          set다크모드(!다크모드);
          
        }
      }
      />
      <영역 mode={다크모드}/>
    </div>
  );
}
function 영역(props) {
  return (
    <div style={{
      width: '100%',
      height: '600px',
      border: '1px solid red',
      backgroundColor: props.mode ? 'white' : 'black'
    }} />
      
  )
}
export default App;
