export class Education{

    id:string; 
    name:string;
    course:string; 
    year:string; 
    active:string; 
    encodeImg: string;
    token:string; 

    constructor(active?:string){

        this.active = active;
    }


}