import React from 'react';
import '../styles/CaseStudy.scss';
import { Users, Layers, ShieldCheck } from 'lucide-react';
import dashcam_image from '../assets/images/drivecam.png';

const FirmwareTelemetryCaseStudy: React.FC = () => {
  const explorationCards = [
    {
      title: 'Firmware version',
      text: 'Compare behavior before and after releases.',
      meta: 'release_id',
    },
    {
      title: 'Company',
      text: 'Segment fleet behavior by customer or account.',
      meta: 'company_id',
    },
    {
      title: 'Serial number',
      text: 'Investigate a single device over time.',
      meta: 'serial',
    },
    {
      title: 'Event patterns',
      text: 'Find recurring faults and unusual spikes.',
      meta: 'event_type',
    },
    {
      title: 'Device health',
      text: 'Track signals tied to uptime and safety.',
      meta: 'health',
    },
    {
      title: 'Telemetry freshness',
      text: 'Know whether data is complete and current.',
      meta: 'latency',
    },
    {
      title: 'Release validation',
      text: 'Confirm a rollout is behaving as expected.',
      meta: 'rollout',
    },
    {
      title: 'Debug workflow',
      text: 'Move from symptom to affected devices faster.',
      meta: 'trace',
    },
  ];

  return (
    <main className="case-study-page">
      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="container case-study-hero-container">
          <aside className="case-study-meta" aria-label="Project details">
            <h1 id="case-study-title">Firmware telemetry at scale</h1>
            <p>2024 - 2025</p>
            <ul>
              <li>Data engineering</li>
              <li>Observability</li>
              <li>Telemetry Pipelines</li>
              <li>Internal tooling</li>
            </ul>
          </aside>

          <p className="case-study-summary">
            I owned the observability platform for a connected fleet of 300K+ devices — building the pipelines, dashboards, and alerting systems that gave firmware, QA, and operations teams real-time visibility into device health, safety signals, and active rollouts.
          </p>
        </div>
      </section>

      <section className="case-study-section case-study-section-split">
        <div className="container case-study-split-container">
          <img
            src={dashcam_image}
            alt="Lytx DriveCam device"
            loading="lazy"
          />

          <div className="case-study-copy">
            <h2>Making device data easier to understand</h2>
            <p>
              Raw telemetry from connected devices is noisy by default — high volume, inconsistently structured, and rarely in a form engineers can act on directly. My job was making that data queryable, trustworthy, and fast enough to be useful during an active rollout.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-gallery-section">
        <div className="container case-study-gallery-container">
          <div className="case-study-gallery-copy">
            <h2>Exploring behavior across the fleet</h2>
            <p>
              I created dashboards and queries that allowed engineers to explore
              device behavior across firmware versions, companies, serial
              numbers, and event patterns. These tools helped teams validate
              releases, debug issues, and make decisions with better data. 
              Because these signals supported safety and fleet operations, data accuracy, timeliness, and trust mattered as much as making the data easier to query.
            </p>
          </div>

          <div className="case-study-exploration-grid" aria-label="Fleet exploration examples">
            {explorationCards.map((card, index) => (
              <article className="case-study-exploration-card" key={card.title}>
                <div className="exploration-card-header">
                  <span>{card.meta}</span>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                </div>
                <div className="exploration-card-visual" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study-artifact-section">
        <div className="container case-study-artifact-container">
          <div className="case-study-copy">
            <h2>Reducing investigation time</h2>
            <p>
              Before this work, some firmware issues could take weeks or months to surface — the right signals simply weren't accessible. Through pipeline and enrichment work, I improved data availability so teams could detect and investigate problems in hours or days instead.

            </p>
            <p>
             I also removed a separate bottleneck: the firmware team had historically waited months for the data platform team to make backend pipeline changes they needed to debug and validate active rollouts. I worked with the data platform team to take ownership of that work directly, cutting out the handoff entirely and giving firmware engineers faster access to the telemetry they depended on.
            </p>
          </div>

          <div className="case-study-before-after" aria-label="Investigation time before and after">
            <div>
              <span>Before</span>
              <strong>Weeks or months</strong>
            </div>
            <div className="case-study-arrow" aria-hidden="true"></div>
            <div>
              <span>After</span>
              <strong>Hours or days</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-artifact-section">
        <div className="container case-study-artifact-container case-study-artifact-container-reverse">
          <div className="case-study-pipeline" aria-label="Diagnostics pipeline">
            <div>Raw CAN / Geotab logs</div>
            <div>Structured events</div>
            <div>Diagnostics + alerts</div>
            <div>Dashboard performance</div>
          </div>

          <div className="case-study-copy">
            <h2>Improving diagnostics and alerting</h2>
            <p>
              I built a scalable decoding service for CAN bus data, transforming
              raw Geotab logs into structured formats for automated diagnostics
              and alerting. I also audited high-volume OpenSearch topics and
              optimized queries to reduce redundant data and improve dashboard
              performance.
            </p>
          </div>
        </div>
      </section>

      <section
        className="case-study-impact-section case-study-impact-section--band"
        aria-labelledby="impact-title-band"
      >
        <div className="container case-study-impact-container">
          <h2 id="impact-title-band">Impact</h2>
          <ul>
            <li>
              <strong>300K+</strong>
              <span>connected devices supported by telemetry workflows</span>
            </li>
            <li>
              <strong>18-36M</strong>
              <span>daily messages processed across observability pipelines</span>
            </li>
            <li>
              <strong>Under a week</strong>
              <span>for telemetry availability that previously took months</span>
            </li>
            <li>
              <strong>20%</strong>
              <span>reduction in redundant OpenSearch storage usage</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="case-study-section case-study-wrapup">
        <div className="container case-study-section-container">
          <div className="case-study-copy">
            <h2>Working across teams</h2>
            <p>
              The firmware team's biggest blocker wasn't a technical problem — it was a coordination one. The backend team was overloaded with requests from multiple teams, and firmware had no one with the access or context to contribute on that side. Changes could wait months.
            </p>
            <p>
              I closed that gap myself. I reached out to the backend team, got familiar with their codebase, and wrote the Kafka consumers that processed device data and pushed it through the enrichment pipeline into OpenSearch. That meant firmware no longer had to queue behind other teams — and the backend team had one less thing on their plate.
            </p>
            <p>
              It also meant I was working across the full data path: from the pipeline work on the backend side to the observability platform pulling from OpenSearch on the other end.
            </p>
            <div className="case-study-wrapup-features">
              <article>
                <Users size={24} aria-hidden="true" />
                <div>
                  <strong>Embedded in the backend</strong>
                  <span>Learned the backend team's codebase and wrote Kafka consumers myself, removing firmware's dependency on an overloaded team.</span>
                </div>
              </article>
              <article>
                <Layers size={24} aria-hidden="true" />
                <div>
                  <strong>Full pipeline ownership</strong>
                  <span>Worked across the entire data path, from enrichment and Kafka processing to the OpenSearch queries powering the dashboards.</span>
                </div>
              </article>
              <article>
                <ShieldCheck size={24} aria-hidden="true" />
                <div>
                  <strong>Unblocked both teams</strong>
                  <span>Reduced backend team workload while cutting firmware's wait time from months to under a week.</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FirmwareTelemetryCaseStudy;
