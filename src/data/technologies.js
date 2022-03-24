const technologies = [
  {
    name: 'React',
    fullName: 'React',
    color: '#61dafb',
    filterState: true,
    defaultMainSelection: true,
  },
  {
    name: 'Next',
    fullName: 'Next',
    color: '#000000',
    filterState: false,
  },
  {
    name: 'Styled',
    fullName: 'Styled Components',
    color: '#efaa69',
    filterState: false,
  },
  {
    name: 'Redux',
    fullName: 'Redux',
    color: '#764ABC',
    filterState: false,
  },
  {
    name: 'Js',
    fullName: 'Javascript',
    color: '#F7DF1E',
    filterState: false,
    selectedColor: 'black',
  },
  {
    name: 'Html',
    fullName: 'Html',
    color: '#e34c26',
    filterState: false,
  },

  // { name: 'Figma', fullName: 'Figma', color: '#5871CB', filterState: true },
];

export const defaultMainTechnology = technologies.find(
  (tech) => tech.defaultMainSelection
);

export default technologies;
