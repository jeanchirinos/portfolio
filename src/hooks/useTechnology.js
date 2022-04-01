import technologies from 'components/Atoms/AllTechnologies';

export default function useTechnology(name) {
  // Hook that returns the technology selected with its color and activeColor(if it has one)
  const techSelected = technologies.find(tech => tech.name === name);

  return { ...techSelected };
}
