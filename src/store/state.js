// Utilities
import { defineStore } from 'pinia'
import questions from '@/data/questions'

export const useStateStore = defineStore('state', {
  state: () => ({
    tab: "guidance",
    questions: questions,
    interactionRefs: [{ questionIndex: 0, answer: null, actionExecuted: false }],
    info: {
      role: undefined,
      modelTrained: undefined,
      aiGreaterHuman: undefined,
      corErrors: undefined,
      adherenceInvestigated: undefined,
      // following are more like sorters and filters
      taskType: undefined,
      dataType: undefined,
      aiLiteracy: undefined,
    },
    //filters, sorters
  }),
  getters: {
    currentIndex() {
      return this.interactionRefs[this.interactionRefs.length - 1].questionIndex;
    },
    interactions() {
      const list = [];
      for (let interaction of this.interactionRefs) {
        list.push({
          ...this.questions[interaction.questionIndex],
          ...interaction
        })
      }
      return list;
    },
  },
  actions: {
    getQuestion(index = this.currentIndex) {
      if (index < this.questions.length) {
        return this.questions[index];
      }
      return;
    },
    getInteraction(index = this.currentIndex) {
      for (let interaction of this.interactionRefs) {
        if (interaction.questionIndex === index) {
          return interaction;
        }
      }
      return;
    },
    showNextQuestion(index = this.currentIndex) {
      let next = this.getQuestion(++index);
      let conditions = true;

      if (next) {
        if (next.condition) {
          conditions = this.checkConditions(next);
        }

        if (conditions) {
          this.interactionRefs.push({
            questionIndex: index,
            answer: next.multiple ? [] : null,
            actionExecuted: false,
          });

          if ((!next.answers || next.answers.length == 0) && (!next.actions || next.actions.length == 0)) {
            this.showNextQuestion(index);
          }
        } else {
          this.showNextQuestion(index);
        }
      }
    },
    checkConditions(next) {
      for (let condField in next.condition) {
        if (next.condition[condField] !== this.info[condField]) {
          return false;
        }
      }
      return true;
    },
    setAnswer(interactionId, answer) {
      this.getInteraction(interactionId).answer = answer;
    },
    markActionExecuted(interactionId) {
      this.getInteraction(interactionId).actionExecuted = true;
    }
  },
  persist: true,
})
