import { Schema } from 'mongoose';

export const validationError = (field)=> {
  const validation = field.validateSync();

  if (validation) {
    const errors = {};
    for (const key in validation.errors) {
      errors[key] = validation.errors[key].message;
    }
    return errors;
  }
  return null;
};
