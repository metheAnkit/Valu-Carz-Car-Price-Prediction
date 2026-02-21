import React, { useRef } from 'react';
import { Button } from '../components/Button';
import { Card, CardContent } from '../components/Card';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  const carTypes = [
    { name: "Sedan", image: "/images/sedan.png" },
    { name: "SUV", image: "/images/suv.png" },
    { name: "Coupe", image: "/images/coupe.png" },
    { name: "Hatchback", image: "/images/hatchback.png" },
    { name: "Electric", image: "/images/electric.png" },
  ];

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Accurate Pricing",
      description: "Get precise car valuations based on real market data and advanced algorithms.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
      title: "Trusted Platform",
      description: "Thousands of users trust Valu Carz for honest and reliable car valuations.",
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Instant Results",
      description: "Get your car valuation in seconds with our fast prediction system.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Expert Analysis",
      description: "Our AI-powered system analyzes multiple factors for comprehensive pricing.",
    },
  ];

  const featuredCars = [
    { name: "Ferrari", model: "F8 Tributo", price: "₹65,00,000", image: "/images/featured-ferrari.png" },
    { name: "BMW", model: "M4", price: "₹54,00,000", image: "/images/featured-bmw.png" },
    { name: "Mercedes", model: "AMG GT", price: "₹74,00,000", image: "/images/featured-mercedes.png" },
    { name: "Audi", model: "R8", price: "₹79,00,000", image: "/images/featured-audi.png" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-hero text-white">
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{ y: heroY }}
        ></motion.div>
        
        <motion.div 
          className="container relative mx-auto px-4 py-6 md:py-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight italic">
                Find Your
                <br />
                <span className="text-white drop-shadow-[0_2px_10px_rgba(236,72,153,0.5)]">
                  Dream Car
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Discover your car's true value with AI-powered predictions.
                <br />
                Buy, sell, or explore with complete confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/predict-price">
                  <Button className="bg-accent hover:bg-accent/90 text-white border-2 border-accent hover:shadow-glow transition-all w-full sm:w-auto">
                    Predict Price
                  </Button>
                </Link>
                <Link to="/car-explorer">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground transition-all w-full sm:w-auto">
                    Explore Cars
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, y: 140, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <img
                src="/dream-car.png"
                alt="Dream Car"
                className="w-full max-w-xl md:max-w-2xl drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                onError={(e) => { e.currentTarget.src = '/images/car-placeholder.svg'; }}
              />
            </motion.div>
          </div>

          {/* Car Types */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {carTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer group overflow-hidden h-40">
                  <div className="w-full h-full flex flex-col items-center justify-end relative">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform"
                      onError={(e) => { e.currentTarget.src = '/images/car-placeholder.svg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <p className="text-white font-bold text-lg relative z-10 mb-4">{type.name}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Top Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">
              Top Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {["In Stock", "Used Cars", "Any Models", "All Prices"].map((tab, index) => (
                <button
                  key={index}
                  className="px-6 py-2 rounded-full transition-all bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Car Showcase */}
          <div className="mb-16 rounded-2xl overflow-hidden bg-gradient-to-r from-card to-muted shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-12">
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold italic">
                  Premium
                  <br />
                  Collection
                </h3>
                <p className="text-lg text-muted-foreground">
                  Explore our curated selection of luxury and performance vehicles.
                  <br />
                  Each car is thoroughly inspected and verified for quality.
                </p>
                <Link to="/car-explorer">
                  <Button className="w-fit bg-primary hover:bg-primary/90">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="relative flex items-center justify-center h-full overflow-visible bg-transparent">
                <img
                  src="/premium-car.png"
                  alt="Premium Car"
                  className="w-full max-w-2xl md:max-w-4xl drop-shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
                  onError={(e) => { e.currentTarget.src = '/images/car-placeholder.svg'; }}
                />
              </div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-48 bg-muted flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.name} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    onError={(e) => { e.currentTarget.src = '/images/car-placeholder.svg'; }}
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <p className="text-muted-foreground">{car.model}</p>
                  <p className="text-2xl font-bold text-primary">{car.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Valu Carz?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make car valuation simple, accurate, and trustworthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your car valuation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              emoji="🔍"
              title="All Brands"
              description="Access valuation data for every major car brand. Our comprehensive database covers all makes and models from economy to luxury vehicles."
              link="/car-explorer"
              buttonText="Learn More →"
              gradientFrom="from-primary/20"
              gradientTo="to-secondary/20"
              hoverBg="group-hover:bg-primary"
              hoverText="group-hover:text-primary-foreground"
            />

            <ServiceCard
              emoji="🛡️"
              title="Free Support"
              description="Get expert guidance throughout your valuation journey. Our support team is here to help you make informed decisions about your vehicle."
              link="/about"
              buttonText="Learn More →"
              gradientFrom="from-accent/20"
              gradientTo="to-primary/20"
              hoverBg="group-hover:bg-accent"
              hoverText="group-hover:text-accent-foreground"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <motion.section 
        className="py-20 bg-gradient-hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get your car's value in three simple steps.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Enter Details",
                description: "Provide information about your car including make, model, year, and condition.",
                bg: "bg-primary",
              },
              {
                step: 2,
                title: "AI Analysis",
                description: "Our advanced AI analyzes market data and trends to calculate accurate pricing.",
                bg: "bg-secondary",
              },
              {
                step: 3,
                title: "Get Results",
                description: "Receive instant, accurate pricing information to help you make informed decisions.",
                bg: "bg-accent",
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="bg-background/50 backdrop-blur-sm border-border hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-8 pb-6 text-center space-y-4">
                    <div className={`w-20 h-20 ${item.bg} text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-lg`}>
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-hero text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container relative mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold italic leading-tight">
              Ready to Discover
              <br />
              Your Car's Value?
            </h2>
            <p className="text-xl text-white/80">
              Join thousands of satisfied users who trust Valu Carz for accurate car valuations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/predict-price">
                <Button className="bg-accent hover:bg-accent/90 text-white border-2 border-accent hover:shadow-glow transition-all w-full sm:w-auto">
                  Get Started Now
                </Button>
              </Link>
              <Link to="/about">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground transition-all w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card className="border-border hover:shadow-lg transition-shadow bg-background h-full">
        <CardContent className="pt-6 space-y-4">
          <div className="flex justify-center">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
          <p className="text-muted-foreground text-center">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Helper Component for Service Cards
const ServiceCard = ({ emoji, title, description, link, buttonText, gradientFrom, gradientTo }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all group h-full">
        <div className={`h-64 bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-8xl group-hover:scale-110 transition-transform`}>
          {emoji}
        </div>
        <CardContent className="p-8 space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <Link to={link}>
            <Button variant="outline" className="transition-all">
              {buttonText}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Home;
