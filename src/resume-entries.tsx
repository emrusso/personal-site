import { ResumeEntry } from "./ResumeEntry";

const brandfolder: ResumeEntry = {
  company: 'Brandfolder by Smartsheet',
  location: 'Denver, CO',
  positions: [{
    title: 'Senior Software Engineer I',
    startDate: 'April 2021',
    endDate: 'Present'
  }, {
    title: 'Full Stack Developer (Software Engineer II)',
    startDate: 'November 2019',
    endDate: 'April 2021'
  }],
  bullets: [
    <span>Awarded <a href='https://www.smartsheet.com/content-center/executive-center/leadership/meet-our-q1-brightspot-award-winners'>Smartsheet's 2023 Q1 Brightspot award</a> for the 'Earn trust' core competency</span>,
    "Deployed over 600 pull requests to production",
    "Migrated Brandfolder's monolith from a custom, inflexible solution to a well-supported internationalization library, significantly improving flexibility and quality of localized content. Became the go-to subject matter expert for all things internationalization",
    "Organized work, reviewed and contributed code to lead teams of 2-7 software engineers to build and update many features core to Brandfolder's offerings. I excel at modernizing code while maintaining feature parity even for very complex feature sets",
    "Introduced TypeScript to the codebase, significantly improving code quality, durability, and maintainability",
    "Collaborated closely with Product and Customer Experience team members to resolve customer issues weekly",
    "Mentored junior developers and supported coworkers in areas of passions like TypeScript, testing, and accessibility best practices"
  ],
  internship: false
};

const microsoft: ResumeEntry = {
  company: 'Microsoft',
  location: 'Redmond, WA',
  positions: [{
    title: 'Software Engineer I',
    startDate: 'August 2018',
    endDate: 'November 2019'
  }],
  bullets: [
    "Developed reporting features across Microsoft's Azure DevOps product by writing and reviewing code as a member of one of its only horizontal teams",
    'Collaborated closely with product managers and other engineers from start to finish on features - including spec reviews, development design, development, and post-deployment telemetry to measure success and adoption',
    'Shared knowledge with teammates about experimental methodology and design as well as early experience with Jest and the Enzyme library',
    "Adapted to work in both the product's legacy codebase (JavaScript, jQuery) and modern codebase (TypeScript, React, Jest)",
    "Contributed to a performance effort that resulted in a 50% Apdex improvement in the team's main feature area",
    'Served as feature lead for displaying work rollup progress on Azure DevOps backlogs',
    'Monitored live site health, managed and tuned automated alerts, facilitated daily stand-up, and worked to resolve bugs and customer issues during on-call engineer rotations'
  ],
  internship: false
};

const square: ResumeEntry = {
  company: 'Square',
  location: 'San Francisco, CA',
  positions: [{
    title: 'Software Engineer Intern',
    startDate: 'June 2017',
    endDate: 'September 2017'
  }],
  bullets: [
    'Wrote and deployed industry-standard code in a fast-paced, agile development workflow',
    'Implemented an interactive widget as a tool for Square\'s API documentation website using Ruby on Rails, JavaScript, HTML, Sass, and Square\'s e-commerce Rails SDK'
  ],
  internship: true
};

const googleSeattle: ResumeEntry = {
  company: 'Google',
  location: 'Seattle, WA',
  positions: [{
    title: 'Engineering Practicum Intern',
    startDate: 'June 2016',
    endDate: 'September 2016'
  }],
  bullets: [
    'Launched a guided flow that allows Cloud Launcher solution partners to control the configuration options available to the customers deploying these solutions',
    'Used HTML, CSS, JavaScript, and AngularJS to build the front-end structure of the configuration editor according to UX mocks as well as implement dynamic use of back-end data about the solution configuration'
  ],
  internship: true
};

const googleMV: ResumeEntry = {
  company: 'Google',
  location: 'Mountain View, CA',
  positions: [{
    title: 'Engineering Practicum Intern',
    startDate: 'June 2015',
    endDate: 'June 2015'
  }],
  bullets: [
    'Enhanced code that displays knowledge graph facts to support subscripts and superscripts across multiple platforms by enriching protocol buffers as well as updating templates through a template-rendering engine',
    'Implemented a Java handler for electron shell configuration and chemical formula knowledge graph facts to add and render the appropriate subscript/superscript information'
  ],
  internship: true
};

export const education: ResumeEntry = {
  company: 'The University of Chicago',
  location: 'Chicago, IL',
  positions: [{
    title: <span>B.S. &bull; Computer Science</span>,
    startDate: 'October 2014',
    endDate: 'June 2018'
  }, {
    title: <span>B.A. with Honors &bull; Psychology</span>
  }],
  bullets: [],
  internship: false
};

export const resumeEntries: ResumeEntry[] = [brandfolder, microsoft, square, googleSeattle, googleMV];
