import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SlideIntoDms.scss';

const imageBase = '/photography/highlights/web';

type EssayBlock =
  | {
      type: 'text';
      content: string;
    }
  | {
      type: 'image';
      src: string;
      alt: string;
    };

const essayBlocks: EssayBlock[] = [
  {
    type: 'text',
    content:
      "I used to think the hardest part of a photoshoot was the shoot itself. Getting the light right, the timing, the location. Turns out the hardest part happens way before any of that. It's the part where you find someone's Instagram, type out a message, read it back four times, and sit there with your thumb over send like it's a decision that actually matters.",
  },
  {
    type: 'text',
    content:
      "It does, kind of. Not because of what happens if they say yes. Because of what happens if you don't send it at all.",
  },
  {
    type: 'image',
    src: `${imageBase}/DSCF8716.jpg`,
    alt: 'Blue-haired girl on a rooftop with the city skyline',
  },
  {
    type: 'text',
    content:
      "This photo is one of those. I saw her online, liked her style, and had this very normal, very human urge to just admire it from a distance and move on. That's the easy version. Nobody has to know you were even considering it. No risk, no awkward silence if she doesn't respond, no chance of it being weird.",
  },
  {
    type: 'text',
    content: 'I sent the message anyway.',
  },
  {
    type: 'image',
    src: `${imageBase}/DSCF9125.jpg`,
    alt: 'Blue-haired girl sitting against a rooftop wall with the city behind her',
  },
  {
    type: 'text',
    content:
      "I don't even remember what I said, probably something simple, and honestly a little clunky. But she said yes, and a few days later we were on a rooftop with the wind picking up her hair right as the city lit up behind her. None of that exists if I let the comfortable version win.",
  },
  {
    type: 'text',
    content:
      "What I didn't expect was how fun it would actually be. A stranger from the internet, a couple friends who tagged along to help, and suddenly we're all just up on a roof messing around, laughing between shots, nobody taking it too seriously. For a few hours it didn't even feel like work. It felt like being a kid again, the kind of afternoon where you're just running around with people and time stops mattering. That's not something I expected to get out of one nervous DM. I just wanted the photo. I didn't realize I was also signing up for one of the more fun afternoons I'd had in a while.",
  },
  {
    type: 'text',
    content:
      "That's kind of the whole thing about putting yourself out there. It's never actually that deep in the moment. It's just a message. A question. A small ask that feels enormous for about thirty seconds and then is completely forgotten, whether she says yes or no. But so much of what I love, so many of my favorite shoots, favorite people, favorite memories, came from that same thirty seconds of discomfort. I just had to be willing to sit in it long enough to hit send.",
  },
  {
    type: 'text',
    content: 'Not every one of these starts with a cold message, though. Some of them start with a friend.',
  },
  {
    type: 'image',
    src: `${imageBase}/skyline_shoot-2.jpg`,
    alt: 'Peralta portrait in a green hat',
  },
  {
    type: 'text',
    content:
      'Peralta\'s one of my best friends. He\'d just moved into a new place and texted me something like "you have to come see this spot," no context, no photos, just come see it.',
  },
  {
    type: 'text',
    content: 'So I did.',
  },
  {
    type: 'image',
    src: `${imageBase}/skyline_shoot-3.jpg`,
    alt: 'Climbing the fire escape to the rooftop',
  },
  {
    type: 'text',
    content:
      "We climbed up his fire escape, no plan, no gear, and stepped out onto the roof. The second I saw the skyline laid out like that, palm trees in the foreground, the whole city glowing pink behind them, I knew I wasn't leaving without shooting something up there.",
  },
  {
    type: 'image',
    src: `${imageBase}/skyline_shoot.jpg`,
    alt: 'Rooftop skyline sunset',
  },
  {
    type: 'text',
    content:
      "Didn't even matter that all I had was my phone. Some places do most of the work for you. I pointed it at him, pointed it at the view, and everything just looked like it belonged in a movie. No editing, no setup, no reason it should've looked that good. Just good light, a good friend, and a roof I didn't know existed an hour earlier.",
  },
  {
    type: 'text',
    content:
      "So if there's a theme to this section of the site, it's that. Not confidence. Not fearlessness. Just the willingness to feel a little weird for a few seconds, over and over, because of what's sometimes waiting on the other side of it. Some of the best photos aren't even the ones you go looking for. Sometimes they're handed to you, by a stranger who said yes, or a friend who wanted you to see what he saw.",
  },
];

const SlideIntoDmsPage: React.FC = () => {
  return (
    <main className="slide-dms-post">
      <section className="slide-dms-hero" aria-labelledby="slide-dms-title">
        <div className="container slide-dms-hero-container">
          <h1 id="slide-dms-title">Slide into the DMs</h1>
        </div>
      </section>

      <section className="slide-dms-body" aria-label="Essay">
        <div className="container slide-dms-body-container">
          <div className="slide-dms-text">
            {essayBlocks.map((block, index) => (
              block.type === 'image' ? (
                <figure className="slide-dms-inline-image" key={`${block.alt}-${index}`}>
                  <img src={block.src} alt={block.alt} loading="lazy" />
                </figure>
              ) : (
                <p key={block.content}>{block.content}</p>
              )
            ))}
          </div>

          <Link to="/writing" className="slide-dms-back-link">
            Back to writing
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SlideIntoDmsPage;
