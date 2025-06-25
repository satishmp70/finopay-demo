<template>
  <div class="home">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav__container">
        <a href="#" class="nav__logo">
          <img :src="getImagePath('logo.svg')" alt="Finopay Logo" />
        </a>
        <div class="nav__links" :class="{ 'is-mobile': showMobileMenu }">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <router-link to="/login" class="nav__login">Login</router-link>
        </div>
        <button class="nav__mobile-btn" @click="toggleMobileMenu" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="nav__icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div v-if="showMobileMenu" class="nav__mobile-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
        <router-link to="/login" class="nav__login">Login</router-link>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero__bg">
        <img :src="getImagePath('section-bg1.png')" alt="Background" />
      </div>
      <div class="hero__container">
        <div class="hero__content">
          <h1>Welcome to Secure and Seamless Financial Transactions with PCI-DSS Technology</h1>
          <p>
            Experience top-notch online payment services with enhanced security and reliability.
          </p>
          <div class="hero__actions">
            <button class="hero__get-started">Get Started</button>
            <button class="hero__learn-more">Learn More</button>
          </div>
        </div>
        <div class="hero__images">
          <div class="hero__main-img">
            <img :src="getImagePath('abtus.png')" alt="Main Feature" />
          </div>
          <div class="hero__feature hero__feature--1">
            <img :src="getImagePath('c1.png')" alt="Feature 1" />
          </div>
          <div class="hero__feature hero__feature--2">
            <img :src="getImagePath('c2.png')" alt="Feature 2" />
          </div>
        </div>
      </div>
      <div class="hero__trust">
        <img :src="getImagePath('ft (2).jpg')" alt="Trust Badge 1" />
        <img :src="getImagePath('ft (3).jpg')" alt="Trust Badge 2" />
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="about__container">
        <div class="about__content">
          <div class="about__text">
            <h2>About Finopay</h2>
            <p class="about__subtitle">Leading the Future of Digital Payments</p>
            <p class="about__description">
              We are a cutting-edge fintech company dedicated to revolutionizing the way people
              handle financial transactions. With our advanced PCI-DSS technology and commitment to
              security, we provide seamless payment solutions for businesses and individuals alike.
            </p>
            <div class="about__stats">
              <div class="about__stat">
                <h3>10M+</h3>
                <p>Active Users</p>
              </div>
              <div class="about__stat">
                <h3>99.9%</h3>
                <p>Uptime</p>
              </div>
              <div class="about__stat">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
          <div class="about__images">
            <img
              :src="getImagePath('section-bg1.png')"
              alt="About Platform"
              class="about__main-img"
            />
            <img :src="getImagePath('abtus.png')" alt="About Feature" class="about__overlay-img" />
            <div class="about__decor about__decor--1">
              <img :src="getImagePath('c1.png')" alt="Security Badge" />
            </div>
            <div class="about__decor about__decor--2">
              <img :src="getImagePath('c2.png')" alt="Trust Badge" />
            </div>
          </div>
        </div>
        <div class="about__values">
          <div class="about__value">
            <div class="about__value-icon">
              <img :src="getImagePath('ft (2).jpg')" alt="Innovation" />
            </div>
            <h3>Innovation</h3>
            <p>Constantly evolving technology to meet modern financial needs</p>
          </div>
          <div class="about__value">
            <div class="about__value-icon">
              <img :src="getImagePath('ft (3).jpg')" alt="Security" />
            </div>
            <h3>Security</h3>
            <p>Bank-grade security protocols to protect your transactions</p>
          </div>
          <div class="about__value">
            <div class="about__value-icon">
              <img :src="getImagePath('logo.svg')" alt="Trust" />
            </div>
            <h3>Trust</h3>
            <p>Building lasting relationships through transparency and reliability</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
      <div class="features__container">
        <div class="features__header">
          <h2>Why Select Our Services</h2>
          <p>Experience secure and seamless financial transactions with our innovative solutions</p>
        </div>
        <div class="features__grid">
          <div class="features__card">
            <div class="features__icon">
              <img :src="getImagePath('c1.png')" alt="Security Feature" />
            </div>
            <h3>Security Always</h3>
            <p>Advanced encryption and secure payment processing for your peace of mind.</p>
          </div>
          <div class="features__card">
            <div class="features__icon">
              <img :src="getImagePath('c2.png')" alt="Interface Feature" />
            </div>
            <h3>User-Friendly Interface</h3>
            <p>Intuitive design for seamless navigation and easy transactions.</p>
          </div>
          <div class="features__card">
            <div class="features__icon">
              <img :src="getImagePath('abtus.png')" alt="Support Feature" />
            </div>
            <h3>24/7 Customer Support</h3>
            <p>Round-the-clock assistance for all your payment needs.</p>
          </div>
        </div>
        <div class="features__badges">
          <img :src="getImagePath('ft (2).jpg')" alt="Trust Badge 1" />
          <img :src="getImagePath('ft (3).jpg')" alt="Trust Badge 2" />
          <img :src="getImagePath('logo.svg')" alt="Trust Badge 3" />
          <img :src="getImagePath('section-bg1.png')" alt="Trust Badge 4" />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="services__container">
        <div class="services__header">
          <h2>Explore Our Innovative Fintech Solutions</h2>
          <p>Comprehensive financial services designed for your needs</p>
        </div>
        <div class="services__grid">
          <div class="services__card">
            <div class="services__img-wrap">
              <img :src="getImagePath('c1.png')" alt="Mobile Payments" />
              <div class="services__img-overlay"></div>
            </div>
            <div class="services__content">
              <h3>Mobile Payments</h3>
              <p>Secure and instant mobile payment solutions for everyday transactions.</p>
              <button class="services__btn">Learn More</button>
            </div>
          </div>
          <div class="services__card">
            <div class="services__img-wrap">
              <img :src="getImagePath('c2.png')" alt="Digital Banking" />
              <div class="services__img-overlay"></div>
            </div>
            <div class="services__content">
              <h3>Digital Banking</h3>
              <p>Complete digital banking solutions for modern financial needs.</p>
              <button class="services__btn">Learn More</button>
            </div>
          </div>
          <div class="services__card">
            <div class="services__img-wrap">
              <img :src="getImagePath('abtus.png')" alt="Business Solutions" />
              <div class="services__img-overlay"></div>
            </div>
            <div class="services__content">
              <h3>Business Solutions</h3>
              <p>Comprehensive financial tools for business growth and management.</p>
              <button class="services__btn">Learn More</button>
            </div>
          </div>
          <div class="services__card">
            <div class="services__img-wrap">
              <img :src="getImagePath('section-bg1.png')" alt="Investment Services" />
              <div class="services__img-overlay"></div>
            </div>
            <div class="services__content">
              <h3>Investment Services</h3>
              <p>Smart investment solutions for your financial growth.</p>
              <button class="services__btn">Learn More</button>
            </div>
          </div>
        </div>
        <div class="services__badges">
          <img :src="getImagePath('ft (2).jpg')" alt="Certification 1" />
          <img :src="getImagePath('ft (3).jpg')" alt="Certification 2" />
          <img :src="getImagePath('logo.svg')" alt="Certification 3" />
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="security" id="security">
      <div class="security__container">
        <div class="security__content">
          <h2>Your Security is Our Top Priority</h2>
          <div class="security__features">
            <div class="security__feature">
              <div class="security__icon-wrap">
                <img :src="getImagePath('c1.png')" alt="Security Icon" />
              </div>
              <div>
                <h3>PCI-DSS Compliant</h3>
                <p>Highest level of payment security standards for your transactions.</p>
              </div>
            </div>
            <div class="security__feature">
              <div class="security__icon-wrap">
                <img :src="getImagePath('c2.png')" alt="Encryption Icon" />
              </div>
              <div>
                <h3>End-to-End Encryption</h3>
                <p>Advanced encryption protecting your sensitive data.</p>
              </div>
            </div>
            <div class="security__feature">
              <div class="security__icon-wrap">
                <img :src="getImagePath('logo.svg')" alt="Monitoring Icon" />
              </div>
              <div>
                <h3>24/7 Monitoring</h3>
                <p>Continuous security monitoring and fraud prevention.</p>
              </div>
            </div>
          </div>
          <div class="security__badges">
            <img :src="getImagePath('ft (2).jpg')" alt="Security Certificate 1" />
            <img :src="getImagePath('ft (3).jpg')" alt="Security Certificate 2" />
          </div>
        </div>
        <div class="security__images">
          <img
            :src="getImagePath('section-bg1.png')"
            alt="Security Background"
            class="security__main-img"
          />
          <img
            :src="getImagePath('abtus.png')"
            alt="Security Feature"
            class="security__overlay-img"
          />
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how" id="how-it-works">
      <div class="how__container">
        <div class="how__header">
          <h2>How It Works</h2>
          <p>Simple steps to start using our financial services</p>
        </div>
        <div class="how__steps">
          <div class="how__step">
            <div class="how__step-card">
              <div class="how__icon-wrap">
                <img :src="getImagePath('c1.png')" alt="Register Icon" />
              </div>
              <h3>1. Create Account</h3>
              <p>Quick and easy registration process with secure verification.</p>
            </div>
            <img
              :src="getImagePath('section-bg1.png')"
              alt="Step 1 Background"
              class="how__step-bg"
            />
          </div>
          <div class="how__step">
            <div class="how__step-card">
              <div class="how__icon-wrap">
                <img :src="getImagePath('c2.png')" alt="Setup Icon" />
              </div>
              <h3>2. Link Account</h3>
              <p>Connect your preferred payment methods securely.</p>
            </div>
            <img :src="getImagePath('abtus.png')" alt="Step 2 Background" class="how__step-bg" />
          </div>
          <div class="how__step">
            <div class="how__step-card">
              <div class="how__icon-wrap">
                <img :src="getImagePath('logo.svg')" alt="Transaction Icon" />
              </div>
              <h3>3. Start Transacting</h3>
              <p>Begin making secure payments and transfers instantly.</p>
            </div>
          </div>
        </div>
        <div class="how__badges">
          <img :src="getImagePath('ft (2).jpg')" alt="Security Badge" />
          <img :src="getImagePath('ft (3).jpg')" alt="Trust Badge" />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
      <div class="testimonials__container">
        <div class="testimonials__header">
          <h2>What Our Customers Say</h2>
          <p>Real experiences from our valued users</p>
        </div>
        <div class="testimonials__grid">
          <div class="testimonials__card">
            <img :src="getImagePath('c1.png')" alt="Quote Icon" class="testimonials__quote" />
            <div class="testimonials__user">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="User"
                class="testimonials__avatar"
              />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Business Owner</p>
              </div>
            </div>
            <p class="testimonials__text">
              "The payment process is incredibly smooth and secure. Best financial service I've
              used!"
            </p>
            <img :src="getImagePath('ft (2).jpg')" alt="Trust Badge" class="testimonials__badge" />
          </div>
          <div class="testimonials__card">
            <img :src="getImagePath('c2.png')" alt="Quote Icon" class="testimonials__quote" />
            <div class="testimonials__user">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="User"
                class="testimonials__avatar"
              />
              <div>
                <h4>Michael Chen</h4>
                <p>Tech Entrepreneur</p>
              </div>
            </div>
            <p class="testimonials__text">
              "Their security features give me peace of mind. Transactions are fast and reliable."
            </p>
            <img :src="getImagePath('ft (3).jpg')" alt="Trust Badge" class="testimonials__badge" />
          </div>
          <div class="testimonials__card">
            <img :src="getImagePath('logo.svg')" alt="Quote Icon" class="testimonials__quote" />
            <div class="testimonials__user">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="User"
                class="testimonials__avatar"
              />
              <div>
                <h4>Emily Rodriguez</h4>
                <p>Retail Manager</p>
              </div>
            </div>
            <p class="testimonials__text">
              "Customer support is exceptional. They're always there when you need them."
            </p>
            <img
              :src="getImagePath('section-bg1.png')"
              alt="Trust Badge"
              class="testimonials__badge"
            />
          </div>
        </div>
        <div class="testimonials__bg">
          <img :src="getImagePath('abtus.png')" alt="Background Pattern" />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="contact__container">
        <div class="contact__header">
          <h2>Get In Touch</h2>
          <p>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </div>
        <div class="contact__content">
          <div class="contact__form-section">
            <form class="contact__form" @submit.prevent="handleContactSubmit">
              <div class="contact__form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div class="contact__form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div class="contact__form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="contactForm.phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div class="contact__form-group">
                <label for="subject">Subject</label>
                <select id="subject" v-model="contactForm.subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="contact__form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button type="submit" class="contact__submit-btn">Send Message</button>
            </form>
          </div>
          <div class="contact__info-section">
            <div class="contact__info">
              <h3>Contact Information</h3>
              <div class="contact__info-item">
                <div class="contact__info-icon">
                  <img :src="getImagePath('location.svg')" alt="Location" />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>123 Fintech Street<br />Digital District, NY 10001<br />United States</p>
                </div>
              </div>
              <div class="contact__info-item">
                <div class="contact__info-icon">
                  <img :src="getImagePath('phone.svg')" alt="Phone" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>
              <div class="contact__info-item">
                <div class="contact__info-icon">
                  <img :src="getImagePath('email.svg')" alt="Email" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@finopay.com</p>
                  <p>support@finopay.com</p>
                </div>
              </div>
              <div class="contact__info-item">
                <div class="contact__info-icon">
                  <img :src="getImagePath('clock.svg')" alt="Hours" />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div class="contact__social">
              <h4>Follow Us</h4>
              <div class="contact__social-links">
                <a href="#" class="contact__social-link">
                  <img :src="getImagePath('facebook.svg')" alt="Facebook" />
                </a>
                <a href="#" class="contact__social-link">
                  <img :src="getImagePath('twitter.svg')" alt="Twitter" />
                </a>
                <a href="#" class="contact__social-link">
                  <img :src="getImagePath('linkedin.svg')" alt="LinkedIn" />
                </a>
                <a href="#" class="contact__social-link">
                  <img :src="getImagePath('instagram.svg')" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMobileMenu = ref(false)
