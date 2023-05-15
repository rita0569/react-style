import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "orange"
};

export const ChildArea = memo((props) => {
  const { open,onClickClose } = props;
  console.log("レンダリングされた");
  const data = [...Array(2000).keys()];
  data.map(() => console.log("..."));
  return (
    <>
      {/* {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null} */}
      {open && (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      )}
    </>
  );
});
