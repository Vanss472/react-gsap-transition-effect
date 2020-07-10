const sizes: { [key: string]: number } = {
  phone: 320,
  tablet: 768,
  desktop: 1180,
};

const media = {
  phone: `@media (min-with: ${sizes.phone}px)`,
  tablet: `@media (min-width: ${sizes.tablet}px)`,
  desktop: `@media (min-width: ${sizes.desktop}px)`,
};

export default media;
