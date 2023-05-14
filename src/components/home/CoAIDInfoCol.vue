<template>
  <div class="d-flex flex-column" style="gap: 20px">
    <div>
      <div class="text-container">
        <font class="text-normal">
          Co.AID will guide the design of your AI system towards
          <font class="text-hl">human-AI complementarity</font> by providing you design
          patterns (best practices) for your use case.
        </font>
        <font class="text-normal">
          The focus of this toolkit is not to simply maximize the performance of your
          machine learning (ML) model, but to facilitate the
          <font class="text-hl">collaboration between humans and AI</font> with the goal
          <font class="text-hl">maximize their team performance</font>.
        </font>
        <font class="text-normal">
          You can stay on this page to get familiar with the concept of complementarity or
          dive right into the design patterns.
        </font>
      </div>
    </div>
    <div class="d-flex flex-column" style="gap: 20px">
      <StartButton
        title="Guide me!"
        subtitle="Answer questions and let us guide you through your design process"
        tabName="guidance"
      ></StartButton>
      <StartButton
        title="Explore"
        subtitle="Freely explore the design patterns"
        tabName="filters"
      ></StartButton>
    </div>
  </div>
</template>

<script setup>
import StartButton from "@/components/home/StartButton.vue";
</script>
