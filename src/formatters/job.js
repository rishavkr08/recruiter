import { formatNumberToRupees } from "./common";

export function formatSalaryRange(min, max, type = "Yearly") {
  if (min && max) {
    return `INR(₹) ${formatNumberToRupees(min)} - ${formatNumberToRupees(
      max
    )} / ${type}`;
  } else {
    return `INR(₹) ${formatNumberToRupees(min || max)} / ${type}`;
  }
}

export function formatExperienceRange(min, max) {
  if (min && max) {
    return `Experience (${min} - ${max} years)`;
  } else {
    return `Experience (${min || max} years)`;
  }
}
