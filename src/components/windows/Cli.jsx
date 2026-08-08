import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({onClose}) => {
  const commands = {
  
    about: {
      description: 'About Ankit Dhilpe',
      usage: 'about',
      fn: () => 'Hi! I\'m Ankit Dhilpe, a passionate Full Stack Developer.\nI love building beautiful and functional web applications.\nProfessional | Creative | Problem Solver'
    },
    skills: {
      description: 'Display my technical skills',
      usage: 'skills',
      fn: () => `Frontend: React, JavaScript, SCSS, HTML/CSS\nBackend: Node.js, Express, MongoDB\nTools: Git, Webpack, Vite\nOther: REST APIs, Responsive Design, UI/UX`
    },
    projects: {
      description: 'List my projects',
      usage: 'projects',
      fn: () => `• Portfolio Website - macOS style portfolio with CLI\n• E-commerce Platform - Full stack project with payment integration\n• Chat Application - Real-time messaging using WebSockets\n• Task Manager - React app with local storage\n• Weather App - API integration project`
    },
    contact: {
      description: 'Get my contact information',
      usage: 'contact',
      fn: () => `Email: ankit@example.com\nLinkedIn: linkedin.com/in/ankitdhilpe\nGitHub: github.com/ankitdhilpe\nPhone: +91-XXX-XXX-XXXX`
    },
    github: {
      description: 'View my GitHub profile',
      usage: 'github',
      fn: () => '🔗 Check out my GitHub: https://github.com/ankitdhilpe'
    },
    resume: {
      description: 'Download my resume',
      usage: 'resume',
      fn: () => '📄 Resume available at: /resume.pdf'
    },
    echo: {
      description: 'Echo a passed string',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    whoami: {
      description: 'Display current user',
      usage: 'whoami',
      fn: () => 'AnkitDhilpe (Full Stack Developer)'
    },
    date: {
      description: 'Display current date and time',
      usage: 'date',
      fn: () => new Date().toString()
    },

  };

  

  const welcomeMessage =  String.raw`
  ╔════════════════════════════════════════════════════════════╗
  ║      Welcome to Ankit Dhilpe's Portfolio CLI               ║
  ║                                                            ║
  ║  A creative space to explore my work and projects          ║
  ╚════════════════════════════════════════════════════════════╝

  Type 'help' to see all available commands.
  Type 'about' to learn more about me.

`;

  return (
    <MacWindow onClose={onClose}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"AnkitDhilpe:~$"}
          promptLabelStyle={{
            color: "#00ff41",
            fontWeight: "600",
            fontSize: "13px",
            fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace"
          }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;