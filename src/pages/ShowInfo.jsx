import style from "./ShowInfo.module.css";
import Schedule from "../components/Schedule";
import BackButton from "../components/BackButton";

export default function ShowInfo() {
  return <div className={style.showinfo}>
    <BackButton></BackButton>
    <Schedule color={"white"}></Schedule>
  </div>;
}
