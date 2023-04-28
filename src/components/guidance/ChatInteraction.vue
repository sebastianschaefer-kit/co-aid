<template>
  <div class="d-flex flex-column" style="gap: 8px">
    <ChatQuestion :question="interaction.question"></ChatQuestion>
    <ChatAnswer
      v-if="interaction.answers && interaction.answers.length > 0"
      :interaction="interaction"
    ></ChatAnswer>
    <ChatAction
      v-if="interaction.actions && interaction.actions.length > 0 && !interaction.actionExecuted"
      :interaction="interaction"
    ></ChatAction>
  </div>
</template>

<script setup>
import ChatQuestion from './ChatQuestion.vue';
import ChatAnswer from './ChatAnswer.vue';
import ChatAction from './ChatAction.vue';
</script>

<script>
export default {
  name: "ChatInteraction",
  props: ["interaction"],
}
</script>