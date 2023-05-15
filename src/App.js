import { useState, useCallback } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export default function App() {
  // console.log("App");
  // const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };
  // const onClickOpen = () => {
  //   setOpen(!open);
  // };
  // const onClickClose = useCallback(() => {
  //   setOpen(false);
  // },[setOpen]);
  // return (
  //   <div className="App">
  //     <input
  //       style={{
  //         width: "300px"
  //       }}
  //       value={text}
  //       onChange={onChangeText}
  //       placeholder={"文字を入力してください。"}
  //     />
  //     <br />
  //     <br />
  //     <button onClick={onClickOpen}>表示</button>
  //     <ChildArea open={open} onClickClose={onClickClose}/>
  //   </div>
  // );
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
