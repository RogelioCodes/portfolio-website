import React from 'react';
import '../styles/CaseStudy.scss';
import { Boxes, CloudCog, DatabaseZap } from 'lucide-react';

const StorageWorkflowsCaseStudy: React.FC = () => {
  const requestOptions = [
    {
      title: 'Storage protocol',
      text: 'Users selected SAN, NAS, NFS, or iSCSI depending on the workload.',
      meta: 'protocol',
    },
    {
      title: 'OS type',
      text: 'Linux or Windows determined which storage configuration and playbook to apply.',
      meta: 'os',
    },
    {
      title: 'Team location',
      text: 'Storage array selection routed automatically based on where the team was based.',
      meta: 'location',
    },
    {
      title: 'Multi-vendor routing',
      text: 'One portal handled Dell, NetApp, and HPE without manual vendor-specific steps.',
      meta: 'vendor',
    },
    {
      title: 'Request queue',
      text: 'Incoming requests surfaced in the admin portal for review and one-click approval.',
      meta: 'queue',
    },
    {
      title: 'Audit log',
      text: 'Every request, playbook run, success, and failure was logged automatically in SQL.',
      meta: 'audit',
    },
    {
      title: 'Email notifications',
      text: 'The team was alerted instantly when a new request came in.',
      meta: 'notify',
    },
    {
      title: 'Health dashboard',
      text: 'All storage arrays became visible in one place with unified alerting.',
      meta: 'health',
    },
  ];

  return (
    <main className="case-study-page storage-case-study-page">
      <section className="storage-hero" aria-labelledby="case-study-title">
        <div className="container storage-hero-container">
          <div className="storage-hero-copy">
            <h1 id="case-study-title">A Control Plane for Enterprise Storage</h1>
            <p>
              Before this work, provisioning storage across Viasat meant
              chaining through VPNs, running vendor-specific commands, and
              relying on tribal knowledge that was never written down. I built the portal, the dashboards, and much of the logic that automated it.
            </p>
          </div>

          <aside className="storage-hero-meta" aria-label="Project details">
            <span>2021 - 2023</span>
            <span>Infrastructure automation</span>
            <span>Internal platforms</span>
            <span>Storage provisioning</span>
            <span>Enterprise storage</span>
          </aside>
        </div>
      </section>

      <section className="storage-provisioning-section">
        <div className="container storage-provisioning-container">
          <div className="storage-section-copy">
            <h2>From manual commands to guided requests</h2>
            <p>
              Every storage request used to mean logging through multiple VPNs,
              navigating to the right machine, and running a series of
              vendor-specific commands while cross-referencing documentation to
              make sure the right storage type was being used for the right
              array.
            </p>
            <p>
              With 5-10 requests coming in daily, the overhead was constant -
              and mistakes did not always surface until they were already in
              production. The portal replaced that workflow with a guided
              request path, one-click approval, automated playbook runs, and SQL
              audit logging.
            </p>
          </div>

          <div className="storage-request-flow" aria-label="Storage provisioning flow">
            <article>
              <span>Before</span>
              <strong>Multiple VPNs</strong>
            </article>
            <article>
              <span>Manual work</span>
              <strong>Vendor commands</strong>
            </article>
            <article>
              <span>Portal</span>
              <strong>Guided approval</strong>
            </article>
            <article className="storage-request-flow-result">
              <span>Result</span>
              <strong>Under 1 hour</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="storage-systems-section">
        <div className="container storage-systems-container">
          <div className="storage-section-copy">
            <h2>What engineers could request</h2>
            <p>
              The portal guided users through selecting the right storage
              configuration based on protocol, OS, location, and manufacturer.
              Instead of leaving the page to decode tribal knowledge, engineers
              could make the right request from the interface itself.
            </p>
          </div>

          <div className="storage-systems-grid" aria-label="Storage request options">
            {requestOptions.map((card, index) => (
              <article className="storage-system-card" key={card.title}>
                <div>
                  <span>{card.meta}</span>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="storage-automation-section">
        <div className="container storage-automation-container">
          <div className="storage-automation-board" aria-label="Storage automation pipeline">
            <div>
              <span>01</span>
              <strong>Request queue</strong>
            </div>
            <div>
              <span>02</span>
              <strong>One-click approval</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Ansible playbooks</strong>
            </div>
            <div>
              <span>04</span>
              <strong>SQL audit log</strong>
            </div>
          </div>

          <div className="storage-section-copy">
            <h2>From manual to automatic</h2>
            <p>
              Requests were completed in under an hour instead of one to two
              weeks. Playbooks ran automatically on approval, the SQL audit log
              tracked every step, and the team's operational overhead dropped by
              roughly 30-40%.
            </p>
            <p>
              Visibility improved too. Before the dashboard, checking the status
              of any array meant logging into each machine individually - even
              arrays from the same manufacturer required separate sessions
              across multiple data centers. With everything consolidated in one
              view, the team could spot arrays filling up or degrading before
              they became production issues.
            </p>
          </div>
        </div>
      </section>

      <section
        className="case-study-impact-section case-study-impact-section--band"
        aria-labelledby="storage-impact-title"
      >
        <div className="container case-study-impact-container">
          <h2 id="storage-impact-title">Impact</h2>
          <ul>
            <li>
              <strong>Under 1 hour</strong>
              <span>for storage provisioning that previously took 1-2 weeks</span>
            </li>
            <li>
              <strong>30-40%</strong>
              <span>reduction in operational overhead across daily request volume</span>
            </li>
            <li>
              <strong>100+</strong>
              <span>storage arrays monitored across 7+ data centers and 3 manufacturers</span>
            </li>
            <li>
              <strong>5-10</strong>
              <span>daily requests that were previously handled through manual commands</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="case-study-section case-study-wrapup">
        <div className="container case-study-section-container">
          <div className="case-study-copy">
            <h2>Working across teams</h2>
            <p>
              This was my first role out of college, and the system I was
              building on top of was anything but straightforward. The existing
              infrastructure ran on undocumented tribal knowledge: which VPN to
              use, which naming conventions meant what, and which storage type
              and array to use for which purpose.
            </p>
            <p>
              Understanding it well enough to automate it was half the
              challenge. On the technical side, I was learning Java for the first
              time while working in an aging Grails framework where finding
              relevant documentation meant digging through years-old Stack
              Overflow threads.
            </p>
            <p>
              I owned the frontend entirely, wrote SQL queries and audit
              logging, contributed Ansible playbooks, and helped build the
              backend logic connecting the portal to storage arrays across three
              manufacturers.
            </p>

            <div className="case-study-wrapup-features">
              <article>
                <DatabaseZap size={24} aria-hidden="true" />
                <div>
                  <strong>Embedded in the backend</strong>
                  <span>Owned the frontend entirely and contributed backend logic, SQL queries, and Ansible playbooks connecting the portal to arrays across three manufacturers.</span>
                </div>
              </article>
              <article>
                <Boxes size={24} aria-hidden="true" />
                <div>
                  <strong>Knowledge into interface</strong>
                  <span>Encoded undocumented tribal knowledge into a guided workflow, reducing the context users and admins had to carry in their heads.</span>
                </div>
              </article>
              <article>
                <CloudCog size={24} aria-hidden="true" />
                <div>
                  <strong>Remote from day one</strong>
                  <span>Learned Java, Grails, and enterprise storage infrastructure from scratch, entirely remotely, in my first job out of college.</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="storage-note-section">
        <div className="container storage-note-container">
          <h2>A note on being new</h2>
          <p>
            I want to be honest about something: I was pretty lost when I
            started this role. Not in a way that stopped me from doing the work,
            but in a way that felt overwhelming at the time.
          </p>
          <p>
            A computer science degree teaches you how to write code. It does not
            prepare you for sitting alone in your apartment during a pandemic,
            trying to understand why you need to log into three different VPNs
            just to reach a machine, learning Java on the fly, and wondering if
            everyone else finds this as confusing as you do.
          </p>
          <p>
            They do. Most people just do not say so. Looking back, this was one
            of the more technically complex environments I have worked in:
            multiple manufacturers, undocumented systems, and enterprise storage
            protocols I had never encountered. I did not know that at the time. I
            just knew I had a lot to learn and not much time to learn it.
          </p>
          <p>
            If you're early in your career and feeling that way — that's not a sign you're 
            in the wrong field.That's just what it feels like to do real work for the first time.
            The gap between what school teaches you and what a job actually asks of you is real, 
            and nobody talks about it enough.
          </p>
        </div>
      </section>
    </main>
  );
};

export default StorageWorkflowsCaseStudy;
