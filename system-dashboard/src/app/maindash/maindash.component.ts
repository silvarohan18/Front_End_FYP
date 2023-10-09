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
  topValues = {
    voltage: 0,
    frequency: 0,
    current: 0
  };
  data: any;

  constructor(private _data:DataService, private websocketService:WebsocketService){
    const currentDate = new Date();
    const timeZoneOffset = currentDate.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(currentDate.getTime() - timeZoneOffset);
    this.dateTimeValue = adjustedDate.toISOString().slice(0, 16);

    this.websocketService.messages.subscribe((message: string) => {
      const part = message.split(',');

      if (part[0] === 'v1') {
        //const timeString = parseFloat(part[19]);

        if(this.pmu1Checked){
          this.topValues.voltage=parseFloat(part[1])
          this.topValues.frequency=parseFloat(part[7])
          this.topValues.current=parseFloat(part[13])

        }else
        if(this.pmu2Checked){
          this.topValues.voltage=parseFloat(part[2])
          this.topValues.frequency=parseFloat(part[8])
          this.topValues.current=parseFloat(part[14])


        }else{
          this.topValues.voltage=parseFloat(part[3])
          this.topValues.frequency=parseFloat(part[9])
          this.topValues.current=parseFloat(part[15])

        }

        //console.log(this.convertUTCTimeToHHMMSSMilli(timeString))
    }

    });
  }

  ngOnInit(): void {

    this.tableData=this._data.getLiveDataP1()

  }

  onPmuCheckboxChange(checkboxId: string)
  {
    console.log(`Checkbox ${checkboxId} changed`);
    switch (checkboxId)
    {
      case 'pmuCheckbox1':
        this.pmu1Checked=true
        this.pmu2Checked = false;
        this.pmu3Checked = false;
        this.tableData=this._data.getLiveDataP1()

        break;
      case 'pmuCheckbox2':
        this.pmu2Checked=true;
        this.pmu1Checked = false;
        this.pmu3Checked = false;
        this.tableData=this._data.getLiveDataP2()
        break;
      case 'pmuCheckbox3':
        this.pmu3Checked=true;
        this.pmu1Checked = false;
        this.pmu2Checked = false;
        this.tableData=this._data.getLiveDataP3()
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

   
  setTime(time:string):Date{
    const[h,m,sANDm] = time.split(":");
    const[s,ms] = sANDm.split(".");

    const newtime =  new Date();

    newtime.setHours(Number(h));
    newtime.setMinutes(Number(m));
    newtime.setSeconds(Number(s));
    newtime.setMilliseconds(Number(ms));

    return newtime;
  }

   // Add this function to format the time in HH:mm
   formatTime(date: Date): string {
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }

  // Add this function to pad single-digit numbers with leading zeros
  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  convertUTCTimeToHHMMSSMilli(utcTimeInMilliseconds: number): string {
    const date = new Date(utcTimeInMilliseconds * 1000); // Use milliseconds directly
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${milliseconds}`;
  }


  convertUTCTimeToHHMMSS(utcTimeInSeconds: number): string {
    const date = new Date(utcTimeInSeconds * 1000); // Convert seconds to milliseconds
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }
}
