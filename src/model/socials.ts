export default class Socials {
  id: string;
  name: string;
  url: string;
  icon: string;

  constructor(id: string, name: string, url: string, icon: string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.icon = icon;
  }
}

export const SOCIALS_DATA: Socials[] = [
  new Socials("1", "GitHub", "https://github.com/TiempoAllen", "github-icon"),
  new Socials(
    "2",
    "Instagram",
    "https://www.instagram.com/llnsann_/",
    "instagram-icon"
  ),
  new Socials(
    "3",
    "LinkedIn",
    "https://www.linkedin.com/in/john-allen-tiempo-1350492a0/",
    "linkedin-icon"
  ),
  new Socials(
    "4",
    "Email",
    "https://mail.google.com/mail/?view=cm&fs=1&to=tiempoallen@gmail.com://github.com/TiempoAllen",
    "gmail"
  ),
];
