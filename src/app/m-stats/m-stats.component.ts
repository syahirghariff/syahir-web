import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseUtil } from '../util/response.util';
import { MStatsService } from './m-stats.service';
import { IpUser } from '../model/ip-user';
import * as _ from "lodash";


@Component({
  selector: 'app-m-stats',
  templateUrl: './m-stats.component.html',
  styleUrls: ['./m-stats.component.scss']
})
export class MStatsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['no', 'ip', 'city', 'country', 'postcode', 'region', 'internetProvider', 'latitude', 'longitude', 'date'];
  dataSource;
  search: any = {};
  ipUsers: Array<IpUser> = new Array();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private mStatsSvc: MStatsService, private respUtil: ResponseUtil) { }

  ngOnInit(): void {
    this.findAll();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  findAll() {
    this.mStatsSvc.findAll().subscribe((resp: any) => {

      this.respUtil.load(resp.status, () => {
        const res = resp.content;

        this.ipUsers = res;
        this.mStatsSvc.setMainList(this.ipUsers);

        this.setDataSource(this.ipUsers);
      })

    })
  }


  onSearchCriteria(event) {

    if (this.mStatsSvc.isSearchEmpty(this.search)) {
      this.ipUsers = this.mStatsSvc.getMainList();
      this.setDataSource(this.ipUsers);
    } else {
      this.ipUsers = _.cloneDeep(this.mStatsSvc.search(this.search));
      this.setDataSource(this.ipUsers);
    }
  }

  setDataSource(val) {
    this.dataSource = new MatTableDataSource<IpUser>(val);
    this.dataSource.paginator = this.paginator;
  }



}

