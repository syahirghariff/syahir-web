import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { General } from '../model/general';
import { Education } from '../model/education';
import { Profile } from '../model/profile';
import { Technology } from '../model/technology';
import { Job } from '../model/job';
import * as _ from "lodash";

@Injectable({
    providedIn: 'root'
})
export class InformationService {

    private profiles: Array<Profile> = new Array();
    private techs: Array<Technology> = new Array();
    private experience: Array<Job> = new Array();
    private educations: Array<Education> = new Array();

    constructor(private http: HttpClient) {
    }

    display() {
        return this.http.get('/syahirghariff/info/display');
    }

    setDisplay(content: any) {

        if (content) {

            if (content.profiles) {
                this.profiles = content.profiles;
            }

            if (content.techs) {
                this.techs = content.techs;
            }

            if (content.experience) {
                this.experience = content.experience;
            }

            if (content.educations) {
                this.educations = content.educations;
            }
        }
    }

    getProfiles(): Array<Profile> {
        return _.cloneDeep(this.profiles);
    }

    getTechs(): Array<Technology> {
        return _.cloneDeep(this.techs);
    }

    getExperience(): Array<Job> {
        return _.cloneDeep(this.experience);
    }

    getEducation(): Array<Education> {
        return _.cloneDeep(this.educations);
    }
}