<template>
  <div class="home">
    <!-- Header -->
    <header class="header">
      <div class="header__container">
        <h1 class="header__logo">Finopay</h1>
        <nav class="header__nav">
          <a href="#home" class="header__nav-link">Home</a>
          <a href="#about" class="header__nav-link">About</a>
          <a href="#services" class="header__nav-link">Services</a>
          <a href="#features" class="header__nav-link">Features</a>
          <a href="#contact" class="header__nav-link">Contact</a>
        </nav>
        <router-link to="/login" class="header__login">Login</router-link>
        <button class="header__mobile-btn" @click="toggleMobileMenu" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="header__mobile-icon"
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
      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="header__mobile-menu">
        <div class="header__mobile-links">
          <a href="#home" class="header__mobile-link">Home</a>
          <a href="#about" class="header__mobile-link">About</a>
          <a href="#services" class="header__mobile-link">Services</a>
          <a href="#features" class="header__mobile-link">Features</a>
          <a href="#contact" class="header__mobile-link">Contact</a>
          <router-link to="/login" class="header__mobile-login">Login</router-link>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero hero--modern">
      <div class="hero__container hero__container--modern">
        <div class="hero__left">
          <h1 class="hero__headline">
            Welcome to <span class="hero__brand-gradient">Finopay</span>
          </h1>
          <div class="hero__subtitle">Your Trusted Digital Payment Companion</div>
          <div class="hero__desc">Recharge, Pay Bills & Transfer Money Instantly</div>
          <button class="hero__cta hero__cta--gradient">Get Started Now</button>
        </div>
        <div class="hero__right">
          <div class="hero__circle-outer">
            <div class="hero__circle-inner">
              <div class="hero__card-icon">
                <svg
                  width="48"
                  height="32"
                  viewBox="0 0 48 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="6" width="40" height="20" rx="4" fill="#3B82F6" />
                  <rect x="4" y="10" width="40" height="4" fill="#60A5FA" />
                  <rect x="36" y="20" width="4" height="4" rx="1" fill="#FBBF24" />
                  <rect x="8" y="20" width="12" height="2" rx="1" fill="#E5E7EB" />
                </svg>
              </div>
              <div class="hero__circle-title">Digital Payments</div>
              <div class="hero__circle-desc">Made Simple</div>
            </div>
            <div class="hero__float hero__float--yellow">
              <svg width="40" height="40">
                <circle cx="20" cy="20" r="20" fill="#FBBF24" />
                <text
                  x="50%"
                  y="55%"
                  text-anchor="middle"
                  alignment-baseline="middle"
                  font-size="20"
                  fill="#9333ea"
                >
                  ⚡
                </text>
              </svg>
            </div>
            <div class="hero__float hero__float--green">
              <svg width="36" height="36">
                <circle cx="18" cy="18" r="18" fill="#6EE7B7" />
                <text
                  x="50%"
                  y="55%"
                  text-anchor="middle"
                  alignment-baseline="middle"
                  font-size="18"
                  fill="#047857"
                >
                  ✓
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="about about--centered">
      <div class="about__title-wrap">
        <h2 class="about__title">Who We Are</h2>
        <div class="about__divider"></div>
      </div>
      <div class="about__container about__container--split">
        <div class="about__left">
          <p class="about__description">
            Finopay is your reliable digital payment platform, designed to make financial
            transactions simple, secure, and convenient. We offer a comprehensive suite of digital
            payment services that cater to all your financial needs in one place.
          </p>
          <p class="about__description">
            From instant mobile recharges to secure money transfers, we're committed to providing
            you with the best digital payment experience.
          </p>
          <button class="about__learn-more">Learn More</button>
        </div>
        <div class="about__right">
          <div class="about__services-title">Our Services Include:</div>
          <div class="about__services-list">
            <ul>
              <li><span class="about__dot"></span>Mobile Recharge</li>
              <li><span class="about__dot"></span>Credit Card Bill Payments</li>
              <li><span class="about__dot"></span>Domestic Money Transfer (DMT)</li>
            </ul>
            <ul>
              <li><span class="about__dot"></span>DTH Recharge</li>
              <li><span class="about__dot"></span>Wallet Services</li>
              <li><span class="about__dot"></span>BBPS Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="services">
      <div class="services__container services__container--cards">
        <h2 class="services__title">Our Services</h2>
        <div class="services__divider"></div>
        <div class="services__subtitle">
          Comprehensive digital payment solutions for all your financial needs
        </div>
        <div class="services__grid-cards">
          <div class="services__card">
            <div class="services__card-emoji">📱</div>
            <div class="services__card-title">Mobile Recharge</div>
            <div class="services__card-desc">Instant mobile recharge for all networks</div>
            <ul class="services__card-list">
              <li><span class="services__dot"></span>All Networks</li>
              <li><span class="services__dot"></span>Instant Processing</li>
              <li><span class="services__dot"></span>Best Rates</li>
              <li><span class="services__dot"></span>Cashback Offers</li>
            </ul>
          </div>
          <div class="services__card">
            <div class="services__card-emoji">📺</div>
            <div class="services__card-title">DTH Recharge</div>
            <div class="services__card-desc">Quick DTH and cable TV recharge</div>
            <ul class="services__card-list">
              <li><span class="services__dot"></span>All DTH Providers</li>
              <li><span class="services__dot"></span>Quick Recharge</li>
              <li><span class="services__dot"></span>Plan Selection</li>
              <li><span class="services__dot"></span>Auto Reminders</li>
            </ul>
          </div>
          <div class="services__card">
            <div class="services__card-emoji">💡</div>
            <div class="services__card-title">Bill Payments</div>
            <div class="services__card-desc">Pay all your utility bills instantly</div>
            <ul class="services__card-list">
              <li><span class="services__dot"></span>Electricity Bills</li>
              <li><span class="services__dot"></span>Water Bills</li>
              <li><span class="services__dot"></span>Gas Bills</li>
              <li><span class="services__dot"></span>Broadband Bills</li>
            </ul>
          </div>
          <div class="services__card">
            <div class="services__card-emoji">💳</div>
            <div class="services__card-title">Credit Card Bills</div>
            <div class="services__card-desc">Pay credit card bills securely</div>
            <ul class="services__card-list">
              <li><span class="services__dot"></span>All Banks</li>
              <li><span class="services__dot"></span>Secure Payment</li>
              <li><span class="services__dot"></span>Due Reminders</li>
              <li><span class="services__dot"></span>Payment History</li>
            </ul>
          </div>
          <div class="services__card">
            <div class="services__card-emoji">💸</div>
            <div class="services__card-title">Money Transfer</div>
            <div class="services__card-desc">Send money instantly across India</div>
            <ul class="services__card-list">
              <li><span class="services__dot"></span>Bank Transfer</li>
              <li><span class="services__dot"></span>UPI Transfer</li>
              <li><span class="services__dot"></span>Cash Pickup</li>
              <li><span class="services__dot"></span>Low Charges</li>
            </ul>
          </div>
          <div class="services__card">
            <div class="services__card-emoji">👛</div>
            <div class="services__card-title">Wallet Services</div>
            <div class="services__card-desc">Manage your digital wallet easily</div>
            <ul class="services__card-list">
              <li><span class="services__dot"></span>Add Money</li>
              <li><span class="services__dot"></span>Send Money</li>
              <li><span class="services__dot"></span>Pay Bills</li>
              <li><span class="services__dot"></span>Cashback Rewards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose -->
    <section id="features" class="features features--why">
      <div class="features__container features__container--why">
        <h2 class="features__title">Why Choose Finopay?</h2>
        <div class="features__divider"></div>
        <div class="features__subtitle">
          Experience the difference with our cutting-edge payment platform
        </div>
        <div class="features__grid-why">
          <div class="features__card-why">
            <div class="features__icon-why features__icon-why--blue"><span>⚡</span></div>
            <div class="features__card-why-title">Fast & Reliable Transactions</div>
            <div class="features__card-why-desc">
              Lightning-fast processing with 99.9% uptime guarantee
            </div>
          </div>
          <div class="features__card-why">
            <div class="features__icon-why features__icon-why--green"><span>📱</span></div>
            <div class="features__card-why-title">Mobile-Friendly Interface</div>
            <div class="features__card-why-desc">
              Seamless experience across all devices and platforms
            </div>
          </div>
          <div class="features__card-why">
            <div class="features__icon-why features__icon-why--purple"><span>🛡️</span></div>
            <div class="features__card-why-title">24/7 Support</div>
            <div class="features__card-why-desc">
              Round-the-clock customer support for all your queries.
            </div>
          </div>
          <div class="features__card-why">
            <div class="features__icon-why features__icon-why--pink"><span>💳</span></div>
            <div class="features__card-why-title">All Payments in One Place</div>
            <div class="features__card-why-desc">
              Complete payment solution for all your financial needs.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact contact--cards">
      <div class="contact__container contact__container--cards">
        <h2 class="contact__title">Contact Us</h2>
        <div class="contact__divider"></div>
        <div class="contact__subtitle">Get in touch with us for any queries or support</div>
        <div class="contact__cards">
          <div class="contact__card contact__card--info">
            <div class="contact__card-title">Get in Touch</div>
            <div class="contact__info-list">
              <div class="contact__info-item">
                <span class="contact__info-icon contact__info-icon--circle"
                  ><svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="url(#phone-gradient)" />
                    <text
                      x="50%"
                      y="55%"
                      text-anchor="middle"
                      alignment-baseline="middle"
                      font-size="13"
                      fill="#fff"
                    >
                      📞
                    </text>
                    <defs>
                      <linearGradient
                        id="phone-gradient"
                        x1="0"
                        y1="0"
                        x2="20"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9333ea" />
                        <stop offset="1" stop-color="#ec4899" />
                      </linearGradient>
                    </defs></svg
                ></span>
                <div>
                  <div class="contact__info-label">Phone</div>
                  <div class="contact__info-value">+91 98765 43210</div>
                </div>
              </div>
              <div class="contact__info-item">
                <span class="contact__info-icon contact__info-icon--circle"
                  ><svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="url(#email-gradient)" />
                    <text
                      x="50%"
                      y="55%"
                      text-anchor="middle"
                      alignment-baseline="middle"
                      font-size="13"
                      fill="#fff"
                    >
                      ✉️
                    </text>
                    <defs>
                      <linearGradient
                        id="email-gradient"
                        x1="0"
                        y1="0"
                        x2="20"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9333ea" />
                        <stop offset="1" stop-color="#ec4899" />
                      </linearGradient>
                    </defs></svg
                ></span>
                <div>
                  <div class="contact__info-label">Email</div>
                  <div class="contact__info-value">support@finopay.com</div>
                </div>
              </div>
              <div class="contact__info-item">
                <span class="contact__info-icon contact__info-icon--circle"
                  ><svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="url(#address-gradient)" />
                    <text
                      x="50%"
                      y="55%"
                      text-anchor="middle"
                      alignment-baseline="middle"
                      font-size="13"
                      fill="#fff"
                    >
                      📍
                    </text>
                    <defs>
                      <linearGradient
                        id="address-gradient"
                        x1="0"
                        y1="0"
                        x2="20"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9333ea" />
                        <stop offset="1" stop-color="#ec4899" />
                      </linearGradient>
                    </defs></svg
                ></span>
                <div>
                  <div class="contact__info-label">Address</div>
                  <div class="contact__info-value">123 Business Center, Mumbai, India</div>
                </div>
              </div>
            </div>
          </div>
          <form class="contact__card contact__card--form" @submit.prevent="handleContactSubmit">
            <div class="contact__card-title">Send us a Message</div>
            <input
              class="contact__form-input"
              type="text"
              placeholder="Your Name"
              v-model="contactForm.name"
              required
            />
            <input
              class="contact__form-input"
              type="tel"
              placeholder="Mobile Number"
              v-model="contactForm.phone"
              required
            />
            <input
              class="contact__form-input"
              type="email"
              placeholder="Email Address"
              v-model="contactForm.email"
              required
            />
            <textarea
              class="contact__form-textarea"
              placeholder="Your Message"
              rows="4"
              v-model="contactForm.message"
              required
            ></textarea>
            <button type="submit" class="contact__form-button contact__form-button--gradient">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__grid">
          <div class="footer__section">
            <h3 class="footer__logo">Finopay</h3>
            <p class="footer__description">One place for all digital payments</p>
          </div>
          <div class="footer__section">
            <h4 class="footer__section-title">Quick Links</h4>
            <ul class="footer__links">
              <li><a href="#home" class="footer__link">Home</a></li>
              <li><a href="#about" class="footer__link">About</a></li>
              <li><a href="#contact" class="footer__link">Contact</a></li>
            </ul>
          </div>
          <div class="footer__section">
            <h4 class="footer__section-title">Services</h4>
            <ul class="footer__links">
              <li><a href="#services" class="footer__link">Recharge</a></li>
              <li><a href="#services" class="footer__link">Bill Pay</a></li>
              <li><a href="#services" class="footer__link">Money Transfer</a></li>
            </ul>
          </div>
          <div class="footer__section">
            <h4 class="footer__section-title">Legal</h4>
            <ul class="footer__links">
              <li><a href="#" class="footer__link">Privacy</a></li>
              <li><a href="#" class="footer__link">Terms</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__copyright">© 2025 Finopay. All rights reserved.</div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMobileMenu = ref(false)
