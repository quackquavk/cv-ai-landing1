"use client";
import React from 'react';
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/LandingPage/Footer";
import { Toaster } from "@/components/ui/toaster";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BotPrivacyPolicyPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background text-foreground relative"
    >
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-gray-200 to-foreground bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white">
              Browser Extension Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ResumeAI LinkedIn Auto Apply Extension
            </p>
            <p className="text-muted-foreground text-sm mt-2" suppressHydrationWarning>
              Last Updated: April 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="relative py-8 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-10">

            {/* Introduction */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Privacy Policy specifically governs the ResumeAI LinkedIn Auto Apply browser extension (the &quot;Extension&quot;).
                It explains how we collect, use, store, and protect your data when you use our automation tool for LinkedIn Easy Apply.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important:</strong> Using this Extension to automate job applications on LinkedIn
                may violate LinkedIn&apos;s Terms of Service. By using this Extension, you acknowledge and accept all associated risks,
                including the possibility of account suspension or termination by LinkedIn.
              </p>
            </motion.div>

            {/* Data We Collect */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">2. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">2.1 Personal Profile Information</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>First and last name</li>
                    <li>Email address</li>
                    <li>Phone number and country code</li>
                    <li>City and country</li>
                    <li>Years of professional experience</li>
                    <li>Current job title</li>
                    <li>LinkedIn profile URL</li>
                    <li>GitHub/portfolio URLs</li>
                    <li>Personal website</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">2.2 Resume and Documents</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Resume files (PDF, DOC, DOCX) uploaded via the Extension</li>
                    <li>File names and types of uploaded documents</li>
                    <li>Skills summary and education summary</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">2.3 Job Application Preferences</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Expected salary preferences</li>
                    <li>Visa sponsorship requirements</li>
                    <li>Legal work authorization status</li>
                    <li>Willingness to relocate</li>
                    <li>Driver&apos;s license status</li>
                    <li>Blacklist keywords for job filtering</li>
                    <li>Maximum years of experience required filter</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">2.4 LinkedIn Job Data</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Job titles of positions you apply to</li>
                    <li>Company names</li>
                    <li>Job posting URLs</li>
                    <li>Application timestamps</li>
                    <li>Company logo URLs (publicly available)</li>
                    <li>Session statistics (number of applications submitted)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">2.5 Authentication Data</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>OAuth access tokens for ResumeAI API authentication</li>
                    <li>Refresh tokens for session management</li>
                    <li>API base URL configuration</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* How We Collect Data */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">3. How We Collect Data</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Direct Input:</strong> Information you manually enter into the Extension&apos;s popup interface.</p>
                <p><strong className="text-foreground">Resume Upload:</strong> Files you upload through the Extension&apos;s file picker.</p>
                <p><strong className="text-foreground">API Synchronization:</strong> Data synced from your ResumeAI dashboard account via our secure API.</p>
                <p><strong className="text-foreground">LinkedIn Interaction:</strong> Job data captured when you use the Extension to submit applications on LinkedIn.</p>
                <p><strong className="text-foreground">OAuth Authorization:</strong> Authentication tokens exchanged when you authorize the Extension to connect with your ResumeAI account.</p>
              </div>
            </motion.div>

            {/* How We Use Your Data */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">4. How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Job Application Automation:</strong> To automatically fill LinkedIn Easy Apply forms with your profile information and submit job applications on your behalf.</p>
                <p><strong className="text-foreground">Application Tracking:</strong> To record and display your job application history in your ResumeAI dashboard.</p>
                <p><strong className="text-foreground">Form Population:</strong> To pre-fill job application fields including contact information, work authorization, and resume uploads.</p>
                <p><strong className="text-foreground">Job Filtering:</strong> To skip jobs matching your blacklist keywords or exceeding your experience requirements.</p>
                <p><strong className="text-foreground">Session Management:</strong> To maintain your authentication state and sync data between the Extension and your ResumeAI account.</p>
                <p><strong className="text-foreground">Analytics:</strong> To track application statistics and provide insights in your dashboard.</p>
              </div>
            </motion.div>

            {/* Data Storage */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">5. Data Storage and Security</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Local Browser Storage:</strong> Your data is stored locally in your browser using Chrome&apos;s storage APIs:</p>
                <ul className="list-disc pl-5 space-y-1 ml-4">
                  <li><strong>chrome.storage.sync:</strong> Profile information, preferences, and authentication tokens (synced across your signed-in Chrome devices)</li>
                  <li><strong>chrome.storage.local:</strong> Resume files, refresh tokens, and session data (device-specific)</li>
                </ul>
                <p><strong className="text-foreground">Server Storage:</strong> Job application data and profile information are stored on ResumeAI servers (api.cvai.dev) to populate your dashboard and sync across devices.</p>
                <p><strong className="text-foreground">Security Measures:</strong></p>
                <ul className="list-disc pl-5 space-y-1 ml-4">
                  <li>All API communications use HTTPS encryption</li>
                  <li>Authentication via OAuth 2.0 with short-lived access tokens</li>
                  <li>Resume files are stored as base64-encoded data locally (not on our servers unless explicitly synced)</li>
                  <li>No LinkedIn credentials are ever stored or accessed</li>
                </ul>
              </div>
            </motion.div>

            {/* LinkedIn Risks - CRITICAL SECTION */}
            <motion.div
              variants={itemVariants}
              className="bg-destructive/10 backdrop-blur-sm border border-destructive/30 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-destructive">6. LinkedIn Account Risks and Limitations</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="bg-background/50 rounded-lg p-4 border border-destructive/20">
                  <p className="text-foreground font-semibold mb-2">⚠️ IMPORTANT DISCLAIMER</p>
                  <p>
                    LinkedIn&apos;s Terms of Service prohibit the use of automated tools, bots, scripts, or scrapers on their platform.
                    Using this Extension violates these terms and may result in:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Temporary or permanent suspension of your LinkedIn account</li>
                    <li>Permanent banning from the LinkedIn platform</li>
                    <li>Loss of access to your LinkedIn network, messages, and job applications</li>
                    <li>Restriction from creating new LinkedIn accounts</li>
                    <li>Legal action by LinkedIn (in extreme cases)</li>
                  </ul>
                </div>

                <p><strong className="text-foreground">Risk Mitigation (Not Elimination):</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The Extension includes random delays between actions to mimic human behavior</li>
                  <li>Application rate limiting to avoid triggering automated detection</li>
                  <li>Option to enable &quot;auto-next page&quot; or manually control pagination</li>
                </ul>

                <p><strong className="text-foreground">Your Responsibility:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use the Extension at your own risk</li>
                  <li>Monitor your LinkedIn account for warnings or unusual activity</li>
                  <li>Do not use the Extension on accounts you cannot afford to lose</li>
                  <li>Consider using a secondary LinkedIn account for heavy automation</li>
                  <li>Immediately cease use if LinkedIn issues any warnings</li>
                </ul>

                <p className="text-foreground font-medium mt-4">
                  ResumeAI and its creators are not responsible for any LinkedIn account suspension,
                  termination, or other consequences resulting from use of this Extension.
                </p>
              </div>
            </motion.div>

            {/* Data Sharing */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">7. Information Sharing and Third Parties</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">LinkedIn:</strong> The Extension interacts with LinkedIn&apos;s website to submit job applications. Your profile data is entered into LinkedIn&apos;s forms, subject to LinkedIn&apos;s Privacy Policy and Terms of Service.</p>
                <p><strong className="text-foreground">ResumeAI API:</strong> Job application data and profile information are transmitted to our servers (api.cvai.dev) for dashboard synchronization.</p>
                <p><strong className="text-foreground">No Sale of Data:</strong> We do not sell, rent, or trade your personal information to third parties.</p>
                <p><strong className="text-foreground">Service Providers:</strong> We may use third-party services for hosting and analytics, bound by confidentiality agreements.</p>
                <p><strong className="text-foreground">Legal Requirements:</strong> We may disclose information if required by law or to protect our rights.</p>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">8. Your Rights and Control</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Access:</strong> All data stored by the Extension is visible in the Extension popup interface.</p>
                <p><strong className="text-foreground">Modification:</strong> You can update your profile information and preferences at any time through the Extension popup or your ResumeAI dashboard.</p>
                <p><strong className="text-foreground">Deletion:</strong></p>
                <ul className="list-disc pl-5 space-y-1 ml-4">
                  <li>Remove individual data fields through the Extension interface</li>
                  <li>Delete uploaded resumes using the &quot;Remove&quot; button</li>
                  <li>Disconnect your ResumeAI account via the &quot;Disconnect&quot; button</li>
                  <li>Uninstall the Extension to remove all local data</li>
                  <li>Request full account deletion by contacting support</li>
                </ul>
                <p><strong className="text-foreground">Export:</strong> Job application history is accessible through your ResumeAI dashboard.</p>
                <p><strong className="text-foreground">Opt-Out:</strong> You can stop using the Extension and revoke API access at any time by disconnecting your account.</p>
              </div>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">9. Data Retention</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Local Data:</strong> Retained in your browser until you uninstall the Extension or manually delete it.</p>
                <p><strong className="text-foreground">Server Data:</strong> Job application records are retained on our servers as long as your ResumeAI account is active.</p>
                <p><strong className="text-foreground">Authentication Tokens:</strong> Access tokens expire after a short period; refresh tokens are stored until you disconnect your account.</p>
                <p><strong className="text-foreground">Deletion:</strong> When you disconnect your account or uninstall the Extension, authentication tokens are immediately deleted. Server-side job data is retained according to your ResumeAI account settings.</p>
              </div>
            </motion.div>

            {/* International Users */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">10. International Users</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Extension is designed for users worldwide. Your data may be processed on servers located in the United States.
                By using the Extension, you consent to the transfer and processing of your data in the U.S. and other jurisdictions
                where our service providers operate.
              </p>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">11. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Extension is not intended for use by individuals under 16 years of age. We do not knowingly collect
                personal information from children. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us to request deletion.
              </p>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">12. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">No Warranty:</strong> The Extension is provided &quot;as is&quot; without warranties of any kind,
                  either express or implied. We do not guarantee that the Extension will function without errors or interruptions,
                  or that it will prevent LinkedIn account detection or suspension.
                </p>
                <p>
                  <strong className="text-foreground">Assumption of Risk:</strong> You acknowledge that using automated tools on LinkedIn carries
                  inherent risks, and you assume full responsibility for any consequences, including but not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-1 ml-4">
                  <li>LinkedIn account suspension or termination</li>
                  <li>Loss of job opportunities due to failed applications</li>
                  <li>Incorrect application submissions</li>
                  <li>Data loss or corruption</li>
                  <li>Unauthorized access to your browser storage (in the event of malware on your device)</li>
                </ul>
                <p>
                  <strong className="text-foreground">No Liability for Third-Party Actions:</strong> We are not responsible for any actions taken by
                  LinkedIn, employers, or other third parties based on your use of the Extension.
                </p>
              </div>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">13. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal,
                operational, or regulatory reasons. We will notify you of any material changes by updating the
                &quot;Last Updated&quot; date at the top of this policy. Continued use of the Extension after changes
                constitutes acceptance of the revised policy.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">14. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="bg-background/50 rounded-lg p-4">
                  <p><strong className="text-foreground">Email:</strong> mail@rebuzzllc.com</p>
                  <p><strong className="text-foreground">Website:</strong> https://cvai.dev</p>
                  <p><strong className="text-foreground">Business:</strong> ReBuzz LLC</p>
                </div>
                <p className="mt-4 text-sm">
                  We will respond to your inquiry as soon as possible, typically within 48 business hours.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </motion.div>
  );
};

export default BotPrivacyPolicyPage;
