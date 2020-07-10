import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  industries = [
    {id: 1, name: 'Agriculture'},
    {id: 2, name: 'Manufacturing'},
    {id: 3, name: 'Energy'},
    {id: 4, name: 'Transportation'},
    {id: 5, name: 'Finance'}
  ];

  submitCompany(form){
    console.log(form.value);
    alert('The form was submitted');
    form.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
