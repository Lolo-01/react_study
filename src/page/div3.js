import Image from "../image.png";

function App() {
  return (
    <div className="App">
      <h1>3_div나누기</h1>
      <div style={{
        border: '3px solid red',
        width: '100%',
        height: '250px',
        color: 'white',
        display: "flex"
      }}>
        <이미지 imageSrc={Image} />
        <영역 />
      </div>
    </div>
  );
}

function 이미지(props) {
  return (
    <div>
      <img src={props.imageSrc} style={{
        width: '49%',
        height: 'auto',
        display: "flex"
      }} />
    </div>
  )
}

function 영역(props) {
  return (
    <div style={{
      display: "flex",
      color: 'black',
      flexDirection: 'column'
    }}>
      <h1>짱구</h1>
        짱구는 못말려~~~
    </div>
  )
}


export default App;