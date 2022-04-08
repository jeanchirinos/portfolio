import personalInfo from './personalInfo';
import Portfolio from 'public/static/img/Portfolio.png';
import FilesHandling from 'public/static/img/FilesHandling.png';
import OhCloud from 'public/static/img/OhCloud.png';

const github = personalInfo.links.github;

const projects = [
  {
    name: 'Portfolio',
    img: Portfolio,
    githubLink: `${github}/portfolio`,
    technologies: ['React', 'Next', 'Styled', 'Redux'],
  },
  {
    name: 'Files handling',
    img: FilesHandling,
    link: 'https://files-handling.vercel.app/',
    githubLink: `${github}/files-handling`,
    technologies: ['React', 'Next', 'Styled', 'Redux'],
  },
  {
    name: 'Oh! Cloud',
    img: OhCloud,
    link: 'https://oh-cloud.vercel.app/',
    githubLink: `${github}/oh-cloud`,
    technologies: ['Html', 'Js'],
  },
];

export default projects;
