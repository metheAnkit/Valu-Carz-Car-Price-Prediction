import React from 'react';
import { Card, CardContent } from '../components/Card';
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', emoji: '👨‍💼' },
    { name: 'Jane Smith', role: 'Lead Developer', emoji: '👩‍💻' },
    { name: 'Mike Johnson', role: 'Data Scientist', emoji: '👨‍🔬' },
    { name: 'Sarah Williams', role: 'UI/UX Designer', emoji: '👩‍🎨' },
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: 'Accuracy',
      description: 'We strive to provide the most accurate car valuations using advanced AI and machine learning algorithms.'
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: 'Transparency',
      description: 'Our process is transparent, and we believe in honest communication with our users.'
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: 'Innovation',
      description: 'We continuously innovate to bring you the best car valuation experience.'
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: 'Excellence',
      description: 'Excellence in service is our commitment to every user.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Valu Carz</h1>
            <p className="text-xl text-white/80">
              Revolutionizing car valuation with artificial intelligence and transparent pricing
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Valu Carz was founded with a simple mission: to make car valuation accessible, accurate, and transparent for everyone. 
                In an industry plagued by uncertainty and hidden pricing tactics, we realized the need for a platform that puts users first.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced developers, data scientists, and car enthusiasts came together to create a solution that leverages 
                cutting-edge AI technology to predict car prices with remarkable accuracy. Today, we serve thousands of users who trust us 
                with one of the most important financial decisions they make.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower car buyers and sellers with accurate, data-driven pricing information that enables fair and transparent transactions. 
                We believe everyone deserves to know the true market value of their vehicle without bias or hidden agendas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most trusted and reliable car valuation platform globally, where technology and transparency converge to create 
                an ecosystem where fair car pricing is the norm, not the exception.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-8 space-y-4">
                    <div className="flex justify-center">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a diverse team of automotive experts, data scientists, and technology professionals passionate about making car valuation simple and accessible for everyone.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
