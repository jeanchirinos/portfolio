import {
  React,
  Redux,
  StyledComponents,
  Next,
  Javascript,
  Html,
} from './Isotype';

const technologies = [
  {
    name: 'React',
    component: <React />,
    color: '#61dafb',
  },
  {
    name: 'Styled',
    fullName: 'Styled Components',
    component: <StyledComponents />,
    color: '#efaa69',
  },
  {
    name: 'Redux',
    color: '#764ABC',
    component: <Redux />,
  },
  {
    name: 'Next',
    color: '#000000',
    component: <Next />,
  },
  {
    name: 'Js',
    fullName: 'Javascript',
    component: <Javascript />,
    color: '#F7DF1E',
    activeColor: 'black',
  },
  {
    name: 'Html',
    component: <Html />,
    color: '#e34c26',
  },
];

export default technologies;
