/**
 * helpers.ts
 */

// Concatenate CSS classnames
export function concatClasses(...classNames: string[]) {
  return classNames.join(' ');
}

// Format Date string to a more readable form
export function formatDate(dateString: string) {
  const [day, month, year] = dateString.split('/');
  const date = new Date(`${year}-${month}-${day}`);

  // Example: August 24, 2024
  return date.toLocaleDateString('en-US', {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
