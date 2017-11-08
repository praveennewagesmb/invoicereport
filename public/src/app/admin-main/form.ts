export class Form {
    constructor(
        public _id: number = 5,
        public title: string = "",
        public editable: boolean = false,
    ) {}
}
export class emp { 
        _id: number;
        empId:  String;
        empName: String;
        dojDetails: Date;
        dopDetails: Date;
        benefits: Array<benefits> = [];
        roleGroup: Array<roleGroup> = [];
        ctcDetails: Array<ctcDetails> = [];
}

export class benefits {
    info: String;
    startDate: Date;
}

export class roleGroup {
    role: String;
    startDate: Date;
}

export class ctcDetails {
    salary: Number;
    epf: Number;
    wf: Number;
    cl: Number;
    insurance: Number;
    gratuity: Number;
    month: Date;
}
