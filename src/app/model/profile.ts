export class Profile{
    id:string;
    name:string; 
    active:string;
    type:string;
    svg:string;
    encodeImg:string;
    token:string;

    constructor(type?:string, active?:string, svg?:string, name?:string) {
        this.type = type;
        this.active = active;

        if(svg) {
            this.svg = svg; 
        }

        if(name) {
            this.name = name;
        }
    }
}