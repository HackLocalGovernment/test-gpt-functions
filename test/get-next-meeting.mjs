process.env.TIMEZONE = 'America/Los_Angeles';
import handleJSON from '../handlers/get-next-meeting.mjs';

describe('handleJSON', () => {
    it('should return a string', () => {
        expect.assertions(1);
        const json = {
            committee: 'Town Council',
            date: '2021-08-25',
        };
        const result = handleJSON(json);
        expect(result).toStrictEqual(expect.stringContaining('We are looking for the agenda and minutes of the Town Council meeting on 8/25/2021 which is probably linked from https://www.portolavalley.net/community/town-calendar/-curm-8/-cury-2021.'));
    });
});
