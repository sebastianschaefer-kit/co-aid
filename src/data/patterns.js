export default [{
    id: "delayAssistance",
    group: "humanCentric",
    perspective: ["ux"],
    dataType: ["tab", "img", "text"],
    overReliance: true,
    projectState: ["early", "concept", "running"],
    title: "Delay AI Assistance",
    description: "Humans tend to anchor to the first things they see (Anchor Effect). When humans see a possible and plausible solution in the same moment they see a task it is very hard for them to make unbiased decisions. This can be even further increased, when the are provided with explanations as they can be persuasive or intimidating, expecially when humans can't comprehend them.\nIn situations, where it is critical for humans to critically assess the AI decision, it is detrimental to provide them with AI recommendations right away.",
    tipps: [
      "Show AI Prediction after user gives his/her own prediction",
      "Delay AI Prediction by a certain time",
      "Show AI Prediction or Explanations on demand",
    ],
    tradeOffs: [
      "Efficiency decreases since users usually need more time conducting the task",
      "Cognitive demand for users is higher, which can lead to symptoms of fatigue",
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
    title: "Avoid Information Overload",
    description: "Humans have limited cognitive capacity and are, thus, inherently trying to reduce their cognitive effort. When too much or too complex information is presented to humans, cognitive capacity has to be used to process and assess given information. They might get intimidated or selectively/completely ignore the information.\nAI-Assistance, as well as XAI, should augment and improve the performance, not make the life of users even harder.",
    tipps: [
      "Select relevant and helpful information to present to the user",
      "Preprocess and visualize information",
      "Adapt to user preferences and capabilities"
    ],
    tradeOffs: [
      "Information that might be helpful for one group of users might not be as helpful for others"
    ],
    related: [
      "delayAssistance",
      "appropriateEffort"
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
    description: "ML Models are usually trained and validated on a particular data set. Because of this, AI often struggles with data instances lying outside of the of the distribution found in the Training Data. Data in real-life scenarios are oftentimes different than Training Data.\nSo a simple way of giving users information on whether AI might have problems working with a particular instance, is to notify them, if the instance is an outlier.",
    tipps: [
      "If technically possible, train an ML model that detects outlier data points, based on the Training Data",
      "Provide information about, whether an instance is an outlier",
      "You can also adapt the amount and timing of the information provided based on that"
    ],
    tradeOffs: [
      "Well trained models with well rounded Training Data might actually be able to deliver good results - maybe still even better than humans"
    ],
    synergies: [
      "adaptiveAI"
    ],
    references: [
      { id: "poursabzi2018manipulating", proposal: false },
      { id: "liu2021understanding", proposal: false }
    ],
  }, {
    id: "training",
    group: "humanCentric",
    perspective: ["ux"],
    projectState: ["concept", "running"],
    taskType: ["reg", "class", "det"],
    dataType: ["tab", "img", "text"],
    title: "Train users how to work with (X)AI",
    description: "AI and especially XAI are topics that can be quite hard to grip for many humans. Interpreting AI recommendations, confidence scores or explanations is not always intuitive.\nProviding detailed tutorials tailered for the users of a system, can ease the introduction to or improve understanding of an AI system.",
    tipps: [
      "Explain und guide how to use the system",
      "Explain what insights, like confidence scores or XAI, really mean and what users can do with that information",
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
    title: "Provide additional contextual information to human users",
    description: "Complementarity Potential is the most central prerequisite to Complementary Team Performance. Providing unique human contextual information can enhance the potential for complementarity, as it enables the users to get a more complete view of the instance.",
    tipps: [
      "Images and textual data work especially well, since they are very contextual",
      "Data that is not technically available or is computationally expensive can be simple presented to the users"
    ],
    related: [
      "complementarityPotential"
    ],
    synergies: [
      "featureImportance"
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
    title: "Ensure potential for Complementarity",
    description: "Complementarity Potential is the most central prerequisite to Complementary Team Performance. If the AI's and humans' errors are largely aligned, there is very limited potential for complementarity in a collaborative environment.\nOverly prioritzing Perfromance when selecting and training ML models does not always lead to the best results in Team Performance.",
    images: [{
      fileName: "complementarityPotential.png",
      width: "90%"
    }],
    tipps: [
      "Investigate Error Patterns of human users",
      "Adapt training data to focus more on instances, where humans make mistakes"
    ],
    tradeOffs: [
      "Team Performance might be lower than the performance of the best AI model working alone. In this case you may consider fully automating this task."
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
    title: "Provide XAI assistance without actual AI recommendation",
    description: "In tasks of high risk domains, such as medicine, law or human resources, as well as knowledge intensive domains, like finance, full automation can have lots of disadvantages. Providing only explanations, while withholding the actual AI prediction, can help users by giving a general direction without biasing the human to much.",
    images: [{
      fileName: "ida.png",
      description: "Concept of Intelligent Decision Assistance on a Credit Approval task",
      source: "schemmer2023intelligent",
      width: "40%"
    }],
    tipps: [
      "Provide color coding for features regarding their importance\nDifferent colors for direction of feature influence; Intensify colors for higher importance",
      "Provide local example-based explanations, showing similar Training Data instances",
      "Provide Counterfactual explanations, meaning artificially generated examples that would 'flip' the AI prediction by only changing a minimal amount of feature values"
    ],
    tradeOffs: [
      "Percieved usefullness might decrease, when users know the AI could give a complete recommendation, but it is withheld",
      "In structured and repetetive tasks full automation is likely to be more advantageous in regard to efficiency and fatigue"
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
    description: "Presenting the certainty of an AI prediction, can help distinguish between good and bad recommendations.\nNumeric confidence scores are not always intuitive, depending on the capabilities of the users.",
    tipps: [
      "Numerical values can be difficult to interpret",
      "Visual and color coded represenations of confidence are easier to interpret",
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
      { id: "zhang2020effect", proposal: true }
    ],
  }, {
    id: "multiClassProbabilities",
    group: "confidence",
    perspective: ["ux"],
    taskType: ["class"],
    dataType: ["tab", "img", "text"],
    title: "Present Multi-Class Probabilities",
    description: "Presenting the probabilities of multiple classes can help to comprehend uncertainties beyond simple confidence measures. When, for example, there are two classes with similarly high probabilities, this variant is able appropriatly explain this situation.",
    tipps: [
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
    title: "Present Confidence Intervals",
    description: "Confidence intervals can provide insights into the uncertainty of an AI prediction, in the case of a continous estimation task.",
    images: [{
      fileName: "confidenceInterval.png",
      description: "House Price Prediction Task",
      source: "hemmer2022effect",
      width: "60%"
    }],
    tipps: [
      "Visual representations in the form of a numeric beam with confidence and prediction values are easier to interpret than plain numeric values"
    ],
    tradeOffs: [
      "Too much information can lead to information overload",
    ],
    // TODO: component or graphic
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
    title: "Use personalized and adaptive AI Assistance",
    description: "Different users, especially in diverse user groups, have different preferences and capabilities and interact differently with an AI System. Adaptive and personalized AI-Assistance is one way to live up to this problem.",
    tipps: [
      "Adapt based on user preferences or metrics, such as, AI confidence or human and AI agreement",
      "Train an AI System, estimating when assistance is likely to be benefitial and when not, in regard to one particular user (see Fügnerer et al. 2021)"
    ],
    synergies: [
      "notifyOutliers"
    ],
    related: [
      "delayAssistance"
    ],
    references: [
      { id: "fuegener2021will", proposal: false },
      { id: "bansal2020does", proposal: true },
    ],
  }, {
    id: "featureImportance",
    group: "xai",
    perspective: ["ux", "ds"],
    dataType: ["tab", "img", "text"],
    overReliance: false,
    title: "Use Sensititvity Analysis (Feature Importance)",
    description: "Sensitivity Analysis can provide usefull information into the decision of the AI by showing the features that contributed the most to a particular decision (Feature Importance).\nThe amount and the presentation of the information have to be carefully considered to not overwhelm the users.\nHow to deploy it for the best results depends mostly on the data type(s) of your task and the literaracy of the users regarding AI and statistics.",
    tipps: [
      "Provide small amount and easier understandable information especially for less AI literate users",
      "Highlighting only the most important features is usually enough information",
      "Visual and color coded representations are easier to understand",
      "Point out most important features in natural language",
    ],
    tradeOffs: [
      "Team Performance might be lower than the performance of the best AI model working alone. In this case you may consider fully automating this task.",
    ],
    images: [{
      fileName: "featureImportanceTabular.png",
      description: "Recidivism Prediction Task",
      source: "liu2021understanding",
      width: "25%"
    }, {
      fileName: "featureImportanceText.png",
      description: "Deceptive Review Detection",
      source: "lai2020chicago",
      width: "40%"
    }, {
      fileName: "featureImportanceImage.png",
      description: "Activity Classification with Top-Down Neural Attention",
      source: "zhang2018top",
      width: "25%"
    }],
    technologies: [
      // TODO
    ],
    synergies: ["delayAssistance"],
    related: [
      "ida"
    ],
    references: [
      { id: "lai2020chicago", proposal: false },
      { id: "liu2021understanding", proposal: false },
      { id: "biran2017human", proposal: false },
      { id: "kiani2020impact", proposal: false },
      { id: "zhang2020effect", proposal: true },
    ]
  }, {
    id: "classGlobalExamples",
    group: "xai",
    perspective: ["ux", "ds"],
    dataType: ["img"],
    title: "Present classes with global representative examples",
    description: "Global examples are obtained from the Training Data and aim to represent prototypes for each class. Showing these representative examples helps humans comprehend the given classes.", //It also helps them to conduct the task by comparing the image to the example images.
    tipps: [
      "Provide prototype (representative) examples",
      "Provide outliers or problematic examples as well to provide a balanced understanding",
      "Only feasible for relatively low amount of classes",
      "Not feasible for images that require a great level of detail"
    ],
    tradeOffs: [
      "The number of pictures has to be appropriate to carry enough information to be generalizable, but not overload the user"
    ],
    images: [{
      fileName: "classGlobalExamples.png",
      description: "Dog classification task",
      source: "fuegener2021will"
    }],
    references: [
      { id: "fuegener2021will", proposal: false }
    ],
    related: [
      "example"
    ]
  }, {
    id: "example",
    group: "xai",
    perspective: ["ux", "ds"],
    title: "Local Example-based Explanations",
    description: "Local examples are instances from the Training Data Set that are regarded as similar to the instance at hand and that the AI would classify similarly. Local example-based explanations foster inductive decision making by the users.",
    tipps: [
      "Example-based explanations work especially well with images"
    ],
    tradeOffs: [
      "The number of pictures has to be appropriate to carry enough information, but not overload the user"
    ],
    synergies: [],
    related: [
      "classGlobalExamples",
      "exampleSpatialLayout"
    ],
    images: [{
      fileName: "example.png",
      description: "Example-based Explanations on Nutrition Prediction",
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
    title: "Local example-based explanations with spatial layouts",
    description: "Spatial layouts are able to visualize the similarities of different instances to the input instance. The closer an image is to the input image the similar they are.",
    tipps: [
      "Use Grid Layout, if the representation is easy to understand\nColumns represent classes.",
      "Use Tree Layout, if the representation is difficult to read\nRoot node is the input instance; Leaves are instances with different predicted classes than the input",
      "Escape routes algorithm to determine similarity/closesness (see Yang et al. 2020)"
    ],
    tradeOffs: [
      "The number of pictures has to be appropriate to carry enough information, but not overload the user"
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
    description: "Humans are inherently trying to reduce the cognitive effort expended. Because of that, too demanding explanations might get ignored.",
    tipps: [
      "Talk to your potential users and make early tests with them regarding their usage and understanding of XAI"
    ],
    tradeOffs: [
      "Too cognitively demanding explanations are likely to be ignored",
      "Too simple explanations might not be able to contain meaningful information"
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
    description: "Simpler models are likely to have worse solo performance. Regarding Complementarity we want to look at Team Performance. Humans might be better able to understand AI decisions, assess their quality and incorporate them into their decision.",
    tipps: [
      "Build AI systems with parsimonious error boundaries",
      "Minimize the stochasticity of system errors",
      "Reduce task dimensionality when possible"
    ],
    tradeOffs: [
      "Even when reaching CTP, the Team Performance might be lower than the performance of the best AI model working alone. In this case you may consider fully automating this task."
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
    title: "Prioritize Compatibility when updating the model",
    description: "When performing model updates, trading model accuracy in favor of compatibility increases CTP.",
    tipps: [
      "Penalize new errors when retraining models"
    ],
    images: [{
      fileName: "compatibleUpdates.png",
      description: "Depiction of (in-)compatible model updates",
      source: "bansal2019updates",
      width: "45%"
    }],
    tradeOffs: [
      "Compatible updates provide better Team Performance earlier",
      "Incompatible but high performance updates have potential to reach better Team Performance in the long term"
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
    title: "Precision over Recall",
    description: "When detecting spans in texts or sections in images, users tend to be better able to find missing detection compared to identifying wrong detections. For this reason false negatives are more acceptable than false positives.",
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
    title: "Semi-Automatition: AI for Classification only",
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