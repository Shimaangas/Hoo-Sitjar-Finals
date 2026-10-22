<template>
  <section id="home" class="hero">
    <div class="hero-container">

      <div class="hero-content">
        <p class="welcome">WELCOME TO</p>

        <h1>College of Computer Studies</h1>

        <p class="hero-description">
          Empowering students through technology, innovation,
          and excellence in computing education.
        </p>

        <a href="#programs" class="hero-button">
          Explore Our Programs
        </a>
      </div>

      <div class="hero-logo">
        <img
          src="../assets/logo.png"
          alt="College of Computer Studies Logo"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  padding: 140px 20px 80px;

  display: flex;
  align-items: center;

  background: linear-gradient(
    135deg,
    #f5f7fa 0%,
    #ffffff 100%
  );
}

.hero-container {
  width: 100%;
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 60px;
}

.hero-content {
  max-width: 650px;
}

.welcome {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 15px;
  color: #10643a;
}

h1 {
  font-size: clamp(42px, 6vw, 72px);
  line-height: 1.05;
  margin: 0 0 25px;
  color: #1f2937;
}

.hero-description {
  font-size: 20px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 35px;
  max-width: 600px;
}

.hero-button {
  display: inline-block;
  padding: 14px 28px;

  background: #dda01b;
  color: white;

  text-decoration: none;
  font-weight: bold;

  border-radius: 8px;

  transition: 0.25s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  background: #0056b3;
}

.hero-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-logo img {
  width: min(360px, 80%);
  height: auto;

  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.12));
}

/* Tablet */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    margin: auto;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-logo {
    order: -1;
  }

  .hero-logo img {
    width: 250px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .hero {
    padding: 130px 20px 60px;
  }

  .welcome {
    font-size: 13px;
  }

  h1 {
    font-size: 40px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-logo img {
    width: 200px;
  }

  .hero-button {
    padding: 12px 22px;
  }
}
</style>