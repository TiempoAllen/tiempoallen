export default class Works {
  id: string;
  name: string;
  type: string;
  url: string;
  image: string;

  constructor(
    id: string,
    name: string,
    type: string,
    url: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.url = url;
    this.image = image;
  }
}

export const WORKS_DATA: Works[] = [
  new Works(
    "1",
    "EnergiSwap DApp",
    "Blockchain",
    "https://github.com/TiempoAllen/energiswap-dapp.git",
    "energiswap-dapp"
  ),
  new Works(
    "2",
    "Campus-Sync",
    "Full Stack Development",
    "https://github.com/TiempoAllen/campus-sync.git",
    "campus-sync"
  ),
  new Works(
    "3",
    "Sky Landing Page",
    "Frontend Development",
    "https://github.com/TiempoAllen/sky-landingpage.git",
    "sky-landing-page"
  ),
  new Works(
    "4",
    "Lease Loop",
    "Full Stack Development",
    "https://github.com/TiempoAllen/lease-loop.git",
    "lease-loop"
  ),
  new Works(
    "5",
    "Streamlined Service Portal",
    "Full Stack Development",
    "https://streamlined-service-portal.vercel.app/",
    "streamlined-service-portal"
  ),
];
