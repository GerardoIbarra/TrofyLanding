<template>
  <section class="faq">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">Frequently Asked <span class="text-gradient">Questions</span></h2>
      </div>

      <div class="faq-list">
        <div v-for="(item, i) in faqs" :key="i" class="faq-item animate-on-scroll" :class="{ 'active': activeIndex === i }">
          <button class="faq-question" @click="toggle(i)">
            <span>{{ item.q }}</span>
            <ChevronDown :class="{ 'rotate': activeIndex === i }" />
          </button>
          <div class="faq-answer">
            <div class="answer-content">
              {{ item.a }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const activeIndex = ref(0)

const toggle = (i) => {
  activeIndex.value = activeIndex.value === i ? -1 : i
}

const faqs = [
  {
    q: 'How many sports do you support?',
    a: 'We support soccer, basketball, volleyball, tennis, and any sport that uses round-robin, knockout, or league formats. You can even create custom scoring rules.'
  },
  {
    q: 'Can I use Trofy for free?',
    a: 'Yes! Our Starter plan is free forever for leagues with up to 8 teams. It includes all the essential tools to run a professional-feeling tournament.'
  },
  {
    q: 'How do players see their stats?',
    a: 'Every league has a public URL that you can share. Players can also download the Trofy mobile app to get notifications and follow their favorite teams.'
  },
  {
    q: 'Can I export my data?',
    a: 'Absolutely. Pro and Enterprise users can export match results, standings, and player data to CSV or Excel at any time.'
  }
]
</script>

<style scoped>
.faq {
  padding: 100px 0;
}

.faq-list {
  max-width: 800px;
  margin: 60px auto 0;
}

.faq-item {
  border-bottom: 1px solid var(--border-color);
}

.faq-question {
  width: 100%;
  padding: 24px 0;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-primary);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
}

.faq-question span {
  padding-right: 20px;
}

.rotate {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.active .faq-answer {
  max-height: 200px;
}

.answer-content {
  padding-bottom: 24px;
  color: var(--text-secondary);
  line-height: 1.7;
}

svg {
  transition: transform 0.3s ease;
  color: var(--primary-color);
}
</style>