function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}
function getImagePath(filename: string): string {
  return `/home-images/${filename}`
}

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const handleContactSubmit = () => {
  // Handle form submission
  console.log('Contact form submitted:', contactForm.value)
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  }
  alert("Thank you for your message! We'll get back to you soon.")
}
</script>

<style lang="scss" scoped>
.home {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: #333;
  background: #fafafa;
}

// Navigation
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 50;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    padding: 0 1.5rem;
  }
  &__logo img {
    height: 3rem;
    width: auto;
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      color: #444;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
      &:hover {
        color: #2563eb;
      }
    }
    .nav__login {
      background: #2563eb;
      color: #fff;
      border-radius: 999px;
      padding: 0.5rem 1.5rem;
      margin-left: 1rem;
      transition: background 0.2s;
      &:hover {
        background: #1d4ed8;
      }
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
  &__mobile-btn {
    display: none;
    background: none;
    border: none;
    @media (max-width: 900px) {
      display: block;
    }
  }
  &__icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #444;
  }
  &__mobile-menu {
    display: flex;
    flex-direction: column;
    background: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 100;
    a {
      padding: 1rem 2rem;
      color: #444;
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px solid #eee;
      &:hover {
        background: #f3f4f6;
        color: #2563eb;
      }
    }
    .nav__login {
      background: #2563eb;
      color: #fff;
      border-radius: 999px;
      margin: 1rem 2rem;
      padding: 0.5rem 1.5rem;
      text-align: center;
      &:hover {
        background: #1d4ed8;
      }
    }
  }
}

