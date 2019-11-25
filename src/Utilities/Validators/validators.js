export const requiredField = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
};

export const minLengthCreator = (minLength) => (value) => {
  if (value.length < 8) return `Min length should be ${minLength} symbols`;
};