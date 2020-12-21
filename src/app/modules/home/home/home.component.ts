import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from 'src/app/shared/services/meta/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('formData') formData : NgForm;

  jsonInputs: any[] = [
    {
      id: 1,
      label: 'Name',
      name: 'name',
      type: 'text',
      options: []
    },
    {
      id: 2,
      label: 'Email',
      name: 'email',
      type: 'email',
      options: []
    },
    {
      id: 3,
      label: 'Password',
      name: 'password',
      type: 'password',
      options: []
    },
    {
      id: 4,
      label: 'Select',
      name: 'select',
      type: 'select',
      options: [
        {
          name: "Option1",
          value: "option1"
        },
        {
          name: "Option2",
          value: "option2"
        }
      ]
    },
    {
      id: 5,
      label: 'Radio',
      name: 'radio',
      type: 'radio',
      options: [
        {
          name: "Option1",
          value: "option1"
        },
        {
          name: "Option2",
          value: "option2"
        }
      ]
    },
    {
      id: 6,
      label: 'Check box',
      name: 'check',
      type: 'check',
      options: [
        {
          name: "Option1",
          value: "option1"
        },
        {
          name: "Option2",
          value: "option2"
        }
      ]
    }
  ];

  textObject: string = JSON.stringify(this.jsonInputs, undefined, 4);
  errMsg: boolean = false;

  constructor(
    private metaService: MetaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addMeta();
  }

  addMeta() {
    this.metaService.setTitle('Home Page');
    this.metaService.addMeta('title', 'meta title');
    this.metaService.addMeta('description', 'meta description');
    this.metaService.addMeta('keywords', 'meta keywords');
  }

  getJsonInputs(data) {
    try {
      this.jsonInputs = JSON.parse(data);
      this.errMsg = false;
    }
    catch {
      this.errMsg = true;
    }
  }

  getData(data) {
    console.log(data);
    this.toastr.success('Form Submitted Successfully!', 'Success Message', {
      timeOut: 3000
    });
  }

  cancel() {
    this.formData.reset();
  }

}