// Hero Section
.hero {
  position: relative;
  padding-top: 6rem;
  &__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
    }
  }
  &__container {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 1.5rem 0 1.5rem;
    @media (min-width: 1024px) {
      flex-direction: row;
      gap: 4rem;
      padding-top: 5rem;
    }
  }
  &__content {
    flex: 1 1 50%;
    text-align: center;
    @media (min-width: 1024px) {
      text-align: left;
    }
    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      @media (min-width: 768px) {
        font-size: 2.5rem;
      }
      @media (min-width: 1200px) {
        font-size: 3rem;
      }
    }
    p {
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 2rem;
    }
    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      @media (min-width: 1024px) {
        justify-content: flex-start;
      }
      .hero__get-started {
        background: #2563eb;
        color: #fff;
        border: none;
        border-radius: 999px;
        padding: 0.75rem 2rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s;
        &:hover {
          background: #1d4ed8;
        }
      }
      .hero__learn-more {
        background: #fff;
        color: #2563eb;
        border: 2px solid #2563eb;
        border-radius: 999px;
        padding: 0.75rem 2rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s;
        &:hover {
          background: #eff6ff;
        }
      }
    }
  }
  &__images {
    flex: 1 1 50%;
    position: relative;
    min-width: 300px;
    .hero__main-img {
      position: relative;
      z-index: 20;
      img {
        width: 100%;
        height: auto;
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      }
    }
    .hero__feature {
      position: absolute;
      z-index: 10;
      &--1 {
        top: 25%;
        right: -2.5rem;
        display: none;
        @media (min-width: 1024px) {
          display: block;
        }
        img {
          width: 12rem;
          height: auto;
        }
      }
      &--2 {
        bottom: 25%;
        left: -2.5rem;
        display: none;
        @media (min-width: 1024px) {
          display: block;
        }
        img {
          width: 12rem;
          height: auto;
        }
      }
    }
  }
  &__trust {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 3rem;
    img {
      height: 4rem;
      width: auto;
      border-radius: 1rem;
    }
  }
}

