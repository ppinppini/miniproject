import Button from "../components/Button";
import style from"./Home.module.css";
import { useNavigate } from "react-router-dom";
export default function Home () {
  const nav = useNavigate();
        
  const onClickBoothInfo =()=> {
      return (
          nav('/boothinfo')
      )
  }

  const onClickShowInfo=()=>{
    return (
      nav('/showinfo')
    )
  }
  const onClickMade=()=>{
    return (
      nav('/made')
    )
  }


  return <div className={style.home}>
      <Button text={"부스 정보"} onClick={onClickBoothInfo}></Button>
      <Button text={"공연 정보"} onClick={onClickShowInfo}></Button>
      <Button text={"만든 사람들"} onClick={onClickMade}></Button>
  </div>;
};
