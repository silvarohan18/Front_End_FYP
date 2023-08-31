import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-maindash',
  templateUrl: './maindash.component.html',
  styleUrls: ['./maindash.component.css']
})
export class MaindashComponent implements OnInit{


  dateTimeValue: string;

  pmu1Checked=true
  pmu2Checked=false
  pmu3Checked=false
  pmu4Checked=false

  public isLiveData=true
  tableData:any;

  constructor(private _data:DataService){
    const currentDate = new Date();
    const timeZoneOffset = currentDate.getTimezoneOffset() * 60000; // Time zone offset in milliseconds
    const adjustedDate = new Date(currentDate.getTime() - timeZoneOffset);
    this.dateTimeValue = adjustedDate.toISOString().slice(0, 16);
  }

  ngOnInit(): void {
    this.tableData=this._data.getLiveData()
    console.log(this.tableData)
  }

  onPmuCheckboxChange(checkboxId: string) {
    switch (checkboxId) {
      case 'pmuCheckbox1':
        this.pmu2Checked = false;
        this.pmu3Checked = false;
        this.pmu4Checked = false;
        break;
      case 'pmuCheckbox2':
        this.pmu1Checked = false;
        this.pmu3Checked = false;
        this.pmu4Checked = false;
        break;
      case 'pmuCheckbox3':
        this.pmu1Checked = false;
        this.pmu2Checked = false;
        this.pmu4Checked = false;
        break;
      case 'pmuCheckbox4':
        this.pmu1Checked = false;
        this.pmu2Checked = false;
        this.pmu3Checked = false;
        break;
      default:
        break;
    }
  }

  uncheckAllPMUexcept(pmu:string){

  }

  onLiveData(){
    this.isLiveData=true;
  }

  onShowData(){
    this.isLiveData=false;
    console.log(this.dateTimeValue)
  }
}
