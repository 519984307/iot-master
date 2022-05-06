import {Component, forwardRef, Input, HostBinding, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ChooseService} from "../choose.service";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-choose-link',
  templateUrl: './choose-link.component.component.html',
  styleUrls: ['./choose-link.component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooseLinkComponent),
      multi: true
    }
  ]
})
export class ChooseLinkComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {}
  onTouched: any = () => {}

  //内容
  @HostBinding('attr.title')
  id = "";
  name = "";

  @Input()
  showClear: any = false;

  constructor(private cs: ChooseService, private rs: RequestService) { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.id = obj;
    this.load();
  }

  load() {
    if (!this.id) return;
    this.name = "加载中...";
    this.rs.get(`tunnel/${this.id}`).subscribe(res=>{
      this.name = res.data.name || res.data.sn || res.data.remote;
    })
  }

  choose() {
    this.cs.chooseLink().subscribe(res=>{
      if (res){
        this.id = res;
        this.load();
        this.onChanged(res);
        this.onTouched();
      }
    })
  }

  clear() {
    this.id = '';
    this.name = '';
    this.onChanged('');
    this.onTouched();
  }
}
