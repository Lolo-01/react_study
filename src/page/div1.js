
function App() {
  return (
    <div>
      Home 으로
      <h1>1_div나누기</h1>
      <div className="App">
    <div className="box header" style={{
      backgroundColor: 'red',
      padding: '5px',
      color: 'white'

    }}>
      <h1>First</h1>
    </div>
        <영역2 />
        <영역3/>
      </div>
    </div>
  );
}

function 영역2(props) {
  return (
    <div className="left" style={{
      padding: '5px',
      backgroundColor: 'blue',
      color: 'white'
    }}>
      <h1>second</h1>
    </div>
  )
}

function 영역3(props) {
  return (
    <div style={{
      padding: '5px',
      backgroundColor: 'green',
      color: 'white'
    }}>
      <h1>third</h1>
    </div>
  )
}
export default App;