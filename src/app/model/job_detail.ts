export class JobDetail {

    id: string;
    jobId: string;
    post: string;
    active: string;

    constructor(active?: string) {
        this.active = active;
    }
}