import {useState} from "react";
import {ColoredMessage} from "./components/ColoredMessage";
import {CssModules} from "./components/CssModules";

export const App = () => {
  console.log("レンダリング");
  // const [num,setNum] = useState(0);

  // const onClickButton = () => {
  //   setNum((v) => v+1 );
  // }

  //CSSオブジェクト


  return (
    <>
      {/* {console.log("TEST")}
      <h1 style={{color:"red"}}>こんにちは</h1>
      <ColoredMessage color="pink">You</ColoredMessage>
        <ColoredMessage color="orange">
        <div>
          <p>aaa</p>
          <p>bbb</p>
        </div>
        </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p> */}


  {/*  */}
      <CssModules></CssModules>
    </>
  );

  //イベントはキャメルケースで記載する

  // Fragmentはインポートする必要あり

  // return (
  //   <div>
  //     <h1>こんにちは</h1>
  //     <p>お元気？</p>
  //   </div>
  // );
  //複数は()で囲むが1つのタグで囲まれている必要がある


  // return <h1>こんにちは</h1>;
};