.about {
  background: #fff;
  padding: 5rem 0 2rem 0;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      gap: 4rem;
    }
  }
  &__text {
    flex: 1 1 50%;
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #1f2937;
    }
    .about__subtitle {
      font-size: 1.25rem;
      color: #2563eb;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    .about__description {
      color: #666;
      line-height: 1.7;
      margin-bottom: 2rem;
    }
  }
  &__stats {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    .about__stat {
      text-align: center;
      h3 {
        font-size: 2rem;
        font-weight: bold;
        color: #2563eb;
        margin-bottom: 0.5rem;
      }
      p {
        color: #666;
        font-weight: 500;
      }
    }
  }
  &__images {
    flex: 1 1 50%;
    position: relative;
    min-width: 300px;
    .about__main-img {
      width: 100%;
      border-radius: 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }
    .about__overlay-img {
      position: absolute;
      bottom: -1.5rem;
      right: -1.5rem;
      width: 8rem;
      border-radius: 1.25rem;
      object-fit: cover;
      background: #fff;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }
    .about__decor {
      position: absolute;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      &--1 {
        top: 1rem;
        left: -1rem;
      }
      &--2 {
        top: 50%;
        right: -1rem;
        transform: translateY(-50%);
      }
      img {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
      }
    }
  }
  &__values {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__value {
    background: #f8fafc;
    border-radius: 1.5rem;
    padding: 2rem 1.5rem;
    text-align: center;
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-4px);
    }
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 1rem 0 0.75rem 0;
      color: #1f2937;
    }
    p {
      color: #666;
      line-height: 1.6;
    }
  }
  &__value-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: #eff6ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem auto;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}

