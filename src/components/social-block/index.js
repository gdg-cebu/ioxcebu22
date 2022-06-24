import style from './style';
import ioextended from '../../images/io-extended-cebu.png';

const SocialBlock = () => (
  <section class={style.social}>
    <div class={style.text}>
      <p>Keep in touch with GDG Cebu for the latest I/O Extended announcements.</p>

      <div class={style.links}>
        <a
          href="https://www.facebook.com/gdgcebuorg/"
          target="_blank"
          rel="noopener noreferrer"
          class="facebook"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/gdgcebu"
          target="_blank"
          rel="noopener noreferrer"
          class="twitter"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/gdgcebu/"
          target="_blank"
          rel="noopener noreferrer"
          class="instagram"
        >
          Instagram
        </a>
      </div>
    </div>

    <img src={ioextended} />
  </section>
);

export default SocialBlock;
