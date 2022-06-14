import ScheduleItem from '../schedule-item';
import style from './style';
import schedule from '../../data/schedule.json';

const ScheduleBlock = () => {
  const children = [];

  Object.keys(schedule).forEach((time, i, arr) => {
    const date = new Date(`2022-07-02 ${time}:00`);
    const hour = date.getHours();
    const isMorningSession = hour < 13;

    let span = 1;
    if (!isMorningSession && i < arr.length - 1) {
      const next = new Date(`2022-07-02 ${arr[i + 1]}:00`);
      span = (next.valueOf() - date.valueOf()) / 1000 / 60 / 15;
    }

    children.push(<time style={{ 'grid-row-end': `span ${span}` }}>{`${time}`}</time>);

    schedule[time].forEach((session) => {
      children.push(<ScheduleItem session={session} />);
    });
  });

  return <div class={style.schedule}>{children}</div>;
};

export default ScheduleBlock;