.features {
  background: #f3f4f6;
  padding: 5rem 0 2rem 0;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  &__header {
    text-align: center;
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__card {
    background: #fff;
    border-radius: 1.25rem;
    padding: 2rem 1.5rem;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.2s;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);
    }
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    p {
      color: #666;
    }
  }
  &__icon {
    margin-bottom: 1.5rem;
    img {
      width: 4rem;
      height: 4rem;
      object-fit: contain;
      border-radius: 0.5rem;
    }
  }
  &__badges {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    justify-items: center;
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
    img {
      height: 3rem;
      object-fit: contain;
      border-radius: 0.75rem;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      padding: 0.5rem;
    }
  }
}

.services {
  background: #fff;
  padding: 5rem 0 2rem 0;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  &__header {
    text-align: center;
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__card {
    background: #fff;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    &:hover {
      box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);
    }
  }
  &__img-wrap {
    position: relative;
    width: 100%;
    height: 16rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .services__img-overlay {
      position: absolute;
      inset: 0;
      background: #2563eb;
      opacity: 0.12;
      pointer-events: none;
    }
  }
  &__content {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    p {
      color: #666;
      margin-bottom: 1.5rem;
    }
  }
  &__btn {
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 0.5rem 1.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #1d4ed8;
    }
  }
  &__badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    img {
      height: 4rem;
      object-fit: contain;
      border-radius: 1rem;
      background: #f3f4f6;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      padding: 0.5rem;
    }
  }
}

