export const resumeData = {
  personal: {
    name: 'Minh Le',
    tagline: 'Computer Science Student & Software Engineer',
    bio: 'Passionate about building scalable solutions and innovative technologies. Currently pursuing BSc. Computer Science at NJIT with experience in full-stack development, machine learning, and high-performance computing.',
    email: 'minhqle279@gmail.com',
    phone: '201-936-3032',
    location: 'Newark, NJ',
    linkedIn: 'https://linkedin.com/in/minhle27',
    github: 'https://github.com/minhle27',
  },
  education: {
    institution: 'New Jersey Institute of Technology',
    degree: 'BSc. Computer Science',
    gpa: '3.85',
    location: 'Newark, NJ',
    graduation: 'Expected Dec 2026',
    coursework: [
      'Data Structures and Algorithms',
      'Object-oriented Programming',
      'Computer System',
      'Database System',
      'Computer Network',
      'Operating System',
      'Programming Languages',
      'Machine Learning',
      'Parallel Computing',
    ],
  },
  skills: {
    languages: ['C/C++', 'Python', 'Java', 'CUDA', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'PHP'],
    technologies: ['React', 'Node.js', 'Express', 'Nest.JS', 'MongoDB', 'Django', 'Flask', 'GraphQL', 'Pandas', 'Matplotlib', 'LangChain'],
  },
  experiences: [
    {
      title: 'Software Engineer Intern',
      company: 'CoderPush',
      period: 'June 2024 – Aug. 2024',
      achievements: [
        'Developed backend API services for gamification features using PostgreSQL and NestJS to process 20+ event types, increasing user engagement by 30%',
        'Built an interactive admin dashboard using Recharts to visualize 8 critical metrics, resulting in a 20% improvement in stakeholder operational insights',
        'Enhanced the admin Content Management System (CMS) by leveraging AdminJS and implementing custom React components',
        'Developed an internal resume processing tool with a custom parsing module that achieved 85% accuracy in extracting resume attributes, reducing HR processing time by 50%',
      ],
    },
    {
      title: 'Research Assistant',
      company: "NJIT Dasgupta's Data Visualization lab",
      period: 'Jan. 2024 – May 2024',
      achievements: [
        'Developed a conversational interface with a Flask backend and React frontend, allowing users to interact with algorithmic rankers and access ML model decision explanations',
        'Improved model transparency through development of interactive data visualizations using NL4DV',
        'Leveraged Pandas to preprocess admissions dataset for testing interface efficacy and applicability in real-world scenarios',
      ],
    },
    {
      title: 'Teaching Assistant',
      company: 'NJIT CS113',
      period: 'Jan. 2024 – May 2024',
      achievements: [
        'Assisted 80+ students on Object-Oriented Programming concepts in Java through hands-on lab sessions',
        'Held weekly office hours to offer additional academic support, clarify complex topics, and foster student success',
      ],
    },
  ],
  projects: [
    {
      title: 'Image Segmentation Engine',
      technologies: 'C++, CUDA, OpenMPI, OpenCV, CMake, Python',
      description: 'High-performance image segmentation system using K-means clustering',
      achievements: [
        'Developed a K-means clustering module for image segmentation, partitioning pixels into coherent color regions',
        'Scaled the pipeline across two Linux nodes with MPI and accelerated core clustering routines on NVIDIA GPUs via CUDA',
        'Achieved a 23x reduction in end-to-end runtime on large image datasets',
        'Utilized Python to create visualizations comparing performance metrics across four implementations',
      ],
      githubLink: 'https://github.com/minhle27',
    },
    {
      title: 'NJIT Jobs',
      technologies: 'React, Redux Toolkit, Express, MongoDB, TypeScript, TailwindCSS, Socket.io',
      description: 'User-friendly platform for on-campus job search and application management',
      achievements: [
        'Led a team of 3 to build a platform that streamlined the on-campus job search process for students',
        'Leveraged best practices in RTK Query to implement robust state management layer',
        'Significantly enhanced API data handling and optimized overall client side rendering performance',
        'Designed and implemented a real-time messaging system to facilitate direct employer-student communication',
      ],
      githubLink: 'https://github.com/minhle27',
    },
    {
      title: 'GitLet',
      technologies: 'Java, Makefile',
      description: 'Version-control system implementation with basic Git functionality',
      achievements: [
        'Implemented a version-control system for related collections of files with basic features such as committing, restoring files, viewing commit history',
        'Maintained branches and merging changes functionality',
        'Created efficient internal structures to effectively handle file contents and metadata',
        'Utilized carefully selected data structures and algorithms to maximize performance, with 100% test coverage',
      ],
      githubLink: 'https://github.com/minhle27',
    },
    {
      title: 'MyNJIT Prof',
      technologies: 'JavaScript, GraphQL, webpack, Tailwind CSS',
      description: 'Chrome extension for NJIT students to access professor ratings',
      achievements: [
        'Developed a custom Chrome extension specifically designed for NJIT students',
        "Enabled convenient access to professor rating information from ratemyprofessor.com directly on the school's registration webpage",
        'Increased course selecting efficiency for 5000+ students by 30%',
      ],
      githubLink: 'https://github.com/minhle27',
    },
  ],
  awards: [
    {
      title: 'Vietnam Southern Open Mathematical Competition 2021',
      subtitle: 'Gold Medalist',
    },
    {
      title: 'Ho Chi Minh City excellent students in Mathematics 2019',
      subtitle: 'First Prize',
    },
  ],
};

export const siteMetadata = {
  title: `${resumeData.personal.name} - Software Engineer`,
  description: resumeData.personal.bio,
  keywords: [
    resumeData.personal.name,
    'Software Engineer',
    'Computer Science',
    'NJIT',
    'Full Stack Developer',
    'React',
    'Node.js',
    'Python',
    'TypeScript',
  ],
  authors: [{ name: resumeData.personal.name }],
  creator: resumeData.personal.name,
  openGraph: {
    title: `${resumeData.personal.name} - Software Engineer`,
    description: resumeData.personal.bio,
    type: 'website',
    locale: 'en_US',
  },
} as const;
