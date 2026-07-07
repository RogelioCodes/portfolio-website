import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Writing.scss';

const posts = [
  {
    title: "We Would've Been Friends No Matter When We met",
    image: '/photography/highlights/web/20241017_222914.jpg',
    to: '/writing/we-wouldve-been-friends',
  },
  {
    title: "Photos I Almost Didn't Take",
    image: '/photography/highlights/web/IMG_6896.jpg',
    imageFormat: 'portrait',
    to: '/writing/the-photos-i-would-have-missed',
  },
  {
    title: 'Slide into the DMs',
    image: '/photography/highlights/web/DSCF8716.jpg',
    to: '/writing/slide-into-the-dms',
  },
];

const WritingPage: React.FC = () => {
  return (
    <main className="writing-page">
      <section className="writing-gallery" aria-label="Writing">
        <div className="container writing-gallery-container">
          {posts.map((post, index) => {
            const isPortrait = post.imageFormat === 'portrait';
            const articleClassName = [
              'writing-gallery-item',
              index === 0 ? 'writing-gallery-item--feature' : '',
              isPortrait ? 'writing-gallery-item--portrait' : '',
              index === 2 ? 'writing-gallery-item--reverse' : '',
            ]
              .filter(Boolean)
              .join(' ');

            const content = (
              <div className="writing-gallery-frame">
                <img src={post.image} alt="" aria-hidden="true" loading={index === 0 ? 'eager' : 'lazy'} />
                <h2>{post.title}</h2>
              </div>
            );

            return (
              <article className={articleClassName} key={post.title}>
                {post.to ? (
                  <Link to={post.to} className="writing-gallery-link">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default WritingPage;
