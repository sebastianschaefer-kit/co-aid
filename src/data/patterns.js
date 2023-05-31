export default [{
    id: "delayAssistance",
    group: "humanCentric",
    perspective: ["ux"],
    dataType: ["tab", "img", "text"],
    overReliance: true,
    projectState: ["early", "concept", "running"],
    title: "Delay AI-assistance",
    description: "Humans tend to anchor to the first thing they see (Anchor Effect). When humans see a plausible solution in the same moment they see a task, it is very hard for them to make an unbiased decision. This can be even further increased, when they are provided with explanations as they can be persuasive or intimidating, expecially when humans can't comprehend them.\nIn situations, where it is important for humans to critically assess the AI decision, it is detrimental to provide them with AI recommendations right away.",
    tips: [
      "Show AI prediction after user gives his/her own prediction",
      "Delay AI prediction by a certain time",
      "Show AI prediction or explanations on demand",
    ],
    tradeOffs: [
      "Efficiency decreases since the user usually need more time conducting the task",
      "Cognitive demand for the user is higher, which can lead to symptoms of fatigue",
      "When trust in AI is already low, this will probably make it worse"
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
    description: "Humans have limited cognitive capacity and are inherently trying to reduce their cognitive effort. When too much or too complex information is presented to humans, their cognitive capacity has to be used to process and assess given information. They might get intimidated or selectively/completely ignore the information.\nAI-assistance, as well as XAI, should augment and improve the users performance and not make his/her life even harder.",
    tips: [
      "Select relevant and helpful information to present to the user",
      "Preprocess and visualize information",
      "Adapt to user preferences and capabilities"
    ],
    tradeOffs: [
      "Information that might be helpful for one group of users might not be as helpful for others"
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
    description: "ML Models are usually trained and validated on a particular data set. This is why AI often struggles with data instances lying outside of the distribution found in the training data. Data in real-life scenarios are oftentimes different than training data.\nA simple way of giving the user information on whether AI might have problems working with a particular instance, is to notify them, if the instance is an outlier.",
    tips: [
      "If technically possible, train an ML model that detects outlier data points based on the training data",
      "Provide information about whether an instance is an outlier",
      "You can also adapt the amount and timing of the information provided based on that"
    ],
    tradeOffs: [
      "Well trained models with well rounded training data might actually be able to deliver good results - maybe still even better than humans"
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
    description: "AI and especially XAI are topics that can be quite hard to understand for many humans. Interpreting AI recommendations, confidence scores or explanations is not always intuitive.\nProviding detailed tutorials tailered for the users of a system, can ease the introduction to or improve understanding of an AI system.",
    tips: [
      "Explain und guide how to use the system",
      "Explain what insights, like confidence scores or XAI, really mean and what the user can do with that information",
      "Show examples, where AI is right and where AI is wrong",
      "Consider the order and ratio (correct/incorrect) of instances shown",
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
    description: "Complementarity potential is the most central prerequisite to complementary team performance. Providing unique human contextual information can enhance the potential for complementarity, as it facilitates contextualization, which is a strength of humans compared to AI.",
    tips: [
      "Images and textual data work especially well since they are very contextual",
      "Data that is not technically available or is computationally expensive can simply be presented to the user only"
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
    description: "Complementarity potential is the most central prerequisite to complementary team performance. If the AI's and humans' errors are largely aligned, there is very limited potential for complementarity in a collaborative environment.\nOverly prioritzing performance when selecting and training ML models does not always lead to the best results in team performance.",
    images: [{
      fileName: "complementarityPotential.png",
      width: "90%"
    }],
    tips: [
      "Investigate error patterns of users",
      "Adapt training data to focus more on instances, where humans make mistakes"
    ],
    tradeOffs: [
      "Team performance might be lower than the performance of the best AI model working alone - you might consider full automation of this task"
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
    title: "Provide XAI-assistance without actual AI recommendation",
    description: "Full automation can have lots of disadvantages, when it comes to tasks in high risk domains, such as medicine, law or human resources, as well as knowledge intensive domains, such as finance. Providing explanations, while withholding the actual AI prediction, can help the user by providing a general direction, while keeping him/her more closely involved into the decision.",
    images: [{
      fileName: "ida.png",
      description: "Concept of intelligent decision assistance on a credit approval task",
      source: "schemmer2023intelligent",
      width: "40%"
    }],
    tips: [
      "Provide color coding for features regarding their importance - different colors for direction of feature influence; Intensify colors for higher importance",
      "Provide local example-based explanations, showing similar training data instances",
      "Provide counterfactual explanations, meaning artificially generated examples that would 'flip' the AI prediction by only changing a minimal amount of feature values"
    ],
    tradeOffs: [
      "Percieved usefulness might decrease, when the users knows the AI could give a complete recommendation, but it is withheld",
      "In structured and repetetive tasks full automation is likely to be more advantageous in regard to overall efficiency and human fatigue"
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
    title: "Present AI certainty with AI recommendation",
    description: "Presenting the certainty of an AI prediction can help distinguish between good and bad recommendations.\nNumeric confidence scores are not always intuitive, depending on the capabilities of the users.",
    tips: [
      "Numerical confidence scores can be difficult to interpret",
      "Visual and color coded represenations of confidence scores are easier to interpret",
    ],
    tradeOffs: [
      "Depending on the calculation of confidence, it might not perfectly represent the probability that the AI is correct",
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
    description: "Presenting the probabilities of multiple classes can help the user to comprehend uncertainties more detailed in comparison to simple confidence scores. This is especially helpful, if, for example, there are multiple classes with similarly high probabilities.",
    tips: [
      "Visual and color coded represenations of confidence are easier to interpret",
      "Show x classes with the highest probabilities",
      "Adapt based on set threshholds of probabilites or differences in probability to the most probable class"
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
    description: "Confidence intervals can provide insights into the uncertainty of an AI prediction in the case of a continous estimation task.",
    images: [{
      fileName: "confidenceInterval.png",
      description: "House price prediction task",
      source: "hemmer2022effect",
      width: "60%"
    }],
    tips: [
      "Visual representations in the form of a numeric beam with confidence and prediction values are easier to interpret than plain numeric values"
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
    description: "Different users, especially in diverse user groups, have different preferences and capabilities and interact differently with an AI System. Adaptive and personalized AI-assistance is one way to live up to this problem.",
    tips: [
      "Adapt based on user preferences or metrics, such as, AI confidence or human and AI agreement",
      "Train an AI System, estimating when assistance is likely to be benefitial and when not, in regard to one particular user (see Fügener et al. 2021)"
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
    description: "Sensitivity analysis can provide useful insights into the decision of the AI by showing the features that contributed the most to a particular decision (feature importance).\nThe amount and the presentation of the information have to be carefully considered to not overwhelm the user.\nHow to use sensitivity analysis for the best results, depends mostly on the data type(s) of your task and the literacy of the users regarding AI and statistics.",
    tips: [
      "Provide simple and understandable information especially for less AI literate users",
      "Highlighting only the most important features is often enough information",
      "Visual and color coded representations are easier to understand",
      "Point out most important features in natural language",
    ],
    tradeOffs: [
      "Team performance might be lower than the performance of the best AI model working alone - you might consider full automation of this task",
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
    description: "Global examples are obtained from the training data and aim to represent prototypes for each class. Showing these representative examples helps humans to comprehend the data distribution of the given classes.", //It also helps them to conduct the task by comparing the image to the example images.
    tips: [
      "Provide prototype (representative) examples",
      "To provide a balanced understanding include outliers or problematic examples",
      "Only feasible for relatively low amount of classes",
      "Not feasible for images that require a great level of detail"
    ],
    tradeOffs: [
      "The number of examples has to be appropriate to carry enough information to be generalizable without overloading the user"
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
    description: "Local examples are instances from the training data set that are considered similar to the instance at hand. Local example-based explanations foster inductive decision making by the user.",
    tips: [
      "Example-based explanations work especially well with images",
      "Show AI classification for examples",
      "Show examples, where the AI result matches the current instance"
    ],
    tradeOffs: [
      "The number of examples has to be appropriate to carry enough information without overloading the user",
      "Example-based explanations are particularly suitable for identifying erroneous AI recommendations"
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
    description: "Spatial layouts can help to visualize the similarities of different instances to the input instance. The closer an image is to the input image, the more similar they are.",
    tips: [
      "Use grid layout, if the representation is easy to understand - columns represent classes",
      "Use tree layout, if the representation is difficult to read - root node is the input instance; leaves are instances with different predicted classes as the input",
      "Escape routes algorithm to determine similarity/closesness (see Yang et al. 2020)"
    ],
    tradeOffs: [
      "The number of pictures has to be appropriate to carry enough information without overloading the user"
    ],
    images: [{
      fileName: "exampleSpatialLayout1.png",
      description: "Leaf Classification - Grid Layout",
      source: "yang2020visual",
      width: "35%"
    }, {
      fileName: "exampleSpatialLayout2.png",
      description: "Leaf Classification - Tree Layout",
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
    description: "Humans are inherently trying to reduce the cognitive effort expended. This is why too demanding explanations might get ignored.",
    tips: [
      "Talk to potential users and make early tests to investigate their usage and understanding of XAI"
    ],
    tradeOffs: [
      "Too cognitively demanding explanations are likely to be ignored",
      "Too simple explanations might not contain meaningful information"
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
    description: "Simpler models are likely to have worse solo performance. Regarding complementarity we only look at team performance. When using simpler models, humans might be better able to understand AI decisions, assess their quality and incorporate them into their decision.",
    tips: [
      "Build AI systems with parsimonious error boundaries",
      "Minimize the stochasticity of system errors",
      "Reduce task dimensionality when possible"
    ],
    tradeOffs: [
      "Even when reaching CTP with a simple model, the team performance might still be lower than the performance of the best AI model working alone - you might consider full automation of this task"
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
      "Compatible updates provide better team performance earlier",
      "Incompatible but high performance updates have potential to reach better team performance in the long term"
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
    description: "When detecting spans in texts or sections in images, users tend to be better able to find missing detections compared to identifying wrong detections. For this reason false negatives are often more acceptable than false positives.",
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
    description: "When performing a task consisting of a detection stage as well as a classification/estimation of found detections, AI can be used to assist in either of the tasks. In some cases, though, performing the detection task without assistance and the second task with assistance seems to be just the right amount of involvment and cognitive demand.",
    tradeOffs: [
      "When AI detections are correct, this approach is more time-consuming",
      "When AI detections are incorrect, this approach is likely to be more efficient"
    ],
    related: [
      "precisionOverRecall"
    ],
    references: [
      { id: "levy2021assessing", proposal: false },
      { id: "kiani2020impact", proposal: false }
    ],
  }]