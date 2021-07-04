import {userInfo} from './userData';

describe('test cases to verify user information', () => {
    let userinfo: userInfo;

    beforeEach(() => {
       let salary = 10000;
       let bonus = 500; 
       userinfo = new userInfo(salary,bonus);
    })

    it('should have constructor' , () => {
        expect(userinfo).not.toBeNull();
    })

    it('set the name' , () => {
        userinfo.salary = 20000;
        expect(userinfo.salary).toBe(20000);
    })

    it('set bonus field' , () => {
        expect(userinfo.bonus).toEqual(500);
    })

    it('calculate right increment' , () => {
        expect(userinfo.incrementSalary()).toBe(11000);
    })

    it('check bonus percentage', () => {
        let bonusPercentage = userinfo.calculateBonusPercentage();
        expect(bonusPercentage).toBe(5);
    })

})