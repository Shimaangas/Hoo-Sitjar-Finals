<script setup>
import { ref, computed } from 'vue'

const selectedProgram = ref('BSIT')
const selectedYear = ref('3rd Year')
const units = ref(18)
const paymentTerm = ref('Full Payment')

const programs = [
  { code: 'BSIT', name: 'BS Information Technology' },
  { code: 'BSCS', name: 'BS Computer Science' },
  {
    code: 'BLIS',
    name: 'Bachelor of Library and Information Science',
  },
  {
    code: 'BSDMIA',
    name: 'Bachelor of Science in Digital Media and Interactive Arts',
  },
]

const tuitionRate = 650
const laboratoryRate = 150

const tuitionFee = computed(() => units.value * tuitionRate)
const laboratoryFee = computed(() => units.value * laboratoryRate)
const miscellaneousFee = computed(() => tuitionFee.value * 0.08)

const registrationFee = 250
const libraryFee = 300
const athleticFee = 200
const medicalFee = 150
const guidanceFee = 200
const idInsuranceFee = 250
const organizationFee = 150
const otherFee = 500

const totalAssessment = computed(
  () =>
    tuitionFee.value +
    laboratoryFee.value +
    miscellaneousFee.value +
    registrationFee +
    libraryFee +
    athleticFee +
    medicalFee +
    guidanceFee +
    idInsuranceFee +
    organizationFee +
    otherFee,
)

const installmentCount = computed(() => {
  if (paymentTerm.value === '3 Installments') return 3
  if (paymentTerm.value === '5 Installments') return 5
  return 1
})

const installmentAmount = computed(() => totalAssessment.value / installmentCount.value)

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)

function startApplication() {
  alert(`Application started for ${selectedProgram.value}, ${selectedYear.value}.`)
}
</script>

