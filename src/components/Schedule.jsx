import style from "./Schedule.module.css";

export default function Schedule({ color }) {
  const timetable = [
    {
      time: "10:00~18:00",
      content: "수업 들어야지",
    },
    {
      time: "18:00~21:00",
      content: "연예인들 올걸?",
    },
    {
      time: "18:00~22:00",
      content: "주점도 있음!",
    },
    {
      time: "22:00~24:00",
      content: "집에 가야지",
    },
    {
      time: "22:00~24:00",
      content: "엄마가 걱정해",
    },
  ];

  return (
    <div className={style.timetable__box}>
      <div className={style.timetable} >
        {timetable[0].time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {timetable[0].content}
      </div>
      <div className={style.timetable} >
        {timetable[1].time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {timetable[1].content}
      </div>
      <div className={style.timetable} >
        {timetable[2].time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {timetable[2].content}
      </div>
      <div className={style.timetable} >
        {timetable[3].time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {timetable[3].content}
      </div>
      <div className={style.timetable} >
        {timetable[4].time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {timetable[4].content}
      </div>
    </div>
  );
}
