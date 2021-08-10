export const getTag = (name) => {
  switch (name) {
    case `men's clothing`:
      return 'For Men';
    case `women's clothing`:
      return 'For Women';
    default:
      return name;
  }
};