function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
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
    message: '',
  }
  alert("Thank you for your message! We'll get back to you soon.")
}
</script>

<style lang="scss" scoped>
// Variables
$primary-gradient: linear-gradient(to right, #9333ea, #ec4899);
$secondary-gradient: linear-gradient(to bottom right, #f3e8ff, #fdf2f8);
$purple-600: #9333ea;
$pink-600: #ec4899;
$gray-50: #f9fafb;
$gray-100: #f3f4f6;
$gray-300: #d1d5db;
$gray-400: #9ca3af;
$gray-500: #6b7280;
$gray-600: #4b5563;
$gray-700: #374151;
$gray-900: #111827;
$white: #ffffff;
$blue-500: #3b82f6;
$green-500: #10b981;
$purple-500: #8b5cf6;
$pink-500: #ec4899;
$yellow-400: #fbbf24;

// Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin gradient-text {
  background: $primary-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@mixin section-padding {
  padding: 5rem 0;
}

@mixin container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

@mixin responsive($breakpoint) {
  @if $breakpoint == md {
    @media (min-width: 768px) {
      @content;
    }
  }
  @if $breakpoint == lg {
    @media (min-width: 1024px) {
      @content;
    }
  }
  @if $breakpoint == xl {
    @media (min-width: 1280px) {
      @content;
    }
  }
}

// Base styles
.home {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: $gray-900;
  background: $white;
  scroll-behavior: smooth;
}

// Header
.header {
  background: $white;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 50;

  &__container {
    @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
    @include gradient-text;
  }

  &__nav {
    display: none;
    gap: 1.5rem;

    @include responsive(md) {
      display: flex;
    }
  }

  &__nav-link {
    color: $gray-600;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: $purple-600;
    }
  }

  &__login {
    display: none;
    background: $primary-gradient;
    color: $white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    font-weight: 500;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-1px);
    }

    @include responsive(md) {
      display: block;
    }
  }

  &__mobile-btn {
    display: block;
    background: none;
    border: none;
    cursor: pointer;

    @include responsive(md) {
      display: none;
    }
  }

  &__mobile-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: $gray-600;
  }

  &__mobile-menu {
    background: $white;
    border-top: 1px solid $gray-100;

    @include responsive(md) {
      display: none;
    }
  }

  &__mobile-links {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__mobile-link {
    display: block;
    padding: 0.5rem 0;
    color: $gray-600;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: $purple-600;
    }
  }

  &__mobile-login {
    display: block;
    background: $primary-gradient;
    color: $white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    font-weight: 500;
    text-align: center;
    margin-top: 0.5rem;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-1px);
    }
  }
}

