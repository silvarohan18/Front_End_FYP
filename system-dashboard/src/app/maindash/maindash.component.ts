import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WebsocketService } from '../websocket.service';

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

  public isLiveData=true
  tableData:any;
  topValues:any;
  data: any;

  constructor(private _data:DataService, private websocketService:WebsocketService){
    const currentDate = new Date();
    const timeZoneOffset = currentDate.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(currentDate.getTime() - timeZoneOffset);
    this.dateTimeValue = adjustedDate.toISOString().slice(0, 16);

    this.websocketService.messages.subscribe((message: string) => {
      const part = message.split(',');

      if (part[0] === 'v') 
      {
        this.topValues.voltage=parseFloat(part[1]);
      }

      else if(part[0]==='c')
      {
        this.topValues.current=parseFloat(part[1]);
      }

      else if(part[0]==='f2'){
        this.topValues.frequency=parseFloat(part[1]);
      }
    });
  }

  ngOnInit(): void {
   
    this.tableData=this._data.getLiveData()
  
  }

  onPmuCheckboxChange(checkboxId: string) 
  {
    switch (checkboxId) 
    {
      case 'pmuCheckbox1':
        this.pmu2Checked = false;
        this.pmu3Checked = false;
      
        break;
      case 'pmuCheckbox2':
        this.pmu1Checked = false;
        this.pmu3Checked = false;
        break;
      case 'pmuCheckbox3':
        this.pmu1Checked = false;
        this.pmu2Checked = false;
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

  uncheckAllPMUexcept(pmu:string)
  {

  }

  onLiveData()
  {
    this.isLiveData=true;
  }

  onShowData()
  {
    this.isLiveData=false;
    console.log(this.convertUTCTimeToHHMMSS)
  }

  setTime(time:string):Date
  {
    const[h,m,sANDm] = time.split(":");
    const[s,ms] = sANDm.split(".");
    const newtime =  new Date();

    newtime.setHours(Number(h));
    newtime.setMinutes(Number(m));
    newtime.setSeconds(Number(s));
    newtime.setMilliseconds(Number(ms));

    return newtime;
  }

   formatTime(date: Date): string 
   {
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }

  padZero(num: number): string 
  {
    return num < 10 ? `0${num}` : `${num}`;
  }

  convertUTCTimeToHHMMSSMilli(utcTimeInMilliseconds: number): string {
    const date = new Date(utcTimeInMilliseconds * 1000); 
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${milliseconds}`;
  }

  convertUTCTimeToHHMMSS(utcTimeInSeconds: number): string {
    const date = new Date(utcTimeInSeconds * 1000); 
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
}