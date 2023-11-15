import 'dotenv/config';
import { OpenAI } from 'openai';
import { logger } from '@hughescr/logger';
import _ from 'lodash';

const configuration = {
    organization: 'org-zwnTR4CpBWAqkLPXAOv4SPHZ',
    apiKey: process.env.OPENAI_API_KEY,
};
const openai = new OpenAI(configuration);

(async () => {
    const list = await openai.files.list();
    // Iterate through the list of files and await all the deletions in parallel
    await Promise.all(_.map(list.data, async (file) => {
        logger.info(`Deleting ${file.id} (${file.filename})`);
        await openai.files.del(file.id);
    }));
})();
