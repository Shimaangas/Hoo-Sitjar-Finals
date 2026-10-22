<script setup>
import quijano from '../assets/faculty/quijano-e1637132499305.png'
import balontong from '../assets/faculty/balontong-754x1024.jpg'
import parreno from '../assets/faculty/parreno-754x1024.jpg'
import cantel from '../assets/faculty/cantel-754x1024.jpg'
import pajar from '../assets/faculty/pajar-754x1024.jpg'

import beldia from '../assets/faculty/beldia-754x1024.jpg'
import cambronero from '../assets/faculty/cambronero-754x1024.jpg'
import dignadice from '../assets/faculty/dignadice-1-754x1024.jpg'
import eregia from '../assets/faculty/eregia-754x1024.jpg'
import jardleza from '../assets/faculty/jardleza-754x1024.jpg'
import montano from '../assets/faculty/montano-754x1024.jpg'
import ojacastro from '../assets/faculty/ojacastro-754x1024.jpg'
import sapul from '../assets/faculty/sapul-754x1024.jpg'

import castano from '../assets/faculty/castano-754x1024.jpg'
import taasan from '../assets/faculty/taasan-754x1024.jpg'
import ador from '../assets/faculty/ador-754x1024.jpg'
import rivera from '../assets/faculty/rivera-754x1024.png'

const leadership = [
  {
    name: 'Ma. Christina A. Quijano',
    degree: 'MSCS',
    position: 'Dean',
    image: quijano,
  },
]

const coordinators = [
  {
    name: 'Rea P. Balontong',
    degree: 'MBA',
    position: 'Department Head (IT & IS)',
    image: balontong,
  },
  {
    name: 'Marjee Rose B. Parreño',
    degree: 'MSCS, MBA',
    position: 'Program Coordinator (BSCS, BSDMIA, and MSCS)',
    image: parreno,
  },
  {
    name: 'Ana Mae B. Cantel',
    degree: 'MLIS',
    position: 'Program Coordinator (BLIS and MLIS)',
    image: cantel,
  },
  {
    name: 'Lennon D. Pajar',
    degree: 'Degree not listed on CCS faculty page',
    position: 'Computer Laboratory Coordinator',
    image: pajar,
  },
]

const faculty = [
  {
    name: 'Leo Paulo B. Beldia',
    degree: 'Degree not listed on CCS faculty page',
    position: 'BSIT and BSIS Program',
    image: beldia,
  },
  {
    name: 'Pedro Peter Rhys B. Cambronero',
    degree: 'MSCS',
    position: 'BSCS Program',
    image: cambronero,
  },
  {
    name: 'Lesley Joy L. Dignadice',
    degree: 'MBA',
    position: 'BSIT and BSIS Program',
    image: dignadice,
  },
  {
    name: 'Rodolfo C. Eregia, Jr.',
    degree: 'Degree not listed on CCS faculty page',
    position: 'BSIT and BSIS Program',
    image: eregia,
  },
  {
    name: 'Donie S. Jardeleza',
    degree: 'MSCS',
    position: 'BSIT and BSIS Program',
    image: jardleza,
  },
  {
    name: 'Antonio M. Montaño, Jr.',
    degree: 'Degree not listed on CCS faculty page',
    position: 'BSIT and BSIS Program',
    image: montano,
  },
  {
    name: 'Rose Leah Joy A. Ojacastro',
    degree: 'MSCS',
    position: 'BSIT and BSIS Program',
    image: ojacastro,
  },
  {
    name: 'Ma. Sheila C. Sapul',
    degree: 'Ph. D.',
    position: 'BSCS Program',
    image: sapul,
  },
]

const staff = [
  {
    name: 'Chrislyn C. Castaño',
    degree: 'Degree not listed on CCS faculty page',
    position: 'Secretary',
    image: castano,
  },
  {
    name: 'A.M.P. Latter P. Taasan',
    degree: 'Degree not listed on CCS faculty page',
    position: 'Computer Laboratory Technician',
    image: taasan,
  },
  {
    name: 'Chriselda Elaine Ador',
    degree: 'Degree not listed on CCS faculty page',
    position: 'Guidance Counselor',
    image: ador,
  },
  {
    name: 'Donna May Rivera',
    degree: 'Degree not listed on CCS faculty page',
    position: 'Library Liaison Officer',
    image: rivera,
  },
]
</script>

