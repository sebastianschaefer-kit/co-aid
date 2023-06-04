<template>
  <div class="d-flex flex-column" style="gap: 20px">
    <div>
      <div class="text-container">
        <font class="text-normal">
          Co.AID guides the design of your AI system towards
          <font class="text-hl">human-AI complementarity</font> by providing you with design
          patterns (best practices) for your use case.
          Note that the guidance offered in this toolkit is limited to settings of <font class="text-hl">AI-assisted decision-making</font>.
        </font>
        <font class="text-normal">
          The focus of this toolkit is not to simply maximize the performance of your
          machine learning (ML) model, but to facilitate the
          <font class="text-hl">collaboration between humans and AI</font> with the goal of
          <font class="text-hl">maximizing their team performance</font>.
        </font>
        <font class="text-normal">
          You can stay on this page to familiarize yourself with the concept of complementarity, or you can dive right into the design patterns.
        </font>
      </div>
    </div>
    <div class="d-flex flex-column" style="gap: 20px">
      <StartButton
        title="Guide me!"
        subtitle="Let us guide you through the design process by answering a few questions about your project."
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
