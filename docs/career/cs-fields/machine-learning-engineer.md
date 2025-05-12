---
sidebar_position: 1
---

import Profile from '@site/src/components/Profile';

# A Guide to Machine Learning Engineer

## About the Writer

<Profile
  src="/img/docs/contributors/jerome-wang.png"
  alt="Jerome Wang"
  name="Jerome Wang"
  tags={["Computer Science", "2nd Major in Business", "Batch 2026", "Co-Founder Nested Technologies"]}
  linkedinUrl="https://www.linkedin.com/in/jerome-wjr/"
/>

Hello! I am Jerome, an undergraduate student studying Computer Science (Batch 2026) with a 2nd Major in Business. I am currently working as a Co-Founder of Nested Technologies, where I help lead my team in the AI field. We are currently working on a no-code platform for containerized building of AI modules, which we hope will help lower the bar for non-tech people in building their own AI systems.

## Introduction

### What is a Machine Learning Engineer and what do we do?
ML Engineers are the brains behind AI models. Think of them as builders who use programming as a core skill—they design, develop, and deploy the models that automate repetitive tasks and unlock new insights. As an ML engineer, you're responsible not only for writing code, but for translating complex business problems into data‑driven solutions that traditional software can't address. In short, you are the repairman whom business units call when fullstack engineers can't help them. 

### Why is it important in today's industry?
- **Ubiquitous automation**: From personalized recommendations on streaming platforms to predictive maintenance in manufacturing, ML engineers power the systems that deliver smarter, faster, and more efficient outcomes.  
- **Data‑driven decision making**: Enterprises harness machine learning to analyze vast amounts of data, uncover hidden patterns, and drive strategic choices in real time.  
- **Competitive advantage**: Organizations that embed ML into their products and services often outperform peers—whether in finance (fraud detection), healthcare (diagnosis support), or logistics (route optimization).
- **Generative AI boom**: Popularized by OpenAI's ChatGPT, many companies are seeking to integrate AI/ML into their business operations. Thus, ML engineers are very much in season right now (think Software Engineers during the web boom).

### Where do you typically find them?
- **Tech giants & FAANG**: Google, Facebook, Amazon, Apple, and Microsoft employ large ML teams to research and scale cutting‑edge models.  
- **ByteDance, TikTok**: Yes you heard me right. In fact, ML Engineers forms the lifeblood of TikTok - its prized Recommendation Engine is built by them. Without this Recommendation Engine, TikTok probably wouldn't have had the success it has now (yes backend is important but how else do you get people addicted to doomscrolling?).
- **Startups & scale‑ups**: Young companies leverage ML to carve out new markets or disrupt incumbents (e.g., AI‑native fintech, healthtech, or logistics platforms).  
- **Research labs & academia**: Institutions like MIT, Stanford, A*STAR, and corporate R&D labs (DeepMind, OpenAI) push the boundaries of what's possible.  
- **Enterprise firms**: Banks, insurers, and retailers build in‑house ML capabilities for customer analytics, risk management, and supply chain optimization.

## Personal Journey

### What got you interested in this field?
I have always been fascinated by the unknown. Therefore, ML models, themselves being black boxes, became a prime candidate for my exploration. That was what got me into the AI/ML field, and I sought out internships in this area since Y1.

### How did my internships and research experiences shape my understanding?
- **Generative AI Engineer Intern at Pints**: I pre-trained, fine‑tuned large language models and DPO-ed Singapore's first private LLM. Working directly with the CTO, I learnt the importance of data quality, especially for smaller parameter-sized models. 
- **Machine Learning Engineer Intern at Nested Technologies**: I built end‑to‑end pipelines for retrieval‑augmented generation (RAG) systems, integrating document stores and evaluating latency vs. accuracy trade‑offs.  
- **Data Analyst at Maybank**: Working on financial crime compliance sharpened my skills in feature engineering and statistical anomaly detection under strict regulatory constraints.  
- **AI & Automation Intern at Bolloré Logistics**: I automated route‑planning recommendations by combining geospatial data with time‑series forecasts, which taught me the importance of data quality and robustness.