<template>
  <section id="faculty" class="faculty">
    <div class="container">

      <p class="section-label">OUR PEOPLE</p>

      <h2>Faculty and Staff</h2>

      <p class="section-description">
        Meet the people who support teaching, learning, technology,
        and student services at the College of Computer Studies.
      </p>

      <!-- Dean -->
      <div class="department">
        <h3>Dean</h3>

        <div class="faculty-grid single">
          <article
            v-for="person in leadership"
            :key="person.name"
            class="faculty-card"
          >
            <img :src="person.image" :alt="person.name" class="photo" />

            <div class="person-info">
              <h4>{{ person.name }}</h4>
              <p class="degree">{{ person.degree }}</p>
              <p class="position">{{ person.position }}</p>
            </div>
          </article>
        </div>
      </div>

      <!-- Department Heads and Coordinators -->
      <div class="department">
        <h3>Department Heads and Coordinators</h3>

        <div class="faculty-grid">
          <article
            v-for="person in coordinators"
            :key="person.name"
            class="faculty-card"
          >
            <img :src="person.image" :alt="person.name" class="photo" />

            <div class="person-info">
              <h4>{{ person.name }}</h4>
              <p class="degree">{{ person.degree }}</p>
              <p class="position">{{ person.position }}</p>
            </div>
          </article>
        </div>
      </div>

      <!-- Faculty -->
      <div class="department">
        <h3>Faculty</h3>

        <div class="faculty-grid">
          <article
            v-for="person in faculty"
            :key="person.name"
            class="faculty-card"
          >
            <img :src="person.image" :alt="person.name" class="photo" />

            <div class="person-info">
              <h4>{{ person.name }}</h4>
              <p class="degree">{{ person.degree }}</p>
              <p class="position">{{ person.position }}</p>
            </div>
          </article>
        </div>
      </div>

      <!-- Staff -->
      <div class="department">
        <h3>Staff</h3>

        <div class="faculty-grid">
          <article
            v-for="person in staff"
            :key="person.name"
            class="faculty-card"
          >
            <img :src="person.image" :alt="person.name" class="photo" />

            <div class="person-info">
              <h4>{{ person.name }}</h4>
              <p class="degree">{{ person.degree }}</p>
              <p class="position">{{ person.position }}</p>
            </div>
          </article>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.faculty {
  padding: 110px 20px;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.section-label {
  text-align: center;
  color: #f8ad0b;
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
  margin: 0 auto 60px;
  text-align: center;
  color: #666;
  line-height: 1.7;
}

.department {
  margin-bottom: 70px;
}

.department h3 {
  font-size: 25px;
  color: #1f2937;
  margin-bottom: 25px;
  padding-left: 15px;
  border-left: 5px solid #d4a60e;
}

.faculty-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.faculty-grid.single {
  grid-template-columns: minmax(250px, 300px);
}

.faculty-card {
  overflow: hidden;
  background: white;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  transition: 0.25s ease;
}

.faculty-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.09);
}

.photo {
  width: 100%;
  height: 260px;
  display: block;
  object-fit: cover;
  object-position: top center;
}

.person-info {
  padding: 20px;
  text-align: center;
}

.faculty-card h4 {
  margin: 0 0 8px;
  font-size: 17px;
  color: #222;
}

.degree {
  margin: 0 0 8px;
  color: #167937;
  font-size: 14px;
  font-weight: bold;
}

.position {
  margin: 0;
  color: #666;
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 1000px) {
  .faculty-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .faculty {
    padding: 80px 20px;
  }

  h2 {
    font-size: 34px;
  }

  .faculty-grid,
  .faculty-grid.single {
    grid-template-columns: 1fr;
  }

  .photo {
    height: 300px;
  }
}
</style>