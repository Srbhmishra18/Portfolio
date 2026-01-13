import { Project, Skill, Translation, ExperienceItem, EducationItem, CertificationItem } from './types';

export const TRANSLATIONS: Record<'en' | 'de', Translation> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      role: 'Saurabh Mishra',
      description: 'Data Analyst | Power BI Wizard | Python Enthusiast',
      quote: "Just like chess♟️, every data challenge is a new game Strategy, patience, and sharp moves win!🏆",
      cta: 'Download CV',
      resume: 'Download CV',
    },
    about: {
      title: 'About Me',
      content: "I sit right at the intersection of technical engineering and business strategy. With over <b>4 years</b> of experience ranging from SAP development to modern Data Analytics, I’ve spent my career building automation frameworks that save time and dashboards that save headaches.<br><br> But I’m not just about the numbers. I treat data analysis a lot like my favourite hobbies: Chess and Sudoku. It’s all about finding patterns, thinking three steps ahead, and solving the puzzle. When I’m not debugging code or analyzing KPIs, you’ll likely find me deep into a good book or curating the perfect playlist to keep the creative momentum going.",
      stats: {
        experience: 'Years Experience',
        clients: 'Global Locations',
        projects: 'Projects Delivered',
      },
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'My professional journey in Data Analysis and Software Engineering.',
    },
    education: {
      title: 'Education',
      subtitle: 'Academic background and certifications.',
    },
    certifications: {
      title: 'Certifications',
      subtitle: 'Professional credentials and courses.',
    },
    skills: {
      title: 'Technical Arsenal',
      subtitle: 'The tools and technologies I use to transform data into insights.',
    },
    projects: {
      title: 'Key Projects',
      subtitle: 'Highlights of my work driving automation and business intelligence.',
      viewCode: 'View',
      liveDemo: 'Details',
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Open for opportunities in Data Analysis and Engineering. Based in Völklingen, Germany.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message Sent!',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      education: 'Ausbildung',
      certifications: 'Zertifizierungen',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      greeting: "Hallo, ich bin",
      role: 'Saurabh Mishra',
      description: 'Datenanalyst | Power BI Experte | Python Enthusiast',
      quote: "Genau wie beim Schach♟️ ist jede Datenherausforderung ein neues Spiel – Strategie, Geduld und kluge Züge führen zum Sieg!🏆",
      cta: 'Lebenslauf',
      resume: 'Lebenslauf',
    },
    about: {
      title: 'Über Mich',
      content: "Ich bewege mich genau an der Schnittstelle zwischen technischem Engineering und Geschäftsstrategie. Mit über <b>4 Jahren</b> Erfahrung, von der SAP-Entwicklung bis hin zu moderner Datenanalyse, habe ich meine Karriere damit verbracht, Automatisierungs-Frameworks zu entwickeln, die Zeit sparen, und Dashboards, die Kopfschmerzen ersparen.<br><br>Aber bei mir dreht sich nicht alles nur um Zahlen. Ich betrachte Datenanalyse ähnlich wie meine Lieblingshobbys: Schach und Sudoku. Es geht darum, Muster zu erkennen, drei Schritte vorauszudenken und das Rätsel zu lösen. Wenn ich nicht gerade Code debugge oder KPIs analysiere, finden Sie mich wahrscheinlich vertieft in ein gutes Buch oder beim Zusammenstellen der perfekten Playlist, um den kreativen Schwung beizubehalten.",
      stats: {
        experience: 'Jahre Erfahrung',
        clients: 'Standorte',
        projects: 'Projekte',
      },
    },
    experience: {
      title: 'Berufserfahrung',
      subtitle: 'Mein beruflicher Werdegang in Datenanalyse und Softwareentwicklung.',
    },
    education: {
      title: 'Ausbildung',
      subtitle: 'Akademischer Hintergrund und Zertifizierungen.',
    },
    certifications: {
      title: 'Zertifizierungen',
      subtitle: 'Berufliche Qualifikationen und Kurse.',
    },
    skills: {
      title: 'Technisches Arsenal',
      subtitle: 'Die Werkzeuge und Technologien, die ich nutze, um Daten in Erkenntnisse zu verwandeln.',
    },
    projects: {
      title: 'Projekte',
      subtitle: 'Höhepunkte meiner Arbeit in Automatisierung und Business Intelligence.',
      viewCode: 'Ansicht',
      liveDemo: 'Details',
    },
    contact: {
      title: "Kontakt",
      subtitle: 'Offen für Möglichkeiten in Datenanalyse und Engineering. Ansässig in Völklingen, Deutschland.',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'Deine E-Mail',
      messagePlaceholder: 'Deine Nachricht',
      send: 'Nachricht Senden',
      sending: 'Senden...',
      sent: 'Gesendet!',
    },
  },
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Working Student Data Analyst',
    company: 'Husqvarna Group',
    location: 'Ulm, Germany',
    period: '04/2024 - Present',
    description: {
      en: [
        'Automated ETL processes for data extraction and cleaning using Power Query, cutting processing time by 40%.',
        'Developed a Business Intelligence Power BI dashboard delivering KPI insights to senior stakeholders.',
        'Engineered a scalable automation framework integrating SharePoint and automated email triggers (30% efficiency boost).',
        'Created Excel dashboards with PivotTables and VBA macros to automate reporting.',
        'Collaborated with supply chain teams to refine assumptions and improve forecasting.'
      ],
      de: [
        'Automatisierte ETL-Prozesse zur Datenextraktion und -bereinigung mit Power Query (40% Zeitersparnis).',
        'Entwicklung eines Power BI-Dashboards zur Bereitstellung von KPI-Einblicke für Senior Stakeholder.',
        'Entwicklung eines skalierbaren Automatisierungs-Frameworks mit SharePoint und E-Mail-Triggern (30% Effizienzsteigerung).',
        'Erstellung von Excel-Dashboards mit PivotTables und VBA-Makros zur Automatisierung des Berichtswesens.',
        'Zusammenarbeit mit Supply-Chain-Teams zur Verbesserung der Prognosegenauigkeit.'
      ]
    },
    recommendationLink: 'https://drive.google.com/file/d/1pVBxSZwPeV5NCCoZtJiOd-2M1HVezeAX/view?usp=sharing'
  },
  {
    id: '2',
    role: 'Software Engineer (SAP Developer)',
    company: 'Robert Bosch Engineering and Business Solutions',
    location: 'Bengaluru, India',
    period: '07/2018 - 09/2021',
    description: {
      en: [
        'Technical Consultant specializing in SAP CRM and ABAP programming.',
        'Spearheaded a critical SAP development project for 125 global locations and 440 subsidiaries.',
        'Redesigned SAP CRM UI, reducing decision-making time by 15% and increasing user satisfaction by 10%.',
        'Developed over 20 SAP Reports, Interfaces, Conversions, Enhancements, Forms, and Workflows.',
        'Collaborated with teams to integrate a new HANA database, achieving a 20% efficiency gain.'
      ],
      de: [
        'Technischer Berater mit Spezialisierung auf SAP CRM und ABAP-Programmierung.',
        'Leitung eines kritischen SAP-Entwicklungsprojekts für 125 weltweite Standorte und 440 Tochtergesellschaften.',
        'Neugestaltung der SAP CRM-Benutzeroberfläche (15% schnellere Entscheidungsfindung, 10% höhere Zufriedenheit).',
        'Entwicklung von über 20 SAP-Berichten, Schnittstellen und Workflows.',
        'Integration einer neuen HANA-Datenbank in Zusammenarbeit mit 5+ Teams (20% Effizienzsteigerung).'
      ]
    }
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    degree: 'Master of Science in Data Science',
    school: 'Universität Trier',
    location: 'Trier, Germany',
    period: '10/2021 - 07/2025',
    description: {
      en: 'Concentrated on Machine Learning, Statistical Methods, and NLP. Strong skills in Mathematics, Database Management, and SQL. Research case study: Python vs. Julia.',
      de: 'Schwerpunkte: Maschinelles Lernen, Statistische Methoden und NLP. Starke Kenntnisse in Mathematik, Datenbankmanagement und SQL. Forschungsfallstudie: Python vs. Julia.'
    }
  },
  {
    id: '2',
    degree: 'Bachelor of Technology in Computer Science',
    school: 'G.L. Bajaj Institute of Technology',
    location: 'Greater Noida, India',
    period: '08/2014 - 06/2018',
    description: {
      en: 'Developed a strong foundation in algorithms, data structures, and software development. Created an Android application as a final year project.',
      de: 'Fundierte Ausbildung in Algorithmen, Datenstrukturen und Softwareentwicklung. Entwicklung einer Android-Anwendung als Abschlussprojekt.'
    }
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
    {
    id: '1',
    title: 'Power BI Data Analyst Associate (PL-300)',
    issuer: 'Microsoft',
    date: 'Dec 30, 2025',
    tags: ['Power BI', 'DAX', 'Power query', 'Business analysis'],
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/SaurabhMishra-8033/FA107C259FEB1EF5?sharingId',
  },
  {
    id: '2',
    title: 'Python 3 Programming Specialization',
    issuer: 'University of Michigan (Coursera)',
    date: 'Sep 3, 2020',
    tags: ['Python', 'APIs', 'Data Collection'],
    link: 'https://coursera.org/verify/specialization/Z65ZT5JAZXWA',
  },
  {
    id: '3',
    title: 'RBEI - NIPUN: Machine Learning Certified',
    issuer: 'Bosch (Simplilearn)',
    date: 'May 18, 2021',
    tags: ['Machine Learning', 'Predictive Modeling', 'Algorithms'],
    link: 'https://success.simplilearn.com/07dd1cc8-3d5a-49fe-a75d-6b34fb75569c',
  },
  {
    id: '4',
    title: 'Power BI Virtual Case Experience',
    issuer: 'PwC (Forage)',
    date: 'July 16, 2023',
    tags: ['Power BI', 'Data Viz', 'Business Intelligence'],
    link: 'https://drive.google.com/file/d/1cR7MIV0ar_MLfaDcKCMxcq4mr_elVrTM/view?usp=sharing',
  },
  {
    id: '5',
    title: 'Generative AI: Elevate your Data Engineering Career',
    issuer: 'IBM (Coursera)',
    date: 'Aug 14, 2024',
    tags: ['Generative AI', 'Data Engineering', 'Python'],
    link: 'https://coursera.org/verify/X00NNQGP99JH',
  },
  {
    id: '6',
    title: 'Social Network Analysis',
    issuer: 'UC Davis (Coursera)',
    date: 'Sep 2, 2024',
    tags: ['Network Analysis', 'Data Science', 'Python'],
    link: 'https://coursera.org/verify/1HQ9FDVUMDZ8',
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'PokeBI Dashboard',
    description: {
      en: 'An interactive Power BI dashboard analyzing Pokemon data. Features comprehensive visualization of base stats, type strengths, and evolution metrics using advanced DAX formulas and custom themes.',
      de: 'Ein interaktives Power BI-Dashboard zur Analyse von Pokémon-Daten. Bietet umfassende Visualisierung von Basiswerten, Typenstärken und Entwicklungsmetriken unter Verwendung fortgeschrittener DAX-Formeln.',
    },
    tech: ['Power BI', 'DAX', 'Data Analysis', 'ETL'],
    link: 'https://github.com/Srbhmishra18/PokeBI-Dashboard',
    github: 'https://github.com/Srbhmishra18/PokeBI-Dashboard',
    image: 'https://i.ibb.co/WNMynVcM/poke-BI.jpg',
  },
  {
    id: '2',
    title: 'Advanced SQL Business Analytics',
    description: {
      en: 'In-depth business intelligence using advanced PostgreSQL. Features complex data modeling, customer segmentation, and performance trend analysis to drive strategic decision-making.',
      de: 'Tiefgehende Business Intelligence unter Verwendung von fortgeschrittenem PostgreSQL. Beinhaltet komplexe Datenmodellierung, Kundensegmentierung und Leistungstrendanalysen.',
    },
    tech: ['PostgreSQL', 'Advanced SQL', 'Business Analytics', 'Data Modeling'],
    link: 'https://github.com/Srbhmishra18/Advanced-SQL-Business-Analytics-PostgreSQL',
    github: 'https://github.com/Srbhmishra18/Advanced-SQL-Business-Analytics-PostgreSQL',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'SAP Financial Processes',
    description: {
      en: 'Spearheaded a critical SAP development project, managing financial processes for 125 global locations and 440 subsidiaries at Bosch.',
      de: 'Leitung eines kritischen SAP-Entwicklungsprojekts zur Verwaltung von Finanzprozessen für 125 weltweite Standorte und 440 Tochtergesellschaften bei Bosch.',
    },
    tech: ['SAP CRM', 'ABAP', 'HANA', 'Finance'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'CRM UI Redesign',
    description: {
      en: 'Redesigned the SAP CRM UI, introducing a new dashboard that reduced decision-making time by 15% and increased user satisfaction scores by 10%.',
      de: 'Neugestaltung der SAP CRM-Benutzeroberfläche mit einem neuen Dashboard, das die Entscheidungsfindungszeit um 15% reduzierte.',
    },
    tech: ['UI/UX', 'SAP WEB UI', 'ABAP'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  },
];

export const SKILLS: Skill[] = [
  // Data Analysis & Science
  { name: 'Python', icon: 'Code2', category: 'Data Analysis & Science' },
  { name: 'SQL', icon: 'Database', category: 'Data Analysis & Science' },
  { name: 'Pandas', icon: 'FileJson', category: 'Data Analysis & Science' },
  { name: 'NumPy', icon: 'Binary', category: 'Data Analysis & Science' },
  { name: 'Machine Learning', icon: 'Brain', category: 'Data Analysis & Science' },
  { name: 'Data Modeling', icon: 'Network', category: 'Data Analysis & Science' },
  { name: 'Quantitative Analysis', icon: 'LineChart', category: 'Data Analysis & Science' },
  { name: 'Predictive Analytics', icon: 'TrendingUp', category: 'Data Analysis & Science' },
  { name: 'GenAI (learning)', icon: 'Sparkles', category: 'Data Analysis & Science' },

  // Business Intelligence
  { name: 'Power BI', icon: 'BarChart3', category: 'Business Intelligence' },
  { name: 'DAX', icon: 'Calculator', category: 'Business Intelligence' },
  { name: 'Power Query', icon: 'RefreshCw', category: 'Business Intelligence' },
  { name: 'Tableau', icon: 'PieChart', category: 'Business Intelligence' },
  { name: 'Excel / VBA', icon: 'FileSpreadsheet', category: 'Business Intelligence' },

  // Development & Core
  { name: 'SAP ABAP', icon: 'Server', category: 'Development & Core' },
  { name: 'SAP HANA', icon: 'DatabaseZap', category: 'Development & Core' },
  { name: 'Java', icon: 'Coffee', category: 'Development & Core' },
  { name: 'Data Structures', icon: 'Boxes', category: 'Development & Core' },
  
  // Tools & Methodologies
  { name: 'Git', icon: 'GitBranch', category: 'Tools & Methodologies' },
  { name: 'Jira', icon: 'CheckSquare', category: 'Tools & Methodologies' },
  { name: 'SharePoint', icon: 'Share2', category: 'Tools & Methodologies' },
  { name: 'Agile/Scrum', icon: 'Users', category: 'Tools & Methodologies' },
  { name: 'VS Code', icon: 'Terminal', category: 'Tools & Methodologies' },
  { name: 'Jupyter Notebook', icon: 'BookOpen', category: 'Tools & Methodologies' },
];
