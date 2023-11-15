/* GPT Assistant Function definition:
{
  "name": "get_next_meeting",
  "description": "Fetch information about the next meeting for a committee, or for the town council, including agendas and/or minutes if they have been published",
  "parameters": {
    "type": "object",
    "properties": {
      "committee": {
        "type": "string",
        "description": "The name of the committee, or \"Town Council\" if for council meetings"
      },
      "date": {
        "type": "string",
        "description": "Optionally include a date for the meeting in ISO8601 format"
      }
    },
    "required": [
      "location"
    ]
  }
}
 */
import { DateTime } from 'luxon';
// import { OpenAI } from 'openai';
// const configuration = {
//   organization: 'org-zwnTR4CpBWAqkLPXAOv4SPHZ',
//   apiKey: process.env.OPENAI_API_KEY,
// };
// const openai = new OpenAI(configuration);

export const handleJSON = (json) => {
    const { committee, date: dateString } = json;
    const date = DateTime.fromISO(dateString);
    const curm = date.toFormat('M');
    const cury = date.toFormat('y');
    const calendarURL = `https://www.portolavalley.net/community/town-calendar/-curm-${curm}/-cury-${cury}`;
    return `We are looking for the agenda and minutes of the ${committee} meeting on ${date.toLocaleString()} which is probably linked from ${calendarURL}.`;
};
export default handleJSON;