.security {
  background: #f3f4f6;
  padding: 5rem 0 2rem 0;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      gap: 4rem;
    }
  }
  &__content {
    flex: 1 1 50%;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
  }
  &__features {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  &__feature {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    background: #fff;
    border-radius: 1rem;
    padding: 1.5rem 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    p {
      color: #666;
    }
  }
  &__icon-wrap {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #eff6ff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  &__badges {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    img {
      height: 4rem;
      object-fit: contain;
      border-radius: 1rem;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      padding: 0.5rem;
    }
  }
  &__images {
    flex: 1 1 50%;
    position: relative;
    min-width: 300px;
    .security__main-img {
      width: 100%;
      border-radius: 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }
    .security__overlay-img {
      position: absolute;
      bottom: -1.5rem;
      right: -1.5rem;
      width: 12rem;
      border-radius: 1.25rem;
      object-fit: cover;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }
  }
}

.how {
  background: #fff;
  padding: 5rem 0 2rem 0;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  &__header {
    text-align: center;
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }
  &__steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__step {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .how__step-bg {
      position: absolute;
      top: 1.5rem;
      right: -1rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.08;
      z-index: 0;
      pointer-events: none;
    }
  }
  &__step-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    padding: 2rem 1.5rem;
    text-align: center;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 1rem 0 0.5rem 0;
    }
    p {
      color: #666;
    }
  }
  &__icon-wrap {
    width: 4rem;
    height: 4rem;
    background: #eff6ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  &__badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    img {
      height: 3rem;
      object-fit: contain;
      border-radius: 0.75rem;
      background: #f3f4f6;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      padding: 0.5rem;
    }
  }
}

.testimonials {
  background: #f3f4f6;
  padding: 5rem 0 2rem 0;
  position: relative;
  overflow: hidden;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }
  &__header {
    text-align: center;
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__card {
    background: #fff;
    border-radius: 1.25rem;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    .testimonials__quote {
      position: absolute;
      top: -1rem;
      left: -1rem;
      width: 2rem;
      height: 2rem;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    .testimonials__avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    p {
      color: #666;
      font-size: 0.875rem;
    }
  }
  &__text {
    color: #666;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  &__badge {
    height: 1.5rem;
    object-fit: contain;
    align-self: flex-start;
  }
  &__bg {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0.08;
    img {
      width: 100%;
      height: auto;
    }
  }
}

.contact {
  background: #fff;
  padding: 5rem 0 2rem 0;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  &__header {
    text-align: center;
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      gap: 4rem;
    }
  }
  &__form-section {
    flex: 1 1 50%;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  &__form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label {
      font-weight: 600;
    }
    input,
    select,
    textarea {
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
    }
  }
  &__submit-btn {
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #1d4ed8;
    }
  }
  &__info-section {
    flex: 1 1 50%;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.75rem;
    }
  }
  &__info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    .contact__info-icon {
      width: 2rem;
      height: 2rem;
      object-fit: contain;
    }
    h4 {
      font-weight: 600;
    }
    p {
      color: #666;
    }
  }
  &__social {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h4 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.75rem;
    }
    .contact__social-links {
      display: flex;
      gap: 1rem;
      .contact__social-link {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
      }
    }
  }
}
</style>
