import Airtable from "airtable";

export const base = new Airtable({
  apiKey: process.env.REACT_APP_API_KEY,
}).base(process.env.REACT_APP_BASE);

export function getAMPM(time, notDes = false) {
  if (notDes === false) {
    if (Number(time?.start_time.replace(":", "").slice(0, -2)) < 12)
      return "am";
    if (Number(time?.end_time.replace(":", "").slice(0, -2)) < 12) return "am";
    if (Number(time?.start_time.replace(":", "").slice(0, -2)) >= 12)
      return "pm";
    if (Number(time?.end_time.replace(":", "").slice(0, -2)) >= 12) return "pm";
  }

  if (notDes === true) {
    if (Number(time.replace(":", "").slice(0, -2)) < 12) return "am";
    if (Number(time.replace(":", "").slice(0, -2)) >= 12) return "pm";
  }
}
