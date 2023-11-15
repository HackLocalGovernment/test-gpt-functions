import 'dotenv/config';
import { logger } from '@hughescr/logger';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import getNextMeeting from './handlers/get-next-meeting.mjs';

(async () => {
  const rl = readline.createInterface({ input, output });

  // eslint-disable-next-line no-constant-condition -- infinite console loop is fine
  while(true) {
    const question = await rl.question('What did GPT ask? ');
    if(question === 'exit') { break; }
    logger.info(await getNextMeeting(JSON.parse(question)));
  }
})();
