import type { Locale } from './types.ts';

export const en: Locale = {
  code: 'en',
  htmlLang: 'en',

  ui: {
    navProfile:           'Profile',
    navSkills:            'Skills',
    navExperience:        'Experience',
    navEducation:         'Education',
    navCertifications:    'Certifications',
    downloadPdf:          'Download PDF',
    sectionProfile:       'Profile',
    sectionSkills:        'Technical Proficiencies',
    sectionExperience:    'Professional Experience',
    sectionEducation:     'Education',
    sectionCertifications:'Technical Certifications',
    clientEngagements:    'Client Engagements',
    gradeAverage:         'Grade average',
  },

  heroTitle:    'Data Scientist · Data Engineer · Technical Lead',
  heroSubtitle: 'Data Platform Architecture & Development · Agile Team Management · Product Development',

  summary: [
    'Joakim Martin Torsvik is an experienced Senior Full-Stack Data Scientist with 6 years of experience in data and analytics across various sectors. With a Master\'s degree in Data Science and a Bachelor\'s degree in Finance, he has worked for major organisations including Equinor, Bane NOR, Statens Vegvesen and Aon, solving complex analytical and machine learning challenges while contributing to the development of large-scale data platforms capable of addressing demanding business needs.',
    'Joakim has extensive experience with state-of-the-art technologies such as Azure, Databricks, Apache Spark and Kafka, among others. He has developed end-to-end ETL/ELT pipelines, Structured Streaming workflows and machine learning models, with a focus on Python and SQL for data modelling and transformation. He has also built large-scale cloud-based data platforms for Data Engineering and Data Science, with an emphasis on scalability, national security practices and rapid, quality-assured delivery.',
    'Colleagues describe Joakim as knowledgeable and engaged, with the ability to communicate effectively across technical levels. He has led major AI projects and is known for structured working methods and high-quality deliverables. Joakim enjoys seeing the big picture in projects and can contribute across the board – from project management to hands-on development as a Data Engineer or Data Scientist.',
  ],

  experiences: [
    // 0 – Sopra Steria
    {
      role: 'Data Scientist Consultant',
      engagements: [
        // 0 – SVV Saga
        {
          title: 'Technical Lead – Saga Data Platform',
          bullets: [
            'Led the establishment of a centralised Databricks data platform (Saga) for Statens Vegvesen, owning architecture design and end-to-end technical delivery',
            'Implemented Data Catalog and standardised integration pipelines, making complex multi-source data discoverable and accessible across the organisation',
            'Led CI/CD pipeline development for the platform, enabling automated testing and deployment and ensuring high operational stability',
            'Shaped the overall IT architecture and coordinated technical requirements with domain experts across multiple business units',
            'Drove data quality standards and governed delivery processes to ensure the platform delivers high-value, reliable insights for organisational decision-making',
          ],
        },
        // 1 – Confidential Client
        {
          title: 'Solution Architect',
          bullets: [
            'Designed on-premise Apache Spark cluster architecture for a regulated financial services client, ensuring data sovereignty and compliance with internal security policies',
            'Built a secure analytics platform for processing sensitive financial data, incorporating end-to-end encryption and role-based access control',
            'Defined data governance standards and cataloguing policies adopted across the organisation\'s engineering teams',
            'Optimised cluster resource allocation and partition strategies to improve workload throughput and reduce query latency',
            'Implemented security protocols and access control frameworks aligned with enterprise compliance requirements',
          ],
        },
        // 2 – Bane NOR
        {
          title: 'Data Scientist',
          bullets: [
            'Engineered Deep Learning and Computer Vision pipelines for railway infrastructure inspection using YOLO-based object detection models',
            'Built real-time streaming (Azure Event Hubs) and batch processing workflows for sensor and operational railway data',
            'Architected Azure Machine Learning and Azure Data Factory infrastructure for end-to-end model training and deployment',
          ],
        },
        // 3 – Equinor
        {
          title: 'Full-stack Data Scientist',
          bullets: [
            'Built interactive Power BI dashboards visualising IT infrastructure health and business KPIs for executive and operational stakeholders',
            'Developed and maintained Azure Data Factory pipelines ingesting operational data from multiple heterogeneous source systems',
            'Performed complex data transformation and feature engineering in Python on the Databricks Lakehouse platform',
            'Created Power BI semantic models with advanced DAX calculations, enabling self-service analytics across business units',
          ],
        },
      ],
    },
    // 1 – AON
    {
      role: 'Developer',
      bullets: [
        'Developed and customised Microsoft Dynamics CRM modules, streamlining broker workflows and reducing manual processing time',
        'Automated repetitive internal processes using scripting and workflow tools, freeing up operational capacity',
        'Delivered ad-hoc analytical reports and dashboards supporting broker decision-making and portfolio management',
      ],
    },
    // 2 – Vertikal Helse
    {
      role: 'Financial Assistant',
      bullets: [
        'Managed accounts payable cycle for insurance-related healthcare reimbursements in a regulated environment',
        'Processed customer reimbursement claims with high accuracy, maintaining compliance with financial regulations',
        'Handled invoice reconciliation and cross-organisational financial documentation',
      ],
    },
    // 3 – POWER
    {
      role: 'Part-time Sales Representative',
      bullets: [
        'Delivered expert product advice on consumer electronics at Expert Drotningsvik (Bergen) and Power Colosseum (Oslo)',
        'Consistently met and exceeded sales targets in a high-volume competitive retail environment',
      ],
    },
  ],

  education: [
    { subjects: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Data Science Techniques'] },
    { subjects: ['Financial Analytics', 'Corporate Banking', 'Trading', 'Micro and Macroeconomics'] },
  ],

  skillCategories: [
    { name: '☁️ Cloud Platforms',     skills: ['Azure', 'AWS'] },
    { name: '📊 Big Data & Analytics', skills: ['Databricks', 'Apache Spark', 'HPE Data Fabric', 'Microsoft Fabric', 'Power BI', 'Grafana'] },
    { name: '🐍 Programming',          skills: ['Python', 'SQL / T-SQL / KQL', 'Terraform', 'Bash', 'PowerShell', 'GitHub Actions'] },
    { name: '🧠 Workflow & Process',    skills: ['SCRUM', 'Kanban', 'Product Management', 'MLOps', 'DevOps', 'GenAI-Ops'] },
  ],
};
