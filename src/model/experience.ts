export default class Experience {
  id: string;
  header: string;
  description: string;
  dateRange: string;
  companyLogo: string;
  typeOfWork: string;
  skills: string[];

  constructor(
    id: string,
    header: string,
    description: string,
    dateRange: string,
    companyLogo: string,
    typeOfWork: string,
    skills: string[],
  ) {
    this.id = id;
    this.header = header;
    this.description = description;
    this.dateRange = dateRange;
    this.companyLogo = companyLogo;
    this.typeOfWork = typeOfWork;
    this.skills = skills;
  }
}

export const EXPERIENCE_DATA: Experience[] = [
  new Experience(
    "1",
    "Freelance Full Stack Developer @ Consultare Inc. Group",
    "Converted forms to e-forms using CodeIgniter, HTML, CSS, and JavaScript.",
    "Jun 2024 - Jul 2024",
    "consultare-logo",
    "Remote",
    ["JavaScript", "HTML", "CSS", "CodeIgniter", "PHP", "MySQL"],
  ),
  new Experience(
    "2",
    "Web Developer @ Consultare Inc. Group",
    "Worked on UI/UX design of e-forms using Figma. Help developed a Learning Management System (LMS) using Quasar, Laravel, and MySQL.",
    "Aug 2024 - Dec 2024",
    "consultare-logo",
    "Remote",
    ["Quasar", "VueJS", "JS", "Figma", "Laravel", "MySQL", "PHP"],
  ),
  new Experience(
    "3",
    "UI/UX Designer/Software Engineer Intern @ SparkSoft Solutions Inc.",
    "Improved user experience by designing and implementing a new UI for the company's web application using Figma",
    "Jan 2025 - Apr 2025",
    "sparksoft-logo",
    "Remote",
    ["Figma", "User Experience", "User Interface"],
  ),
  new Experience(
    "4",
    "Associate Software Engineer @ Accenture",
    "Worked on a project that involved developing a web application using ServiceNow. Collaborated with a team of developers to implement new features and improve the overall functionality of the application.",
    "Aug 2025 - Present",
    "Accenture-logo",
    "Hybrid",
    ["ServiceNow", "Software Development", "Agile Methodologies"],
  ),
];
