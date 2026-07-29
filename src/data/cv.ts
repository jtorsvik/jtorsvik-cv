// ─── Professional Summary ─────────────────────────────────────────────────────
export const summary = `Joakim Martin Torsvik er en erfaren Senior Full-Stack Data Scientist med 6 års erfaring innen data og analyse fra ulike sektorer. Med mastergrad i Data Science og bachelorgrad i Finans, har han jobbet for store selskaper som Equinor, Bane NOR, Statens Vegvesen og Aon. Her har han løst komplekse analytiske og maskinlæringsproblemer, samt vært med på å bygge store dataplattformer som har kapabilitet til å løse tunge og komplekse bedriftsutfordringer.

Joakim har omfattende erfaring med state-of-the-art teknologier som Azure, Databricks, Apache Spark og Kafka og mer. Han har utviklet ende-til-ende ETL/ELT-pipelines, Structured Streaming og maskinlæringsmodeller, med fokus på Python og SQL for datamodellering og transformasjon. Han har også bygget store skybaserte dataplattformer for Data Engineering og Data Science hvor fokuset har vært på skalerbarhet, nasjonale sikkerhetsrutiner og rask og kvalitetssikret utvikling.

Kolleger beskriver Joakim som kunnskapsrik og engasjert, med evne til effektiv kommunikasjon på tvers av tekniske nivåer. Han har ledet store AI-prosjekter og er kjent for strukturert arbeidsmetodikk og høykvalitetsleveranser. Joakim trives med å se helheten i prosjekter og kan bidra alt innen prosjektledelse til direkte utvikling som Data Engineer eller Data Scientist.`;

// ─── Social / Contact Links ───────────────────────────────────────────────────
export type SocialIcon = 'linkedin' | 'github';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/joakim-torsvik', icon: 'linkedin' }, // TODO: confirm handle
  { label: 'GitHub',   href: 'https://github.com/jtorsvik',            icon: 'github'   },
];

// ─── Work Experience ──────────────────────────────────────────────────────────
export interface Engagement {
  title: string;
  client: string;
  industry?: string;
  logo?: string;
  period: string;
  bullets: string[];
}

export interface Experience {
  employer: string;
  logo: string;
  role: string;
  period: string;
  type: 'consulting' | 'direct';
  engagements?: Engagement[];
  bullets?: string[];
}

