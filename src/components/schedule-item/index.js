import style from './style';
import sessions from '../../data/sessions.json';
import speakers from '../../data/speakers.json';

const ScheduleItem = ({ session }) => {
  const data = sessions[session.session];
  const wrapper = document.createElement('span')

  wrapper.innerHTML = data.title

  return (
    <div
      class={[style.schedule, session.full && style.scheduleFull].join(' ')}
      style={{ 'grid-row-end': 'span 1' }}
    >
      <h2 class={style.title} dangerouslySetInnerHTML={{ __html: wrapper.outerHTML }} />
      <p class={style.duration}>
        {session.duration} {session.venue && <span>@ {session.venue}</span>}
      </p>

      {data.speakers && (
        <div class={style.speakers}>
          {data.speakers.map((speakerKey) => {
            const speaker = speakers[speakerKey];
            console.log(speaker, speakerKey);
            return (
              <div class={style.speaker}>
                {speaker.photo && (
                  <img class={style.speakerPhoto} src={speaker.photo} alt={speaker.name} />
                )}
                <h4 class={style.speakerName}>{speaker.name}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ScheduleItem;
