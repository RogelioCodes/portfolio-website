import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PhotosMissed.scss';

const photos = [
  {
    src: '/photography/highlights/web/IMG_6896.jpg',
    alt: 'A swimmer beneath a waterfall',
    paragraphs: [
      'Two hours away. Middle of the day. Hot as hell. Every reason to stay home and call it a day before it even started.',
      'I almost did.',
      "But something made me go anyway. Got in the car, drove the two hours, and started the hike not really knowing what I'd find at the end of it.",
      "It wasn't an easy walk in. Scrambling over rocks, wading through creeks, sweating through a heat that made me question every decision that led me there. And then the trees opened up and there it was. A waterfall, tucked into the rock like it had been waiting.",
      "And there was a man floating in the water beneath it. Just still. Eyes closed, arms out, like the world had gone quiet just for him.",
      "I didn't even think, I just lifted my camera and shot.",
      "A few seconds later, he sat up and swam off. That was it. That was the window. If I'd gotten there a minute earlier, he wouldn't have been there yet. A minute later, I'd have only caught him walking away.",
      'I think about that a lot. How the whole thing, the heat, the drive, the rocks, the creek, all of it was just the universe putting me in exactly the right place for exactly four seconds.',
      "That's the first photo I almost didn't take. The second one, I almost didn't take for a completely different reason.",
    ],
  },
  {
    src: '/photography/highlights/web/DSCF4215_final.jpg',
    alt: 'A quiet photographed moment outdoors',
    paragraphs: [
      'My friends were in town this weekend. One last hangout before they flew home. And I almost bailed on a photoshoot to be there.',
      'It was only my second shoot ever, so the nerves were already talking me out of it before FOMO even showed up to help. Two good reasons to just stay home, be normal, say yes to the easy thing.',
      "I said no instead. Told my friends I couldn't make it. Felt like the wrong call the whole drive over.",
      'Then I got this photo.',
      'And I think about how close I came to never having it. One more excuse, one more "next time," and it just... doesn\'t exist. No do-over, no reshoot. Just a version of this weekend where I chose comfortable over uncertain, and never knew what I missed.',
      "That's the thing about almost. You only find out what it cost you on the other side of not bailing.",
    ],
  },
  {
    src: '/photography/highlights/web/daisy_eyes_2.jpg',
    alt: 'A blue-toned collage of close-up portraits',
    paragraphs: [
      'That same day, after the hike, after the waterfall, I got this too.',
      "A completely different shoot, a completely different energy, but the same afternoon. If I'd stayed home because it was hot and far and inconvenient, I wouldn't have just missed the waterfall. I would've missed this whole day. Both of these photos, gone before they ever existed.",
      "That's what gets me when I think about it now. It's never just the one moment on the line when you almost don't go. It's everything downstream of it. The two hour drive, the rocks, the creek, the man floating in the water like the world had gone quiet for him. And then hours later, this. A flame, a held breath, a look straight through the lens. All of it stacked on a single decision that could've gone the other way in about two seconds that morning.",
      "And I think about all the versions of this day that never happened. The waterfall with nobody there to see it. This moment never lit, never framed. Not because they weren't worth capturing, but because the person meant to be there almost wasn't. I have to believe that's happening constantly, everywhere, to everyone. Someone hits snooze, someone takes the easy no, someone stays in instead of driving two hours in the heat, and something real just quietly doesn't happen. No one even knows what was missed. That's the part that stays with me. Most of what almost happens leaves no trace at all.",
      "So this isn't really about photos. It's about noticing when you're standing in one of those windows, the ones that don't stay open long, and choosing to walk through it anyway. Tired, hot, unsure, whatever. You go. Because the moment doesn't wait for you to feel ready. It just waits to see if you'll show up.",
      "I almost didn't. I'm glad I did.",
    ],
  },
];

const PhotosMissedPage: React.FC = () => {
  return (
    <main className="photos-missed-post">
      <section className="photos-missed-hero" aria-labelledby="photos-missed-title">
        <div className="container photos-missed-hero-container">
          <h1 id="photos-missed-title">Photos I Almost Didn't Take</h1>

          <figure className="photos-missed-lead-image">
            <img src={photos[0].src} alt={photos[0].alt} />
          </figure>
        </div>
      </section>

      <section className="photos-missed-body" aria-label="Essay">
        <div className="container photos-missed-body-container">
          <div className="photos-missed-text">
            {photos[0].paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="photos-missed-gallery" aria-label="Photos from this essay">
            {photos.slice(1).map((photo) => (
              <section className="photos-missed-gallery-item" key={photo.src}>
                <figure className="photos-missed-gallery-image">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </figure>

                {photo.paragraphs && (
                  <div className="photos-missed-text">
                    {photo.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          <Link to="/writing" className="photos-missed-back-link">
            Back to writing
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PhotosMissedPage;
