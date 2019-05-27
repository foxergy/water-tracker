export class Day{
    name:string;
    numberInMonth:number;
    date: Date;

    constructor(name:string, numberInMonth: number, date:Date){
        this.name=name;
        this.numberInMonth=numberInMonth;
        this.date=date;
    }
}