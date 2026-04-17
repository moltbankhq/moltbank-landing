import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useMoltTheme } from '../lib/use-molt-theme';
import { SITE_URL, OG_IMAGE } from '@/config/site';
import { LegalLayout } from '../components/legal/LegalLayout';
import { LegalSection, LegalSubsection, LegalCapsNotice } from '../components/legal/LegalSection';
import { LegalTable } from '../components/legal/LegalTable';

const LAST_UPDATED = 'March 27, 2026';

function formatToday(): string {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function TermsPage() {
  const { isDarkMode, toggleTheme } = useMoltTheme();

  return (
    <>
      <Helmet>
        <title>Terms of Service — Moltbank</title>
        <meta
          name="description"
          content="Moltbank Terms of Service governing access to and use of the Moltbank services."
        />
        <link rel="canonical" href={`${SITE_URL}/terms`} />
        <link rel="alternate" hreflang="en" href={`${SITE_URL}/terms`} />
        <link rel="alternate" hreflang="x-default" href={`${SITE_URL}/terms`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Terms of Service — Moltbank" />
        <meta
          property="og:description"
          content="Moltbank Terms of Service governing access to and use of the Moltbank services."
        />
        <meta property="og:url" content={`${SITE_URL}/terms`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service — Moltbank" />
        <meta
          name="twitter:description"
          content="Moltbank Terms of Service governing access to and use of the Moltbank services."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <LegalLayout
        title="Moltbank Terms of Service"
        lastUpdated={LAST_UPDATED}
        effectiveDate={formatToday()}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      >
        <LegalSection title="1. Agreement to Terms" isDarkMode={isDarkMode}>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Moltbank website, applications, APIs,
            dashboards, smart-contract integrations, and related services (collectively, the &quot;Services&quot;) operated by Moltbank
            (&quot;Moltbank,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p>
            By accessing or using the Services, clicking &quot;I agree,&quot; checking an acceptance box, or otherwise indicating
            acceptance, you agree to be bound by these Terms. If you do not agree, do not use the Services.
          </p>
        </LegalSection>

        <LegalSection title="2. Description of Services" isDarkMode={isDarkMode}>
          <p>Moltbank provides infrastructure for stablecoin treasury management, including:</p>
          <ul>
            <li>Non-custodial smart wallets powered by Safe and Rhinestone on Base</li>
            <li>Multi-signature and multi-approver payment workflows</li>
            <li>Agent-driven and automated payment execution within configurable budgets</li>
            <li>Earn and yield position management via integrated DeFi protocols</li>
            <li>x402 payment protocol support for machine-to-machine commerce</li>
            <li>APIs, MCP integrations, and developer tools for programmatic access</li>
          </ul>
          <p>
            <strong>Moltbank is a technology provider.</strong> Moltbank is not a bank, money transmitter, broker-dealer, custodian, or
            financial institution. Moltbank does not hold, custody, or control your funds. Moltbank does not provide financial,
            investment, tax, or legal advice.
          </p>
        </LegalSection>

        <LegalSection title="3. Definitions" isDarkMode={isDarkMode}>
          <ul>
            <li>
              <strong>Account</strong> — a user account created to access the Services.
            </li>
            <li>
              <strong>Agent</strong> — software automation, including AI-enabled workflows, that interacts with the Services on behalf of
              a user or organization.
            </li>
            <li>
              <strong>Allowance</strong> — a configurable spending limit set by an account owner that authorizes an Agent to execute
              operations up to a specified amount within a defined period.
            </li>
            <li>
              <strong>Organization</strong> — a business or group account with one or more authorized users and defined roles.
            </li>
            <li>
              <strong>Stablecoin</strong> — USDC and other supported digital assets on the Base blockchain.
            </li>
            <li>
              <strong>Wallet</strong> — a blockchain smart account deployed through the Services.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Eligibility" isDarkMode={isDarkMode}>
          <p>By using the Services, you represent and warrant that:</p>
          <ul>
            <li>You are at least 18 years old.</li>
            <li>You have the legal authority and capacity to enter into these Terms.</li>
            <li>
              You are not located in, and will not use the Services from, any jurisdiction where use of the Services would violate
              applicable law or sanctions.
            </li>
            <li>You are not listed on any applicable sanctions or restricted persons list.</li>
            <li>You will not use the Services in any manner that violates these Terms or applicable law.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Accounts and Security" isDarkMode={isDarkMode}>
          <p>
            You are responsible for maintaining the confidentiality and security of your account credentials, passkeys, API keys, and any
            devices used to access the Services. You are responsible for all activity that occurs under your account.
          </p>
          <p>
            Moltbank is not responsible for any loss or damage arising from unauthorized access to your account due to compromised
            credentials, passkeys, or API keys.
          </p>
          <p>
            You agree to notify Moltbank promptly at <a href="mailto:legal@moltbank.bot">legal@moltbank.bot</a> if you become aware of
            any unauthorized use of your account.
          </p>
        </LegalSection>

        <LegalSection title="6. Non-Custodial Wallets" isDarkMode={isDarkMode}>
          <p>
            Moltbank deploys and manages smart account infrastructure on your behalf but does not custody your funds. You retain control
            of your wallet through the access mechanisms configured during setup (passkeys, multi-signature approvals, agent allowances).
          </p>
          <p>You acknowledge that:</p>
          <ul>
            <li>Loss of access to your passkeys or recovery mechanisms may result in permanent loss of access to your funds.</li>
            <li>Blockchain transactions are generally irreversible once confirmed.</li>
            <li>Moltbank cannot reverse, cancel, or modify confirmed blockchain transactions.</li>
            <li>Smart contract behavior is determined by on-chain code and may produce unexpected results.</li>
          </ul>
        </LegalSection>

        <LegalSection title="7. Transactions and Blockchain Risks" isDarkMode={isDarkMode}>
          <p>
            All transactions executed through the Services are processed on the Base blockchain (or other supported networks). You
            acknowledge and accept the following risks:
          </p>
          <ul>
            <li>Transactions are final once confirmed on-chain.</li>
            <li>Network fees (gas) are required and may fluctuate.</li>
            <li>
              Transaction execution depends on blockchain network conditions, including congestion, gas prices, and validator behavior.
            </li>
            <li>
              Smart contracts deployed by Moltbank (and third-party smart contracts such as Safe, Rhinestone, Aave, and LI.FI) may
              contain bugs, vulnerabilities, or behave unexpectedly.
            </li>
            <li>Bridge and swap operations involve additional third-party smart contract risk.</li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Stablecoin Risks" isDarkMode={isDarkMode}>
          <p>
            Stablecoins used within the Services (including USDC) are issued and managed by third parties. Moltbank does not issue,
            redeem, or guarantee any stablecoin. You acknowledge that:
          </p>
          <ul>
            <li>Stablecoin value is not guaranteed and may deviate from its intended peg.</li>
            <li>Stablecoin issuers may freeze, blacklist, or restrict addresses.</li>
            <li>Regulatory changes may affect stablecoin availability or usability.</li>
            <li>You assume all risks associated with holding and transacting in stablecoins.</li>
          </ul>
        </LegalSection>

        <LegalSection title="9. Automation and Agentic Payments" isDarkMode={isDarkMode}>
          <p>
            Moltbank supports automated and agent-driven payment workflows. This includes AI agents (such as OpenClaw-based agents)
            interacting with the Services via MCP tools, scheduled or recurring transactions, and programmatic access via APIs.
          </p>
          <LegalSubsection title="9.1 Allowance-Based Authorization" isDarkMode={isDarkMode}>
            <p>
              Account owners may configure Allowances that authorize Agents to execute operations (including USDC transfers, Earn
              position management, and x402 wallet funding) up to specified limits within defined reset periods.
            </p>
            <p>
              <strong>Configuration of an Allowance constitutes pre-authorization.</strong> Any action executed by an Agent within the
              configured Allowance limits is deemed authorized by the account owner. Moltbank is not responsible for verifying the intent
              behind individual transactions that fall within configured Allowance parameters.
            </p>
          </LegalSubsection>
          <LegalSubsection title="9.2 Proposal-Based Authorization" isDarkMode={isDarkMode}>
            <p>
              For operations that exceed Allowance limits or where no Allowance is configured, the Services generate proposals that
              require explicit human approval via passkey signature on the Moltbank dashboard.
            </p>
          </LegalSubsection>
          <LegalSubsection title="9.3 Your Responsibilities" isDarkMode={isDarkMode}>
            <p>You are solely responsible for:</p>
            <ul>
              <li>Configuring Allowance limits, reset periods, and permitted operation types.</li>
              <li>Monitoring Agent activity and adjusting or revoking Allowances as needed.</li>
              <li>Ensuring that Agents operating under your account are properly configured and secured.</li>
              <li>All transactions executed by Agents operating under your account, whether via Allowance or proposal approval.</li>
            </ul>
            <p>
              Misconfiguration of Allowances, failure to monitor Agent activity, or granting excessive permissions does not create
              liability for Moltbank.
            </p>
          </LegalSubsection>
          <LegalSubsection title="9.4 Agent Freeze" isDarkMode={isDarkMode}>
            <p>
              Moltbank provides the ability to freeze Agents, immediately revoking their ability to execute operations. You may freeze an
              Agent at any time through the dashboard. Transactions already submitted to the blockchain before a freeze takes effect
              cannot be reversed.
            </p>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title="10. x402 Protocol" isDarkMode={isDarkMode}>
          <p>The Services support the x402 payment protocol for machine-to-machine commerce on Base. When using x402 features:</p>
          <ul>
            <li>
              A local signer wallet is generated on your device. The private key for this wallet is stored locally and is not transmitted
              to Moltbank servers.
            </li>
            <li>
              x402 payments are executed on-chain by the local signer wallet using funds transferred from your treasury via
              Allowance-funded operations.
            </li>
            <li>
              Merchant endpoints are third-party services. Moltbank does not control, verify, or guarantee the behavior, availability, or
              content delivered by x402 merchants.
            </li>
            <li>You are responsible for verifying x402 merchant legitimacy before authorizing payments.</li>
          </ul>
        </LegalSection>

        <LegalSection title="11. Organizations and Multi-User Access" isDarkMode={isDarkMode}>
          <p>Organizations allow multiple users to access shared treasury resources with role-based permissions. You acknowledge that:</p>
          <ul>
            <li>Actions performed by authorized users within their assigned roles are binding on the Organization.</li>
            <li>Organization administrators are responsible for managing roles, permissions, and access.</li>
            <li>Misconfiguration of roles or permissions does not create liability for Moltbank.</li>
          </ul>
        </LegalSection>

        <LegalSection title="12. Third-Party Services" isDarkMode={isDarkMode}>
          <p>The Services integrate with third-party infrastructure and protocols, including but not limited to:</p>
          <LegalTable
            isDarkMode={isDarkMode}
            headers={['Provider', 'Role']}
            rows={[
              ['Safe', 'Smart account infrastructure'],
              ['Rhinestone', 'Module framework'],
              ['Aave', 'DeFi lending and yield'],
              ['LI.FI', 'Cross-chain bridge and swap routing'],
              ['Alchemy', 'Blockchain RPC infrastructure'],
              ['Base', 'Layer 2 blockchain network']
            ]}
          />
          <p className="mt-3">
            Moltbank does not control these third-party services and is not liable for their availability, performance, security, or any
            losses arising from their use. Each third-party service is subject to its own terms and conditions.
          </p>
        </LegalSection>

        <LegalSection title="13. Fees and Taxes" isDarkMode={isDarkMode}>
          <p>
            The Services are currently offered free of charge during the beta period. Moltbank reserves the right to introduce fees for
            use of the Services, including platform fees, API usage fees, and premium feature fees, with reasonable advance notice.
          </p>
          <p>
            Network fees (gas) required for blockchain transactions are separate from any Moltbank fees and are paid directly to the
            network.
          </p>
          <p>
            You are solely responsible for determining and paying any taxes applicable to your use of the Services and any transactions
            executed through the Services.
          </p>
        </LegalSection>

        <LegalSection title="14. Prohibited Activities" isDarkMode={isDarkMode}>
          <p>You may not use the Services to:</p>
          <ul>
            <li>Violate any applicable law, regulation, or sanctions requirement.</li>
            <li>Engage in fraud, money laundering, terrorist financing, or sanctions evasion.</li>
            <li>Attempt unauthorized access to the Services, other users&apos; accounts, or Moltbank infrastructure.</li>
            <li>Interfere with, disrupt, or impose an unreasonable load on the Services.</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Services, except as permitted by applicable law.</li>
            <li>Use the Services in any manner that could damage, disable, or impair the Services.</li>
            <li>Circumvent any access controls, rate limits, or security measures.</li>
          </ul>
        </LegalSection>

        <LegalSection title="15. API Usage" isDarkMode={isDarkMode}>
          <p>If you access the Services via API, you agree to:</p>
          <ul>
            <li>Secure your API keys and treat them as confidential credentials.</li>
            <li>Comply with published rate limits and usage policies.</li>
            <li>Not use API access to build competitive products or services without prior written consent.</li>
            <li>Accept that API availability and interfaces may change with reasonable notice.</li>
          </ul>
        </LegalSection>

        <LegalSection title="16. Intellectual Property" isDarkMode={isDarkMode}>
          <p>
            All intellectual property rights in the Services, including software, designs, trademarks, and documentation, are owned by
            Moltbank or its licensors. These Terms grant you a limited, non-exclusive, non-transferable, revocable license to use the
            Services in accordance with these Terms.
          </p>
          <p>Open-source components (including OpenClaw skill files published under MIT-0) are subject to their respective licenses.</p>
        </LegalSection>

        <LegalSection title="17. Privacy" isDarkMode={isDarkMode}>
          <p>
            Your use of the Services is also governed by the Moltbank Privacy Policy, available at{' '}
            <Link to="/privacy">/privacy</Link>. By using the Services, you acknowledge that you have read and understood the Privacy
            Policy.
          </p>
        </LegalSection>

        <LegalSection title="18. Disclaimer of Warranties" isDarkMode={isDarkMode}>
          <LegalCapsNotice isDarkMode={isDarkMode}>
            <p>
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
              IMPLIED, OR STATUTORY. MOLTBANK DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
            </p>
            <p>
              MOLTBANK DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL
              COMPONENTS. MOLTBANK DOES NOT WARRANT THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT, DATA, OR INFORMATION
              PROVIDED THROUGH THE SERVICES.
            </p>
          </LegalCapsNotice>
        </LegalSection>

        <LegalSection title="19. Limitation of Liability" isDarkMode={isDarkMode}>
          <LegalCapsNotice isDarkMode={isDarkMode}>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MOLTBANK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF
              THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY.
            </p>
            <p>THIS INCLUDES, WITHOUT LIMITATION, DAMAGES ARISING FROM:</p>
            <ul>
              <li>Blockchain network failures, congestion, or forks.</li>
              <li>Smart contract bugs, vulnerabilities, or unexpected behavior.</li>
              <li>Stablecoin depegging, freezing, or regulatory action.</li>
              <li>Third-party service failures or unavailability.</li>
              <li>Compromised account credentials, passkeys, or API keys.</li>
              <li>Agent or automation errors, including actions within configured Allowances.</li>
              <li>Loss of access to wallets or funds.</li>
            </ul>
            <p>
              TO THE EXTENT PERMITTED BY LAW, MOLTBANK&apos;S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE
              TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO MOLTBANK IN THE TWELVE (12) MONTHS
              PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).
            </p>
          </LegalCapsNotice>
        </LegalSection>

        <LegalSection title="20. Indemnification" isDarkMode={isDarkMode}>
          <p>
            You agree to indemnify, defend, and hold harmless Moltbank and its officers, directors, employees, agents, and affiliates
            from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees)
            arising out of or related to:
          </p>
          <ul>
            <li>Your use of the Services.</li>
            <li>Your violation of these Terms.</li>
            <li>Your violation of any applicable law or regulation.</li>
            <li>Any transactions executed through your account, including by Agents operating under configured Allowances.</li>
          </ul>
        </LegalSection>

        <LegalSection title="21. Suspension and Termination" isDarkMode={isDarkMode}>
          <p>
            Moltbank may suspend or terminate your access to the Services, in whole or in part, at any time and for any reason, including
            if:
          </p>
          <ul>
            <li>You violate these Terms.</li>
            <li>Required by applicable law, regulation, or legal process.</li>
            <li>Necessary to protect the security or integrity of the Services.</li>
            <li>Your account shows signs of unauthorized or suspicious activity.</li>
          </ul>
          <p>
            Upon termination, your right to use the Services ceases immediately. Provisions that by their nature should survive
            termination (including Sections 18, 19, 20, and 22) will survive.
          </p>
          <p>
            You may terminate your account at any time by contacting <a href="mailto:legal@moltbank.bot">legal@moltbank.bot</a>.
            Termination does not affect any transactions already submitted to the blockchain.
          </p>
        </LegalSection>

        <LegalSection title="22. Dispute Resolution" isDarkMode={isDarkMode}>
          <LegalSubsection title="22.1 Informal Resolution" isDarkMode={isDarkMode}>
            <p>
              Before initiating any formal dispute resolution, you agree to contact Moltbank at{' '}
              <a href="mailto:legal@moltbank.bot">legal@moltbank.bot</a> and attempt to resolve the dispute informally for at least
              thirty (30) days.
            </p>
          </LegalSubsection>
          <LegalSubsection title="22.2 Arbitration" isDarkMode={isDarkMode}>
            <p>
              If informal resolution is unsuccessful, any dispute arising out of or relating to these Terms or the Services shall be
              resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration
              Rules. The arbitration shall be conducted in English. Judgment on the award may be entered in any court of competent
              jurisdiction.
            </p>
          </LegalSubsection>
          <LegalSubsection title="22.3 Class Action Waiver" isDarkMode={isDarkMode}>
            <LegalCapsNotice isDarkMode={isDarkMode}>
              <p>
                YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS,
                CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE
                ARBITRATION.
              </p>
            </LegalCapsNotice>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title="23. Governing Law" isDarkMode={isDarkMode}>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without
            regard to its conflict of laws principles.
          </p>
        </LegalSection>

        <LegalSection title="24. Force Majeure" isDarkMode={isDarkMode}>
          <p>
            Moltbank shall not be liable for any failure or delay in performance resulting from causes beyond its reasonable control,
            including natural disasters, war, terrorism, pandemics, government actions, blockchain network disruptions, internet
            outages, or third-party service failures.
          </p>
        </LegalSection>

        <LegalSection title="25. General Provisions" isDarkMode={isDarkMode}>
          <ul>
            <li>
              <strong>Entire Agreement.</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between
              you and Moltbank regarding the Services.
            </li>
            <li>
              <strong>Severability.</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will
              continue in full force and effect.
            </li>
            <li>
              <strong>Waiver.</strong> Failure to enforce any right or provision of these Terms does not constitute a waiver of that
              right or provision.
            </li>
            <li>
              <strong>Assignment.</strong> You may not assign your rights or obligations under these Terms without Moltbank&apos;s prior
              written consent. Moltbank may assign these Terms freely.
            </li>
            <li>
              <strong>Notices.</strong> Moltbank may provide notices to you via email, in-app notification, or by posting on the
              Services.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="26. Changes to These Terms" isDarkMode={isDarkMode}>
          <p>
            Moltbank reserves the right to modify these Terms at any time. Material changes will be communicated with reasonable advance
            notice via email or in-app notification. Your continued use of the Services after the effective date of any changes
            constitutes acceptance of the updated Terms.
          </p>
        </LegalSection>

        <LegalSection title="27. Contact" isDarkMode={isDarkMode}>
          <p>For questions about these Terms, contact us at:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:legal@moltbank.bot">legal@moltbank.bot</a>
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
