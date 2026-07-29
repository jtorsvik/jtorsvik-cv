import type { Locale } from './types.ts';

export const es: Locale = {
  code: 'es',
  htmlLang: 'es',

  ui: {
    navProfile:           'Perfil',
    navSkills:            'Habilidades',
    navExperience:        'Experiencia',
    navEducation:         'Educación',
    navCertifications:    'Certificaciones',
    downloadPdf:          'Descargar PDF',
    sectionProfile:       'Perfil',
    sectionSkills:        'Competencias técnicas',
    sectionExperience:    'Experiencia profesional',
    sectionEducation:     'Educación',
    sectionCertifications:'Certificaciones técnicas',
    clientEngagements:    'Proyectos para clientes',
    gradeAverage:         'Nota media',
    langNative:           'Noruego (nativo)',
    langFluent:           'Inglés (fluido)',
    langB2:               'Español (B2)',
  },

  heroTitle:    'Científico de Datos · Ingeniero de Datos · Líder Técnico',
  heroSubtitle: 'Arquitectura de Plataformas de Datos · Gestión Ágil de Equipos · Desarrollo de Productos',

  summary: [
    'Joakim Martin Torsvik es un experimentado Científico de Datos Full-Stack Senior con 6 años de experiencia en datos y análisis en diversos sectores. Con un máster en Ciencia de Datos y un grado en Finanzas, ha trabajado para grandes organizaciones como Equinor, Bane NOR, Statens Vegvesen y Aon, resolviendo complejos desafíos analíticos y de aprendizaje automático, además de contribuir al desarrollo de grandes plataformas de datos capaces de abordar exigentes necesidades empresariales.',
    'Joakim tiene una amplia experiencia con tecnologías de vanguardia como Azure, Databricks, Apache Spark y Kafka, entre otras. Ha desarrollado pipelines ETL/ELT de extremo a extremo, flujos de Structured Streaming y modelos de aprendizaje automático, con especial enfoque en Python y SQL para el modelado y la transformación de datos. También ha construido grandes plataformas de datos en la nube para Ingeniería y Ciencia de Datos, con foco en escalabilidad, prácticas de seguridad nacionales y una entrega rápida con calidad garantizada.',
    'Los colegas describen a Joakim como conocedor y comprometido, con capacidad para comunicarse eficazmente a distintos niveles técnicos. Ha liderado grandes proyectos de IA y es conocido por su metodología de trabajo estructurada y sus entregas de alta calidad. Joakim disfruta de ver el panorama completo de los proyectos y puede contribuir en todo ámbito, desde la gestión de proyectos hasta el desarrollo directo como Ingeniero de Datos o Científico de Datos.',
  ],

  experiences: [
    // 0 – Sopra Steria
    {
      role: 'Consultor Data Scientist',
      engagements: [
        // 0 – SVV Saga
        {
          title: 'Líder Técnico – Plataforma de Datos Saga',
          bullets: [
            'Lideró el establecimiento de una plataforma de datos centralizada en Databricks (Saga) para Statens Vegvesen, responsabilizándose del diseño arquitectónico y la entrega técnica integral',
            'Implementó el Catálogo de Datos y pipelines de integración estandarizados, haciendo que los datos complejos de múltiples fuentes fueran descubribles y accesibles en toda la organización',
            'Lideró el desarrollo del pipeline CI/CD de la plataforma, habilitando pruebas y despliegues automatizados con alta estabilidad operacional',
            'Definió la arquitectura de TI general y coordinó los requisitos técnicos con expertos de dominio en diversas unidades de negocio',
            'Impulsó estándares de calidad de datos y gobernó los procesos de entrega para garantizar información fiable y de alto valor para la toma de decisiones organizacional',
          ],
        },
        // 1 – Confidential Client
        {
          title: 'Arquitecto de Soluciones',
          bullets: [
          'Diseñó la arquitectura de clúster Apache Spark on-premise para un cliente regulado del sector de defensa y seguridad, garantizando la soberanía de datos y el cumplimiento de políticas de seguridad nacional',
          'Desarrolló una plataforma de análisis segura para el procesamiento de datos clasificados sensibles, con cifrado de extremo a extremo y control de acceso basado en roles',
            'Definió estándares de gobernanza de datos y políticas de catalogación adoptadas por los equipos de ingeniería de la organización',
            'Optimizó la asignación de recursos del clúster y las estrategias de particionado para mejorar el rendimiento y reducir la latencia de consultas',
            'Implementó protocolos de seguridad y marcos de control de acceso alineados con los requisitos de cumplimiento empresarial',
          ],
        },
        // 2 – Bane NOR
        {
          title: 'Científico de Datos',
          bullets: [
            'Desarrolló pipelines de Deep Learning y Visión por Computadora para la inspección de infraestructuras ferroviarias, usando modelos de detección de objetos basados en YOLO',
            'Construyó flujos de trabajo de streaming en tiempo real (Azure Event Hubs) y procesamiento por lotes para datos operacionales y de sensores ferroviarios',
            'Diseñó la infraestructura de Azure Machine Learning y Azure Data Factory para el entrenamiento e implementación integral de modelos',
          ],
        },
        // 3 – Equinor
        {
          title: 'Científico de Datos Full-Stack',
          bullets: [
            'Desarrolló dashboards interactivos en Power BI que visualizan la salud de la infraestructura de TI y KPIs de negocio para directivos y partes interesadas operacionales',
            'Desarrolló y mantuvo pipelines de Azure Data Factory que ingestan datos operacionales de múltiples sistemas de origen heterogéneos',
            'Realizó transformación de datos compleja e ingeniería de características en Python sobre la plataforma Databricks Lakehouse',
            'Creó modelos semánticos en Power BI con cálculos DAX avanzados, habilitando análisis de autoservicio en distintas unidades de negocio',
          ],
        },
      ],
    },
    // 1 – AON
    {
      role: 'Desarrollador',
      bullets: [
        'Desarrolló y personalizó módulos de Microsoft Dynamics CRM, optimizando los flujos de trabajo de los corredores y reduciendo el tiempo de procesamiento manual',
        'Automatizó procesos internos repetitivos mediante herramientas de scripting y automatización de flujos, liberando capacidad operacional',
        'Elaboró informes analíticos ad-hoc y dashboards de apoyo a la toma de decisiones y gestión de carteras de los corredores',
      ],
    },
    // 2 – Vertikal Helse
    {
      role: 'Asistente Financiero',
      bullets: [
        'Gestionó el ciclo de cuentas por pagar para reembolsos sanitarios relacionados con seguros en un entorno regulado',
        'Procesó reclamaciones de reembolso de clientes con alta precisión, manteniendo el cumplimiento de las normativas financieras',
        'Gestionó la conciliación de facturas y documentación financiera entre organizaciones',
      ],
    },
    // 3 – POWER
    {
      role: 'Representante de Ventas a Tiempo Parcial',
      bullets: [
        'Brindó asesoramiento experto sobre productos de electrónica de consumo en Expert Drotningsvik (Bergen) y Power Colosseum (Oslo)',
        'Cumplió y superó consistentemente los objetivos de ventas en un entorno minorista de alto volumen y alta competencia',
      ],
    },
  ],

  education: [
    { subjects: ['Aprendizaje automático', 'Procesamiento de lenguaje natural', 'Visión por computadora', 'Técnicas de ciencia de datos'] },
    { subjects: ['Análisis financiero', 'Banca corporativa', 'Trading', 'Micro y macroeconomía'] },
  ],

  skillCategories: [
    { name: '☁️ Plataformas en la nube', skills: ['Azure', 'AWS'] },
    { name: '📊 Big Data y Análisis',     skills: ['Databricks', 'Apache Spark', 'HPE Data Fabric', 'Microsoft Fabric', 'Power BI', 'Grafana'] },
    { name: '🐍 Programación',            skills: ['Python', 'SQL / T-SQL / KQL', 'Terraform', 'Bash', 'PowerShell', 'GitHub Actions'] },
    { name: '🧠 Metodología y Procesos',  skills: ['SCRUM', 'Kanban', 'Gestión de productos', 'MLOps', 'DevOps', 'GenAI-Ops'] },
  ],
};
