const CAREER_START = new Date(2022, 0); // Jan 2022

/**
 * Returns total experience as a formatted string like `3.2+`.
 */
export function calculateTotalExperience(startDate: Date = CAREER_START): string {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const decimal = Math.round((months / 12) * 10) / 10;
  const totalYears = years + decimal;

  return `${totalYears.toFixed(1)}+`;
}

/**
 * Formats a date range into `Mon YYYY – Mon YYYY/Present` for experience timelines.
 */
export function formatDateRange(startDate: Date, endDate: Date | null = null): string {
  const startMonth = startDate.toLocaleDateString("en-US", { month: "short" });
  const startYear = startDate.getFullYear();

  if (endDate) {
    const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });
    const endYear = endDate.getFullYear();
    return `${startMonth} ${startYear} – ${endMonth} ${endYear}`;
  }

  return `${startMonth} ${startYear} – Present`;
}
