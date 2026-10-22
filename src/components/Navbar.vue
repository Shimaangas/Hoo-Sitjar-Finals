<script setup>
function scrollToSection(sectionId) {
  if (window.location.pathname !== '/') {
    window.location.href = '/#' + sectionId
    return
  }

  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <a href="#home" class="logo-link">
        <img src="../assets/logo.png" alt="College of Computer Studies Logo" class="logo" />
        <div class="brand">
          <span class="brand-title">College of Computer Studies</span>
          <span class="brand-subtitle">Central Philippine University</span>
        </div>
      </a>

      <div class="nav-links">
        <RouterLink to="/" @click="scrollToSection('home')"> Home </RouterLink>
        <a href="/#programs">Programs</a>
        <a href="/#faculty">Faculty & Staff</a>
        <a href="/#partnerships">Partnerships</a>
        <RouterLink to="/admissions" class="admissions-link"> Admissions </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
}

.nav-container {
  max-width: 1200px;
  margin: auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
}

.logo {
  width: 55px;
  height: 55px;
  object-fit: contain;
}

.brand {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 16px;
  font-weight: bold;
}

.brand-subtitle {
  font-size: 12px;
  color: #666;
  margin-top: 3px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: 0.2s;
}

.nav-links a:hover {
  color: #12702e;
}

.nav-links .admissions-link {
  background: #12702e;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  white-space: nowrap;
}

.nav-links .admissions-link:hover {
  background: #0b5120;
  color: white;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 10px;
  }

  .nav-links {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links a {
    font-size: 14px;
  }
}

@media (max-width: 500px) {
  .brand-title {
    font-size: 14px;
  }

  .brand-subtitle {
    font-size: 11px;
  }

  .logo {
    width: 45px;
    height: 45px;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-links a {
    font-size: 12px;
  }
}
</style>
