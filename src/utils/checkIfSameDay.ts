export function isSameDate(date1: Date, date2: Date) {
  // Compare the year, month, and day
  //   console.log(date1.getFullYear(), date1.getMonth(), date1.getDate());
  //   console.log(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const result =
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
  //   console.log(result);
  return result;
}