// Hero Section
.hero {
  background: linear-gradient(90deg, #f3e8ff 0%, #fdf2f8 100%);
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;

  &--modern {
    background: linear-gradient(90deg, #ede9fe 0%, #fdf2f8 100%);
    min-height: 480px;
    display: flex;
    align-items: center;
  }

  &__container--modern {
    @include container;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    @include responsive(lg) {
      flex-direction: row;
      gap: 0;
      align-items: center;
      justify-content: space-between;
    }
    min-height: 400px;
  }

  &__left {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-width: 0;
    z-index: 2;
    @include responsive(lg) {
      padding-left: 1.5rem;
    }
  }

  &__headline {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
    color: $gray-900;
    line-height: 1.1;
    @include responsive(md) {
      font-size: 3rem;
    }
    @include responsive(lg) {
      font-size: 3.2rem;
    }
  }

  &__brand-gradient {
    background: $primary-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  &__subtitle {
    font-size: 1.25rem;
    color: $gray-700;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  &__desc {
    font-size: 1.1rem;
    color: $gray-500;
    margin-bottom: 2rem;
  }

  &__cta {
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    padding: 0.9rem 2.2rem;
    cursor: pointer;
    transition:
      background 0.2s,
      color 0.2s,
      box-shadow 0.2s;
    margin-top: 0.2rem;
    &--gradient {
      background: $primary-gradient;
      color: $white;
      box-shadow: 0 2px 8px 0 rgba(147, 51, 234, 0.1);
    }
    &:hover {
      filter: brightness(0.95);
      box-shadow: 0 4px 16px 0 rgba(147, 51, 234, 0.13);
    }
  }

  &__right {
    flex: 1 1 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    z-index: 2;
    margin-top: 2rem;
    @include responsive(lg) {
      margin-top: 0;
    }
  }

  &__circle-outer {
    position: relative;
    width: 340px;
    height: 340px;
    background: $white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px rgba(147, 51, 234, 0.08);
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      inset: -18px;
      border-radius: 50%;
      background: $primary-gradient;
      z-index: -1;
    }
  }

  &__circle-inner {
    width: 260px;
    height: 260px;
    background: $white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px 0 rgba(147, 51, 234, 0.04);
    text-align: center;
    z-index: 2;
  }

  &__card-icon {
    margin-bottom: 1.1rem;
    svg {
      display: block;
      margin: 0 auto;
    }
  }

  &__circle-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: $gray-900;
    margin-bottom: 0.2rem;
  }

  &__circle-desc {
    font-size: 1rem;
    color: $gray-500;
  }

  &__float {
    position: absolute;
    z-index: 3;
    &--yellow {
      top: -32px;
      right: -32px;
      animation: bounce 1.5s infinite;
    }
    &--green {
      left: -28px;
      bottom: -28px;
      animation: pulse 2s infinite;
    }
  }
}

// About Section
.about {
  background: $white;
  @include section-padding;

  &--centered {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }

  &__title-wrap {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  &__container {
    @include container;
    text-align: left;
  }

  &__container--split {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @include responsive(md) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      gap: 6rem;
    }
    max-width: 1200px;
    margin: 0 auto;
  }

  &__left {
    flex: 1 1 55%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  &__right {
    flex: 1 1 45%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @include responsive(md) {
      align-items: flex-start;
    }
    margin-top: 0.5rem;
  }

  &__title {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &__divider {
    width: 6rem;
    height: 0.25rem;
    background: $primary-gradient;
    margin: 0.5rem auto 0 auto;
  }

  &__description {
    font-size: 1.125rem;
    color: $gray-600;
    margin-bottom: 1.25rem;
    max-width: 100%;
    line-height: 1.7;
  }

  &__learn-more {
    margin-top: 1.5rem;
    padding: 0.6rem 1.5rem;
    border: 2px solid $purple-600;
    background: transparent;
    color: $purple-600;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition:
      background 0.2s,
      color 0.2s;
    outline: none;
    align-self: flex-start;
    &:hover,
    &:focus {
      background: $purple-600;
      color: $white;
    }
  }

  &__services-title {
    font-size: 1.35rem;
    font-weight: bold;
    margin-bottom: 1.2rem;
    text-align: left;
  }

  &__services-list {
    display: flex;
    gap: 2.5rem;
    width: 100%;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
    }
    li {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: $gray-900;
      font-weight: 400;
    }
  }
  &__dot {
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    background: $primary-gradient;
    border-radius: 50%;
    margin-right: 0.7em;
    vertical-align: middle;
  }
}

// Services Section
.services {
  background: $gray-50;
  @include section-padding;

  &__container {
    @include container;
    text-align: center;
  }

  &__container--cards {
    text-align: center;
  }

  &__title {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &__divider {
    width: 6rem;
    height: 0.25rem;
    background: $primary-gradient;
    margin: 0.5rem auto 2rem auto;
  }

  &__subtitle {
    font-size: 1.15rem;
    color: $gray-600;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  &__grid-cards {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    @include responsive(md) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include responsive(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card {
    background: $white;
    border-radius: 0.75rem;
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.07);
    padding: 2.2rem 1.5rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition:
      box-shadow 0.2s,
      transform 0.2s;
    min-height: 340px;
    &:hover {
      box-shadow: 0 12px 32px 0 rgba(147, 51, 234, 0.1);
      transform: translateY(-4px) scale(1.02);
    }
  }

  &__card-emoji {
    font-size: 2.5rem;
    margin-bottom: 0.7rem;
    line-height: 1;
  }

  &__card-title {
    font-size: 1.35rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
    color: $gray-900;
    text-align: center;
  }

  &__card-desc {
    font-size: 1rem;
    color: $gray-600;
    margin-bottom: 1.1rem;
    text-align: center;
  }

  &__card-list {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    margin-top: 0.5rem;
  }

  &__dot {
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    background: $primary-gradient;
    border-radius: 50%;
    margin-right: 0.7em;
    vertical-align: middle;
  }
}

// Features Section
.features {
  background: $white;
  @include section-padding;

  &__container {
    @include container;
    text-align: center;
  }

  &__container--why {
    text-align: center;
  }

  &__title {
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &__divider {
    width: 6rem;
    height: 0.25rem;
    background: $primary-gradient;
    margin: 0 auto 2rem;
  }

  &__subtitle {
    font-size: 1.15rem;
    color: $gray-600;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  &__grid-why {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    @include responsive(md) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include responsive(lg) {
      grid-template-columns: repeat(4, 1fr);
    }
    margin-top: 2.5rem;
  }

  &__card-why {
    background: $white;
    border-radius: 0.75rem;
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.07);
    padding: 2.2rem 1.2rem 1.5rem 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition:
      box-shadow 0.2s,
      transform 0.2s;
    min-height: 220px;
    &:hover {
      box-shadow: 0 12px 32px 0 rgba(147, 51, 234, 0.1);
      transform: translateY(-4px) scale(1.02);
    }
  }

  &__icon-why {
    @include flex-center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    font-size: 1.7rem;
    margin-bottom: 1.1rem;
    color: $white;
    span {
      line-height: 1;
    }
    &--blue {
      background: $blue-500;
    }
    &--green {
      background: $green-500;
    }
    &--purple {
      background: $purple-500;
    }
    &--pink {
      background: $pink-500;
    }
  }

  &__card-why-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: $gray-900;
    text-align: center;
  }

  &__card-why-desc {
    font-size: 0.98rem;
    color: $gray-600;
    text-align: center;
  }
}

// Contact Section
.contact {
  background: $gray-50;
  @include section-padding;

  &__container {
    @include container;
  }

  &__container--cards {
    text-align: center;
  }

  &__title {
    font-size: 1.875rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  &__divider {
    width: 6rem;
    height: 0.25rem;
    background: $primary-gradient;
    margin: 0 auto 2rem auto;
  }

  &__subtitle {
    font-size: 1.15rem;
    color: $gray-600;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @include responsive(md) {
      flex-direction: row;
      gap: 2.5rem;
      align-items: flex-start;
      justify-content: center;
    }
  }

  &__card {
    background: $white;
    border-radius: 0.75rem;
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.07);
    padding: 2.2rem 1.5rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    flex: 1 1 0;
    max-width: 420px;
    margin: 0 auto;
  }

  &__card-title {
    font-size: 1.15rem;
    font-weight: bold;
    margin-bottom: 1.2rem;
    color: $gray-900;
    text-align: left;
    width: 100%;
  }

  &__info-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  &__info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__info-icon--circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: $primary-gradient;
    margin-right: 0.7em;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  &__info-label {
    font-weight: 600;
    color: $gray-900;
    font-size: 1rem;
    margin-bottom: 0.1rem;
  }

  &__info-value {
    color: $gray-600;
    font-size: 0.98rem;
  }

  &__card--form {
    align-items: stretch;
  }

  &__form-input,
  &__form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid $gray-300;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
    &:focus {
      outline: none;
      border-color: $purple-600;
      box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
    }
  }

  &__form-textarea {
    resize: vertical;
    min-height: 6rem;
  }

  &__form-button {
    width: 100%;
    background: $primary-gradient;
    color: $white;
    padding: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition:
      background 0.2s,
      color 0.2s,
      transform 0.2s;
    margin-top: 0.5rem;
    &:hover {
      background: $purple-600;
      color: $white;
      transform: translateY(-1px);
    }
  }

  &__form-button--gradient {
    background: $primary-gradient;
    color: $white;
    font-weight: 600;
    border: none;
    box-shadow: 0 2px 8px 0 rgba(147, 51, 234, 0.1);
  }
}

// Footer
.footer {
  background: $gray-900;
  color: $white;
  padding: 3rem 0;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;

    @include responsive(md) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__logo {
    font-size: 1.25rem;
    font-weight: bold;
    @include gradient-text;
    margin-bottom: 0.5rem;
  }

  &__description {
    color: $gray-400;
    font-size: 0.875rem;
  }

  &__section-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__link {
    color: $gray-400;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;

    &:hover {
      color: $white;
    }
  }

  &__copyright {
    text-align: center;
    color: $gray-500;
    font-size: 0.75rem;
    margin-top: 2rem;
  }
}

// Animations
@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

// Responsive adjustments
@include responsive(md) {
  .header__nav {
    display: flex;
  }

  .header__login {
    display: block;
  }

  .header__mobile-btn {
    display: none;
  }
}
</style>
