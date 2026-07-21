import React, { FormEvent, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../styles/WorkWithMe.scss';

type InquiryType = 'photography' | 'web' | 'both' | 'other';
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const validInquiryTypes: InquiryType[] = ['photography', 'web', 'both', 'other'];
const formspreeEndpoint = 'https://formspree.io/f/mqerlnvp';

const WorkWithMePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('type') as InquiryType | null;
  const [inquiryType, setInquiryType] = useState<InquiryType>(
    requestedType && validInquiryTypes.includes(requestedType) ? requestedType : 'photography',
  );
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const includesPhotography = inquiryType === 'photography' || inquiryType === 'both';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const labels: Record<InquiryType, string> = {
      photography: 'Photography',
      web: 'Website design & development',
      both: 'Photography + website',
      other: 'Something else',
    };
    const senderName = String(form.get('name') || 'Website visitor');

    form.set('inquiryType', labels[inquiryType]);
    form.set('_subject', `${labels[inquiryType]} inquiry from ${senderName}`);
    setSubmitStatus('submitting');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: form,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');

      formElement.reset();
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <main className="work-page">
      <section className="work-intro" aria-labelledby="work-title">
        <p className="work-eyebrow">Let&rsquo;s make something useful and memorable.</p>
        <h1 id="work-title">Work with me</h1>
        <p className="work-summary">
          I photograph people, events, and local businesses—and build thoughtful websites that
          help them show up online. Tell me what you have in mind and I&rsquo;ll follow up personally.
        </p>
        <p className="work-location">
          Based in Oakland, California. Available throughout the Bay Area and for select travel
          photography projects; travel fees may apply. Web projects are available remotely.
        </p>
      </section>

      <section className="work-form-section" aria-label="Project inquiry">
        <form className="work-form" onSubmit={handleSubmit}>
          <input
            className="work-honeypot"
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <fieldset className="work-type-fieldset">
            <legend>What can I help you with?</legend>
            <div className="work-type-options">
              {([
                ['photography', 'Photography'],
                ['web', 'Website design & development'],
                ['both', 'Photography + website'],
                ['other', 'Something else'],
              ] as const).map(([value, label]) => (
                <label key={value} className={inquiryType === value ? 'is-selected' : ''}>
                  <input
                    type="radio"
                    name="inquiryType"
                    value={value}
                    checked={inquiryType === value}
                    onChange={() => setInquiryType(value)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="work-field-row">
            <label>
              Name <span>(required)</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email <span>(required)</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>

          {includesPhotography && (
            <label>
              Social media @ <span>(required)</span>
              <input
                name="social"
                type="text"
                autoComplete="off"
                required
                placeholder="@username — Instagram, TikTok, or another profile"
              />
            </label>
          )}

          <label>
            Timeline <span>(required)</span>
            <textarea
              name="timeline"
              rows={4}
              required
              placeholder={
                includesPhotography
                  ? 'Include the event or shoot date, if one exists, and when you need the final photos delivered.'
                  : 'When would you like to begin and launch? Include any important milestones or fixed deadlines.'
              }
            />
          </label>

          {inquiryType === 'both' && (
            <div className="work-field-row">
              <label>
                Photography location <span>(optional)</span>
                <input
                  name="location"
                  type="text"
                  placeholder="City, venue, or locations you’re considering"
                />
              </label>
              <label>
                Current website <span>(optional)</span>
                <input
                  name="website"
                  type="url"
                  placeholder="Paste the URL, or leave blank if you don’t have one"
                />
              </label>
            </div>
          )}

          {inquiryType === 'photography' && (
            <label>
              Location <span>(optional)</span>
              <input
                name="location"
                type="text"
                placeholder="City, venue, or locations you’re considering"
              />
            </label>
          )}

          {inquiryType === 'web' && (
            <label>
              Current website <span>(optional)</span>
              <input
                name="website"
                type="url"
                placeholder="Paste the URL, or leave blank if you don’t have one"
              />
            </label>
          )}

          <label>
            Tell me about the project <span>(required)</span>
            <textarea
              name="details"
              rows={7}
              required
              placeholder={
                includesPhotography
                  ? 'What are you celebrating or creating? Include the type of shoot, estimated coverage, inspiration, and budget range.'
                  : 'What are you building, who is it for, and what should the finished project accomplish? Include your approximate scope and budget range.'
              }
            />
          </label>

          <label>
            Important links {includesPhotography && <span>(required)</span>}
            <textarea
              name="links"
              rows={4}
              required={includesPhotography}
              placeholder={
                includesPhotography
                  ? 'Mood board, venue, visual references, or examples you like'
                  : 'Existing website, inspiration, competitors, or relevant documents (optional)'
              }
            />
          </label>

          <div className="work-submit-row">
            <button type="submit" disabled={submitStatus === 'submitting'}>
              {submitStatus === 'submitting' ? 'Sending…' : 'Start the conversation'}
            </button>
            <p>
              Your inquiry will be sent directly to me. Prefer to write directly?{' '}
              <a href="mailto:rogelio.bolo.cordova@gmail.com">Email me</a>.
            </p>
          </div>

          <div className="work-form-status" role="status" aria-live="polite">
            {submitStatus === 'success' && (
              <p>Thank you—your inquiry has been sent. I&rsquo;ll be in touch soon.</p>
            )}
            {submitStatus === 'error' && (
              <p>
                Something went wrong while sending your inquiry. Please try again or{' '}
                <a href="mailto:rogelio.bolo.cordova@gmail.com">email me directly</a>.
              </p>
            )}
          </div>
        </form>

        <aside className="work-aside">
          <p className="work-aside-label">Not ready for a project form?</p>
          <p>The casual door is always open, too.</p>
          <Link to="/hello">Just say hello →</Link>
        </aside>
      </section>
    </main>
  );
};

export default WorkWithMePage;