export const experiences: Experience[] = [
  {
    employer: 'Sopra Steria',
    logo: '/sopra_steria.jpg',
    role: 'Data Scientist Consultant',
    period: 'Aug 2022 - Nov 2023  ·  May 2025 - Present',
    type: 'consulting',
    engagements: [
      {
        title: 'Technical Lead - Saga Data Platform',
        client: 'Statens Vegvesen',
        logo: '/Statens_vegvesen_logo.png',
        industry: 'Public Roads Administration',
        period: 'Mar 2026 - Aug 2026',
        bullets: [
          'Led the establishment of a centralised Databricks data platform (Saga) for Statens Vegvesen, owning architecture design and end-to-end technical delivery',
          'Implemented Data Catalog and standardised integration pipelines, making complex multi-source data discoverable and accessible across the organisation',
          'Led CI/CD pipeline development for the platform, enabling automated testing and deployment and ensuring high operational stability',
          'Shaped the overall IT architecture and coordinated technical requirements with domain experts across multiple business units',
          'Drove data quality standards and governed delivery processes to ensure the platform delivers high-value, reliable insights for organisational decision-making',
        ],
      },
      {
        title: 'Solution Architect',
        client: 'Confidential Client',
        industry: 'Defence & Security',
        period: 'Aug 2025 - Mar 2026',
        bullets: [
          'Designed on-premise Apache Spark cluster architecture for a regulated defence & security client, ensuring data sovereignty and compliance with national security policies',
          'Built a secure analytics platform for processing sensitive classified data, incorporating end-to-end encryption and role-based access control',
          'Defined data governance standards and cataloguing policies adopted across the organisation engineering teams',
          'Optimised cluster resource allocation and partition strategies to improve workload throughput and reduce query latency',
          'Implemented security protocols and access control frameworks aligned with enterprise compliance requirements',
        ],
      },
      {
        title: 'Data Scientist',
        client: 'Bane NOR',
        logo: '/bane_nor.jpg',
        period: 'Nov 2023 - May 2025',
        bullets: [
          'Engineered Deep Learning and Computer Vision pipelines for railway infrastructure inspection using YOLO-based object detection models',
          'Built real-time streaming (Azure Event Hubs) and batch processing workflows for sensor and operational railway data',
          'Architected Azure Machine Learning and Azure Data Factory infrastructure for end-to-end model training and deployment',
        ],
      },
      {
        title: 'Full-stack Data Scientist',
        client: 'Equinor',
        logo: '/equinor.jpg',
        period: 'Aug 2022 - Nov 2023',
        bullets: [
          'Built interactive Power BI dashboards visualising IT infrastructure health and business KPIs for executive and operational stakeholders',
          'Developed and maintained Azure Data Factory pipelines ingesting operational data from multiple heterogeneous source systems',
          'Performed complex data transformation and feature engineering in Python on the Databricks Lakehouse platform',
          'Created Power BI semantic models with advanced DAX calculations, enabling self-service analytics across business units',
        ],
      },
    ],
  },
  {
    employer: 'AON Norway AS',
    logo: '/aon.jpg',
    role: 'Developer',
    period: 'Sep 2018 - Jul 2022',
    type: 'direct',
    bullets: [
      'Developed and customised Microsoft Dynamics CRM modules, streamlining broker workflows and reducing manual processing time',
      'Automated repetitive internal processes using scripting and workflow tools, freeing up operational capacity',
      'Delivered ad-hoc analytical reports and dashboards supporting broker decision-making and portfolio management',
    ],
  },
  {
    employer: 'IF / Vertikal Helse',
    logo: '/vertikal_helse.jpg',
    role: 'Financial Assistant',
    period: 'Jul 2017 - Sep 2018',
    type: 'direct',
    bullets: [
      'Managed accounts payable cycle for insurance-related healthcare reimbursements in a regulated environment',
      'Processed customer reimbursement claims with high accuracy, maintaining compliance with financial regulations',
      'Handled invoice reconciliation and cross-organisational financial documentation',
    ],
  },
  {
    employer: 'POWER AS',
    logo: '/power.jpg',
    role: 'Part-time Sales Representative',
    period: 'Nov 2014 - Sep 2017',
    type: 'direct',
    bullets: [
      'Delivered expert product advice on consumer electronics at Expert Drotningsvik (Bergen) and Power Colosseum (Oslo)',
      'Consistently met and exceeded sales targets in a high-volume competitive retail environment',
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  subjects: string[];
}

export const education: Education[] = [
  {
    degree: 'MSc in Data Science',
    institution: 'University of Sussex',
    period: '2021 - 2022',
    grade: 'B (65%)',
    subjects: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Data Science Techniques'],
  },
  {
    degree: 'Bachelor in Finance',
    institution: 'BI Norwegian Business School',
    period: '2015 - 2018',
    grade: 'C',
    subjects: ['Financial Analytics', 'Corporate Banking', 'Trading', 'Micro and Macroeconomics'],
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export type CertProvider = 'databricks' | 'azure' | 'terraform' | 'dasca' | 'itil';

export interface Cert {
  name: string;
  date: string;
  provider: CertProvider;
}

export const certifications: Cert[] = [
  { name: 'Terraform Practitioner',                             date: 'Aug 2025', provider: 'terraform'  },
  { name: 'DASCA: Senior Data Scientist',                       date: 'Nov 2024', provider: 'dasca'      },
  { name: 'Databricks: Machine Learning Engineer Professional', date: 'Sep 2025', provider: 'databricks' },
  { name: 'Databricks: Generative AI Engineer',                 date: 'Mar 2025', provider: 'databricks' },
  { name: 'Databricks: Machine Learning Engineer Associate',    date: 'Mar 2023', provider: 'databricks' },
  { name: 'Databricks: Data Engineering Associate',             date: 'May 2023', provider: 'databricks' },
  { name: 'AI-102: Azure AI Engineer',                          date: 'Feb 2023', provider: 'azure'      },
  { name: 'AI-900: Azure AI Fundamentals',                      date: 'Jan 2023', provider: 'azure'      },
  { name: 'DP-100: Data Science on Azure',                      date: 'Sep 2022', provider: 'azure'      },
  { name: 'DP-203: Azure Data Engineer',                        date: 'Jun 2023', provider: 'azure'      },
  { name: 'PL-300: Power BI Analyst',                           date: 'Dec 2022', provider: 'azure'      },
  { name: 'AZ-104: Azure Administrator',                        date: 'Feb 2023', provider: 'azure'      },
  { name: 'DP-900: Azure Data Fundamentals',                    date: 'Sep 2022', provider: 'azure'      },
  { name: 'ITIL 4 Foundation',                                  date: 'Jan 2023', provider: 'itil'       },
];

export const providerMeta: Record<CertProvider, { bg: string; border: string; text: string; label: string }> = {
  databricks: { bg: '#fff5f5', border: '#FF3621', text: '#b91c1c', label: 'Databricks'      },
  azure:      { bg: '#eff7ff', border: '#0078D4', text: '#005a9e', label: 'Microsoft Azure' },
  terraform:  { bg: '#f5f3ff', border: '#7B42BC', text: '#5b21b6', label: 'HashiCorp'       },
  dasca:      { bg: '#fffbeb', border: '#d97706', text: '#92400e', label: 'DASCA'            },
  itil:       { bg: '#f0fdf4', border: '#059669', text: '#065f46', label: 'AXELOS'           },
};

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  { name: '☁️ Cloud Platforms',     skills: ['Azure', 'AWS'] },
  { name: '📊 Big Data & Analytics', skills: ['Databricks', 'Apache Spark', 'HPE Data Fabric', 'Microsoft Fabric', 'Power BI', 'Grafana'] },
  { name: '🐍 Programming',          skills: ['Python', 'SQL / T-SQL / KQL', 'Terraform', 'Bash', 'PowerShell', 'GitHub Actions'] },
  { name: '🧠 Workflow & Process',    skills: ['SCRUM', 'Kanban', 'Product Management', 'MLOps', 'DevOps', 'GenAI-Ops'] },
];
