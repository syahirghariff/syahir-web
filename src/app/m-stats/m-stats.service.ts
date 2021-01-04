import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IpUser } from '../model/ip-user';
import * as _ from "lodash";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
    providedIn: 'root'
})
export class MStatsService {

    private mainList: Array<IpUser> = new Array();

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get('/syahirghariff/stats/find_all');
    }

    getApi() {
        return this.http.get('https://ipapi.co/json/');
    }

    setApi(content: any) {
        const object = JSON.stringify(content);
        const data = btoa(object);
        this.http.post('/syahirghariff/stats/set', data).subscribe((resp: any) => { });
    }

    isSearchEmpty(ipUser: IpUser): boolean {

        var result = true;
        const ip = _.cloneDeep(ipUser);

        Object.values(ip).forEach(val => {
            if (val) {
                result = false;
            }
        })

        return result;

    }

    setMainList(ipUsers: Array<IpUser>) {
        this.mainList = _.cloneDeep(ipUsers);
    }

    getMainList(): Array<IpUser> {
        return _.cloneDeep(this.mainList);
    }

    search(search: IpUser): Array<IpUser> {

        var res: Array<IpUser> = new Array();

        const list = _.cloneDeep(this.mainList);

        _.forEach(list, (value) => {

            // Ip Address
            if (search.ip) {

                var upper1 = _.toUpper(value.ip);
                var upper2 = _.toUpper(search.ip);

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }
            }

            // City 
            if (search.city) {

                var upper1 = _.toUpper(value.city);
                var upper2 = _.toUpper(search.city);

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }
            }

            // Country 
            if (search.country) {

                var upper1 = _.toUpper(value.country);
                var upper2 = _.toUpper(search.country);

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }

            }

            // Postcode
            if (search.postcode) {
                var upper1 = _.toUpper(value.postcode);
                var upper2 = _.toUpper(search.postcode);

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }
            }

            // Region 
            if (search.region) {
                var upper1 = _.toUpper(value.region);
                var upper2 = _.toUpper(search.region);

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }
            }

            // Internet Provider 
            if (search.internetProvider) {
                var upper1 = _.toUpper(value.internetProvider);
                var upper2 = _.toUpper(search.internetProvider);

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }
            }

            // Latitude 
            if (search.latitude) {
                var upper1 = _.toUpper(_.toString(value.latitude));
                var upper2 = _.toUpper(_.toString(search.latitude));

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }

            }

            // Longitude
            if (search.longitude) {
                var upper1 = _.toUpper(_.toString(value.longitude));
                var upper2 = _.toUpper(_.toString(search.longitude));

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }

            }

            // Date
            if (search.date) {
                var upper1 = _.toUpper(_.toString(value.date));
                var upper2 = _.toUpper(_.toString(search.date));

                if (_.includes(upper1, upper2)) {
                    res.push(value);
                }

            }
        })

        return res;
    }
} 