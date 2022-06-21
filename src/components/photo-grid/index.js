import ButtonLink from '../button-link';
import style from './style';

const PhotoGrid = () => (
  <div class={style.photoGrid}>
    <picture>
      <source src="/assets/gallery2019/01.webp" type="image/webp" />
      <img src="/assets/gallery2019/01.jpeg" />
    </picture>
    <picture>
      <source src="/assets/gallery2019/02.webp" type="image/webp" />
      <img src="/assets/gallery2019/02.jpeg" />
    </picture>
    <picture>
      <source src="/assets/gallery2019/03.webp" type="image/webp" />
      <img src="/assets/gallery2019/03.jpeg" />
    </picture>
    <picture>
      <source src="/assets/gallery2019/04.webp" type="image/webp" />
      <img src="/assets/gallery2019/04.jpeg" />
    </picture>
    <picture>
      <source src="/assets/gallery2019/05.webp" type="image/webp" />
      <img src="/assets/gallery2019/05.jpeg" />
    </picture>
    <picture>
      <source src="/assets/gallery2019/06.webp" type="image/webp" />
      <img src="/assets/gallery2019/06.jpeg" />
    </picture>
    <picture>
      <source src="/assets/gallery2019/07.webp" type="image/webp" />
      <img src="/assets/gallery2019/07.jpeg" />
    </picture>
    <picture>
      <source src="/assets/gallery2019/08.webp" type="image/webp" />
      <img src="/assets/gallery2019/08.jpg" />
    </picture>

    <section class={style.content}>
      <h3>#ioxcebu19 highlights</h3>
      <p>
        This year's festival built lots of excitement. Check out photos from featured talks,
        hands-on learning sessions, and after-hours fun.
      </p>

      <ButtonLink href="https://photos.google.com/share/AF1QipMOZ852giOCSpcSYVUDYas960RA166SBJBRZMPM9OqKy2kkg6iPEvNmwGdiPQqgxg?key=ekZka0JtV1lJakswSlljLWdYVVhRcEF6U0VNMGVn">
        See all photos
      </ButtonLink>
    </section>
  </div>
);

export default PhotoGrid;
