import {Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ChooseService} from "../choose.service";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-choose-product',
  templateUrl: './choose-product.component.html',
  styleUrls: ['./choose-product.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooseProductComponent),
      multi: true
    }
  ]
})
export class ChooseProductComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {}
  onTouched: any = () => {}

  //内容
  @HostBinding('attr.title')
  id = "";
  name = "";

  @Input()
  showClear: any = false;

  @Output()
  product: EventEmitter<any> = new EventEmitter<any>()

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
    this.rs.get(`product/${this.id}`).subscribe(res=>{
      this.name = res.data.name;
      this.product.emit(res.data);
    })
  }

  choose() {
    this.cs.chooseProduct().subscribe(res=>{
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
