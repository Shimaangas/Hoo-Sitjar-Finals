<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Programs from '../components/Programs.vue'
import Faculty from '../components/Faculty.vue'
import Partnerships from '../components/Partnerships.vue'
</script>

<template>
  <Navbar />

  <main>
    <Hero />
    <Programs />
    <Faculty />
    <Partnerships />
  </main>

  <footer class="footer">
    <div class="footer-container">
      <div>
        <h3>College of Computer Studies</h3>
        <p>Central Philippine University</p>
      </div>

      <div class="footer-contact">
        <p>Mary Thomas Hall</p>
        <p>Lopez Jaena St., Jaro, Iloilo City</p>
        <p>ccssec@cpu.edu.ph</p>
      </div>
    </div>

    <div class="copyright">
      © {{ new Date().getFullYear() }} College of Computer Studies. Central Philippine University.
    </div>
  </footer>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #123b2a;
  color: #222;
}

* {
  box-sizing: border-box;
}

a {
  transition: 0.2s ease;
}

main {
  width: 100%;
}

.footer {
  background: #0b2419;
  color: white;
  padding: 50px 20px 20px;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer h3 {
  margin: 0 0 10px;
}

.footer p {
  margin: 5px 0;
  color: #d8e2dc;
}

.footer-contact {
  text-align: right;
}

.copyright {
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid #31513f;
  text-align: center;
  color: #aebdb4;
  font-size: 13px;
}

@media (max-width: 600px) {
  .footer-container {
    flex-direction: column;
  }

  .footer-contact {
    text-align: left;
  }
}
</style>
