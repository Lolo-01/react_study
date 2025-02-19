import logo from '../logo.svg';
import '../App.css';
import image from "../image.png";
import image2 from "../짱구.png";

function App() {
  // 데이터 JSON 배열 정의
  const data = [
    {
      id: 1,
      imageSrc: image,
      name: "짱구",
      msg: "짱구는 못말려"
    },
    {
      id: 2,
      imageSrc2: image2,
      name2: "짱구2",
      msg2: "짱구는 못말려2"
    }
  ];

  return (
    <div className="App">
      <h1>6_div나누기</h1>
      {data.map(item => (
        <div key={item.id}>
          {item.imageSrc ? (
            <영역 imageSrc={item.imageSrc} name={item.name} msg={item.msg} />
          ) : (
            <영역2 imageSrc2={item.imageSrc2} name2={item.name2} msg2={item.msg2} />
          )}
        </div>
      ))}
    </div>
  );
}

// 영역 컴포넌트
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
        width:"13%"
      }}/>
      <div style={{
        display: "flex",
        color: 'black',
        flexDirection: 'column'
      }}>
        <h1>{props.name}</h1>
        {props.msg}
      </div>
    </div>
  );
}

// 영역2 컴포넌트
function 영역2(props) {
  return (
    <div style={{
      border: '3px solid red',
      width: '100%',
      height: '250px',
      color: 'white',
      display: "flex"
    }}>
      <img src={props.imageSrc2} />
      <div style={{
        display: "flex",
        color: 'black',
        flexDirection: 'column'
      }}>
        <h1>{props.name2}</h1>
        {props.msg2}
      </div>
    </div>
  );
}

export default App;
