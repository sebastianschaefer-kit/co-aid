export default [{
      question: "Hi there!\nI am going to be your assistant for the time. To help me understand what I can provide for you, I have to ask you some questions about your project. Is that in your intrest or do you want to eplore the Design Patterns for yourself?",
      answers: [{
        text: "Go on! Guide me.",
        info: {
          view: "guidance"
        }
      }, {
        text: "I want to explore for myself!",
        info: {
          view: "explore"
        }
      }]
    }, {
      question: "What is your role in this project?",
      answers: [{
          text: "I am working alone on it",
          info: {
            role: "full"
          },
          filters: {
            perspective: ["ds", "ux"]
          }
        }, {
          text: "I am supervising/managing the project and want to have an overview over everything",
          info: {
            role: "manager"
          },
          filters: {
            perspective: ["ds", "ux"]
          }
        }, {
          text: "I am a Data Scientist",
          info: {
            role: "datascienctist"
          }
        }, {
          text: "I am a UX/UI/frontend designer or developer",
          info: {
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
        filters: {
          perspective: ["ds"]
        }
      }, {
        text: "No, show me everything!",
        filters: {
          perspective: ["ds", "ux"]
        },
        sort: {
          perspective: "ds"
        }
      }]
    }, {
      question: "I think it is very important to broadly understand the data-centric perspective as well.\nDo you want me to show only Design Patterns for the human-centric perspetive?",
      condition: {
        role: "frontend"
      },
      answers: [{
        text: "Yes, only user-centric perspective!",
        filters: {
          perspective: ["ux"]
        },
      }, {
        text: "No, show me everything!",
        filters: {
          perspective: ["ds", "ux"]
        },
        sort: {
          perspective: "ux"
        }
      }]
    },  {
      question: "What is the state of your project right now?",
      multiple: false,
      answers: [{
        text: "I have a problem/task I want to solve and am developing broad a concept right now",
        filters: {
          projectState: "early"
        }
      }, {
        text: "I already have a concept and am working on a design or implementation right now",
        filters: {
          projectState: "concept"
        }
      }, {
        text: "I already have an operating system that I want to improve",
        info: {
          modelTrained: true
        },
        filters: {
          projectState: "running"
        }
      }]
    }, {
      question: "Do you already have an AI model trained?",
      condition: {
        modelTrained: undefined
      },
      answers: [{
        text: "Yes",
        info: {
          modelTrained: true
        }
      }, {
        text: "No",
        info: {
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
        sort: {
          overReliance: true
        }
      }, {
        text: "I don't know",
      }, {
        text: "No",
        sort: {
          overReliance: false
        }
      }]
    }, {
      question: "Do the errors of AI and humans tend to happen at the same or similar instances?",
      condition: {
        modelTrained: true
      },
      answers: [{
        text: "Yes",
        info: {
          corErrors: true,
        },
        sort: {
          compPot: true,
        },
      }, {
        text: "I don't know",
      }, {
        text: "Yes",
        info: {
          corErrors: false,
        },
        sort: {
          compPot: false,
        },
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
        info: {
          adherenceInvestigated: true
        }
      }, {
        text: "No",
        info: {
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
        sort: {
          overReliance: false,
        },
      }, {
        text: "Both at a similar grade",
      }, {
        text: "Depends on the user",
        sort: {
          diverseUsers: true
        }
      }, {
        text: "Adherence to AI is too low",
        sort: {
          overReliance: true,
        },
      }]
    }, {
      question: "This can be very insightful to investigate. Usually it is a mixture of both and can also be very dependent on the user performing the task.\nAdvice: Try to view incorrect acceptance of AI advice seperately from incorrect self trust.",
      condition: {
        modelTrained: true,
        adherenceInvestigated: false        
      },
    }, {
      question: "Now I want to ask you some more questions about the task you want to solve.",
    }, {
      question: "How can the task(s) be classified?\nYou can select multiple types as well, if your task includes multiple different subtasks.",
      multiple: true,
      answers: [{
        text: "Value estimation (Regression)",
        filters: {
          taskType: "reg"
        }
      }, {
        text: "Classification",
        filters: {
          taskType: "class"
        }
      }, {
        text: "Detection",
        filters: {
          taskType: "det"
        }
      }]
    }, {
      question: "What are the data type(s) subject to this task?",
      multiple: true,
      answers: [{
        text: "Structured (tabular) data",
        filters: {
          dataType: "tab"
        }
      }, {
        text: "Images",
        filters: {
          dataType: "img"
        }
      }, {
        text: "Textual data",
        filters: {
          dataType: "text"
        }
      }]
    }, {
      question: "How familiar are the users of the AI System with Machine Learning and AI?",
      answers: [{
        text: "Very familiar",
        filters: {
          aiLiteracy: "good"
        }
      }, {
        text: "Broad Understanding",
        filters: {
          aiLiteracy: "mid"
        }
      }, {
        text: "Little to no understanding",
        filters: {
          aiLiteracy: "bad"
        }
      }, {
        text: "Users are very heterogenous in this regard",
        filters: {
          aiLiteracy: "diverse"
        }
      }]
    }]