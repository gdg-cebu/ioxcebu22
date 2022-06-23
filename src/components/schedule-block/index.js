import ScheduleItem from '../schedule-item';
import style from './style';
import schedule from '../../data/schedule.json';

const ScheduleBlock = () => {
  const children = [];

  Object.keys(schedule).forEach((time) => {
    children.push(<time style={{ 'grid-row-end': `span  1` }}>{`${time}`}</time>);

    schedule[time].forEach((session) => {
      children.push(<ScheduleItem session={session} />);
    });
  });

  return <div class={style.schedule}>{children}</div>;
};

export default ScheduleBlock;
