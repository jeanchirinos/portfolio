import personalInfo from './personalInfo';

const github = personalInfo.links.github;
const img = 'static/img';

const projects = [
  {
    name: 'Portfolio',
    img: `${img}/Portfolio.png`,
    githubLink: `${github}/Portfolio`,
    technologies: ['React', 'Styled', 'Redux'],
  },
  {
    name: 'Files handling',
    img: `${img}/FilesHandling.png`,
    link: 'https://files-handling.vercel.app/',
    githubLink: `${github}/files-handling`,
    technologies: ['React', 'Next', 'Styled', 'Redux'],
  },
  {
    name: 'Oh! Cloud',
    img: `${img}/OhCloud.png`,
    link: 'https://oh-cloud.vercel.app/',
    githubLink: `${github}/oh-cloud`,
    technologies: ['Html', 'Js'],
  },
];

export default projects;
