import Image from "../image.png";

function App() {
  return (
    <div className="App">
      <h1>4_div나누기</h1>
      <영역 imageSrc={Image} name="짱구" msg="짱구는 못말려" />
      <영역 imageSrc={Image} name="짱구" msg="짱구는 못말려" />
    </div>
  );
}

function 영역(props) {
  return (
    <div style={{
      border: '3px solid red',
      width: '100%',
      height: '250px',
      color: 'white',
      display: "flex"
    }}>
      <img src={props.imageSrc} style={{
        width: '30%',
        height: 'auto',
      }} />
      <div style={{
        display: "flex",
        color: 'black',
        flexDirection: 'column'
      }}>
        <h1>{props.name}</h1>
        {props.msg}
      </div>
    </div>

  )
}




export default App;