import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/Card';

const TermsOfUse = () => {
  const sections = [
    {
      number: 1,
      title: "Acceptance of Terms",
      content: "Welcome to Valu Carz. By accessing or using our platform, mobile application, or any related services (collectively, the \"Services\"), you agree to be bound by these Terms of Use (\"Terms\"). If you do not agree to these Terms, please do not use our Services."
    },
    {
      number: 2,
      title: "Description of Services",
      content: "Valu Carz provides an online platform for car price prediction and valuation services. Our Services include:\n\n• AI-powered car price prediction based on market data\n• Car listing exploration and browsing\n• Market trend analysis and insights\n• Comparison tools and valuation reports\n\nOur valuations are estimates based on available data and algorithms. Actual market prices may vary based on numerous factors."
    },
    {
      number: 3,
      title: "User Accounts and Registration",
      content: "To access certain features, you may need to create an account. You agree to:\n\n• Provide accurate, current, and complete information\n• Maintain and promptly update your account information\n• Keep your password secure and confidential\n• Accept responsibility for all activities under your account\n• Notify us immediately of any unauthorized use"
    },
    {
      number: 4,
      title: "User Responsibilities and Conduct",
      content: "When using our Services, you agree not to:\n\n• Provide false or misleading information about vehicles\n• Use the Services for any illegal or unauthorized purpose\n• Interfere with or disrupt the Services or servers\n• Attempt to gain unauthorized access to any systems\n• Use automated systems to access the Services without permission\n• Violate any applicable laws or regulations\n• Infringe upon the rights of others"
    },
    {
      number: 5,
      title: "Intellectual Property Rights",
      content: "All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, data compilations, and software, are the exclusive property of Valu Carz or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.\n\nYou may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content without our express written permission."
    },
    {
      number: 6,
      title: "Disclaimers and Limitations",
      subsections: [
        {
          title: "6.1 Service Availability",
          content: "We strive to provide reliable Services but do not guarantee that they will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue any part of the Services at any time."
        },
        {
          title: "6.2 Accuracy of Information",
          content: "While we use advanced algorithms and comprehensive data, we make no warranties about the accuracy, reliability, or completeness of our valuations. Our predictions are estimates and should not be considered as guaranteed prices."
        },
        {
          title: "6.3 Third-Party Services",
          content: "Our Services may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites."
        }
      ]
    },
    {
      number: 7,
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, Valu Carz and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses resulting from:\n\n• Your use or inability to use the Services\n• Any unauthorized access to or use of your data\n• Any errors or omissions in any content\n• Any transactions or dealings with third parties through the Services"
    },
    {
      number: 8,
      title: "Indemnification",
      content: "You agree to indemnify, defend, and hold harmless Valu Carz and its affiliates from any claims, liabilities, damages, losses, and expenses arising out of or related to your violation of these Terms or your use of the Services."
    },
    {
      number: 9,
      title: "Termination",
      content: "We reserve the right to terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Services will immediately cease."
    },
    {
      number: 10,
      title: "Governing Law and Dispute Resolution",
      content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the Services shall be subject to the exclusive jurisdiction of the courts located in Mumbai, India."
    },
    {
      number: 11,
      title: "Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the \"Last updated\" date. Your continued use of the Services after such changes constitutes acceptance of the modified Terms."
    },
    {
      number: 13,
      title: "Severability",
      content: "If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-hero text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms of Use</h1>
            <p className="text-xl text-white/80">Last updated: January 2026</p>
          </motion.div>
        </div>
      </motion.section>

      <div className="bg-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{section.number}</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground mb-3">{section.title}</h2>
                        {section.subsections ? (
                          <div className="space-y-4">
                            {section.subsections.map((subsection, subIndex) => (
                              <div key={subIndex} className="space-y-2">
                                <h3 className="font-semibold text-foreground">{subsection.title}</h3>
                                <p className="text-muted-foreground whitespace-pre-line">{subsection.content}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">{section.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Contact Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="pt-8 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">12. Contact Information</h2>
                    <p className="text-muted-foreground mb-6">If you have any questions about these Terms, please contact us at:</p>
                  </div>

                  <div className="bg-background rounded-lg p-6 border border-border">
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-foreground text-lg">Valu Carz</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-accent font-bold">✉</span>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-foreground">
                              <a href="mailto:legal@valucarz.com" className="text-primary hover:text-accent transition-colors">
                                legal@valucarz.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-accent font-bold">📞</span>
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="text-foreground">+91 1800-VALU-CARZ</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-accent font-bold">📍</span>
                          <div>
                            <p className="text-sm text-muted-foreground">Address</p>
                            <p className="text-foreground">Kolkata, West Bengal, India</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