### Key lessons learned along the way
1. **Data is king**: No matter how fancy your model is, clean, well‑labeled data is the real foundation of success.
2. **Model Robustness is important**: No matter how clean you try to ensure your data is, real-world data will never be 100% clean. Focus also on ensuring your model architecture is robust against noise (think data augmentation).
3. **Iterate quickly**: Build small prototypes, evaluate metrics, solicit feedback, and refine - don't waste time hunting for the "perfect" data or architecture. 
4. **Communicate clearly**: Translating technical findings into business impact (e.g., "this model reduces churn by 12%") is just as crucial as algorithmic prowess.  
5. **Infrastructure matters**: Understanding containers, CI/CD, and cloud deployment ensures your models don't gather dust on your laptop. Often times ML Engineers focus too much on the development and training of models that they fail to think of how to deploy them. Just as important as getting that State-Of-The-Art results is your ability to bring that into production. Oftentimes, the biggest and best models fail to make it off the POC jail. This is because most of the times the "best" models are just too big to be business-feasible for everyday use. GPUs are expensive after all. And deploying models to serve 5 users is vastly different from scaling them to serve 100k+ users. Understand what are industry best practices for production model serving - one personal favourite of mine (despite having the utter worst documentation) is Nvidia's Triton Inference Framework. I find them to offer the best speeds model inference.

## Recommended Learning Paths

### How should a beginner start exploring this field?
1. **Master Python**: Focus on core libraries that most AI/ML libraries are built on: Pandas, Sklearn, Numpy.
2. **Learn the math**: Brush up on linear algebra, probability, statistics, and optimization. Learn the "how" and the "why" of model behaviour. Deep Learning models are blackboxes, which is why having a strong foundation in Math is even more important to try and debug when the model fails to learn (i.e. if the training loss is decreasing and significantly lower than that of the validation loss, how do you fix it? Or if the training and validation losses keeps spiking but does not exhibit a general decreasing trend, how do you go about debugging?)
3. **Learn PyTorch / Tensorflow**: PyTorch and Tensorflow are the mainstays of any respectable ML Engineers/
4. **Hands‑on projects**: Build simple classification or regression tasks end‑to‑end on public datasets (e.g., Iris, MNIST, Titanic).
5. **Learn to Deploy**: Once you have learnt how to build and train your models, learn how to deploy them too. Remember, a model is only as good as how it can be used. 
 

### Essential courses, online resources, and projects
- **Courses**  
  - Andrew Ng's [Machine Learning (Coursera)](https://www.coursera.org/learn/machine-learning)  
  - fast.ai's [Practical Deep Learning for Coders](https://www.fast.ai/)  
  - DeepLearning.AI's [TensorFlow Developer](https://www.coursera.org/professional-certificates/tensorflow-in-practice)  
- **Books & Tutorials**  
  - *Hands‑On Machine Learning with Scikit‑Learn, Keras & TensorFlow* by Aurélien Géron  
  - Official docs: PyTorch, TensorFlow, scikit‑learn  
- **Projects**  
  - Build a sentiment analysis model on movie reviews  
  - Create a simple recommendation engine using collaborative filtering  
  - Participate in Kaggle's "Titanic: Machine Learning from Disaster"

### Must‑know technologies or concepts
- **Frameworks**: scikit‑learn, TensorFlow, PyTorch  
- **Data wrangling**: SQL, pandas, Spark (for large‑scale data)  
- **Model deployment**: Docker, Flask/FastAPI, Kubernetes basics  
- **MLOps fundamentals**: versioning (MLflow/DVC), monitoring, A/B testing  

## Internship Preparation Tips

### What skills should students focus on?
- **Coding & algorithms**: Solid grasp of data structures, complexity analysis, and clean code principles.  
- **ML foundations**: Understand common algorithms (linear/logistic regression, decision trees, k‑means, neural networks) and evaluation metrics.  
- **Data handling**: Experience with SQL, pandas, and basic data visualization.  
- **System design basics**: High‑level design of an ML pipeline (data ingestion → training → deployment → monitoring).

### What do interviewers typically look for?
1. **Problem‑solving ability**: Can you approach a new task methodically and articulate trade‑offs? 
2. **Technical depth**: Do you understand underlying assumptions of algorithms and know when they fail? Meaning, they are trying to suss out if you are the typical script kiddy that copies model training code off the internet and calls it a day, or do you understand what you've worked on. All too often when interviewing candidates, I see them struggle to explain the technical workings of the solutions they have presented for their prior internships.
3. **Communication**: Can you explain complex ideas clearly to non‑technical stakeholders? The true mark of a technical person is not how much technical jargon they can spill. Rather, it is how they are able to explain it in a way that non-technical people can also understand. Because then, you are no longer merely regurgitating what you've seen online. You are presenting your synthesized version of the complex concept in a more understandable way.
4. **Passion projects**: Evidence of curiosity—personal GitHub repos, Kaggle competitions, research papers. 

### Interview prep tips & recommended platforms
- **LeetCode**: Practice Medium‑level problems on arrays, trees, dynamic programming.  
- **Kaggle**: Join beginner competitions—focus on feature engineering and model validation.  
- **Mock interviews**: Use platforms like Pramp or Interviewing.io for live feedback.  
- **Study system design**: Read *Designing Data‑Intensive Applications* and practice sketching ML pipelines on a whiteboard.
