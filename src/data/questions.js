export default [{
      question: "Hi there!\nI am going to be your assistant for the time. To help me understand what I can provide for you, I have to ask you some questions about your project. Is that in your intrest or do you want to eplore the Design Patterns for yourself?",
      answers: [{
        text: "Go on! Guide me.",
        implications: {
          view: "guidance"
        }
      }, {
        text: "I want to explore for myself!",
        implications: {
          view: "explore"
        }
      }]
    }, {
      question: "What is your role in this project?",
      answers: [{
          text: "I am working alone on it",
          implications: {
            role: "full"
          }
        }, {
          text: "I am supervising/managing the project and want to have an overview over everything",
          implications: {
            role: "manager"
          }
        }, {
          text: "I am a Data Scientist",
          implications: {
            role: "datascienctist"
          }
        }, {
          text: "I am a UX/UI/frontend designer or developer",
          implications: {
            role: "frontend"
          }
        }]
    }, {
      question: "I think it is very important to broadly understand the human-centric perspective as well.\nDo you want me to show only Design Patterns for the data-centric perspetive?",
      condition: {
        role: "datascienctist"
      },
      answers: [{
        text: "Yes, only data-science perspective!",
        implications: {
          filter: "frontend"
        }
      }, {
        text: "No, show me everything!",
        implications: {
          sort: "frontend"
        }
      }]
    }, {
      question: "I think it is very important to broadly understand the data-centric perspective as well.\nDo you want me to show only Design Patterns for the human-centric perspetive?",
      condition: {
        role: "frontend"
      },
      answers: [{
        text: "Yes, only user-centric perspective!",
        implications: {
          filter: "datascienctist"
        }
      }, {
        text: "No, show me everything!",
        implications: {
          sort: "datascienctist"
        }
      }]
    },  {
      question: "What is the state of your project right now?",
      multiple: false,
      answers: [{
        text: "I have a problem/task I want to solve and am developing broad a concept right now",
        implications: {}
      }, {
        text: "I already have a broad concept and am working on a more concrete design or implementation right now",
        implications: {}
      }, {
        text: "I already have an operating system that I want to improve",
        implications: {
          modelTrained: true
        }
      }]
    }, {
      question: "Do you already have an AI model trained?",
      condition: {
        modelTrained: undefined
      },
      answers: [{
        text: "Yes",
        implications: {
          modelTrained: true
        }
      }, {
        text: "No",
        implications: {
          modelTrained: false
        }
      }]
    }, {
      question: "Does your model perform better than the human?",
      condition: {
        modelTrained: true
      },
      answers: [{
        text: "Yes",
        implications: {
          aiGreaterHuman: true
        }
      }, {
        text: "I don't know",
        implications: {
          aiGreaterHuman: undefined
        }
      }, {
        text: "No",
        implications: {
          aiGreaterHuman: false
        }
      }]
    }, {
      question: "Do the errors of AI and humans tend to happen at the same or similar instances?",
      condition: {
        modelTrained: true
      },
      answers: [{
        text: "Yes",
        implications: {
          corErrors: true
        }
      }, {
        text: "I don't know",
        implications: {
          corErrors: undefined
        }
      }, {
        text: "Yes",
        implications: {
          corErrors: false
        }
      }]
    }, {
      question: "That is a good start, because having Complementarity Potential is so critical. If you want to further increase this potential consider these Design Patterns.",
      condition: {
        corErrors: true,
        modelTrained: true
      },
    }, {
      question: "It might be helpful to investigate this. Because having Complementarity Potential is so critical, here are some Design Patterns to potentially increase it.",
      condition: {
        corErrors: undefined,
        modelTrained: true
      },
    }, {
      question: "That is not an optimal starting point for Complementarity. Because having Complementarity Potential is so critical, here are some Design Patterns to potentially increase it.",
      condition: {
        corErrors: false,
        modelTrained: true
      },
    }, {
      question: "To reach Complementary Team Perfrormance it is crucial that humans and AI can make use of their respective strengths while allowing the other one to make up for their weaknesses. So it is importannt to always keep this in mind. Here are some Design Patterns that can help to increase this Complementarity Potential.",
      condition: {
        modelTrained: false
      },
    }, {
      question: "Take all the time you need.\nIf you want to move on for now, you can always revisit these Design Patterns.",
      actions: [{
        text: "Go on"
      }]
    }, {
      question: "Complementarity can be reached by targetting appropriate trust in the AI.\nHave you investigated the adherence of humans to AI advice?",
      condition: {
        modelTrained: true        
      },
      answers: [{
        text: "Yes",
        implications: {
          adherenceInvestigated: true
        }
      }, {
        text: "No",
        implications: {
          adherenceInvestigated: false
        }
      }]
    }, {
      question: "Do humans tend to overly adhere to AI Advice or do they not trust AI enough?",
      condition: {
        modelTrained: true,
        adherenceInvestigated: true
      },
      answers: [{
        text: "Users overly adhere to AI",
        implications: {
          //TODO
        }
      }, {
        text: "Both at a similar grade",
        implications: {
          //TODO
        }
      }, {
        text: "Depends on the user",
        implications: {
          //TODO
        }
      }, {
        text: "Adherence to AI is too low",
        implications: {
          //TODO
        }
      }]
    }, {
      question: "This can be very insightful to investigate. Usually it is a mixture of both and also very dependent on the user performing the task.\nAdvice: Try to view incorrect acceptance of AI advice seperately from incorrect self trust.",
      condition: {
        modelTrained: true,
        adherenceInvestigated: false        
      },
    }, {
      question: "Now I want to ask you some more questions about the task you want to solve.",
      condition: {},
    }, {
      question: "How can the task(s) be classified?\nYou can select multiple types as well, if your task includes multiple different subtasks.",
      condition: {},
      multiple: true,
      answers: [{
        text: "Value estimation (Regression)",
        implications: {
          taskType: "regression"
        }
      }, {
        text: "Classification",
        implications: {
          taskType: "classification"
        }
      }, {
        text: "Detection",
        implications: {
          taskType: "detection"
        }
      }]
    }, {
      question: "What are the data type(s) subject to this task?",
      condition: {},
      multiple: true,
      answers: [{
        text: "Structured (tabular) data",
        implications: {
          dataType: "tabular"
        }
      }, {
        text: "Images",
        implications: {
          dataType: "image"
        }
      }, {
        text: "Textual data",
        implications: {
          dataType: "text"
        }
      }]
    }, {
      question: "How familiar are the users of the AI System with Machine Learning and AI?",
      condition: {
        
      },
      answers: [{
        text: "Very familiar",
        implications: {
          //TODO
        }
      }, {
        text: "Broad Understanding",
        implications: {
          //TODO
        }
      }, {
        text: "Little to no understanding",
        implications: {
          //TODO
        }
      }, {
        text: "Users are very heterogenous in this regard",
        implications: {
          //TODO
        }
      }]
    }]

// eslint-disable-next-line no-unused-vars
const temp = {
  question: "",
  condition: {
    
  },
  answers: [{
    text: "",
    implications: {
      
    }
  }, {
    text: "",
    implications: {
      
    }
  }, {
    text: "",
    implications: {
      
    }
  }]
}