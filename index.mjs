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

import 'dotenv/config';
import _  from 'lodash';
import { logger } from '@hughescr/logger';
import { DateTime } from 'luxon';
// import { OpenAI } from 'openai';
// const configuration = {
//   organization: 'org-zwnTR4CpBWAqkLPXAOv4SPHZ',
//   apiKey: process.env.OPENAI_API_KEY,
// };
// const openai = new OpenAI(configuration);
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const handleJSON = (json) => {
    const { committee, date: dateString } = json;
    const date = DateTime.fromISO(dateString);
    const curm = date.toFormat('M');
    const cury = date.toFormat('y');
  const calendarURL = `https://www.portolavalley.net/community/town-calendar/-curm-${curm}/-cury-${cury}`;
    return `We are looking for the agenda and minutes of the ${committee} meeting on ${date.toLocaleString()} which is probably linked from ${calendarURL}.`;
};

(async () => {
  const rl = readline.createInterface({ input, output });

  // eslint-disable-next-line no-constant-condition -- infinite console loop is fine
  while(true) {
    const question = await rl.question('What did GPT ask? ');
    if(question === 'exit') { break; }
    logger.info(await handleJSON(JSON.parse(question)));
  }
})();

