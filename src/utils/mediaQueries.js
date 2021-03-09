export const Viewports = {
  mobile: 600,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
}

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${Viewports[key]}px) { ${style} }`;
}