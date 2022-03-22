import Porfolio from 'public/img/Portfolio.png';
import FilesHandling from 'public/img/FilesHandling.png';
import OhCloud from 'public/img/OhCloud.png';
import personalInfo from './personalInfo';

const projects = [
  {
    name: 'Portafolio',
    img: Porfolio,
    githubLink: `${personalInfo.links.github}/Portfolio`,
    technologies: ['React', 'Styled', 'Redux'],
  },
  {
    name: 'Files handling',
    img: FilesHandling,
    link: 'https://files-handling.vercel.app/',
    githubLink: `${personalInfo.links.github}/files-handling`,
    technologies: ['React', 'Next', 'Styled', 'Redux'],
  },
  {
    name: 'Oh! Cloud',
    img: OhCloud,
    type: 'page',
    link: 'https://oh-cloud.vercel.app/',
    githubLink: `${personalInfo.links.github}/oh-cloud`,
    technologies: ['Html', 'Js'],
  },
];

export default projects;
