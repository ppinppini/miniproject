import style from "./BoothInfo.module.css";
import boothmap from "../img/부스지도.png";
import { useNavigate } from "react-router-dom";

export default function BoothInfo() {

  const nav =useNavigate();

  const onClickBoothMap=()=>{
    nav("/boothmap")
  }
  return <div className={style.boothinfo}>
    <div className={style.boothinfo__map}>
      <img onClick={onClickBoothMap}className={style.boothmap} src={boothmap} alt="부스지도" />
    </div>
  </div>;
}
