// gitprofile.config.js

const config = {
  github: {
    username: 'merajul', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'md-merajul-islam-989a58114',
    twitter: '',
    mastodon: '',
    facebook: 'dawn.merajul',
    instagram: '',
    youtube: '', // example: ''
    dribbble: '',
    behance: '',
    medium: 'dawnmerajul',
    dev: 'merajul',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'merajul.github.io',
    phone: '',
    email: 'dawnmerajul@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Python',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Shell Script',
    'Bash',
    'MySQL',
    'PostgreSQL',
    'EDB',
    'Oracle',
    'Mongo DB',
    'AWS',
    'GCP',
    'Azure',
    'Docker',
    'Kubernetes',
    'Anisible',
    'Jenkins',
    'Argo CD',
    'Loki',
    'Terraform',
    'Pulumi',
    'CircleCI',
    'Codeship',
    'Kafka',
    'Selenium',
    'Bamboo',
    'Harbor',
    'GitHub',
    'GitLab',
    'bitbucket',
    'Jira',
    'TeamCity',
    'Harness',
    'Qovery',
    'Doppler',
    'Vault(By Hashicorp)',
    'Datadog',
    'Nginx',
    'Haproxy',
    'New Relic',
    'Logstash',
    'kibana',
    'elasticsearch',
    'Promethuse',
    'Grafana',
    'Nagios',
  
    
  ],
    experiences: [
      {
      company: 'BRAC IT Services Limited',
      position: 'DevOps Engineer',
      from: 'March 2020',
      to: 'Present',
      companyLink: 'https://www.bracits.com/',
    },
       
      {
      company: 'Famed Technologies Limited',
      position: 'Sr. Software Engineer',
      from: 'June 2018',
      to: 'February 2020',
      companyLink: 'https://www.famedbd.com/',
    },
  
  ],

  certifications: [
    {
      name: 'CNSS Certified Network Security Specialist',
      body: 'ICSI (International CyberSecurity Institute), UK',
      year: 'July 9, 2020',
      link: 'https://www.credential.net/a8a73dd5-8b5e-4881-87c3-90fa68927b87#gs.0ieuoe'
    },
  ], 
  education: [
    {
      institution: 'Bangladesh University of Business and Technology (BUBT)',
      degree: 'B.Sc. in Computer Science & Engineering (CSE)',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'Feni Computer Institute',
      degree: 'Diploma in Data Telecommunication And Network Technology',
      from: '2012',
      to: '2016',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://www.linkedin.com/in/md-merajul-islam-989a58114/"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
