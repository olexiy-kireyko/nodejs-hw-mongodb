const parseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
  return;
};

const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  if (['work', 'home', 'personal'].includes(type)) return type;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;
  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  return { type: parsedType, isFavourite: parsedIsFavourite };
};
