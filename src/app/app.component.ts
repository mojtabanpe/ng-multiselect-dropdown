import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from '../app/ng-multiselect-dropdown3/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  coverageDropdownSettings = {
    singleSelection: true,
    idField: 'code',
    textField: 'province',
    allowSearchFilter: true,
    closeDropDownOnSelection: true,
    noDataAvailablePlaceholderText: 'داده ای برای نمایش وجود ندارد'
  };
  coverages = [{ "code": "1", "province": "آذربایجان شرقی" }, { "code": "2", "province": "آذربایجان غربی" }, { "code": "3", "province": "اردبیل" }, { "code": "4", "province": "اصفهان" }, { "code": "5", "province": "البرز" }, { "code": "6", "province": "ایلام" }, { "code": "7", "province": "بوشهر" }, { "code": "8", "province": "تهران" }, { "code": "9", "province": "چهارمحال و بختیاری" }, { "code": "10", "province": "خراسان جنوبی" }, { "code": "11", "province": "خراسان رضوی" }, { "code": "12", "province": "خراسان شمالی" }, { "code": "13", "province": "خوزستان" }, { "code": "14", "province": "زنجان" }, { "code": "15", "province": "سمنان" }, { "code": "16", "province": "سیستان و بلوچستان" }, { "code": "17", "province": "فارس" }, { "code": "18", "province": "قزوین" }, { "code": "19", "province": "قم" }, { "code": "20", "province": "کردستان" }, { "code": "21", "province": "کرمان" }, { "code": "22", "province": "کرمانشاه" }, { "code": "23", "province": "کهگیلویه و بویراحمد" }, { "code": "24", "province": "گلستان" }, { "code": "25", "province": "گیلان" }, { "code": "26", "province": "لرستان" }, { "code": "27", "province": "مازندران" }, { "code": "28", "province": "مرکزی" }, { "code": "29", "province": "هرمزگان" }, { "code": "30", "province": "همدان" }, { "code": "31", "province": "یزد" }]
  selectedCoverages = [];
  ngOnInit() {
  }
  onProvinceSelect(event: any): void {
    console.log(this.selectedCoverages);
    
    }
  }
