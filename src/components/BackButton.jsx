import { useNavigate } from "react-router-dom";
import style from "./backbutton.css";
import backbutton from "./뒤로가기.png";
export default function BackButton() {
  const nav = useNavigate();
  const onClickBackButton = () => {
    nav(-1);
  };
  return (
    <div className={style.backbutton}>
      <img
        
        onClick={onClickBackButton}
        src={backbutton}
        alt="뒤로가기"
      />
    </div>
  );
}
