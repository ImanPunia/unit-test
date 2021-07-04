export class userInfo{
    salary : number;
    bonus: number;

    constructor(salary : number, bonus: number) {
        this.salary = salary;
        this.bonus = bonus;
    }

    incrementSalary() {
        return this.salary = this.salary + 1000 ;
    }

    calculateBonusPercentage(){
        return this.bonus/this.salary * 100;
    }

    displaySalary(){
        return this.salary;
    }


}