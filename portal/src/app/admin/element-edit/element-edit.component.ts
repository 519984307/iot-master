import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.scss']
})
export class ElementEditComponent implements OnInit {
  id: any;
  submitting = false;
  protocols: any = [];
  codes: any = [{name:'请选择协议'}];

  basicForm: FormGroup = new FormGroup({});
  data: any = {
    "name": "新建元件",
    "type": "",
    "tags": [],
    "image": "",
    "protocol": "",
    "manufacturer": "",
    "version": "",
    "data_points": [],
    "variables": [],
    "commands": [],
    "collectors": [],
    "validators": [],
    "jobs": [],
    "scripts": [],
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    if (this.id) this.load();
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      type: [this.data.type, []],
      tags: [this.data.tags, []],
      image: [this.data.image, []],
      protocol: [this.data.protocol, []],
      manufacturer: [this.data.manufacturer, []],
      version: [this.data.version, []],

      data_points: [this.data.data_points || []],
      variables: [this.data.variables || []],
      commands: [this.data.commands || []],
      collectors: [this.data.collectors || []],
      validators: [this.data.validators || []],
      jobs: [this.data.jobs || []],
      scripts: [this.data.scripts || []],
    });
  }

  ngOnInit(): void {
    this.rs.get('protocol/list').subscribe(res => {
      this.protocols = res.data;
      this._checkCodes();
    })
  }


  load(): void {
    this.rs.get('element/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.buildForm();
      this._checkCodes();
    });
  }

  _checkCodes(): void{
    this.protocols.forEach((p: any) => {
      if (p.name === this.data.protocol) {
        this.codes = p.codes;
      }
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'element/' + this.id + '/setting' : 'element/create';
    this.rs.post(uri, this.basicForm.value).subscribe(res => {
      this.message.success("提交成功");
    }).add(() => {
      this.submitting = false;
    })
  }

  change() {
    //console.log('change', e)
    this.data = this.basicForm.value;
  }

  onProtocolChange($event: string) {
    console.log($event)
    this.protocols.forEach((p: any) => {
      if (p.name === $event) {
        this.codes = p.codes;
      }
    })

  }
}
