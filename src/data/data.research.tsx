export const research = [
  {
    title: "Zero-Shot Emotion Detection from Text",
    status: "Ongoing",
    organization: "LNMIIT",
    mentor: "Dr Lal Upendra Pratap Singh",
    driveLink: "",
    problemStatement:
      "Most emotion detection systems require large amounts of labeled training data for every emotion category. Creating such datasets is expensive, time-consuming, and often fails to generalize across domains and languages.",

    whyItMatters:
      "Zero-shot emotion detection enables models to recognize emotions without task-specific training data. This makes emotion-aware AI more scalable for applications such as mental health analysis, customer feedback understanding, social media monitoring, and conversational agents.",

    approach:
      "(1) Collect and preprocess textual datasets from multiple domains. (2) Explore transformer-based large language models and zero-shot classification techniques. (3) Evaluate the ability of pretrained models to identify emotions such as joy, sadness, anger, fear, surprise, and love without additional fine-tuning. (4) Compare performance across different prompting and inference strategies.",

    tools: [
      "Python",
      "Transformers",
      "Hugging Face",
      "PyTorch",
      "Large Language Models",
      "NLP",
    ],

    progress:
      "Currently exploring zero-shot classification pipelines, prompt engineering techniques, and benchmark datasets to evaluate emotion recognition performance across multiple emotion categories.",

    expectedOutcome:
      "A robust emotion detection framework capable of accurately identifying emotions from unseen text data without requiring task-specific training.",

    log: [
      {
        week: "Week 1-2",
        update:
          "Literature review on emotion detection, zero-shot learning, and transformer-based language models.",
        learnings:
          "Understanding zero-shot classification, NLI-based approaches, and emotion taxonomy.",
      },
      {
        week: "Week 3-4",
        update:
          "Dataset collection, preprocessing, and implementation of baseline zero-shot emotion classification models.",
        description:
          "Experimented with pretrained transformer models and different candidate label formulations for emotion prediction.",
        learnings:
          "Prompt engineering, evaluation metrics, and practical challenges in zero-shot emotion detection.",
      },
    ],
  },
] as const;