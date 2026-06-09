import FadeUp from './FadeUp.jsx';

export default function Experience() {
  return (
    <FadeUp
      className="section"
      aria-labelledby="exp-heading"
      style={{ marginTop: 12 }}
    >
      <h3 id="exp-heading" className="lead">
        Experience
      </h3>

      <div className="experience" role="list">
        <article className="job" role="listitem" aria-label="Airtel Digital">
          <h3>Airtel Digital — Lead Engineer (Frontend)</h3>
          <div className="meta-job">Gurugram | Jan 2022 – Present</div>
          <p className="tech-stack">
            <strong>Tech:</strong> React, React Native Web, Groovy, Accessibility (WCAG/A11y)
          </p>
          <ul>
            <li>
              <strong>Legacy BE API Migration & Platform Modernization</strong>: Led migration
              and deprecation of legacy backend APIs across six airtel.in repositories. Reduced
              web-consumer traffic from <strong>~20 lakh daily hits to ~45K</strong> through
              phased migration of old web journeys to modern platform stacks, BFF API adoption,
              and redirect-based gradual deprecation strategy.
            </li>
            <li>
              <strong>Manage Account Journey (airtel.in)</strong>: Migrated legacy Manage Account
              journey to the new platform stack supporting <strong>all 8 services</strong>{' '}
              (earlier only 5 supported). Handles <strong>25K daily unique visits</strong>.
              Built analytics dashboards, monitoring documentation, and operational alert
              systems using Telegram integrations.
            </li>
            <li>
              <strong>Billing Journey Migration</strong>: Migrated legacy Angular billing
              journey to the new airtel.in platform stack enabling users to check, pay, and
              download bills for all postpaid services.{' '}
              <strong>4K daily unique visits</strong>. Created monitoring dashboards, analytics
              tracking, documentation, and alerting systems.
            </li>
            <li>
              <strong>Transaction History Journey</strong>: Migrated legacy Angular transaction
              history journey to the modern platform stack enabling users to view and download
              transaction history across all supported services. Handles{' '}
              <strong>3K daily unique visits</strong>. Created dashboards, monitoring
              documentation, and operational alert systems.
            </li>
            <li>
              <strong>Guided Web → App Journey Migration</strong>: Led migration of legacy
              web-based journeys toward app-first experiences including DTH campaign journeys
              and DTH account update flows to improve engagement and platform consistency.
            </li>
            <li>
              <strong>BFF API Migrations</strong>: Migrated legacy backend APIs to new BFF APIs
              for{' '}
              <strong>
                DTH Recharge, DTH Box Upgrade, Postpaid Bill Payment, and Wifi Bill Payment
              </strong>{' '}
              journeys. Reduced legacy API traffic to <strong>zero</strong> across multiple
              high-volume journeys handling weekly traffic in lakhs. Created Kibana dashboards
              and operational documentation for health monitoring.
            </li>
            <li>
              <strong>International Roaming (IR) Journey</strong>: Developed and enhanced
              multiple high-traffic IR features including Device Capability checks (
              <strong>10K daily visits</strong>), Submit Order flows (
              <strong>7K daily clicks</strong>), Back Button optimization (
              <strong>8K daily clicks</strong>), and Duplicate Order issue fixes. Improved
              transparency and customer confidence through contextual error handling and guided
              remediation steps.
            </li>
            <li>
              <strong>DTH Cartoon Network Campaign</strong>: Worked on a successful DTH
              promotional launch resulting in <strong>52K channel subscriptions</strong>.
            </li>
            <li>
              <strong>Security & SWAT Ownership</strong>: Resolved{' '}
              <strong>13 security issues</strong> across web platforms within one year and
              handled <strong>~80 SWAT production issues</strong> across Thanks App and Web
              platforms.
            </li>
            <li>
              <strong>Accessibility Leadership</strong>: Championed end-to-end accessibility
              (WCAG 2.1/a11y) compliance across major customer journeys including Selfcare
              Account, DTH Recharge, Login, Appointments, Recharges, Digital Store, and Track
              Requests. Collaborated closely with product, design, and QA teams to embed
              accessibility into the development lifecycle and received accessibility
              certification.
            </li>
            <li>
              <strong>TRAI Compliance (DND Journey)</strong>: Led frontend implementation for
              TRAI-mandated spam and fraud control features. Improved visibility and usability
              of DND controls across Thanks App and enhanced complaint/reporting flows for spam
              calls and messages.
            </li>
            <li>
              <strong>TRAI Compliance (Inactive Account Forms)</strong>: Delivered compliant
              frontend experiences for inactive Postpaid and Wi-Fi account forms aligned with
              updated TRAI regulations.
            </li>
            <li>
              <strong>Wi-Fi Change Plan Journey</strong>: Designed and implemented a seamless
              plan upgrade flow on Thanks App including comparison, selection, review, and
              confirmation experiences. Journey handles{' '}
              <strong>40K daily unique visitors</strong> with a{' '}
              <strong>6.5% conversion rate</strong>.
            </li>
            <li>
              <strong>Corporate Business Journey (Thanks App & Airtel.in)</strong>: Delivered
              onboarding and account management journeys for enterprise customers through email
              validation and app integrations, reducing offline dependency and operational
              leakage.
            </li>
            <li>
              <strong>Postpaid Change Plan Journey (2022–2025)</strong>: Revamped plan discovery
              UX with comparison tools, upsell nudges, downgrade friction handling, and billing
              transparency improvements. Delivered <strong>19% conversion uplift</strong> and{' '}
              <strong>₹40 Cr annual incremental revenue</strong>.
            </li>
            <li>
              <strong>Appointment Journey</strong>: Built appointment support journey for Wi-Fi
              acquisition flow with <strong>~500 daily unique visits</strong>.
            </li>
            <li>
              <strong>Track Request Journey (Thanks App & Airtel.in)</strong>: Enabled unified
              order and complaint tracking across platforms with appointment handling,
              communication transparency, and real-time status visibility. Reduced{' '}
              <strong>100K+ assisted calls annually</strong> while serving{' '}
              <strong>7K daily unique visits</strong>.
            </li>
            <li>
              <strong>Wi-Fi Journey API Migration</strong>: Migrated legacy APIs on Thanks App to
              modern backend architecture improving scalability and maintainability.
            </li>
            <li>
              <strong>Prepaid Recharge Experience (Web)</strong>: Delivered a redesigned prepaid
              recharge experience on airtel.in using reusable, brand-aligned UI components
              consistent with Thanks App design systems. Handles{' '}
              <strong>~2 lakh daily unique visits</strong>.
            </li>
            <li>
              Collaborated across product, backend, analytics, QA, and operations teams to
              deliver scalable customer journeys, operational monitoring, platform modernization,
              and high-performance frontend experiences for millions of Airtel users.
            </li>
          </ul>
        </article>

        <article className="job" role="listitem" aria-label="TELUS International">
          <h3>TELUS International — Module Lead</h3>
          <div className="meta-job">Noida | Aug 2018 – Jan 2022</div>
          <ul>
            <li>
              Developed Visual IVR systems, chatbot frameworks, and image-capture utilities for
              enterprise platforms.
            </li>
            <li>
              Led UI engineering for multiple chatbot platforms including HR Bot, Recruitment Bot,
              and SPOC Bot with SSO integrations, admin portals, and analytics dashboards.
            </li>
            <li>
              Supported PWA implementation, third-party integrations, and Agile delivery
              practices across enterprise applications.
            </li>
            <li>
              Built scalable enterprise UI components with strong focus on maintainability,
              reusability, and performance optimization.
            </li>
          </ul>
        </article>

        <article className="job" role="listitem" aria-label="NTT DATA Services">
          <h3>NTT DATA Services — Software Development Analyst</h3>
          <div className="meta-job">Noida | Nov 2014 – Jun 2018</div>
          <ul>
            <li>
              Delivered healthcare integration solutions using IBM IIB, WMQ, HL7, and WMB
              technologies.
            </li>
            <li>
              Contributed to major EDI server migration initiatives and critical HL7 Go-Live
              deployments.
            </li>
            <li>
              Performed requirements analysis, interface design, system testing, and client
              training for enterprise healthcare integrations.
            </li>
            <li>
              Worked extensively on UNIX/AIX systems and enterprise middleware platforms.
            </li>
          </ul>
        </article>
      </div>
    </FadeUp>
  );
}
