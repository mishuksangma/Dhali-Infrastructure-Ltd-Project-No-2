/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ArrowRight, Building2, HardHat, Compass, Users, 
  Phone, MapPin, Mail, ChevronRight, Facebook, Twitter, Linkedin, Instagram,
  CheckCircle2, Hammer, Ruler
} from 'lucide-react';
import companyLogo from './assets/images/regenerated_image_1778044615476.png';
import aboutImage from './assets/images/regenerated_image_1778045680392.jpg';

// --- Animation Variants ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  },
  viewport: { once: true, margin: "-100px" }
};

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-500 shadow-xl py-3' : 'bg-brand-500/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={companyLogo} alt="Dhali Logo" className="h-12 w-auto animate-subtle-pulse bg-white p-1.5 rounded-xl shadow-sm" />
            <span className="font-['Arial'] font-bold text-xl tracking-tight text-white hidden sm:block">
              Dhali Infrastructure
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent-400 text-gray-100"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full font-bold text-sm bg-accent-500 text-white hover:bg-accent-400 shadow-md transition-all hover:-translate-y-0.5 inline-block"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-500 border-t border-white/10 px-4 pt-2 pb-6 space-y-1 shadow-xl absolute w-full left-0 right-0 top-full mt-0 -z-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-accent-500 hover:bg-accent-400 text-white rounded-xl font-bold shadow-md transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-brand-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="uppercase tracking-[0.2em] text-accent-400 font-semibold text-sm md:text-base mb-6 block">
            Dhali Infrastructure Ltd
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
            We Transform <br className="hidden md:block"/> Dreams Into Homes
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 font-light">
            Excellence in real estate development, commercial construction, and sustainable infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-brand-950 font-semibold rounded-sm hover:bg-accent-400 transition-colors"
            >
              Our Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/70"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img 
                src={aboutImage} 
                alt="Dhali Infrastructure Project" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent-100 rounded-sm -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjYThhMDQiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"/>
            
            {/* Experience Badge */}
            <div className="absolute top-10 -right-6 md:-right-10 bg-brand-900 text-white p-6 rounded-sm shadow-xl z-20">
              <p className="text-5xl font-serif font-bold text-accent-500 mb-1">25+</p>
              <p className="text-sm font-medium tracking-wide uppercase text-white/90">Years of<br/>Excellence</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn}>
            <span className="text-accent-600 font-semibold uppercase tracking-wider text-sm">About Dhali Infrastructure</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              A Legacy of Quality, <br /> Built to Last.
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Dhali Infrastructure Ltd is a premier real estate development and construction company dedicated to creating enduring value. We blend architectural brilliance with meticulous engineering to construct properties that stand as landmarks of progress.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From luxury residential complexes to state-of-the-art commercial centers, our commitment to uncompromising quality and timely delivery has made us a trusted partner in shaping the modern skyline.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-600">
                  <CheckCircle2 className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Materials</h4>
                  <p className="text-sm text-gray-500 mt-1">Sourced from the best suppliers globally.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-600">
                  <Users className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-sm text-gray-500 mt-1">Seasoned architects & engineers.</p>
                </div>
              </div>
            </div>

            <a href="#about-more" className="inline-flex items-center font-semibold text-brand-800 hover:text-brand-600 transition-colors group">
              Read Our Full Story
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8"/>,
      title: "Commercial Development",
      description: "State-of-the-art office spaces, retail complexes, and industrial parks designed for modern businesses."
    },
    {
      icon: <Hammer className="w-8 h-8"/>,
      title: "Residential Construction",
      description: "Premium apartments, luxury villas, and smart homes catering to refined lifestyles."
    },
    {
      icon: <HardHat className="w-8 h-8"/>,
      title: "Civil Infrastructure",
      description: "Large-scale civil engineering projects including bridges, highways, and specialized structures."
    },
    {
      icon: <Ruler className="w-8 h-8"/>,
      title: "Architectural Planning",
      description: "Comprehensive design and layout planning prioritizing aesthetics, function, and sustainability."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span {...fadeIn} className="text-accent-600 font-semibold uppercase tracking-wider text-sm">What We Do</motion.span>
          <motion.h2 {...fadeIn} className="mt-3 text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Comprehensive Real Estate & Construction Solutions
          </motion.h2>
          <motion.p {...fadeIn} className="text-gray-600 text-lg">
            We offer end-to-end services across the real estate lifecycle, executing projects with unparalleled precision and dedication.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-50 rounded-lg flex items-center justify-center text-brand-800 mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-sm font-semibold text-brand-800 group-hover:text-accent-600 transition-colors">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Nexus Commercial Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Lumina Residences",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Grand Plaza Mall",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Tranquil Villas",
      category: "Luxury Residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-950 text-white cursor-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div {...fadeIn} className="max-w-2xl">
            <span className="text-accent-500 font-semibold uppercase tracking-wider text-sm">Portfolio</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our diverse portfolio of award-winning developments that showcase our commitment to design excellence and execution.
            </p>
          </motion.div>
          <motion.a 
            {...fadeIn}
            href="#all-projects" 
            className="inline-flex items-center shrink-0 border border-gray-600 px-6 py-3 rounded-sm hover:border-white hover:bg-white hover:text-brand-950 transition-all font-medium"
          >
            View All Projects
          </motion.a>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-accent-400 font-medium text-sm mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div {...fadeIn}>
            <span className="text-accent-600 font-semibold uppercase tracking-wider text-sm">Get in Touch</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Contact us today to discuss your next construction or real estate layout project. Our team of experts is ready to bring your ideas to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 bg-blue-50 rounded-full flex justify-center items-center shrink-0">
                  <MapPin className="text-brand-600 w-5 h-5"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Head Office</h4>
                  <p className="text-gray-600 mt-1">123 Corporate Tower, Level 8<br/>Dhaka, Bangladesh 1212</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 bg-blue-50 rounded-full flex justify-center items-center shrink-0">
                  <Phone className="text-brand-600 w-5 h-5"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
                  <p className="text-gray-600 mt-1">+880 1234 567 890<br/>+880 0987 654 321</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 bg-blue-50 rounded-full flex justify-center items-center shrink-0">
                  <Mail className="text-brand-600 w-5 h-5"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                  <p className="text-gray-600 mt-1">info@dhali-infrastructure.com<br/>sales@dhali-infrastructure.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="bg-gray-50 p-8 md:p-10 rounded-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow" placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-shadow resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-900 text-white font-bold rounded-sm hover:bg-brand-800 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-950 pt-20 pb-10 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={companyLogo} alt="Dhali Logo" className="h-10 w-auto bg-white/90 p-1 rounded-sm" />
              <span className="font-serif font-bold text-xl tracking-tight">Dhali</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the way in real estate and infrastructure development, crafting spaces that inspire and endure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-brand-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-brand-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-brand-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-500 hover:text-brand-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-accent-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent-400 transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-accent-400 transition-colors">Our Projects</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Commercial Real Estate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Residential Buildings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Infrastructure Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Urban Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Renovations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get the latest updates on our projects and industry news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-accent-500 text-white placeholder:text-gray-500"
              />
              <button className="bg-accent-500 text-brand-950 font-bold px-4 py-3 rounded-sm hover:bg-accent-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dhali Infrastructure Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen break-words">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

