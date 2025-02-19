
function App() {
  return (
    <div className="App">
      <h1>2_div나누기</h1>
      <div className="box header" style={{
        backgroundColor: 'red',
        padding: '5px',
        color: 'white'
      }}>
        <h1>First</h1>
      </div>        
    
      <영역2/>
      <영역3/>
    </div>
  );
}

function 영역2(props) {
  return (
    <div style={{
      backgroundColor: 'blue',
      color: 'white',
      width: '50%',
      display: 'inline-block'
    }}>
      <h1>second</h1>
    </div>
  )
}

function 영역3(props) {
  return (
    <div style={{
      backgroundColor: 'green',
      color: 'white',
      width: '50%',
      display: 'inline-block'
    }}>
      <h1>third</h1>
    </div>
  )
}
export default App;