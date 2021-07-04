import {sum} from './testingPractice';

describe('my first unit test' , () => {
    it('check boolean to be true' , () => {
        expect(true).toBe(true);
    })

    it('check sum of 2 didgits', () => {
        expect(4+4).toBe(8);
    })

    it('should do correct summation' , () => {
        let a = 4;
        let b = 7;
        let y = sum(a,b);
        expect(y).toBe(11);
    })
})
