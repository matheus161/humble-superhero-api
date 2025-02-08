/**
 * VALIDATIONS
 */

export const HUMILITY_SCORE_MIN_NUMBER_VALIDATION =
  'The humility score must be at least 0. Please enter a number greater than or equal to 0.';
export const HUMILITY_SCORE_MAX_NUMBER_VALIDATION =
  'The humility score must be at most 10. Please enter a number less than or equal to 10.';
export const NAME_REQUIRED_VALIDATION =
  "The superhero's name is required. Please enter a valid name.";
export const SUPERPOWER_REQUIRED_VALIDATION =
  "The superhero's power is required. Please enter the power they possess.";

/**
 * RESPONSES
 */

export const SUPERHERO_ALREADY_EXISTS_RESPONSE = (name: string) => {
  return `Oops! The superhero "${name}" has already been created.`;
};
