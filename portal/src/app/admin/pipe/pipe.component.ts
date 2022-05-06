import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {parseTableQuery} from "../table";

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  constructor(private router: Router, private rs: RequestService, private ms: NzModalService) {

  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
    this.pageIndex = 1;
    this.params.skip = 0;
    if (keyword)
      this.params.keyword = {name: keyword, addr: keyword};
    else
      delete this.params.keyword;
    this.load();
  }

  onQuery(params: NzTableQueryParams) {
    parseTableQuery(params, this.params);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.rs.post('pipe/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/pipe/create"]);
  }

  open(data: any): void {
    this.router.navigate(['/admin/pipe/detail/' + data.id]);
  }

  remove(data: any, i: number) {
    this.rs.get(`pipe/${data.id}/delete`).subscribe(res => {
      this.datum.splice(i, 1);
    });
  }

  enable(data: any) {
    this.rs.get(`pipe/${data.id}/enable`).subscribe(res => {
      data.disabled = false
    });
  }

  disable(data: any) {
    this.rs.get(`pipe/${data.id}/disable`).subscribe(res => {
      data.disabled = true
    });
  }
}
