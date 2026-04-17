import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useMoltTheme } from '../lib/use-molt-theme';
import { SITE_URL, OG_IMAGE } from '@/config/site';
import { LegalLayout } from '../components/legal/LegalLayout';
import { LegalSection, LegalSubsection } from '../components/legal/LegalSection';
import { LegalTable } from '../components/legal/LegalTable';

const LAST_UPDATED = 'March 27, 2026';

function formatToday(): string {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function PrivacyPage() {
  const { isDarkMode, toggleTheme } = useMoltTheme();

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Moltbank</title>
        <meta
          name="description"
          content="Moltbank Privacy Policy describing how we collect, use, and protect your information."
        />
        <link rel="canonical" href={`${SITE_URL}/privacy`} />
        <link rel="alternate" hreflang="en" href={`${SITE_URL}/privacy`} />
        <link rel="alternate" hreflang="x-default" href={`${SITE_URL}/privacy`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Privacy Policy — Moltbank" />
        <meta
          property="og:description"
          content="Moltbank Privacy Policy describing how we collect, use, and protect your information."
        />
        <meta property="og:url" content={`${SITE_URL}/privacy`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy — Moltbank" />
        <meta
          name="twitter:description"
          content="Moltbank Privacy Policy describing how we collect, use, and protect your information."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <LegalLayout
        title="Moltbank Privacy Policy"
        lastUpdated={LAST_UPDATED}
        effectiveDate={formatToday()}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      >
        <LegalSection title="1. Overview" isDarkMode={isDarkMode}>
          <p>
            This Privacy Policy explains how Moltbank (&quot;Moltbank,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
            uses, shares, and protects information when you use the Moltbank website, applications, APIs, dashboards, and related services
            (collectively, the &quot;Services&quot;).
          </p>
          <p>By using the Services, you agree to the collection and use of information as described in this Privacy Policy.</p>
          <p>
            Use of the Services is also governed by our <Link to="/terms">Terms of Service</Link>.
          </p>
        </LegalSection>

        <LegalSection title="2. Data Controller and Processor Roles" isDarkMode={isDarkMode}>
          <ul>
            <li>
              Moltbank acts as the <strong>data controller</strong> for information collected through the platform for its own operational
              purposes.
            </li>
            <li>
              Moltbank may act as a <strong>data processor</strong> on behalf of Organizations when processing data under their
              instructions within the platform.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Information We Collect" isDarkMode={isDarkMode}>
          <LegalSubsection title="3.1 Account Information" isDarkMode={isDarkMode}>
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Name and email address.</li>
              <li>Organization name and role (if applicable).</li>
              <li>Account preferences and settings.</li>
            </ul>
          </LegalSubsection>
          <LegalSubsection title="3.2 Security and Access Information" isDarkMode={isDarkMode}>
            <p>To secure your account and detect unauthorized access, we collect:</p>
            <ul>
              <li>Login timestamps and session data.</li>
              <li>Device type, operating system, and browser information.</li>
              <li>IP addresses.</li>
              <li>Passkey and authentication event metadata (we do not store passkey private keys).</li>
            </ul>
          </LegalSubsection>
          <LegalSubsection title="3.3 Wallet and Transaction Data" isDarkMode={isDarkMode}>
            <p>When you use the Services for treasury operations, we process:</p>
            <ul>
              <li>Blockchain wallet addresses and smart account addresses.</li>
              <li>Transaction history, including amounts, recipients, and timestamps.</li>
              <li>Proposal and approval workflow data.</li>
              <li>Allowance configurations and usage.</li>
            </ul>
            <p>Note: Transaction data is also recorded on the Base blockchain and is publicly accessible. See Section 8.</p>
          </LegalSubsection>
          <LegalSubsection title="3.4 Organization Data" isDarkMode={isDarkMode}>
            <p>For Organization accounts, we process:</p>
            <ul>
              <li>User roles, permissions, and access configurations.</li>
              <li>Team member activity within the Organization.</li>
              <li>Agent configurations, including Allowance settings.</li>
            </ul>
          </LegalSubsection>
          <LegalSubsection title="3.5 API and Integration Data" isDarkMode={isDarkMode}>
            <p>When you access the Services via API or MCP integrations, we collect:</p>
            <ul>
              <li>API usage logs, including endpoints called, timestamps, and response codes.</li>
              <li>MCP tool invocation metadata.</li>
              <li>Rate limit and quota usage.</li>
            </ul>
          </LegalSubsection>
          <LegalSubsection title="3.6 Agent and Automation Data" isDarkMode={isDarkMode}>
            <p>When Agents interact with the Services on your behalf, we process:</p>
            <ul>
              <li>Agent-initiated tool calls and their parameters.</li>
              <li>Allowance usage and remaining budget tracking.</li>
              <li>x402 payment records and merchant interaction metadata.</li>
              <li>Agent freeze and unfreeze events.</li>
            </ul>
          </LegalSubsection>
          <LegalSubsection title="3.7 Communication Data" isDarkMode={isDarkMode}>
            <p>When you contact us for support, we collect:</p>
            <ul>
              <li>Support messages and correspondence.</li>
              <li>Feedback and feature requests.</li>
            </ul>
          </LegalSubsection>
          <LegalSubsection title="3.8 Analytics Data" isDarkMode={isDarkMode}>
            <p>We use analytics services to understand how the Services are used. These services may collect:</p>
            <ul>
              <li>Pages visited, features used, and interaction patterns.</li>
              <li>Session duration and navigation paths.</li>
              <li>Referring URLs and search terms.</li>
            </ul>
            <p>See Section 6 for details on specific analytics providers.</p>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title="4. How We Use Information" isDarkMode={isDarkMode}>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              <strong>Provide the Services</strong> — process transactions, manage accounts, execute agent workflows, and maintain wallet
              infrastructure.
            </li>
            <li>
              <strong>Secure the platform</strong> — detect fraud, prevent unauthorized access, monitor for suspicious activity, and
              enforce rate limits.
            </li>
            <li>
              <strong>Execute transactions</strong> — process payment proposals, Allowance-based operations, Earn position management, and
              x402 payments.
            </li>
            <li>
              <strong>Support automation</strong> — enable Agent-driven workflows, track Allowance usage, and process x402 signer
              operations.
            </li>
            <li>
              <strong>Communicate with you</strong> — send service notifications, security alerts, and respond to support requests.
            </li>
            <li>
              <strong>Comply with law</strong> — meet legal, regulatory, and compliance obligations.
            </li>
            <li>
              <strong>Improve the Services</strong> — analyze usage patterns, diagnose technical issues, and develop new features.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="5. AI and Language Model Processing" isDarkMode={isDarkMode}>
          <LegalSubsection title="5.1 Current State — User-Configured Agents" isDarkMode={isDarkMode}>
            <p>
              The Services are designed to work with AI agents running on your own infrastructure (such as OpenClaw). When you use your
              own agent:
            </p>
            <ul>
              <li>
                Your agent configuration, including which AI model provider is used (e.g., OpenAI, Anthropic, Google), is determined by
                you.
              </li>
              <li>
                Moltbank does not process your data through any AI model. Your agent communicates with the Moltbank MCP server using
                structured tool calls, not natural language.
              </li>
              <li>
                The AI model processes your instructions locally or through your own provider account. Moltbank receives only the
                structured tool call outputs.
              </li>
            </ul>
          </LegalSubsection>
          <LegalSubsection title="5.2 Future — Moltbank-Hosted Agent" isDarkMode={isDarkMode}>
            <p>Moltbank may introduce a hosted AI agent in the future. If and when this feature is activated:</p>
            <ul>
              <li>
                The specific AI model provider(s) used will be disclosed in an update to this Privacy Policy and in the product interface.
              </li>
              <li>You will be informed before any of your data is processed through a Moltbank-selected AI model.</li>
              <li>Use of the hosted agent feature will require explicit opt-in.</li>
            </ul>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title="6. Cookies and Analytics" isDarkMode={isDarkMode}>
          <p>We use cookies and similar technologies for:</p>
          <ul>
            <li>
              <strong>Authentication</strong> — maintaining your login session.
            </li>
            <li>
              <strong>Security</strong> — detecting unauthorized access and preventing abuse.
            </li>
            <li>
              <strong>Analytics</strong> — understanding usage patterns to improve the Services.
            </li>
          </ul>
          <LegalSubsection title="Analytics Providers" isDarkMode={isDarkMode}>
            <p>We currently use the following analytics services:</p>
            <LegalTable
              isDarkMode={isDarkMode}
              headers={['Provider', 'Purpose', 'Privacy Policy']}
              rows={[
                [
                  'Google Analytics',
                  'Usage analytics and traffic analysis',
                  <a
                    key="ga"
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    policies.google.com
                  </a>
                ],
                [
                  'Microsoft Clarity',
                  'Session recording and heatmaps',
                  <a
                    key="cl"
                    href="https://privacy.microsoft.com/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy.microsoft.com
                  </a>
                ]
              ]}
            />
            <p className="mt-3">
              These providers may set their own cookies and collect information in accordance with their own privacy policies. You can
              manage cookie preferences through your browser settings.
            </p>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title="7. How We Share Information" isDarkMode={isDarkMode}>
          <p>We share information with the following categories of recipients:</p>
          <LegalSubsection title="Infrastructure and Service Providers" isDarkMode={isDarkMode}>
            <LegalTable
              isDarkMode={isDarkMode}
              headers={['Provider', 'Purpose', 'Data Shared']}
              rows={[
                ['Vercel', 'Application hosting and edge compute', 'Request logs, IP addresses'],
                ['Upstash', 'Caching and rate limiting', 'Session metadata, rate limit counters'],
                ['Neon', 'Database hosting', 'Account data, transaction records, organization data'],
                ['Alchemy', 'Blockchain RPC infrastructure', 'Wallet addresses, transaction data, smart contract calls']
              ]}
            />
          </LegalSubsection>
          <LegalSubsection title="Blockchain Networks" isDarkMode={isDarkMode}>
            <p>
              Transaction data submitted through the Services is broadcast to the Base blockchain (and potentially other supported
              networks) and becomes publicly accessible. This includes wallet addresses, transaction amounts, and smart contract
              interactions. See Section 8.
            </p>
          </LegalSubsection>
          <LegalSubsection title="Legal and Compliance" isDarkMode={isDarkMode}>
            <p>
              We may disclose information if required by law, regulation, legal process, or governmental request, or if we believe
              disclosure is necessary to protect the rights, property, or safety of Moltbank, our users, or the public.
            </p>
          </LegalSubsection>
          <LegalSubsection title="We Do Not Sell Personal Data" isDarkMode={isDarkMode}>
            <p>Moltbank does not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title="8. Blockchain Transparency" isDarkMode={isDarkMode}>
          <p>Blockchain transactions are inherently public. When you execute transactions through the Services:</p>
          <ul>
            <li>
              Wallet addresses, transaction amounts, and smart contract interactions are recorded on the public blockchain and are
              permanently visible to anyone.
            </li>
            <li>This data is immutable and cannot be modified or deleted by Moltbank or any party.</li>
            <li>
              Deletion requests under data protection laws (such as GDPR&apos;s right to erasure) cannot be applied to data recorded on
              public blockchains. We will delete or anonymize off-chain data associated with your account upon request, but on-chain data
              will remain.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="9. Automated Decision-Making" isDarkMode={isDarkMode}>
          <p>The Services use automated processing for:</p>
          <ul>
            <li>
              <strong>Fraud detection</strong> — monitoring transaction patterns for suspicious activity.
            </li>
            <li>
              <strong>Risk assessment</strong> — evaluating transactions against configured Allowance limits and security policies.
            </li>
            <li>
              <strong>Agent authorization</strong> — determining whether Agent-initiated operations fall within configured Allowance
              parameters.
            </li>
          </ul>
          <p>
            These automated processes do not make decisions that produce legal effects concerning you or similarly significantly affect
            you without human involvement. You may contact us to request human review of any automated decision.
          </p>
        </LegalSection>

        <LegalSection title="10. Data Retention" isDarkMode={isDarkMode}>
          <LegalTable
            isDarkMode={isDarkMode}
            headers={['Data Type', 'Retention Period']}
            rows={[
              ['Account data', 'Duration of account plus 12 months after deletion'],
              ['Transaction records', 'Duration of account plus period required by applicable law'],
              ['Security and access logs', '12 months'],
              ['API usage logs', '6 months'],
              ['Agent activity logs', 'Duration of account plus 6 months'],
              ['Support correspondence', '24 months after resolution'],
              ['Analytics data', 'As determined by analytics provider retention policies']
            ]}
          />
          <p className="mt-3">On-chain transaction data is permanent and not subject to deletion. See Section 8.</p>
        </LegalSection>

        <LegalSection title="11. Data Security" isDarkMode={isDarkMode}>
          <p>We implement technical and organizational measures to protect your information, including:</p>
          <ul>
            <li>Encryption of data in transit (TLS) and at rest.</li>
            <li>Access controls and authentication requirements for internal systems.</li>
            <li>Regular monitoring for unauthorized access or suspicious activity.</li>
            <li>Secure credential storage (API keys and tokens are stored using industry-standard practices).</li>
          </ul>
          <p>
            No method of transmission or storage is completely secure. While we strive to protect your information, we cannot guarantee
            absolute security.
          </p>
        </LegalSection>

        <LegalSection title="12. International Data Transfers" isDarkMode={isDarkMode}>
          <p>
            Moltbank operates globally, and your data may be processed in countries other than your country of residence, including the
            United States. Our infrastructure providers (Vercel, Neon, Upstash, Alchemy) may process data in multiple regions.
          </p>
          <p>
            Where data is transferred outside your jurisdiction, we rely on appropriate safeguards, including standard contractual clauses
            and the data protection frameworks of our service providers.
          </p>
        </LegalSection>

        <LegalSection title="13. Your Rights" isDarkMode={isDarkMode}>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong> your personal data and receive a copy of the information we hold about you.
            </li>
            <li>
              <strong>Correct</strong> inaccurate or incomplete personal data.
            </li>
            <li>
              <strong>Delete</strong> your personal data (subject to the blockchain transparency limitations described in Section 8 and
              applicable legal retention requirements).
            </li>
            <li>
              <strong>Restrict</strong> processing of your personal data in certain circumstances.
            </li>
            <li>
              <strong>Object</strong> to processing of your personal data for certain purposes.
            </li>
            <li>
              <strong>Data portability</strong> — receive your personal data in a structured, machine-readable format.
            </li>
            <li>
              <strong>Withdraw consent</strong> where processing is based on consent.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href="mailto:legal@moltbank.bot">legal@moltbank.bot</a>. We will respond
            within 30 days (or as required by applicable law).
          </p>
          <p>For EU/EEA residents: you also have the right to lodge a complaint with your local data protection supervisory authority.</p>
        </LegalSection>

        <LegalSection title="14. Children" isDarkMode={isDarkMode}>
          <p>
            The Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from
            children. If we become aware that we have collected personal information from a child, we will take steps to delete that
            information promptly.
          </p>
        </LegalSection>

        <LegalSection title="15. Third-Party Services and Links" isDarkMode={isDarkMode}>
          <p>
            The Services may contain links to or integrate with third-party services (including Safe, Rhinestone, Aave, LI.FI, and x402
            merchant endpoints). These third-party services have their own privacy policies, and Moltbank is not responsible for their
            privacy practices. We encourage you to review the privacy policies of any third-party services you interact with through the
            platform.
          </p>
        </LegalSection>

        <LegalSection title="16. Data Breach Notification" isDarkMode={isDarkMode}>
          <p>
            In the event of a data breach that is likely to result in a risk to your rights, we will notify affected users as required by
            applicable law. Where feasible, notification will be provided via email within 72 hours of becoming aware of the breach.
          </p>
        </LegalSection>

        <LegalSection title="17. Changes to This Privacy Policy" isDarkMode={isDarkMode}>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be communicated with reasonable advance notice via
            email or in-app notification. Your continued use of the Services after any changes constitutes acceptance of the updated
            Privacy Policy.
          </p>
          <p>The &quot;Last Updated&quot; date at the top of this page indicates when this Privacy Policy was most recently revised.</p>
        </LegalSection>

        <LegalSection title="18. Contact" isDarkMode={isDarkMode}>
          <p>For questions about this Privacy Policy or to exercise your data rights, contact us at:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:legal@moltbank.bot">legal@moltbank.bot</a>
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
