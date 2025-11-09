import React from 'react';

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar with logo */}
      <aside className="w-24 bg-white border-r hidden md:flex items-center justify-center">
        <img
          src="/images/suimail-logo.png"
          alt="Logo"
          className="w-16 h-auto"
        />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-4 py-2 rounded-md bg-white border text-sm hover:bg-gray-100"
              >
                ← Back
              </button>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold mb-4">SuiMail Whitepaper</h1>
          <p className="text-sm text-gray-600 mb-6">Read the full SuiMail whitepaper below.</p>

          <div className="border rounded-md overflow-hidden bg-white p-8" style={{height: '75vh', overflowY: 'auto'}}>
            <div className="prose max-w-none">
              <h1 className="text-4xl font-bold mb-2">SuiMail Whitepaper</h1>
              <h2 className="text-2xl text-gray-700 mb-4">Reimagining Email with Decentralization, Privacy & Ownership</h2>
              
              <p className="text-sm text-gray-600 mb-8">
                <strong>Version 1.0</strong><br />
                <strong>November 2025</strong>
              </p>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">Abstract</h2>
              <p className="mb-4">
                Email communication has remained fundamentally unchanged for decades, plagued by spam, privacy breaches, centralized control, and data exploitation. SuiMail introduces a paradigm shift in digital communication by leveraging blockchain technology on the Sui Network and decentralized storage via Walrus Protocol to create a Web3-native email platform where users truly own their data, monetize their attention, and communicate with unprecedented privacy and security.
              </p>
              <p className="mb-4">
                This whitepaper presents SuiMail's vision, architecture, and implementation of a decentralized email system that combines wallet-based authentication, end-to-end encryption, pay-to-send economics, and sovereign data ownership to fundamentally solve the problems inherent in traditional email systems.
              </p>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">Table of Contents</h2>
              <ol className="list-decimal list-inside space-y-2 mb-8">
                <li>Introduction</li>
                <li>The Problem with Traditional Email</li>
                <li>SuiMail Solution Overview</li>
                <li>Technical Architecture</li>
                <li>Key Features</li>
                <li>Tokenomics & Economic Model</li>
                <li>Security & Privacy</li>
                <li>Use Cases</li>
                <li>Roadmap</li>
                <li>Conclusion</li>
              </ol>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">1. Introduction</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">1.1 The Current State of Email</h3>
              <p className="mb-4">
                Email has been the backbone of digital communication since the 1970s, handling over 300 billion messages daily. However, the protocol and infrastructure have remained largely centralized, creating fundamental vulnerabilities:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Centralized Control:</strong> Major providers (Gmail, Outlook, Yahoo) control user data and access</li>
                <li><strong>Privacy Violations:</strong> Providers scan emails for advertising and data mining</li>
                <li><strong>Spam Epidemic:</strong> 45-50% of all emails are spam, wasting time and resources</li>
                <li><strong>Data Breaches:</strong> Centralized databases are prime targets for hackers</li>
                <li><strong>No User Ownership:</strong> Users don't truly own their communication history or data</li>
                <li><strong>Monetization Asymmetry:</strong> Platforms profit from user data while users receive no compensation</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">1.2 The Need for Decentralization</h3>
              <p className="mb-4">
                The emergence of blockchain technology and Web3 principles offers an opportunity to reimagine email from the ground up, addressing these systemic issues through:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Decentralized architecture eliminating single points of failure</li>
                <li>User sovereignty over data and digital identity</li>
                <li>Economic incentives aligned with user interests</li>
                <li>Cryptographic security guaranteeing privacy</li>
                <li>Censorship resistance and platform independence</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">2. The Problem with Traditional Email</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">2.1 Centralization Issues</h3>
              <p className="mb-4">
                <strong>Single Points of Failure:</strong> When Gmail experiences an outage, millions lose access to critical communications. Centralized email providers represent infrastructural vulnerabilities that can affect global communications.
              </p>
              <p className="mb-4">
                <strong>Platform Control:</strong> Email providers can:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Suspend or terminate accounts arbitrarily</li>
                <li>Mine data for advertising purposes</li>
                <li>Censor or filter content</li>
                <li>Change terms of service unilaterally</li>
                <li>Lock users into proprietary ecosystems</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">2.2 Privacy Concerns</h3>
              <p className="mb-4">
                <strong>Data Mining:</strong> Traditional email providers scan message content to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Build advertising profiles</li>
                <li>Sell data to third parties</li>
                <li>Train AI models</li>
                <li>Track user behavior across services</li>
              </ul>
              <p className="mb-4">
                <strong>Surveillance:</strong> Centralized systems enable:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Government surveillance requests</li>
                <li>Mass data collection</li>
                <li>Metadata analysis revealing communication patterns</li>
                <li>Third-party access through partnerships</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">2.3 Spam & Security Vulnerabilities</h3>
              <p className="mb-4">
                <strong>The Spam Problem:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Over 14.5 billion spam emails sent daily</li>
                <li>Costs businesses $20.5 billion annually in lost productivity</li>
                <li>Traditional filters are reactive, not preventive</li>
                <li>Phishing and scam emails continue to evolve</li>
              </ul>
              <p className="mb-4">
                <strong>Security Breaches:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Yahoo breach: 3 billion accounts compromised</li>
                <li>Microsoft breach: millions of accounts exposed</li>
                <li>Centralized databases are high-value targets</li>
                <li>Password-based authentication remains vulnerable</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">2.4 Economic Misalignment</h3>
              <p className="mb-4">
                Current email economics benefit providers, not users:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Users generate valuable data</li>
                <li>Providers monetize through advertising</li>
                <li>Users receive no compensation for their attention</li>
                <li>Inbox space becomes a free-for-all for marketers</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">3. SuiMail Solution Overview</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">3.1 Vision</h3>
              <p className="mb-4">
                SuiMail reimagines email as a decentralized, user-owned communication protocol where:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Users control their data</strong> through wallet-based identity</li>
                <li><strong>Privacy is guaranteed</strong> via end-to-end encryption and Walrus storage</li>
                <li><strong>Spam is economically disincentivized</strong> through pay-to-send mechanisms</li>
                <li><strong>Users monetize attention</strong> by receiving payment for accepted emails</li>
                <li><strong>Communication is censorship-resistant</strong> through blockchain infrastructure</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">3.2 Core Principles</h3>
              <p className="mb-4">
                <strong>Decentralization:</strong> No single entity controls the network or user data. The system operates on the Sui blockchain with distributed storage on Walrus Protocol.
              </p>
              <p className="mb-4">
                <strong>User Sovereignty:</strong> Users maintain complete ownership and control of their communication history, stored as encrypted data they exclusively access.
              </p>
              <p className="mb-4">
                <strong>Economic Alignment:</strong> The pay-to-send model ensures sender commitment while compensating recipients for their attention.
              </p>
              <p className="mb-4">
                <strong>Privacy by Design:</strong> End-to-end encryption and zero-knowledge architecture ensure only intended recipients can access messages.
              </p>
              <p className="mb-4">
                <strong>Interoperability:</strong> Integration with SuiNS (Sui Name Service) for human-readable addresses and future bridges to traditional email systems.
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-3">3.3 Technology Stack</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Blockchain Layer:</strong> Sui Network for transaction processing and identity management</li>
                <li><strong>Storage Layer:</strong> Walrus Protocol for decentralized, encrypted data storage</li>
                <li><strong>Identity Layer:</strong> Wallet-based authentication with SuiNS integration</li>
                <li><strong>Encryption:</strong> Public-key cryptography for end-to-end message security</li>
                <li><strong>Token:</strong> $SMAIL utility token for network operations and incentives</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">4. Technical Architecture</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">4.1 System Components</h3>
              
              <h4 className="text-xl font-semibold mt-4 mb-2">Blockchain Infrastructure (Sui Network)</h4>
              <p className="mb-4">
                SuiMail is built on Sui, a high-performance Layer 1 blockchain featuring:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Parallel Transaction Processing:</strong> Enables high throughput for email operations</li>
                <li><strong>Low Latency:</strong> Sub-second finality for instant message delivery</li>
                <li><strong>Object-Centric Model:</strong> Natural representation of email messages and user data</li>
                <li><strong>Move Programming Language:</strong> Enhanced security through resource-oriented design</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4 mb-2">Decentralized Storage (Walrus Protocol)</h4>
              <p className="mb-4">Walrus provides:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Encrypted Data Storage:</strong> Messages stored as encrypted blobs</li>
                <li><strong>Content Addressing:</strong> Unique blob IDs for message retrieval</li>
                <li><strong>Data Availability:</strong> Redundant storage across distributed nodes</li>
                <li><strong>Cost Efficiency:</strong> Economical long-term storage compared to on-chain alternatives</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4 mb-2">Identity Management</h4>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Wallet-Based Authentication:</strong> No passwords; authentication through cryptographic signatures</li>
                <li><strong>SuiNS Integration:</strong> Human-readable names (e.g., alice@sui) instead of hex addresses</li>
                <li><strong>Decentralized Identifiers (DIDs):</strong> Self-sovereign identity framework</li>
                <li><strong>Multi-Device Support:</strong> Same identity accessible across devices through wallet recovery</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">4.2 Message Flow Architecture</h3>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Sender Workflow:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
                  <li>Compose message in SuiMail client</li>
                  <li>Encrypt message content with recipient's public key</li>
                  <li>Upload encrypted content to Walrus → Generate blob ID</li>
                  <li>Create on-chain transaction with recipient address, blob ID, payment in $SMAIL tokens, timestamp and metadata</li>
                  <li>Sign and submit transaction to Sui blockchain</li>
                  <li>Recipient receives notification of new message</li>
                </ol>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Recipient Workflow:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
                  <li>Receive on-chain notification of incoming message</li>
                  <li>View sender, timestamp, and payment amount</li>
                  <li>Decide to accept or reject</li>
                  <li>If accepted: Payment released, retrieve and decrypt message</li>
                  <li>If rejected: Payment refunded, sender's reputation adjusted</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mt-6 mb-3">4.3 Smart Contract Architecture</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Message Contract:</strong> Handles message metadata, payment escrow, and access control</li>
                <li><strong>Payment Contract:</strong> Processes $SMAIL transfers and fee distribution</li>
                <li><strong>Reputation Contract:</strong> Tracks sender reputation and implements dynamic pricing</li>
                <li><strong>Storage Contract:</strong> Manages Walrus blob references and encryption keys</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">4.4 Encryption Model</h3>
              <p className="mb-4">
                <strong>End-to-End Encryption Flow:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
                <li><strong>Key Generation:</strong> Each user generates asymmetric key pair (public/private)</li>
                <li><strong>Message Encryption:</strong> Hybrid encryption using AES-256 for content and RSA-2048 for key encryption</li>
                <li><strong>Message Decryption:</strong> Only recipient's private key can decrypt the message</li>
              </ol>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">5. Key Features</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">5.1 Pay-to-Send Model</h3>
              <p className="mb-4">
                Traditional spam is cost-free for senders. SuiMail's pay-to-send model fundamentally changes this:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Micropayments Required:</strong> Every message requires $SMAIL token payment</li>
                <li><strong>Dynamic Pricing:</strong> Cost scales based on sender reputation, recipient preferences, message size, and network congestion</li>
              </ul>
              <p className="mb-4">
                <strong>Payment Distribution:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>80% to recipient (monetize your attention)</li>
                <li>15% to network validators (infrastructure incentive)</li>
                <li>5% to protocol treasury (development and growth)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">5.2 Inbox Monetization</h3>
              <p className="mb-4">
                Recipients earn $SMAIL tokens for accepting messages from new senders, engaging with content, providing feedback, and curating reputation data.
              </p>
              <p className="mb-4">
                <strong>User Controls:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Set minimum payment thresholds</li>
                <li>Adjust pricing for different sender categories</li>
                <li>Create custom rules for different message types</li>
                <li>Opt into sponsored message programs</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">5.3 Reputation System</h3>
              <p className="mb-4">
                Sender reputation determines message costs and deliverability based on:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Delivery Rate: Percentage of messages accepted vs. rejected</li>
                <li>Response Rate: Frequency of recipient engagement</li>
                <li>Spam Reports: User-flagged spam incidents</li>
                <li>Network Activity: Account age and transaction history</li>
                <li>Token Stake: Optional reputation staking mechanism</li>
                <li>Domain Verification: Enhanced trust for verified organizations</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">5.4 Decentralized Data Ownership</h3>
              <p className="mb-4">
                <strong>User Data Sovereignty:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Complete ownership of all message data as NFT-like objects</li>
                <li>Portable data: export entire communication history</li>
                <li>Selective sharing and temporary access grants</li>
                <li>Deletion rights: permanently remove messages</li>
                <li>Historical messages remain accessible indefinitely</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">5.5 Cross-Platform Integration</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>SuiNS Integration:</strong> Human-readable addresses like username.sui@suimailapp</li>
                <li><strong>Traditional Email Bridge:</strong> Future integration with Gmail, Outlook (Roadmap)</li>
                <li><strong>API & Developer Tools:</strong> RESTful API, SDKs, and plugin architecture</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">6. Tokenomics & Economic Model (Subject to change)</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">6.1 $SMAIL Token Utility</h3>
              <p className="mb-4">The $SMAIL token serves multiple functions:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Payment Medium:</strong> Required for sending messages</li>
                <li><strong>Reputation Staking:</strong> Stake tokens to improve sender reputation</li>
                <li><strong>Governance:</strong> Vote on protocol parameters and upgrades</li>
                <li><strong>Premium Features:</strong> Access to advanced functionality</li>
                <li><strong>Network Fees:</strong> Transaction costs and storage payments</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">6.2 Token Distribution</h3>
              <p className="mb-4">
                <strong>Total Supply: 1,000,000,000 $SMAIL</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Community & Users (40%):</strong> 400M tokens - early adopter rewards, user acquisition, inbox earnings</li>
                <li><strong>Ecosystem Development (25%):</strong> 250M tokens - developer grants, partnerships, marketing</li>
                <li><strong>Team & Advisors (20%):</strong> 200M tokens - 4-year vesting with 1-year cliff</li>
                <li><strong>Liquidity & Exchange (10%):</strong> 100M tokens - DEX liquidity, CEX listings</li>
                <li><strong>Protocol Reserve (5%):</strong> 50M tokens - emergency fund, strategic opportunities</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">6.3 Economic Mechanisms</h3>
              <p className="mb-4">
                <strong>Deflationary Design:</strong> 0.5% of all message payment fees burned, reducing total supply over time.
              </p>
              <p className="mb-4">
                <strong>Dynamic Pricing Formula:</strong>
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
                <code>
                  Message Cost = Base Fee × Reputation Multiplier × Size Factor × Demand Factor
                  <br /><br />
                  Where:<br />
                  - Base Fee: 0.001 $SMAIL<br />
                  - Reputation Multiplier: 0.1x (excellent) to 10x (poor/new)<br />
                  - Size Factor: 1x + (0.1x per MB)<br />
                  - Demand Factor: 0.5x to 3x (network congestion)
                </code>
              </div>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">7. Security & Privacy</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">7.1 Security Measures</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Cryptographic Protection:</strong> AES-256, RSA-2048 encryption with perfect forward secrecy</li>
                <li><strong>Network Security:</strong> Byzantine fault tolerance, distributed storage, smart contract audits</li>
                <li><strong>Client Security:</strong> Open-source clients, deterministic builds, hardware wallet integration</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">7.2 Privacy Architecture</h3>
              <p className="mb-4">
                <strong>Minimal Metadata Exposure:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>On-chain: Only sender/recipient addresses, timestamp, blob ID</li>
                <li>Off-chain: Encrypted message content in Walrus</li>
                <li>No content scanning or analysis possible</li>
                <li>Optional anonymous sender functionality</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">8. Use Cases</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">8.1 Individual Users</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Privacy-conscious communicators (journalists, activists, healthcare, legal)</li>
                <li>Inbox monetization (influencers, professionals, job seekers)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">8.2 Businesses & Organizations</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Marketing communications with guaranteed engagement</li>
                <li>Secure internal communications and compliance</li>
                <li>Priority customer support systems</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">8.3 DAOs & Web3 Communities</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Governance communications and proposal discussions</li>
                <li>Treasury management with audit trails</li>
                <li>Verifiable community announcements</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">9. Roadmap</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Phase 1: Foundation (Q4 2024 - Q1 2025) ✅</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Core protocol development</li>
                <li>Smart contract deployment on Sui Testnet</li>
                <li>Walrus storage integration</li>
                <li>Beta web client launch</li>
                <li><strong>Milestone: 3rd place at Overflow Hackathon</strong></li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Phase 2: MVP Launch (Q1 2026)</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Mainnet deployment</li>
                <li>Token generation event (TGE)</li>
                <li>Public web application release</li>
                <li>Mobile apps (iOS/Android) beta</li>
                <li>SuiNS integration</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Phase 3: Growth & Adoption (Q3-Q4 2025)</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Marketing campaigns and user acquisition</li>
                <li>Partnership integrations</li>
                <li>Developer API and SDK release</li>
                <li>Community governance activation</li>
                <li>CEX listings</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Phase 4: Ecosystem Expansion (2026)</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Traditional email bridge development</li>
                <li>Enterprise solutions and B2B features</li>
                <li>Plugin marketplace</li>
                <li>Multi-chain expansion research</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Phase 5: Maturity & Scale (2027+)</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Global adoption initiatives</li>
                <li>Layer 2 scaling solutions</li>
                <li>Cross-chain messaging protocols</li>
                <li>Becoming the standard for Web3 communication</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">10. Conclusion</h2>
              
              <p className="mb-4">
                Email is broken. After decades of centralized control, privacy violations, and economic misalignment, the time has come for a fundamental reimagining of digital communication.
              </p>
              
              <p className="mb-4">
                SuiMail represents more than an incremental improvement—it's a complete paradigm shift. By leveraging the Sui blockchain's high performance, Walrus Protocol's decentralized storage, and economic mechanisms that align incentives, SuiMail creates an email system where:
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Users own their data</strong> completely and permanently</li>
                <li><strong>Privacy is guaranteed</strong> through cryptography, not policy</li>
                <li><strong>Spam is economically impossible</strong> at scale</li>
                <li><strong>Attention has value</strong> and is properly compensated</li>
                <li><strong>Communication is censorship-resistant</strong> and globally accessible</li>
              </ul>

              <p className="mb-4">
                As one of the first African teams recognized at a major blockchain hackathon, SuiMail demonstrates that innovation knows no geographical boundaries. We're not just building a product—we're catalyzing a movement toward user sovereignty in digital communication.
              </p>

              <p className="mb-4 font-semibold text-lg">
                The revolution in email has begun. Your inbox is about to be reimagined, on-chain.
              </p>

              <p className="mb-8 font-bold text-xl text-center text-blue-600">
                Join us in redefining communication for the decentralized future.
              </p>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold mt-8 mb-4">Appendix</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">A. Technical Specifications</h3>
              
              <p className="mb-2"><strong>Supported Message Formats:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Plain text</li>
                <li>Rich text (HTML/Markdown)</li>
                <li>Attachments (up to 100MB per message)</li>
                <li>Inline images and media</li>
              </ul>

              <p className="mb-2"><strong>Performance Targets:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Message send latency: &lt;2 seconds</li>
                <li>Message retrieval: &lt;1 second</li>
                <li>Throughput: 1000+ messages/second per user</li>
                <li>Storage: Unlimited history</li>
              </ul>

              <p className="mb-2"><strong>Wallet Compatibility:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Sui Wallet</li>
                <li>Martian Wallet</li>
                <li>Ethos Wallet</li>
                <li>Suiet</li>
                <li>Any Sui-compatible wallet</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">B. Governance Framework</h3>
              
              <p className="mb-2"><strong>Decision Domains:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Protocol parameter adjustments</li>
                <li>Fee structure modifications</li>
                <li>Treasury allocation</li>
                <li>Feature prioritization</li>
                <li>Partnership approvals</li>
              </ul>

              <p className="mb-2"><strong>Voting Mechanism:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Token-weighted voting</li>
                <li>Quadratic voting options for fairness</li>
                <li>Time-locked tokens receive voting multipliers</li>
                <li>Delegation to representatives</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">C. Glossary</h3>
              
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Blob ID:</strong> Unique identifier for encrypted data stored on Walrus</li>
                <li><strong>SuiNS:</strong> Sui Name Service, human-readable naming system</li>
                <li><strong>Walrus:</strong> Decentralized storage network for Sui ecosystem</li>
                <li><strong>Pay-to-Send:</strong> Economic model requiring payment to send messages</li>
                <li><strong>Reputation Score:</strong> Numerical rating reflecting sender trustworthiness</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">D. References</h3>
              
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Sui Network Documentation: https://docs.sui.io</li>
                <li>Walrus Protocol: https://www.walrus.xyz</li>
                <li>SuiNS: https://suins.io</li>
                <li>SuiMail Social: https://x.com/SUIMAIL_</li>
              </ul>

              <hr className="my-8" />

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
              
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li><strong>Website:</strong> [Coming Soon]</li>
                <li><strong>Twitter:</strong> @SUIMAIL_</li>
                <li><strong>Email:</strong> contact.us@suimail.com</li>
                <li><strong>Documentation:</strong> [Coming Soon]</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-sm text-gray-700">
                  <strong>Disclaimer:</strong> This whitepaper is for informational purposes only and does not constitute financial advice or an offer to sell securities. Cryptocurrency investments carry risk. Please conduct your own research before participating in any token sale or using SuiMail services.
                </p>
              </div>

              <p className="text-center text-sm text-gray-500 mt-8">
                © 2025 SuiMail. Building the future of decentralized communication.
              </p>
            </div>
          </div>
                </div>  
              </main>
            </div>
          );
        };
        
        export default Whitepaper;