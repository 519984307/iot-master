import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {TunnelEditComponent} from '../tunnel-edit/tunnel-edit.component';
import {NzTableQueryParams} from 'ng-zorro-antd';
import {Router} from "@angular/router";
import {TabRef} from "../tabs/tabs.component";

@Component({
  selector: 'app-tunnel',
  templateUrl: './tunnel.component.html',
  styleUrls: ['./tunnel.component.scss']
})
export class TunnelComponent implements OnInit {

  tunnels: [];
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  sortField = null;
  sortOrder = null;
  filters = [];
  keyword = '';
  loading = false;

  statusFilters = [{text: '启动', value: 1}];


  constructor(private as: ApiService, private router: Router, private tab: TabRef) {
    tab.name = '协议适配';
  }

  ngOnInit(): void {
  }

  reload(): void {
    this.pageIndex = 1;
    this.keyword = '';
    this.load();
  }

  load(): void {
    this.loading = true;
    this.as.post('tunnels', {
      offset: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      sortKey: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      keyword: this.keyword,
    }).subscribe(res => {

      this.tunnels = res.data;
      this.total = res.total;
    }, error => {
      console.log('error', error);
    }, () => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(['/admin/tunnel-create']);
  }

  edit(c): void {
    this.router.navigate(['/admin/tunnel-edit/' + c.id]);
  }

  onTableQuery(params: NzTableQueryParams): void {
    const {pageSize, pageIndex, sort, filter} = params;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
    const currentSort = sort.find(item => item.value !== null);
    this.sortField = (currentSort && currentSort.key) || null;
    this.sortOrder = (currentSort && currentSort.value) || null;
    this.filters = filter;
    this.load();
  }

  search(): void {
    this.pageIndex = 1;
    this.load();
  }
}
