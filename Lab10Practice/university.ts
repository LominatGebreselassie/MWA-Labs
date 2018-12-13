export class University {
    name: string;
    dept: string;
    constructor(name: string, dept: string) { 
        this.name = name;
        this.dept = dept;
    };
    graduation(year: number) {
        console.log(`Graduationg ${this.dept} ${year} students`);
    }
}