<template>
  <main class="admissions-page">
    <section class="admissions-header">
      <p class="eyebrow">CENTRAL PHILIPPINE UNIVERSITY</p>

      <h1>
        Admissions and
        <span class="highlight">Tuition Assessment</span>
      </h1>

      <div class="header-divider"></div>

      <p class="college">College of Computer Studies</p>
      <p class="subtitle">Estimate your semester fees and explore your payment options.</p>
    </section>

    <section class="calculator-card">
      <div class="section-heading">
        <h2>Tuition Fee Calculator</h2>
        <p>Select your academic details below.</p>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label for="program">Select Program</label>
          <select id="program" v-model="selectedProgram">
            <option v-for="program in programs" :key="program.code" :value="program.code">
              {{ program.name }} ({{ program.code }})
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="year">Year Level</label>
          <select id="year" v-model="selectedYear">
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </div>
      </div>

      <div class="units-section">
        <label for="units">Units This Semester</label>

        <div class="units-display">
          <span class="units-value">{{ units }} units</span>
          <span class="units-range">12–27 units</span>
        </div>

        <input
          id="units"
          v-model.number="units"
          class="units-slider"
          type="range"
          min="12"
          max="27"
          step="1"
        />

        <div class="slider-labels">
          <span>12 units</span>
          <span>27 units</span>
        </div>
      </div>

      <div class="payment-section">
        <h3>Payment Terms</h3>

        <div class="payment-options">
          <button
            type="button"
            :class="{ active: paymentTerm === 'Full Payment' }"
            @click="paymentTerm = 'Full Payment'"
          >
            Full Payment
          </button>

          <button
            type="button"
            :class="{ active: paymentTerm === '3 Installments' }"
            @click="paymentTerm = '3 Installments'"
          >
            3 Installments
          </button>

          <button
            type="button"
            :class="{ active: paymentTerm === '5 Installments' }"
            @click="paymentTerm = '5 Installments'"
          >
            5 Installments
          </button>
        </div>
      </div>

      <div class="fees-section">
        <div class="section-heading">
          <h3>Schedule of Fees</h3>
          <p>Estimated fees for the selected semester.</p>
        </div>

        <div class="fee-row">
          <span>Tuition Fee ({{ units }} × ₱650)</span>
          <span>{{ formatCurrency(tuitionFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Laboratory Fee ({{ units }} × ₱150)</span>
          <span>{{ formatCurrency(laboratoryFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Miscellaneous Fee (8% of tuition)</span>
          <span>{{ formatCurrency(miscellaneousFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Registration Fee</span>
          <span>{{ formatCurrency(registrationFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Library Fee</span>
          <span>{{ formatCurrency(libraryFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Athletic Fee</span>
          <span>{{ formatCurrency(athleticFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Medical and Dental Fee</span>
          <span>{{ formatCurrency(medicalFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Guidance and Testing Fee</span>
          <span>{{ formatCurrency(guidanceFee) }}</span>
        </div>

        <div class="fee-row">
          <span>ID and Insurance Fee</span>
          <span>{{ formatCurrency(idInsuranceFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Student Organization Fee</span>
          <span>{{ formatCurrency(organizationFee) }}</span>
        </div>

        <div class="fee-row">
          <span>Other Fees</span>
          <span>{{ formatCurrency(otherFee) }}</span>
        </div>

        <div class="total-row">
          <span>Total Assessment</span>
          <span>{{ formatCurrency(totalAssessment) }}</span>
        </div>
      </div>

      <div class="payment-summary">
        <div>
          <span class="summary-label">Selected Payment Plan</span>
          <strong>{{ paymentTerm }}</strong>
        </div>

        <div class="installment-total">
          <span class="summary-label">
            {{ installmentCount === 1 ? 'Total Due' : 'Estimated Amount per Payment' }}
          </span>
          <strong>{{ formatCurrency(installmentAmount) }}</strong>
        </div>
      </div>

      <button type="button" class="application-button" @click="startApplication">
        Start Your Application
      </button>

      <p class="disclaimer">
        Note: These amounts are sample estimates for demonstration. Actual school fees may vary.
      </p>
    </section>
  </main>
</template>

<style scoped>
.admissions-page {
  max-width: 1050px;
  margin: 0 auto;
  padding: 120px 24px 60px;
  color: #1c2d45;
  font-family: Arial, sans-serif;
}

.admissions-header {
  position: relative;
  overflow: hidden;
  margin-bottom: 36px;
  padding: 10px 10px;
  text-align: center;
}

.admissions-header > * {
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: inline-block;
  margin: 0 0 22px;
  padding: 8px 18px;
  color: #f8c94a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  border: 1px solid rgba(221, 160, 27, 0.6);
  border-radius: 999px;
  background: rgba(221, 160, 27, 0.1);
}

.admissions-header h1 {
  margin: 0;
  font-size: clamp(36px, 7vw, 68px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #ffffff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.highlight {
  display: block;
  background: linear-gradient(90deg, #f8c94a, #dda01b);
  background-clip: text;
  color: #dda01b;
}

.header-divider {
  width: 90px;
  height: 5px;
  margin: 26px auto;
  border-radius: 3px;
  background: #dda01b;
}

.college {
  margin: 0 0 8px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
}

.subtitle {
  max-width: 520px;
  margin: 0 auto;
  color: #d8e2dc;
  font-size: 16px;
  line-height: 1.7;
}

@keyframes header-in {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.calculator-card {
  padding: 32px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 8px 30px #0f172a0d;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2,
.section-heading h3 {
  margin: 0 0 8px;
  color: #dda01b;
}

.section-heading p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.form-group label,
.units-section > label {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
}

.form-group select {
  width: 100%;
  padding: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #fff;
  color: #1c2d45;
  font-size: 14px;
}

.form-group select:focus {
  outline: 2px solid #7aa7e8;
  outline-offset: 2px;
}

.units-section {
  margin: 32px 0;
}

.units-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.units-value {
  color: #dda01b;
  font-size: 22px;
  font-weight: 700;
}

.units-range,
.slider-labels {
  color: #1f2937;
  font-size: 13px;
}

.units-slider {
  display: block;
  width: 100%;
  height: 8px;
  cursor: pointer;
  accent-color: #174b8c;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.payment-section {
  margin: 32px 0;
}

.payment-section h3,
.fees-section h3 {
  color: #dda01b;
}

.payment-options {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.payment-options button {
  padding: 14px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #fff;
  color: #334155;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}

.payment-options button:hover {
  border-color: #62c370;
}

.payment-options button.active {
  border-color: #3e994c;
  background: #3e994c;
  color: #fff;
}

.fees-section {
  margin-top: 36px;
}

.fee-row,
.total-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 0;
  border-bottom: 1px solid #e8edf3;
  font-size: 14px;
}

.fee-row span:last-child,
.total-row span:last-child {
  text-align: right;
  white-space: nowrap;
  font-weight: 600;
}

.total-row {
  margin-top: 8px;
  padding: 20px 0;
  border-bottom: none;
  color: #dda01b;
  font-size: 18px;
  font-weight: 700;
}

.payment-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 22px;
  border-radius: 10px;
  background: #f1f6fc;
}

.payment-summary > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary-label {
  color: #1f2937;
  font-size: 12px;
}

.payment-summary strong {
  color: #dda01b;
  font-size: 18px;
}

.installment-total {
  text-align: right;
}

.application-button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: #62c370;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.application-button:hover {
  background: #1d6328;
}

.disclaimer {
  margin: 18px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
}

/* ===== Mobile ===== */
@media (max-width: 600px) {
  .admissions-page {
    padding: 100px 14px 32px;
  }

  .admissions-header {
    padding: 44px 20px;
  }

  .college {
    font-size: 17px;
  }

  .calculator-card {
    padding: 20px 16px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .payment-options {
    grid-template-columns: 1fr;
  }

  .payment-summary {
    align-items: flex-start;
    flex-direction: column;
  }

  .installment-total {
    text-align: left;
  }

  .fee-row {
    font-size: 12px;
  }

  .total-row {
    font-size: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .admissions-header {
    animation: none;
  }
}
</style>
