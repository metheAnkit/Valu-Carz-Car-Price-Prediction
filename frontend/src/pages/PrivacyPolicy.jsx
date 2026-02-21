import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/Card';
import { Eye, Share2, Trash2, Download, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      number: 1,
      title: "Introduction",
      content: "Welcome to Valu Carz (\"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our car valuation platform and services."
    },
    {
      number: 2,
      title: "Information We Collect",
      subsections: [
        {
          title: "2.1 Information You Provide",
          content: "We collect information that you voluntarily provide when using our services, including:\n\n• Car details (make, model, year, mileage, condition, etc.)\n• Contact information (name, email address, phone number)\n• Location data for accurate market pricing\n• Account credentials and preferences"
        },
        {
          title: "2.2 Automatically Collected Information",
          content: "When you access our platform, we may automatically collect:\n\n• Device information (IP address, browser type, operating system)\n• Usage data (pages visited, features used, time spent)\n• Cookies and similar tracking technologies"
        }
      ]
    },
    {
      number: 3,
      title: "How We Use Your Information",
      content: "We use the collected information for various purposes:\n\n• Providing accurate car valuation services\n• Improving our algorithms and prediction accuracy\n• Personalizing your user experience\n• Communicating with you about our services\n• Analyzing usage patterns to enhance our platform\n• Detecting and preventing fraud or abuse\n• Complying with legal obligations"
    },
    {
      number: 4,
      title: "Data Sharing and Disclosure",
      content: "We may share your information in the following circumstances:\n\n• Service Providers: With trusted third-party vendors who assist in operating our platform\n• Business Transfers: In connection with mergers, acquisitions, or asset sales\n• Legal Requirements: When required by law or to protect our rights\n• With Your Consent: When you explicitly authorize us to share your information\n\nWe do not sell your personal information to third parties."
    },
    {
      number: 5,
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments."
    },
    {
      number: 6,
      title: "Your Rights and Choices",
      content: "You have the following rights regarding your personal information:\n\n• Access: Request access to your personal data\n• Correction: Request correction of inaccurate information\n• Deletion: Request deletion of your personal data\n• Opt-out: Unsubscribe from marketing communications\n• Data Portability: Request a copy of your data in a portable format"
    },
    {
      number: 7,
      title: "Cookies and Tracking Technologies",
      content: "We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie preferences through your browser settings, though some features may not function properly if cookies are disabled."
    },
    {
      number: 8,
      title: "Children's Privacy",
      content: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."
    },
    {
      number: 9,
      title: "Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the \"Last updated\" date. Your continued use of our services after such changes constitutes acceptance of the updated policy."
    }
  ];

  const rights = [
    { icon: <Eye className="w-8 h-8" />, title: "Access", description: "Request access to your personal data" },
    { icon: <Share2 className="w-8 h-8" />, title: "Correction", description: "Request correction of inaccurate information" },
    { icon: <Trash2 className="w-8 h-8" />, title: "Deletion", description: "Request deletion of your personal data" },
    { icon: <Download className="w-8 h-8" />, title: "Portability", description: "Request a copy of your data in portable format" },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
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

            {/* Your Rights Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Your Privacy Rights</h2>
                <p className="text-muted-foreground">We respect your privacy and provide you with multiple options to control your data</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                      <CardContent className="pt-6 space-y-4">
                        <div className="text-accent">{right.icon}</div>
                        <h3 className="text-xl font-bold text-foreground">{right.title}</h3>
                        <p className="text-muted-foreground">{right.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
                <CardContent className="pt-8 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">10. Contact Us</h2>
                    <p className="text-muted-foreground">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
                  </div>

                  <div className="bg-background rounded-lg p-6 border border-border">
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-foreground text-lg">Valu Carz</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="text-secondary font-bold">✉</span>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-foreground">
                              <a href="mailto:privacy@valucarz.com" className="text-primary hover:text-accent transition-colors">
                                privacy@valucarz.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-secondary font-bold">📞</span>
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="text-foreground">+91 1800-VALU-CARZ</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-secondary font-bold">🔒</span>
                          <div>
                            <p className="text-sm text-muted-foreground">Data Protection</p>
                            <p className="text-foreground">We take your privacy seriously and comply with all applicable data protection laws.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg p-6 border border-secondary/30"
            >
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Your Data is Protected</h3>
                  <p className="text-muted-foreground">We use industry-leading encryption and security protocols to protect your personal information. Your privacy and security are our top priorities.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
