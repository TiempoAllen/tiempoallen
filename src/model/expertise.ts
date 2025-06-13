export default class Expertise {
  id: string;
  title: string;
  sub_title: string;
  content: string;
  icon: string;

  constructor(
    id: string,
    title: string,
    sub_title: string,
    content: string,
    icon: string
  ) {
    this.id = id;
    this.title = title;
    this.sub_title = sub_title;
    this.content = content;
    this.icon = icon;
  }
}

export const EXPERTISE_DATA: Expertise[] = [
  new Expertise(
    "1",
    "Software",
    "Engineering",
    "Specialized in Object-Oriented Programming principles and utilizing robust languages like Java and Javascript.",
    "monitor"
  ),
  new Expertise(
    "2",
    "Frontend Dev",
    "ReactJS, NextJS",
    "Skilled in crafting responsive and user-friendly web interfaces using ReactJS and NextJS, ensuring optimal performance and accessibility.",
    "reactjs"
  ),
  new Expertise(
    "3",
    "Backend Dev",
    "NodeJS, Spring Boot",
    "Excel in implementing APIs with NodeJS and Spring Boot. Knowledgable with relational databases like PostgreSQL and MySQL.",
    "server"
  ),
];
