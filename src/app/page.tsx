'use client';

import { useState, useEffect } from 'react';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'education', 'skills', 'experience', 'projects', 'awards', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-2xl font-bold text-primary hover:text-accent transition-colors"
            >
              ML
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary bg-secondary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Skill Badge Component
const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
    {skill}
  </span>
);

// Experience Card Component
const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  achievements 
}: { 
  title: string;
  company: string;
  period: string;
  achievements: string[];
}) => (
  <div className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-primary font-medium">{company}</p>
      </div>
      <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{period}</span>
    </div>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
          <span className="text-muted-foreground">{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Project Card Component
const ProjectCard = ({ 
  title, 
  technologies, 
  description, 
  achievements,
  githubLink 
}: { 
  title: string;
  technologies: string;
  description: string;
  achievements: string[];
  githubLink: string;
}) => (
  <div className="bg-muted rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.02]">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-accent font-mono mb-3">{technologies}</p>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-primary hover:text-accent transition-colors mt-2 sm:mt-0 sm:ml-4"
      >
        <span className="text-sm font-medium">View Project</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
          <span className="text-muted-foreground">{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const email = 'minhqle279@gmail.com';
    navigator.clipboard.writeText(email);
    showToast(`Email copied to clipboard: ${email}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Hi, I&apos;m <span className="text-primary">Minh Le</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Computer Science Student & Software Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable solutions and innovative technologies. 
              Currently pursuing BSc. Computer Science at NJIT with experience in 
              full-stack development, machine learning, and high-performance computing.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:minhqle279@gmail.com"
              onClick={handleEmailClick}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/minhle27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              View LinkedIn
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <a href="mailto:minhqle279@gmail.com" onClick={handleEmailClick} className="hover:text-primary transition-colors">
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/minhle27" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/minhle27" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">New Jersey Institute of Technology</h3>
                <p className="text-primary font-medium">BSc. Computer Science</p>
                <p className="text-muted-foreground">GPA: 3.85</p>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="text-muted-foreground">Newark, NJ</p>
                <p className="text-muted-foreground">Expected Dec 2026</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures and Algorithms', 'Object-oriented Programming', 'Computer System',
                  'Database System', 'Computer Network', 'Operating System', 'Programming Languages',
                  'Machine Learning', 'Parallel Computing'
                ].map((course) => (
                  <SkillBadge key={course} skill={course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C/C++', 'Python', 'Java', 'CUDA', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'PHP'].map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'Nest.JS', 'MongoDB', 'Django', 'Flask', 'GraphQL', 'Pandas', 'Matplotlib', 'LangChain'].map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Software Engineer Intern"
              company="CoderPush"
              period="June 2024 – Aug. 2024"
              achievements={[
                "Developed backend API services for gamification features using PostgreSQL and NestJS to process 20+ event types, increasing user engagement by 30%",
                "Built an interactive admin dashboard using Recharts to visualize 8 critical metrics, resulting in a 20% improvement in stakeholder operational insights",
                "Enhanced the admin Content Management System (CMS) by leveraging AdminJS and implementing custom React components",
                "Developed an internal resume processing tool with a custom parsing module that achieved 85% accuracy in extracting resume attributes, reducing HR processing time by 50%"
              ]}
            />
            <ExperienceCard
              title="Research Assistant"
              company="NJIT Dasgupta's Data Visualization lab"
              period="Jan. 2024 – May 2024"
              achievements={[
                "Developed a conversational interface with a Flask backend and React frontend, allowing users to interact with algorithmic rankers and access ML model decision explanations",
                "Improved model transparency through development of interactive data visualizations using NL4DV",
                "Leveraged Pandas to preprocess admissions dataset for testing interface efficacy and applicability in real-world scenarios"
              ]}
            />
            <ExperienceCard
              title="Teaching Assistant"
              company="NJIT CS113"
              period="Jan. 2024 – May 2024"
              achievements={[
                "Assisted 80+ students on Object-Oriented Programming concepts in Java through hands-on lab sessions",
                "Held weekly office hours to offer additional academic support, clarify complex topics, and foster student success"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <ProjectCard
              title="Image Segmentation Engine"
              technologies="C++, CUDA, OpenMPI, OpenCV, CMake, Python"
              description="High-performance image segmentation system using K-means clustering"
              achievements={[
                "Developed a K-means clustering module for image segmentation, partitioning pixels into coherent color regions",
                "Scaled the pipeline across two Linux nodes with MPI and accelerated core clustering routines on NVIDIA GPUs via CUDA",
                "Achieved a 23x reduction in end-to-end runtime on large image datasets",
                "Utilized Python to create visualizations comparing performance metrics across four implementations"
              ]}
              githubLink="https://github.com/minhle27"
            />
            <ProjectCard
              title="NJIT Jobs"
              technologies="React, Redux Toolkit, Express, MongoDB, TypeScript, TailwindCSS, Socket.io"
              description="User-friendly platform for on-campus job search and application management"
              achievements={[
                "Led a team of 3 to build a platform that streamlined the on-campus job search process for students",
                "Leveraged best practices in RTK Query to implement robust state management layer",
                "Significantly enhanced API data handling and optimized overall client side rendering performance",
                "Designed and implemented a real-time messaging system to facilitate direct employer-student communication"
              ]}
              githubLink="https://github.com/minhle27"
            />
            <ProjectCard
              title="GitLet"
              technologies="Java, Makefile"
              description="Version-control system implementation with basic Git functionality"
              achievements={[
                "Implemented a version-control system for related collections of files with basic features such as committing, restoring files, viewing commit history",
                "Maintained branches and merging changes functionality",
                "Created efficient internal structures to effectively handle file contents and metadata",
                "Utilized carefully selected data structures and algorithms to maximize performance, with 100% test coverage"
              ]}
              githubLink="https://github.com/minhle27"
            />
            <ProjectCard
              title="MyNJIT Prof"
              technologies="JavaScript, GraphQL, webpack, Tailwind CSS"
              description="Chrome extension for NJIT students to access professor ratings"
              achievements={[
                "Developed a custom Chrome extension specifically designed for NJIT students",
                "Enabled convenient access to professor rating information from ratemyprofessor.com directly on the school's registration webpage",
                "Increased course selecting efficiency for 5000+ students by 30%"
              ]}
              githubLink="https://github.com/minhle27"
            />
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Awards</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-2">Vietnam Southern Open Mathematical Competition 2021</h3>
              <p className="text-primary font-medium">Gold Medalist</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-2">Ho Chi Minh City excellent students in Mathematics 2019</h3>
              <p className="text-primary font-medium">First Prize</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities, innovative projects, 
            or just connecting with fellow developers and tech enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:minhqle279@gmail.com"
              onClick={handleEmailClick}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/minhle27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">minhqle279@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">201-936-3032</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Newark, NJ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Minh Le. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
      {toastMessage && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded shadow">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
