export function isSameDate(date1: Date, date2: Date) {
  // Create Date objects from the input if they are not already Date objects
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Compare the year, month, and day
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
