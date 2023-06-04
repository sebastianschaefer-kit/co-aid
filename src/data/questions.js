export default [{
      question: "Hi there!\nIn order for me to understand which design patterns are a good fit for your project, I have to ask you some questions. If you are interested, click 'Go on', otherwise switch to the Filters tab, where you can freely explore design patterns.",
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
          text: "I am supervising/managing the project",
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
      question: "Do you want see only design patterns for the machine learning/data science perspective?",
      condition: {
        role: "datascienctist"
      },
      answers: [{
        text: "Yes, only machine learning/data science perspective!",
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
      question: "Do you want to see only design patterns related to frontend design and explicit collaboration mechanisms?",
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
        text: "I already have an operating system and want to improve it",
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
      question: "Do the errors of AI and humans tend to occur in the same or similar instances?",
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
      question: "This is a good place to start because complementarity potential is so important. If you want to read more or increase that potential further, have a look at the design pattern that is currently being displayed.",
      condition: {
        corErrors: false,
        modelTrained: true
      },
    }, {
      question: "It may be helpful to investigate this. Because complementarity potential is so important, have a look at the design pattern that is currently being displayed.",
      condition: {
        corErrors: undefined,
        modelTrained: true
      },
    }, {
      question: "This is not an optimal starting point for complementarity. Because complementarity potential is so important, have a look at the design pattern that is currently being displayed.",
      condition: {
        corErrors: true,
        modelTrained: true
      },
    }, {
      question: "To achieve complementary team performance, it is important that humans and AI can leverage their respective strengths while allowing the other to compensate for their weaknesses. So it is importannt to always keep this in mind. Have a look at the design pattern that is currently being displayed.",
      condition: {
        modelTrained: false
      },
    }, {
      question: "Take all the time you need.\nIf you want to move on for now, you can always revisit this design patterns later.",
      actions: [{
        text: "Go on"
      }],
      focus: "complementarityPotential",
    }, {
      question: "Complementarity can be reached by targetting appropriate reliance in the AI.\nHave you investigated the reliance of humans on AI advice?",
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
      question: "Do humans tend to overly rely on AI advice or do they not rely on AI enough?",
      condition: {
        modelTrained: true,
        adherenceInvestigated: true
      },
      answers: [{
        text: "Users overly rely on AI",
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
        text: "Reliance on AI is too low",
        filters: {
          overReliance: true,
        },
      }]
    }, {
      question: "This can be very insightful to investigate. Often it is a mixture of both, and can also be very dependent on the user performing the task.\nAdvice: Try to separate incorrect acceptance of AI advice from incorrect self trust.",
      condition: {
        modelTrained: true,
        adherenceInvestigated: false        
      },
    }, {
      question: "How can the task(s) be classified?\nYou can also select multiple types, if your task contains several different subtasks.",
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
      question: "What type(s) of data are involved in this task?",
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
      question: "Thank you for answering my questions. Based on your answers, I have selected suitable design patterns for your situation."
    }, {
      question: "You can now switch to the Filters tab to further explore the design patterns and customize the preselected filters or restart the guidance questions if you wish by clicking the button in the lower left."
    }]