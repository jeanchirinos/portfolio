const breakpoints = { xs: 0, sm: 768, md: 1024, lg: 1366, xl: 1600 };
const mediaQueries = {};

Object.entries(breakpoints).forEach(breakpoint => {
  const [key, value] = breakpoint;
  const query = `@media (min-width: ${value}px)`;
  mediaQueries[key] = query;
});

export default mediaQueries;
