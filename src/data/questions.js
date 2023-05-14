export default [{
      question: "Hi there!\nTo help me understand which design patterns fit your project, I have to ask you some questions. If that is in your interest click 'Go on', otherwise switch to the filters tab, where you can freely explore design patterns.",
      actions: [{
        text: "Go on! Guide me.",
        reset: true,
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
      question: "Do you want see only design patterns for the Machine Learning/Data Science perspective?",
      condition: {
        role: "datascienctist"
      },
      answers: [{
        text: "Yes, only Machine Learning/Data Science perspective!",
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
      question: "Do you want to see only design patterns regarding the design of the frontend and collaboration mechanisms?",
      condition: {
        role: "frontend"
      },
      answers: [{
        text: "Yes, only frontend perspective!",
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
        text: "I have a problem/task that I want to solve and am developing a broad concept right now",
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
      question: "Do you already have an ML model trained?",
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
      question: "Do the errors of AI and humans tend to happen at the same or similar instances?",
      condition: {
        modelTrained: true
      },
      answers: [{
        text: "Yes",
        info: {
          corErrors: true,
        },
      }, {
        text: "I don't know",
      }, {
        text: "No",
        info: {
          corErrors: false,
        },
      }]
    }, {
      question: "That is a good start, because having complementarity potential is so critical. If you want to further increase this potential, consider the design pattern currently showing.",
      condition: {
        corErrors: true,
        modelTrained: true
      },
    }, {
      question: "It might be helpful to investigate this. Because having complementarity potential is so critical, have a look at the design pattern currently showing.",
      condition: {
        corErrors: undefined,
        modelTrained: true
      },
    }, {
      question: "That is not an optimal starting point for complementarity. Because having complementarity potential is so critical, have a look at the design pattern currently showing.",
      condition: {
        corErrors: false,
        modelTrained: true
      },
    }, {
      question: "To reach complementary team performance it is crucial that humans and AI can make use of their respective strengths while allowing the other one to make up for their weaknesses. So it is importannt to always keep this in mind. Have a look at the design pattern currently showing.",
      condition: {
        modelTrained: false
      },
    }, {
      question: "Take all the time you need.\nIf you want to move on for now, you can always revisit these design patterns later.",
      actions: [{
        text: "Go on"
      }],
      focus: "complementarityPotential",
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
      question: "Do humans tend to overly adhere to AI advice or do they not trust AI enough?",
      condition: {
        modelTrained: true,
        adherenceInvestigated: true
      },
      answers: [{
        text: "Users overly adhere to AI",
        filters: {
          overReliance: false,
        },
      }, {
        text: "Both at a similar grade",
      }, {
        text: "I don't know",
      }, {
        text: "Depends on the user",
        filters: {
          diverseUsers: true
        }
      }, {
        text: "Adherence to AI is too low",
        filters: {
          overReliance: true,
        },
      }]
    }, {
      question: "This can be very insightful to investigate. Often it is a mixture of both and can also be very dependent on the user performing the task.\nAdvice: Try to view incorrect acceptance of AI advice seperately from incorrect self trust.",
      condition: {
        modelTrained: true,
        adherenceInvestigated: false        
      },
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
      question: "Thank you for answering the questions. Based on your answers I selected fitting design patterns for your situation."
    }, {
      question: "You can now switch to the filters tab to further explore the design patterns and adapt the preselected filters or restart the guidance questions, if you want, by clicking the button on the bottom left."
    }]