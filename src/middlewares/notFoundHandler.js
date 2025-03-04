import createHttpError from 'http-errors';

export const notFoundHandler = (req, res, next) => {
  throw createHttpError(404, 'Route not found');
  // res.status(404).json({ message: 'Not found' });
};
