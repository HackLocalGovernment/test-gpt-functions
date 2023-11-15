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
        expect(result).toEqual(expect.any(String));
    });
});
