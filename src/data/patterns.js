export default [{
    id: "delayAssistance",
    group: "humanCentric",
    perspective: ["ux"],
    dataType: ["tab", "img", "text"],
    overReliance: true,
    projectState: ["early", "concept", "running"],
    title: "Delay AI-assistance",
    description: "Humans tend to anchor on the first thing they see (anchor effect). When humans see a plausible solution at the same moment they see a task, it is very difficult for them to make an unbiased decision. This can be even further increased, when they are provided with explanations, as they can be persuasive or intimidating, especially if humans don't understand them.\nIn situations, where it is important for humans to critically evaluate the AI decision, it's detrimental to provide them with AI recommendations right away.",
    tips: [
      "Show AI prediction after user gives their own prediction",
      "Delay AI prediction by a certain amount of time",
      "Show AI prediction or explanations on demand",
    ],
    tradeOffs: [
      "Decreased efficiency as users typically spend more time performing the task",
      "Increased cognitive demands on the user, which can lead to fatigue symptoms",
      "If reliance on AI is already low, this is likely to make it worse"
    ],
    related: [
      "infoOverload",
      "adaptiveAI",
      "appropriateEffort"
    ],
    references: [
      { id: "green2019principles", proposal: false },
      { id: "bansal2020does", proposal: true },
      { id: "poursabzi2018manipulating", proposal: true },
    ],
  }, {
    id: "infoOverload",
    group: "humanCentric",
    perspective: ["ux"],
    taskType: ["reg", "class", "det"],
    dataType: ["tab", "img", "text"],
    projectState: ["concept", "running"],
    title: "Avoid information overload",
    description: "Humans have limited cognitive capacity and naturally seek to reduce their cognitive effort. If too much or too complex information is presented to humans, their cognitive capacity has to be used to process and evaluate the given information. They may become intimidated or selectively/completely ignore the information.\n(X)AI-assistance should enhance and improve the user's performance, not make his/her life more difficult.",
    tips: [
      "Select relevant and helpful information to present to the user",
      "Prepare and visualize information",
      "Adapt to user preferences and skills"
    ],
    tradeOffs: [
      "Information that is helpful to one group of users may not be as helpful to others"
    ],
    related: [
      "delayAssistance",
      "appropriateEffort",
      "adaptiveAI"
    ],
    references: [
      { id: "poursabzi2018manipulating", proposal: false },
      { id: "zhang2020effect", proposal: true },
      { id: "feng2018can", proposal: true },
      { id: "lim2009and", proposal: false }
    ]
  }, {
    id: "notifyOutliers",
    group: "ml",
    perspective: ["ux", "ds"],
    projectState: ["early", "concept", "running"],
    overReliance: true,
    title: "Notify outlier data points",
    description: "ML models are typically trained and validated on a specific data set. As a result, AI often struggles with data instances that fall outside of the distribution found in the training data. Data in real-world scenarios is often different from the training data.\nAn easy way to give the user information about whether the AI might have problems working with a particular instance is to notify them if the instance is an outlier.",
    tips: [
      "If technically possible, train an ML model that detects outlier data points based on the training data",
      "Provide information about whether an instance is an outlier",
      "You can also adjust the amount and timing of the information provided based on this"
    ],
    tradeOffs: [
      "Well-trained models with well-rounded training data can actually perform well on out-of-distribution data, perhaps even better than humans"
    ],
    synergies: [
      "adaptiveAI"
    ],
    references: [
      { id: "poursabzi2018manipulating", proposal: true },
      { id: "liu2021understanding", proposal: true }
    ],
  }, {
    id: "training",
    group: "humanCentric",
    perspective: ["ux"],
    projectState: ["concept", "running"],
    taskType: ["reg", "class", "det"],
    dataType: ["tab", "img", "text"],
    title: "Train users how to work with (X)AI",
    description: "Concepts of AI and especially XAI can be quite difficult for many people to understand. Interpreting AI recommendations, confidence scores, or explanations is not always intuitive.\nProviding detailed tutorials tailored to the users of a system can help ease the introduction to or understanding of an AI system.",
    tips: [
      "Explain and guide the use of the system",
      "Explain what insights such as confidence scores or XAI really mean and what the user can do with this information",
      "Show examples of where AI is right and where AI is wrong",
      "Consider the order and ratio (correct/incorrect) of the displayed instances",
    ],
    references: [
      { id: "lai2020chicago", proposal: false },
      { id: "nourani2021anchoring", proposal: false }
    ],
  }, {
    id: "contextualInfo",
    group: "compPot",
    perspective: ["ux"],
    taskType: ["reg", "class"],
    dataType: ["tab", "img", "text"],
    overReliance: true,
    title: "Provide additional contextual information",
    description: "Complementarity potential is the most essential requirement for complementary team performance. Providing unique human contextual information can increase complementarity potential by facilitating contextualization, which is a strength of humans compared to AI.",
    tips: [
      "Images and textual data work particularly well as they are highly contextual in nature",
      "Data that is technically unavailable or computationally intensive can simply be presented to the user only"
    ],
    related: [
      "complementarityPotential"
    ],
    references: [
      { id: "hemmer2022effect", proposal: false }
    ]
  }, {
    id: "complementarityPotential",
    group: "compPot",
    perspective: ["ds", "ux"],
    taskType: ["reg", "class", "det"],
    dataType: ["tab", "img", "text"],
    title: "Ensure potential for complementarity",
    description: "Complementarity potential is the most important prerequisite for complementary team performance (CTP). If the AI and human errors are largely aligned, there is very limited potential for complementarity in a collaborative environment.\nOver-prioritizing performance when selecting and training ML models does not always lead to the best results in team performance.",
    images: [{
      fileName: "complementarityPotential.png",
      width: "90%"
    }],
    tips: [
      "Investigate and compare user and AI error patterns",
      "Customize training data to focus more on instances where humans make mistakes"
    ],
    tradeOffs: [
      "Team performance may be lower than the performance of the best AI model working alone - you may want to consider fully automating this task"
    ],
    related: [
      "simpleModels",
      "contextualInfo"
    ],
    references: [
      { id: "zhang2020effect", proposal: false },
      { id: "hemmer2022effect", proposal: false }
    ]
  }, {
    id: "ida",
    group: "xai",
    perspective: ["ux", "ds"],
    taskType: ["reg", "class"],
    dataType: ["tab", "img", "text"],
    overReliance: true,
    title: "Provide XAI-assistance without actual AI recommendation (intelligent decision assistance)",
    description: "Full automation can have many drawbacks when it comes to tasks in high-risk domains such as medicine, law, or human resources, as well as knowledge-intensive domains such as finance. Providing explanations, while withholding the actual AI prediction, can help the user by providing a general direction while keeping them closely involved in the decision.",
    images: [{
      fileName: "ida.png",
      description: "Concept of intelligent decision assistance on a credit approval task",
      source: "schemmer2023intelligent",
      width: "40%"
    }],
    tips: [
      "Provide color coding for features based on importance - different colors for direction of feature influence; Intensify colors for higher importance",
      "Provide local example-based explanations that show similar instances of training data",
      "Provide counterfactual explanations, i.e., artificially generated examples that would 'flip' the AI's prediction by changing only a minimal amount of feature values."
    ],
    tradeOffs: [
      "Perceived usefulness may decrease if users know that the AI could make a full recommendation that it is being withheld",
      "For structured and repetitive tasks, full automation is likely to be more beneficial in terms of overall efficiency and avoiding fatigue"
    ],
    related: [
      "featureImportance",
      "example"
    ],
    references: [
      { id: "schemmer2023intelligent", proposal: true }
    ]
  }, {
    id: "aiCertainty",
    group: "confidence",
    perspective: ["ux"],
    taskType: ["class", "det"],
    dataType: ["tab", "img", "text"],
    title: "Present AI confidence with AI recommendation",
    description: "Presenting the confidence of an AI prediction can help distinguish between good and bad recommendations.\nNumeric confidence scores are not always intuitive, depending on the capabilities of the users.",
    tips: [
      "Numerical confidence scores can be difficult to interpret",
      "Visual and color-coded representations of confidence scores are easier to interpret",
    ],
    tradeOffs: [
      "Depending on how confidence is calculated, it may not perfectly represent the probability that the AI is correct",
    ],
    related: [
      "multiClassProbabilities"
    ],
    references: [
      { id: "fuegener2021will", proposal: false },
      { id: "gonzalez2020human", proposal: false },
      { id: "zhang2020effect", proposal: false }
    ],
  }, {
    id: "multiClassProbabilities",
    group: "confidence",
    perspective: ["ux"],
    taskType: ["class"],
    dataType: ["tab", "img", "text"],
    title: "Present multi-class probabilities",
    description: "Presenting the probabilities of multiple classes can help the user understand uncertainties in more detail than simple confidence values. This is especially helpful when, for example, there are multiple classes with similarly high probabilities.",
    tips: [
      "Visual and color-coded representations of probabilites are easier to interpret",
      "Show probabilities for x classes where it is highest",
      "Adjust based on set thresholds of probabilities or probability differences to the predicted class"
    ],
    tradeOffs: [
      "Too much information can lead to information overload",
    ],
    condition: {
      taskType: "class" //multiclass
    },
    related: [
      "aiCertainty",
      "infoOverload"
    ],
    references: [
      { id: "tschandl2020human", proposal: false }
    ],
  }, {
    id: "confidenceIntervals",
    group: "confidence",
    perspective: ["ux"],
    dataType: ["tab", "img", "text"],
    title: "Present confidence intervals",
    description: "Confidence intervals can provide insight into the uncertainty of an AI prediction in the case of a continuous estimation task.",
    images: [{
      fileName: "confidenceInterval.png",
      description: "House price prediction task",
      source: "hemmer2022effect",
      width: "60%"
    }],
    tips: [
      "Visual representations that show the confidence interval and predicted value are easier to interpret than simple numerical values"
    ],
    tradeOffs: [
      "Too much information can lead to information overload",
    ],
    related: [
      "aiCertainty",
      "infoOverload"
    ],
    references: [
      { id: "hemmer2022effect", proposal: false }
    ]
  }, {
    id: "adaptiveAI",
    group: "humanCentric",
    perspective: ["ux", "ds"],
    taskType: ["class", "reg", "det"],
    dataType: ["tab", "img", "text"],
    title: "Use personalized and adaptive AI-assistance",
    description: "Different users, especially in diverse user groups, have different preferences and skills and interact with an AI system in different ways. Adaptive and personalized AI-assistance is one way to address this issue.",
    tips: [
      "Adapt based on user preferences or metrics, such as AI confidence or human-AI agreement",
      "Train an AI system that estimates when assistance is likely to be beneficial and when it is not, with respect to a particular user (see Fügener et al. 2021)"
    ],
    synergies: [
      "notifyOutliers"
    ],
    related: [
      "delayAssistance"
    ],
    references: [
      { id: "fuegener2021will", proposal: true },
      { id: "bansal2020does", proposal: true },
    ],
  }, {
    id: "featureImportance",
    group: "xai",
    perspective: ["ux", "ds"],
    dataType: ["tab", "img", "text"],
    overReliance: false,
    title: "Use sensitivity analysis (feature importance)",
    description: "Sensitivity analysis can provide useful insight into the AI decision by showing the features that contributed most to a particular decision (feature importance).\nThe amount and presentation of information must be carefully considered so as not to overwhelm the user.\nHow to use sensitivity analysis for best results depends mostly on the data type(s) of your task and the users' knowledge of AI and statistics.",
    tips: [
      "Provide simple and understandable information, especially for less AI-literate users",
      "Highlighting only the most important features is often enough information",
      "Visual and color-coded representations are easier to understand",
      "Use natural language to point out the most important features",
    ],
    tradeOffs: [
      "Team performance may be lower than the performance of the best AI model working alone - you may want to consider fully automating this task",
    ],
    images: [{
      fileName: "featureImportanceTabular.png",
      description: "Recidivism prediction task",
      source: "liu2021understanding",
      width: "25%"
    }, {
      fileName: "featureImportanceText.png",
      description: "Deceptive review detection",
      source: "lai2020chicago",
      width: "40%"
    }, {
      fileName: "featureImportanceImage.png",
      description: "Activity classification with top-down neural attention",
      source: "zhang2018top",
      width: "25%"
    }],
    synergies: ["delayAssistance"],
    related: [
      "ida"
    ],
    references: [
      { id: "lai2020chicago", proposal: false },
      { id: "liu2021understanding", proposal: false },
      { id: "biran2017human", proposal: false },
      { id: "kiani2020impact", proposal: false },
    ]
  }, {
    id: "classGlobalExamples",
    group: "xai",
    perspective: ["ux", "ds"],
    dataType: ["img"],
    title: "Present classes with global representative examples",
    description: "Global examples are obtained from the training data and are intended to represent prototypes for each class. Displaying these representative examples helps humans to understand the data distribution of the given classes.", //It also helps them to conduct the task by comparing the image to the example images.
    tips: [
      "Provide prototype (representative) examples",
      "Include outliers or problematic examples to provide a balanced understanding",
      "Only feasible for a relatively small number of classes",
      "Not feasible for images that require a high level of detail"
    ],
    tradeOffs: [
      "The number of examples must be appropriate to convey enough information to be generalizable without overwhelming the user"
    ],
    images: [{
      fileName: "classGlobalExamples.png",
      description: "Dog classification task",
      source: "fuegener2021will"
    }],
    references: [
      { id: "fuegener2021will", proposal: true }
    ],
    related: [
      "example",
      "infoOverload"
    ]
  }, {
    id: "example",
    group: "xai",
    perspective: ["ux", "ds"],
    overReliance: true,
    title: "Local example-based explanations",
    description: "Local examples are instances from the training data set that are considered similar to the current instance. Local example-based explanations promote inductive decision making by the user.",
    tips: [
      "Images work particularly well for example-based explanations",
      "Show AI prediction for examples",
      "Show examples, where the AI result matches the current instance"
    ],
    tradeOffs: [
      "The number of examples must be appropriate to convey enough information without overwhelming the user.",
      "Example-based explanations are particularly useful for identifying erroneous AI recommendations"
    ],
    related: [
      "classGlobalExamples",
      "exampleSpatialLayout"
    ],
    images: [{
      fileName: "example.png",
      description: "Example-based explanations on nutrition prediction",
      source: "buccinca2020proxy",
      width: "50%"
    }],
    references: [
      { id: "gonzalez2020human", proposal: false },
      { id: "buccinca2020proxy", proposal: false }
    ],
  }, {
    id: "exampleSpatialLayout",
    group: "xai",
    perspective: ["ux"],
    overReliance: true,
    title: "Local example-based explanations with spatial layouts",
    description: "Spatial layouts can help visualize the similarity of different instances to the input instance. The closer an image is to the input image, the more similar they are.",
    tips: [
      "Use grid layout, if the representation is easy to understand - columns represent classes",
      "Use tree layout, if the representation is difficult to read - root node is the input instance; leaves are instances with different predicted classes as the input",
      "Escape routes algorithm to determine similarity/closeness (see Yang et al. 2020)"
    ],
    tradeOffs: [
      "The number of images must be appropriate to convey enough information without overwhelming the user"
    ],
    images: [{
      fileName: "exampleSpatialLayout1.png",
      description: "Leaf classification - grid layout",
      source: "yang2020visual",
      width: "35%"
    }, {
      fileName: "exampleSpatialLayout2.png",
      description: "Leaf classification - tree layout",
      source: "yang2020visual",
      width: "50%"
    }],
    related: [
      "example"
    ],
    references: [
      { id: "yang2020visual", proposal: false }
    ],
  }, {
    id: "appropriateEffort",
    group: "xai",
    perspective: ["ux"],
    taskType: ["reg", "class", "det"],
    dataType: ["tab", "img", "text"],
    projectState: ["concept", "running"],
    title: "Use explanations with appropriate cognitive effort",
    description: "Humans naturally try to reduce cognitive effort. Therefore, explanations that are too demanding may be ignored.",
    tips: [
      "Talk to potential users and conduct early testing to explore their use and understanding of XAI"
    ],
    tradeOffs: [
      "Explanations that are too cognitively demanding are likely to be ignored",
      "Explanations that are too simple may not contain meaningful information"
    ],
    related: [
      "infoOverload"
    ],
    references: [
      { id: "buccinca2020proxy", proposal: true }
    ],
  }, {
    id: "simpleModels",
    group: "ml",
    perspective: ["ds"],
    taskType: ["reg", "class", "det"],
    dataType: ["tab", "img", "text"],
    projectState: ["concept", "running"],
    title: "Use simple models",
    description: "Simpler models are likely to have worse solo performance. For complementarity, we only look at team performance. When using simpler models, humans may be better able to understand AI decisions, assess their quality, and incorporate them into their decision-making.",
    tips: [
      "Build AI systems with parsimonious error boundaries",
      "Minimize the stochasticity of system errors",
      "Reduce task dimensionality when possible"
    ],
    tradeOffs: [
      "Even if CTP is achieved with a simple model, the team performance may still be lower than the performance of the best AI model working alone - you may want to consider fully automating this task"
    ],
    references: [
      { id: "lai2020chicago", proposal: false },
      { id: "bansal2019beyond", proposal: true }
    ],
  }, {
    id: "compatibleUpdates",
    group: "ml",
    perspective: ["ds"],
    taskType: ["reg", "class", "det"],
    dataType: ["tab", "img", "text"],
    projectState: ["running"],
    systemOperating: true,
    title: "Prioritize compatibility when updating the model",
    description: "When performing model updates, trading model accuracy in favor of compatibility increases CTP.",
    tips: [
      "Penalize new errors when retraining models"
    ],
    images: [{
      fileName: "compatibleUpdates.png",
      description: "Depiction of (in-)compatible model updates",
      source: "bansal2019updates",
      width: "45%"
    }],
    tradeOffs: [
      "Compatible updates deliver better team performance sooner",
      "Incompatible but high-performing updates have the potential to improve team performance in the long run"
    ],
    references: [
      { id: "bansal2019updates", proposal: false }
    ],
  }, {
    id: "precisionOverRecall",
    group: "ml",
    perspective: ["ds"],
    taskType: ["det"],
    dataType: ["text", "img"],
    projectState: ["concept", "running"],
    title: "Prioritize precision over recall",
    description: "When detecting spans in text or sections in images, users tend to be better at finding missing detections than identifying incorrect detections. For this reason, false negatives are often more acceptable than false positives.",
    related: [
      "semiAuto"
    ],
    references: [
      { id: "levy2021assessing", proposal: false }
    ],
  }, {
    id: "semiAuto",
    group: "humanCentric",
    perspective: ["ux", "ds"],
    taskType: ["det"],
    dataType: ["text", "img"],
    title: "Semi-automatition: AI for classification only",
    description: "When performing a task that consists of a detection phase and a classification/estimation of the detections found, AI can be used to assist in one of the two tasks. In some cases, however, performing the detection task without assistance and the second task with assistance seems to be just the right amount of involvement and cognitive demand.",
    tradeOffs: [
      "If AI detections are correct, this approach is more time-consuming",
      "If AI detections are incorrect, this approach is likely to be more efficient"
    ],
    related: [
      "precisionOverRecall"
    ],
    references: [
      { id: "levy2021assessing", proposal: false },
      { id: "kiani2020impact", proposal: false }
    ],
  }]