import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Photography.scss';

const photographyBioPhoto = '/photography/highlights/web/mom_and_dad.jpg';

const highlightFilenames = [
  'DSCF0741.jpg',
  'DSCF4215_final.jpg',
  'DSCF7063.jpg',
  'DSCF6685-Edit.jpg',
  'IMG_6896.jpg',

  '20241017_222914.jpg',
  '2025_0518_18020100.jpg',

  'DSCF8716.jpg',
  'DSCF9125.jpg',

  'daisy_eyes_2.jpg',
  'DSCF3244.jpg',
  'DSCF5474.jpg',
  '2024_1109_12365800.jpg',

  'IMG_9258.jpg',
  '10_slide_carousel_landscape_me_fixed_aspect_ratio_08.jpg',

  'DSCF1904-new.jpg',
  'DSCF2295.jpg',
  'DSCF3205.jpg',

  'DSCF6803.jpg',
  'DSCF6929.jpg',

  'DSCF7239.jpg',

  'DSCF8161.jpg',
  'DSCF8696.jpg',
];

const highlights = highlightFilenames.map((filename) => ({
  src: `/photography/highlights/web/${filename}`,
  thumb: `/photography/highlights/thumbs/${filename}`,
  alt: 'Photography highlight',
}));

const PhotographyPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbnailTranslate, setThumbnailTranslate] = useState(0);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const thumbnailScrollerRef = useRef<HTMLDivElement | null>(null);
  const thumbnailTrackRef = useRef<HTMLDivElement | null>(null);
  const activePhoto = highlights[activeIndex];

  useLayoutEffect(() => {
    const updateThumbnailPosition = () => {
      const scroller = thumbnailScrollerRef.current;
      const track = thumbnailTrackRef.current;
      const activeThumbnail = thumbnailRefs.current[activeIndex];

      if (!scroller || !track || !activeThumbnail) return;

      const targetLeft =
        activeThumbnail.offsetLeft - (scroller.clientWidth - activeThumbnail.offsetWidth) / 2;
      const maxTranslate = Math.max(track.scrollWidth - scroller.clientWidth, 0);
      const nextTranslate = Math.min(Math.max(targetLeft, 0), maxTranslate);

      setThumbnailTranslate(nextTranslate);
    };

    updateThumbnailPosition();
    window.addEventListener('resize', updateThumbnailPosition);

    return () => window.removeEventListener('resize', updateThumbnailPosition);
  }, [activeIndex]);

  useEffect(() => {
    const autoAdvance = window.setTimeout(() => {
      setActiveIndex((current) => (current === highlights.length - 1 ? 0 : current + 1));
    }, 7000);

    return () => window.clearTimeout(autoAdvance);
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? highlights.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === highlights.length - 1 ? 0 : current + 1));
  };

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    // only handle primarily horizontal swipes
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 25) {
      event.preventDefault();
    }
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) showNext();
      else showPrevious();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <main className="photography-page">
      <h1 className="photography-title">Photography</h1>

      <section className="photo-highlights" aria-label="Photography highlights">
        <button
          className="photo-control photo-control-left"
          type="button"
          onClick={showPrevious}
          aria-label="Show previous photo"
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <div
          className="photo-stage"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            key={activePhoto.src}
            src={activePhoto.src}
            alt={activePhoto.alt}
            className="photo-stage-image"
            fetchPriority="high"
          />
        </div>

        <button
          className="photo-control photo-control-right"
          type="button"
          onClick={showNext}
          aria-label="Show next photo"
        >
          <ChevronRight aria-hidden="true" />
        </button>

        <div
          className="photo-thumbnails"
          aria-label="Select a highlighted photo"
          ref={thumbnailScrollerRef}
        >
          <div
            className="photo-thumbnail-track"
            ref={thumbnailTrackRef}
            style={{ transform: `translateX(-${thumbnailTranslate}px)` }}
          >
            {highlights.map((photo, index) => (
              <button
                className={[
                  'photo-thumbnail',
                  activeIndex === index ? 'photo-thumbnail-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                type="button"
                key={photo.src}
                ref={(element) => {
                  thumbnailRefs.current[index] = element;
                }}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={activeIndex === index}
              >
                <img src={photo.thumb} alt="" aria-hidden="true" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="photography-bio" aria-label="Photography bio">
        <div className="photography-bio-inner">
          <img
            src={photographyBioPhoto}
            alt="Rogelio as a child sitting with his dad while his mom takes the photo"
            className="photography-bio-image"
            loading="lazy"
          />

          <div className="photography-bio-copy">
            <p>
              This is my favorite picture of me and my mom and my dad. Although she is out of
              frame, I can feel my mom smiling behind the camera. I can see the love her and my
              dad have for me. My mom would always make me and my sister and all my cousins pose
              for photos. It used to drive me crazy. But as I got older, and as those moments
              felt further and further away, I started to wish I had taken more photos. I didn't
              realize how much stuff there is to remember, and most of the stuff we remember is
              not very important anyway. It doesn't leave much room for all the little special
              things you know? So yeah, I started carrying my camera around more, and taking more
              photos, and now here we are.
            </p>
            <a
              className="photography-instagram-link"
              href="https://www.instagram.com/rogeliobolo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <Link className="photography-inquiry-link" to="/work-with-me?type=photography">
              Inquire about photography
            </Link>
            <p className="photography-location">
              Based in Oakland, California. Available throughout the Bay Area and for select
              travel projects; travel fees may apply.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhotographyPage;
