export default [
  {
    title: "Why and Why Not Explanations Improve the Intelligibility of Context-Aware Intelligent Systems",
    year: 2009,
    authors: "Brian Y. Lim, Anind K. Dey, Daniel Avrahami",
    aiModel: "Decision trees/random forests",
    aiAssistanceElement: [
      "Prediction (binary prediction)",
      "Rule-based explanations (tree-based explanation)",
      "Counterfactual explanations (counterfactual examples)"
    ],
    actualTask: [
      "Activity recognition"
    ],
    id: "lim2009and",
    dataType: ["tab"],
    requiredExpertise: "high",
    risk: "low",
    subjective: false,
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Manipulating and Measuring Model Interpretability",
    year: 2021,
    authors: "Forough Poursabzi-Sangdeh, Daniel G. Goldstein, Jake M. Hofman, Jennifer Wortman Vaughan, Hanna Wallach",
    aiModel: "Linear regression",
    aiAssistanceElement: [
      "Prediction (continuous prediction or regression)",
      "Presentation of simple models (linear regression)",
      "Information about training data (input features or information the model considers)",
      "Interventions or workflows affecting cognitive process (user makes prediction before model, training phase)"
    ],
    actualTask: [
      "Property price prediction"
    ],
    id: "poursabzi2018manipulating",
    dataType: ["tab"],
    requiredExpertise: "high",
    risk: "high",
    subjective: false,
    taskType: ["reg"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Does the Whole Exceed its Parts? The Effect of AI Explanations on Complementary Team Performance",
    year: 2021,
    authors: "Gagan Bansal, Tongshuang Wu, Joyce Zhu, Raymond Fok, Besmira Nushi, Ece Kamar, Marco Tulio Ribeiro, Daniel S. Weld",
    aiModel: "RoBERTa; Generalized additive models (GAMs)",
    aiAssistanceElement: [
      "Prediction (binary prediction, multi-class prediction, prediction with alternates)",
      "Model uncertainty (classification confidence (or probability))",
      "Local feature importance (perturbation-based (LIME))",
      "Natural language explanations (expert-generated rationales)",
      "Interventions or workflows affecting cognitive process (outcome feedback to user)"
    ],
    actualTask: [
      "Lsat question answering",
      "Review sentiment analysis"
    ],
    id: "bansal2020does",
    dataType: ["text"],
    requiredExpertise: null,
    risk: "low",
    subjective: null,
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Effect of Confidence and Explanation on Accuracy and Trust Calibration in AI-Assisted Decision Making",
    year: 2020,
    authors: "Yunfeng Zhang, Q. Vera Liao, Rachel K. E. Bellamy",
    aiModel: "Decision trees/random forests",
    aiAssistanceElement: [
      "Prediction (binary prediction)",
      "Model uncertainty (classification confidence (or probability))",
      "Local feature importance (perturbation-based SHAP)",
      "Information about training data (input features or information the model considers)"
    ],
    actualTask: [
      "Income prediction"
    ],
    id: "zhang2020effect",
    dataType: ["tab"],
    requiredExpertise: "low",
    risk: "low",
    subjective: false,
    taskType: ["reg"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Human-Centric Justification of Machine Learning Predictions",
    year: 2017,
    authors: "Or Biran and Kathleen McKeown",
    aiModel: "Logistic regression",
    aiAssistanceElement: [
      "Prediction (binary prediction)",
      "Natural language explanations (model-generated rationales)"
    ],
    actualTask: [
      "Stock price prediction"
    ],
    id: "biran2017human",
    dataType: ["tab"],
    requiredExpertise: "high",
    risk: "high",
    subjective: false,
    taskType: ["reg"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Understanding the effect of out-of-distribution examples and interactive explanations on human-ai decision making",
    year: 2021,
    authors: "Han Liu, Vivian Lai, Chenhao Tan",
    aiModel: "Support-vector machines (SVMs)",
    aiAssistanceElement: [
      "Prediction (binary prediction, multi-class prediction)",
      "Levels of user agency (interactive explanations)"
    ],
    actualTask: [
      "Recidivism prediction",
      "Profession prediction",
      "Deception detection"
    ],
    id: "liu2021understanding",
    dataType: ["text", "tab"],
    requiredExpertise: "mixed",
    risk: "mixed",
    subjective: "mixed",
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "The Principles and Limits of Algorithm-in-the-loop Decision Making",
    year: 2019,
    authors: "Ben Green, Yiling Chen",
    aiModel: "Decision trees/random forests",
    aiAssistanceElement: [
      "Prediction (continuous prediction or regression)"
    ],
    actualTask: [
      "Recidivism prediction",
      "Loan approval"
    ],
    id: "green2019principles",
    dataType: ["tab"],
    requiredExpertise: "high",
    risk: "high",
    subjective: false,
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Proxy Tasks and Subjective Measures Can Be Misleading in Evaluating Explainable AI Systems",
    year: 2020,
    authors: "Zana Buçinca, Phoebe Lin, Krzysztof Z. Gajos, Elena L. Glassman",
    aiModel: "Wizard of Oz",
    aiAssistanceElement: [
      "Example-based methods (Nearest neighbor or similar training instances)"
    ],
    actualTask: [
      "Nutrition prediction"
    ],
    id: "buccinca2020proxy",
    dataType: ["img"],
    requiredExpertise: "low",
    risk: "low",
    subjective: false,
    taskType: ["reg"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Beyond Accuracy: The Role of Mental Models in Human-AI Team Performance",
    year: 2019,
    authors: "Gagan Bansal, Besmira Nushi, Ece Kamar, Walter S. Lasecki, Daniel S. Weld, Eric Horvitz",
    aiModel: "",
    aiAssistanceElement: [
      "No prediction shown (no prediction shown)"
    ],
    actualTask: [
      "Defective object pipeline"
    ],
    id: "bansal2019beyond",
    dataType: ["img"],
    requiredExpertise: "high",
    risk: "high",
    subjective: false,
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Anchoring Bias Affects Mental Model Formation and User Reliance in Explainable AI Systems",
    year: 2021,
    authors: "Mahsan Nourani, Chiradeep Roy, Jeremy E Block, Donald R Honeycutt, Tahrima Rahman, Eric Ragan, Vibhav Gogate",
    aiModel: "Other deep learning models",
    aiAssistanceElement: [
      "Prediction (binary prediction)",
      "Local feature importance (video features)"
    ],
    actualTask: [
      "Activity recognition"
    ],
    id: "nourani2021anchoring",
    dataType: ["tab"],
    requiredExpertise: "high",
    risk: "low",
    subjective: false,
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Assessing the Impact of Automated Suggestions on Decision Maautomated heusiking: Domain Experts Mediate Model Errors but Take Less Initiative",
    year: 2021,
    authors: "Ariel Levy, Monica Agrawal, Arvind Satyanarayan, David Sontag",
    aiModel: "",
    aiAssistanceElement: [
      "Prediction (multi-class prediction, multiple predictions or multi-step decision)",
      "Model uncertainty (flag low confidence)",
      "Interventions or workflows affecting cognitive process (varied model quality)",
      "Levels of user agency (level of machine agency)"
    ],
    actualTask: [
      "Clinical notes annotation/medical coding"
    ],
    id: "levy2021assessing",
    dataType: ["text"],
    requiredExpertise: "high",
    risk: "high",
    subjective: false,
    taskType: ["det", "class"],
    noOfLabels: "high",
    aiLiteracy: "low",
    domainLiteracy: "high"
  },
  {
    title: "Impact of a deep learning assistant on the histopathologic classification of liver cancer",
    year: 2020,
    authors: "Amirhossein Kiani, Bora Uyumazturk, Pranav Rajpurkar, Alex Wang, Rebecca Gao, Erik Jones, Yifan Yu, Curtis P. Langlotz, Robyn L. Ball, Thomas J. Montine, Brock A. Martin, Gerald J. Berry, Michael G. Ozawa, Florette K. Hazard, Ryanne A. Brown, Simon B. Chen, Mona Wood, Libby S. Allard, Lourdes Ylagan, Andrew Y. Ng & Jeanne Shen",
    aiModel: "Other deep learning models",
    aiAssistanceElement: [
      "Prediction (continuous prediction or regression, multiple predictions or multi-step decision)",
      "Model uncertainty (classification confidence (or probability))",
      "Local feature importance (gradient-based)",
      "Levels of user agency (user direction on input data)"
    ],
    actualTask: [
      "Cancer image classification"
    ],
    id: "kiani2020impact",
    dataType: ["img"],
    requiredExpertise: "high",
    risk: "high",
    subjective: false,
    taskType: ["det", "class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Human evaluation of spoken vs. visual explanations for open-domain qa",
    year: 2020,
    authors: "Ana Valeria Gonzalez, Gagan Bansal, Angela Fan, Robin Jia, Yashar Mehdad, and Srinivasan Iyer",
    aiModel: "Other deep learning models",
    aiAssistanceElement: [
      "Prediction (multi-class prediction)"
    ],
    actualTask: [
      "Question answering"
    ],
    id: "gonzalez2020human",
    dataType: ["text"],
    requiredExpertise: "low",
    risk: "low",
    subjective: false,
    taskType: ["nlp", "class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "What can AI do for me: Evaluating Machine Learning Interpretations in Cooperative Play",
    year: 2019,
    authors: "Shi Feng, Jordan Boyd-Graber",
    aiModel: "Generalized additive models (GAMs)",
    aiAssistanceElement: [
      "Prediction (multi-class prediction, prediction with alternates)",
      "Model uncertainty (classification confidence (or probability))",
      "Global example-based explanations (prototypes)",
      "Levels of user agency (allowing user feedback or personalization for model)"
    ],
    actualTask: [
      "Quizbowl"
    ],
    id: "feng2018can",
    dataType: ["text"],
    requiredExpertise: "low",
    risk: "low",
    subjective: false,
    taskType: ["nlp", "class"],
    noOfLabels: "high",
    aiLiteracy: "low",
    domainLiteracy: "mixed"
  },
  {
    title: "\"Why is 'Chicago' deceptive?\" Towards Building Model-Driven Tutorials for Humans",
    year: 2020,
    authors: "Vivian Lai, Han Liu, Chenhao Tan",
    aiModel: "BERT; Support-vector machines (SVMs)",
    aiAssistanceElement: [
      "Prediction (binary prediction)",
      "Local feature importance (attention)",
      "Model performance (accuracy)",
      "Global example-based explanations (model tutorial)",
      "Interventions or workflows affecting cognitive process (training phase)"
    ],
    actualTask: [
      "Deception detection"
    ],
    id: "lai2020chicago",
    dataType: ["text"],
    requiredExpertise: null,
    risk: "low",
    subjective: null,
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "How Do Visual Explanations Foster End Users' Appropriate Trust in Machine Learning",
    year: 2020,
    authors: "Fumeng Yang, Zhuanyi Huang, Jean Scholtz, Dustin L. Arendt",
    aiModel: "Support-vector machines (SVMs)",
    aiAssistanceElement: [
      "Prediction (multi-class prediction)",
      "Model performance (accuracy)"
    ],
    actualTask: [
      "Plant classification"
    ],
    id: "yang2020visual",
    dataType: ["img"],
    requiredExpertise: "low",
    risk: "low",
    subjective: false,
    taskType: ["class"],
    noOfLabels: "high",
    aiLiteracy: "low",
    domainLiteracy: "mixed"
  },
  {
    title: "Updates in Human-AI Teams: Understanding and Addressing the Performance/Compatibility Tradeoff",
    year: 2019,
    authors: "Gagan Bansal, Besmira Nushi, Ece Kamar, Walter S. Lasecki, Daniel S. Weld, Eric Horvitz",
    aiModel: "",
    aiAssistanceElement: [
      "Prediction (binary prediction)",
      "No prediction shown (no prediction shown)"
    ],
    actualTask: [
      "Defective object pipeline"
    ],
    id: "bansal2019updates",
    dataType: ["img"],
    requiredExpertise: "high",
    risk: "high",
    subjective: false,
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Human-computer collaboration for skin cancer recognition",
    year: 2020,
    authors: "Philipp Tschandl, Christoph Rinner, Zoe Apalla, Giuseppe Argenziano, Noel Codella, Allan Halpern, Monika Janda, Aimilios Lallas, Caterina Longo, Josep Malvehy, John Paoli, Susana Puig, Cliff Rosendahl, H. Peter Soyer, Iris Zalaudek, Harald Kittler",
    aiModel: "Convolutional Neural Networks (CNN)",
    aiAssistanceElement: [
      "Prediction (multiclass prediction)",
      "Prediction (binary prediction)",
      "Content-Based Image Retrieval (CBIR)"
    ],
    actualTask: [
      "Skin cancer recognition"
    ],
    id: "tschandl2020human",
    dataType: ["img"],
    requiredExpertise: "high",
    risk: "high",
    subjective: false,
    taskType: ["det", "class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Will Humans-in-The-Loop Become Borgs? Merits and Pitfalls of Working with AI",
    year: 2021,
    authors: "Andreas Fügener, Jörn Grahl, Alok Gupta, Wolfgang Ketter",
    aiModel: "",
    aiAssistanceElement: [
      "Prediction (multi-class prediction)",
      "Model uncertainty (classification confidence (or probability))",
      "Global example-based explanations (prototypes)"
    ],
    actualTask: [
      "Image Classification"
    ],
    id: "fuegener2021will",
    dataType: ["img"],
    requiredExpertise: "low",
    risk: "low",
    subjective: false,
    taskType: ["class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "Does Explainable Artificial Intelligence Improve Human Decision-Making?",
    year: 2021,
    authors: "Yasmeen Alufaisan, Laura R. Marusich, Jonathan Z. Bakdash, Yan Zhou, Murat Kantarcioglu",
    aiModel: "",
    aiAssistanceElement: [
      "Prediction (binary prediction)",
      "Rule-based explanations (anchors)"
    ],
    actualTask: [
      "Income prediction",
      "Recidivism prediction"
    ],
    id: "alufaisan2021does",
    dataType: ["tab"],
    requiredExpertise: "mixed",
    risk: "mixed",
    subjective: "mixed",
    taskType: ["reg", "class"],
    noOfLabels: "low",
    aiLiteracy: "low",
    domainLiteracy: "low"
  },
  {
    title: "On the Effect of Information Asymmetry in Human-AI Teams",
    year: 2022,
    authors: "Patrick Hemmer, Max Schemmer, Niklas Kühl, Michael Vössing, Gerhard Satzger",
    aiModel: "",
    aiAssistanceElement: [],
    actualTask: [],
    id: "hemmer2022effect",
    dataType: ["tabular", "text"], //
    requiredExpertise: "high",
    risk: "high", //
    subjective: "false",
    taskType: ["reg"], //
    noOfLabels: undefined,
    aiLiteracy: "mixed",
    domainLiteracy: "low"
  },
  {
    title: "Intelligent Decision Assistance Versus Automated Decision-Making: Enhancing Knowledge Work Through Explainable Artificial Intelligence",
    year: 2023,
    authors: "Max Schemmer, Niklas Kühl, Gerhard Satzger",
    aiModel: "",
    aiAssistanceElement: [],
    actualTask: [],
    id: "schemmer2023intelligent",
    dataType: ["text", "tabular", "image"],
    requiredExpertise: undefined,
    risk: undefined,
    subjective: undefined,
    taskType: ["reg", "class"],
    noOfLabels: undefined,
    aiLiteracy: undefined,
    domainLiteracy: undefined
  }]