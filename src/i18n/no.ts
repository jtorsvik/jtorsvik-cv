import type { Locale } from './types.ts';

export const no: Locale = {
  code: 'no',
  htmlLang: 'no',

  ui: {
    navProfile:           'Profil',
    navSkills:            'Ferdigheter',
    navExperience:        'Erfaring',
    navEducation:         'Utdanning',
    navCertifications:    'Sertifiseringer',
    downloadPdf:          'Last ned PDF',
    sectionProfile:       'Profil',
    sectionSkills:        'Teknisk kompetanse',
    sectionExperience:    'Yrkeserfaring',
    sectionEducation:     'Utdanning',
    sectionCertifications:'Tekniske sertifiseringer',
    clientEngagements:    'Kundeengasjementer',
    gradeAverage:         'Karaktersnitt',
    langNative:           'Norsk (morsmål)',
    langFluent:           'Engelsk (flytende)',
    langB2:               'Spansk (B2)',
  },

  heroTitle:    'Data Scientist · Data Engineer · Teknisk Leder',
  heroSubtitle: 'Dataplattform-arkitektur og utvikling · Smidig teamledelse · Produktutvikling',

  summary: [
    'Joakim Martin Torsvik er en erfaren Senior Full-Stack Data Scientist med mange års erfaring innen data og analyse fra ulike sektorer. Med mastergrad i Data Science og bachelorgrad i Finans, har han jobbet for store selskaper som Equinor, Bane NOR, Statens Vegvesen og Aon. Her har han løst komplekse analytiske og maskinlæringsproblemer, samt vært med på å bygge store dataplattformer som har kapabilitet til å løse tunge og komplekse bedriftsutfordringer.',
    'Joakim har omfattende erfaring med state-of-the-art teknologier som Azure, Databricks, Apache Spark og Kafka og mer. Han har utviklet ende-til-ende ETL/ELT-pipelines, Structured Streaming og maskinlæringsmodeller, med fokus på Python og SQL for datamodellering og transformasjon. Han har også bygget store skybaserte dataplattformer for Data Engineering og Data Science hvor fokuset har vært på skalerbarhet, nasjonale sikkerhetsrutiner og rask og kvalitetssikret utvikling.',
    'Kolleger beskriver Joakim som kunnskapsrik og engasjert, med evne til effektiv kommunikasjon på tvers av tekniske nivåer. Han har ledet store AI-prosjekter og er kjent for strukturert arbeidsmetodikk og høykvalitetsleveranser. Joakim trives med å se helheten i prosjekter og kan bidra alt innen prosjektledelse til direkte utvikling som Data Engineer eller Data Scientist.',
  ],

  experiences: [
    // 0 – Sopra Steria
    {
      role: 'Manager Konsulent innen Data Science',
      engagements: [
        // 0 – SVV Saga
        {
          title: 'Teknisk Leder – Saga Dataplattform',
          bullets: [
            'Ledet etablering av en sentralisert Databricks-dataplattform (Saga) for Statens Vegvesen, med ansvar for arkitekturdesign og end-to-end teknisk leveranse',
            'Implementerte Data Catalog og standardiserte integrasjonsløp, noe som gjorde komplekse data fra ulike kildesystemer søkbare og tilgjengelige for organisasjonen',
            'Ledet utviklingen av plattformens CI/CD-løp, noe som sikret automatiserte test- og utrullingsprosesser og høy driftsstabilitet',
            'Utformet overordnet IT-arkitektur og koordinerte tekniske krav med domeneeksperter på tvers av forretningsenheter',
            'Drev datakvalitetsstandarder og styrte leveranseprosesser for å sikre pålitelig, høyverdig innsikt for organisasjonens beslutningsprosesser',
          ],
        },
        // 1 – Confidential Client
        {
          title: 'Senior Data Plattform utvikler / Plattformsarkitekt',
          bullets: [
            'Utformet on-premise Apache Spark-klyngearkitektur for en regulert forsvars- og sikkerhetskunde, med fokus på datasuverenitet og overholdelse av nasjonale sikkerhetspolicyer',
            'Bygget en sikker analyseplattform for behandling av sensitiv klassifisert data, med end-to-end-kryptering og rollebasert tilgangskontroll',
            'Definerte datakvalitetsstandarder og katalogiseringspolicyer adoptert av organisasjonens ingeniørteam',
            'Optimaliserte ressursallokering og partisjonsstrategier i klyngen for å forbedre gjennomstrømming og redusere spørringsforsinkelse',
            'Implementerte sikkerhetsprotokoll og rammeverk for tilgangskontroll i tråd med virksomhetens krav til etterlevelse',
          ],
        },
        // 2 – Bane NOR
        {
          title: 'Data Scientist / Senior Data Scientist',
          bullets: [
            'Utviklet Deep Learning- og Computer Vision-pipelines for inspeksjon av jernbaneinfrastruktur ved bruk av YOLO-baserte objektdeteksjonsmodeller',
            'Bygget arbeidsflyter for sanntids-strømming (Azure Event Hubs) og batchbehandling av sensor- og operative jernbanedata',
            'Arkitekterte Azure Machine Learning- og Azure Data Factory-infrastruktur for end-to-end modelltrening og -utrulling',
          ],
        },
        // 3 – Equinor
        {
          title: 'Full-stack Data Scientist',
          bullets: [
            'Bygget interaktive Power BI-dashbord som visualiserer IT-infrastrukturhelse og forretningsmessige KPI-er for ledelse og operative interessenter',
            'Utviklet og vedlikeholdt Azure Data Factory-pipelines som henter operative data fra flere heterogene kildesystemer',
            'Utførte kompleks datatransformasjon og funksjonsengineering i Python på Databricks Lakehouse-plattformen',
            'Opprettet Power BI-semantiske modeller med avanserte DAX-beregninger som muliggjorde selvbetjeningsanalyse på tvers av forretningsenheter',
          ],
        },
      ],
    },
    // 1 – AON
    {
      role: 'Utvikler',
      bullets: [
        'Utviklet og tilpasset Microsoft Dynamics CRM-moduler, noe som effektiviserte meglerarbeidsflyter og reduserte manuell behandlingstid',
        'Automatiserte repetitive interne prosesser ved bruk av skript- og arbeidsflytverktøy, noe som frigjorde operasjonell kapasitet',
        'Leverte ad-hoc analytiske rapporter og dashbord som støttet meglernes beslutningsgrunnlag og porteføljeforvaltning',
      ],
    },
    // 2 – Vertikal Helse
    {
      role: 'Finansassistent',
      bullets: [
        'Håndterte leverandørgjeldssyklus for forsikringsrelaterte helsetjenestegodtgjørelser i et regulert miljø',
        'Behandlet kundegodtgjørelseskrav med høy nøyaktighet, med overholdelse av finansielle reguleringer',
        'Håndterte fakturaoppgjør og tverr-organisatorisk finansiell dokumentasjon',
      ],
    },
    // 3 – POWER
    {
      role: 'Deltidsselger',
      bullets: [
        'Ga ekspert produktrådgivning om forbrukerelektronikk hos Expert Drotningsvik (Bergen) og Power Colosseum (Oslo)',
        'Oppnådde og overgikk konsekvent salgsmål i et høyvolumsbasert konkurranseutsatt detaljhandelsmiljø',
      ],
    },
  ],

  education: [
    { subjects: ['Maskinlæring', 'Naturlig språkbehandling', 'Computer Vision', 'Data Science-teknikker'] },
    { subjects: ['Finansanalyse', 'Bedriftsbank', 'Trading', 'Mikro- og makroøkonomi'] },
  ],

  skillCategories: [
    { name: '☁️ Skyplattformer',      skills: ['Azure', 'AWS'] },
    { name: '📊 Big Data & Analyse',   skills: ['Databricks', 'Apache Spark', 'HPE Data Fabric', 'Microsoft Fabric', 'Power BI', 'Grafana'] },
    { name: '🐍 Programmering',        skills: ['Python', 'SQL / T-SQL / KQL', 'Terraform', 'Bash', 'PowerShell', 'GitHub Actions'] },
    { name: '🧠 Metodikk & Prosess',   skills: ['SCRUM', 'Kanban', 'Produktledelse', 'MLOps', 'DevOps', 'GenAI-Ops'] },
  ],
};
