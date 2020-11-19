import { JobDetail } from './job_detail';

export class Job {

    id: string;
    companyName: string;
    encodeImg: string;
    title: string;
    year: string;
    jobDetail: JobDetail;
    active: string;

    constructor(active?: string) {
        this.active = active;
    }
}