
export class Technology {
    id: string;
    type: string;
    name: string;
    seq: number;
    svg: string;
    active: string;

    constructor(active?: string, type?: string) {
        this.active = active;
        this.type = type;
    }
}