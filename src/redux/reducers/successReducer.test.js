import { CORRECT_GUESS } from '../types'
import successReducer from './successReducer';

describe('successReducer', () => {
    it('returns default state of `false`', () => {
        const state = successReducer();
        expect(state).toBe(false);
    });

    it('returns `true` after action of type `CORRECT_GUESS`', () => {
        const state = successReducer(undefined, { type: CORRECT_GUESS });
        expect(state).toBe(true);
    });
})