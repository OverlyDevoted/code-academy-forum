const SIMPLE_NAME_REGEX = /^[A-z\d]{3,30}$/;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;

export const validateName = (input: string, fieldName?: string) => {
  const fieldNameToUse = fieldName ?? "Input";
  if (!input) return `Enter ${fieldNameToUse}`;
  if (!SIMPLE_NAME_REGEX.test(input))
    return `${fieldNameToUse} is too short or too long`;
  return "";
};

export const validateEmail = (input: string) => {
  if (!input) return `Enter an email`;
  if (!EMAIL_REGEX.test(input)) return `Use a valid email address`;
  return "";
};

export const validatePassword = (input: string) => {
  if (!input) return `Enter a password`;
  if (!PASSWORD_REGEX.test(input))
    return `Password must contain at least 8 characters, number, upper/lower case letters and special symbol`;
  return "";
};
