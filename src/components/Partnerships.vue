<template>
  <section id="partnerships" class="partnerships">
    <div class="container">
      <p class="section-label">CONNECT</p>

      <h2>Partnerships & Memberships</h2>

      <p class="section-description">
        The College of Computer Studies builds connections with educational and industry partners
        that support learning, community engagement, and career opportunities.
      </p>

      <div class="partners-grid">
        <article class="partner-card">
          <div class="partner-icon">01</div>

          <div>
            <span class="partner-type">COMMUNITY PARTNERSHIP</span>

            <h3>Mandurriao Elementary School</h3>

            <p>
              CCS established a community engagement partnership with Mandurriao Elementary School
              through an Adopt a School program focused on technology and learning management
              systems.
            </p>
          </div>
        </article>

        <article class="partner-card">
          <div class="partner-icon">02</div>

          <div>
            <span class="partner-type">INDUSTRY CONNECTION</span>

            <h3>Kation Technologies Inc.</h3>

            <p>
              Kation Technologies Inc. has provided an industry connection for CCS graduates,
              demonstrating opportunities for students and alumni in the technology sector.
            </p>
          </div>
        </article>

        <article class="partner-card">
          <div class="partner-icon">03</div>

          <div>
            <span class="partner-type">PROFESSIONAL NETWORK</span>

            <h3>Professional and Academic Connections</h3>

            <p>
              CCS continues to connect with professional institutions, educational organizations,
              and technology communities to support academic and professional development.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partnerships {
  padding: 110px 20px;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.section-label {
  text-align: center;
  color: #ffa600;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 13px;
  margin-bottom: 10px;
}

h2 {
  text-align: center;
  font-size: 42px;
  margin: 0 0 15px;
  color: #1f2937;
}

.section-description {
  max-width: 750px;
  margin: 0 auto 55px;
  text-align: center;
  color: #666;
  line-height: 1.7;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.partner-card {
  padding: 30px;
  background: #f8f9fa;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  transition: 0.25s ease;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.partner-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #099e09;
  color: white;

  border-radius: 10px;
  font-weight: bold;
}

.partner-type {
  color: #f0c508;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2px;
}

.partner-card h3 {
  margin: 10px 0 15px;
  font-size: 21px;
  color: #222;
}

.partner-card p {
  margin: 0;
  line-height: 1.7;
  color: #666;
}

@media (max-width: 900px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .partnerships {
    padding: 80px 20px;
  }

  h2 {
    font-size: 34px;
  }
}
</style>
