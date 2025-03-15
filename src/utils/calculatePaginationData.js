export const calculatePaginationData = (contactsCount, perPage, page) => {
  const totalPages = Math.ceil(contactsCount / perPage);
  const hasPreviousPage = page !== 1;
  const hasNextPage = Boolean(totalPages - page);
  return {
    page,
    perPage,
    totalItems: contactsCount,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};
