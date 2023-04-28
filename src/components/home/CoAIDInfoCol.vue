<template>
  <div class="d-flex flex-column" style="gap: 20px;">
    <div>
      <div class="text-container">
        <font class="text-normal">
          Co.AID will guide your Design towards <font class="text-hl">Human-AI Complementarity</font> by providing you with Design Patterns (Best Practices) for your Use Case.
        </font>
        <font class="text-normal">
          The focus of this toolkit is not to simply maximize the performance of your ML model, but to facilitate <font class="text-hl">collaboration betwenn Humans and AI</font> and <font class="text-hl">maximize their Team Performance</font>.
        </font>
        <font class="text-normal">
          You can stay on this page to get familiar with the concept of Complementarity or dive right into the Design Patterns.
        </font>
      </div>
    </div>
    <div class="d-flex flex-column" style="gap: 20px;">
      <StartButton title="Guide me!" subtitle="Answer questions and let us guide you through your Design Process" tabName="guidance"></StartButton>
      <StartButton title="Explore" subtitle="Freely explore the Design Patterns" tabName="filters"></StartButton>
    </div>
  </div>
</template>

<script setup>
import StartButton from '@/components/home/StartButton.vue';
</script>