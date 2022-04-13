import { GITHUB } from './personalInfo';
import Portfolio from 'public/static/img/Portfolio.png';
import FilesHandling from 'public/static/img/FilesHandling.png';
import OhCloud from 'public/static/img/OhCloud.png';

const projects = [
  {
    name: 'Portfolio',
    img: Portfolio,
    githubLink: `${GITHUB}/portfolio`,
    technologies: ['React', 'Next', 'Styled', 'Redux'],
  },
  {
    name: 'Files handling',
    img: FilesHandling,
    link: 'https://files-handling.vercel.app/',
    githubLink: `${GITHUB}/files-handling`,
    technologies: ['React', 'Next', 'Styled', 'Redux'],
  },
  {
    name: 'Oh! Cloud',
    img: OhCloud,
    link: 'https://oh-cloud.vercel.app/',
    githubLink: `${GITHUB}/oh-cloud`,
    technologies: ['Html', 'Js'],
  },
];

export default projects;
