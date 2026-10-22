<script setup>
import bsitLogo from '../assets/bsit.png'
import bscsLogo from '../assets/bscs.png'
import bsdmiaLogo from '../assets/bsdmia.png'
import blisLogo from '../assets/blis.png'

const programs = [
  {
    acronym: 'BSIT',
    name: 'Bachelor of Science in Information Technology',
    description:
      'Prepares students to develop, manage, and implement information technology solutions, including software, networks, databases, and IT infrastructure.',
    logo: bsitLogo,
  },
  {
    acronym: 'BSCS',
    name: 'Bachelor of Science in Computer Science',
    description:
      'Focuses on computing concepts, algorithms, software development, programming, and solving complex computing problems.',
    logo: bscsLogo,
  },
  {
    acronym: 'BSDMIA',
    name: 'Bachelor of Science in Digital Media and Interactive Arts',
    description:
      'Develops creative skills in digital media, applied arts, interactive technologies, and digital content creation.',
    logo: bsdmiaLogo,
  },
  {
    acronym: 'BLIS',
    name: 'Bachelor of Library and Information Science',
    description:
      'Prepares students for the development, deployment, and management of information resources in print, electronic, and digital formats.',
    logo: blisLogo,
  },
]
</script>

<template>
  <section id="programs" class="programs">
    <div class="container">

      <p class="section-label">ACADEMIC PROGRAMS</p>

      <h2>Programs Offered</h2>

      <p class="section-description">
        Explore the academic programs offered by the College of Computer Studies.
      </p>

      <div class="program-grid">
        <article
          v-for="program in programs"
          :key="program.acronym"
          class="program-card"
        >
          <div class="program-logo">
            <img :src="program.logo" :alt="program.acronym + ' logo'" />
          </div>

          <div class="program-content">
            <span class="program-acronym">
              {{ program.acronym }}
            </span>

            <h3>{{ program.name }}</h3>

            <p>{{ program.description }}</p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.programs {
  padding: 110px 20px;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.section-label {
  text-align: center;
  color: #ff9900;
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
  max-width: 700px;
  margin: 0 auto 50px;
  text-align: center;
  color: #666;
  line-height: 1.7;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.program-card {
  display: flex;
  gap: 25px;
  padding: 30px;
  background: #f8f9fa;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  transition: 0.25s ease;
}

.program-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
}

.program-logo {
  min-width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.program-logo img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.program-content {
  flex: 1;
}

.program-acronym {
  color: #f3bb04;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
}

.program-content h3 {
  margin: 7px 0 15px;
  font-size: 20px;
  line-height: 1.4;
  color: #222;
}

.program-content p {
  margin: 0;
  line-height: 1.7;
  color: #666;
}

@media (max-width: 900px) {
  .program-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .programs {
    padding: 80px 20px;
  }

  h2 {
    font-size: 34px;
  }

  .program-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>