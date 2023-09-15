import { Component, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { WebsocketService } from '../websocket.service';


@Component({
  selector: 'app-current_phase',
  templateUrl: './current_phase.component.html',
  styleUrls: ['./current_phase.component.css']
})
export class Current_phaseComponent implements OnInit
{
  constructor(private websocketService: WebsocketService)
  {
    this.websocketService.messages.subscribe((message: string) => {
      const part = message.split(',');
      if (part[0] === 'v1') {
        const timeString = parseFloat(part[19]);
        this.updateGraph(parseFloat(part[16]),timeString);
        this.updateGraph_ph2(parseFloat(part[17]),timeString)
        this.updateGraph_ph3(parseFloat(part[18]),timeString)
    }
    }
    );

  }

  ngOnInit(): void {

  }

  isLiveData = true
  pmu1Checked: boolean = true;
  pmu2Checked: boolean = false;
  pmu3Checked: boolean = false;
  pmu4Checked: boolean = false;

  onPmuCheckboxChange(checkboxId: string) {
    switch (checkboxId) {
      case 'pmuCheckbox1':
        console.log('PMU 1 hashkajsa:', this.pmu1Checked);
        break;
      case 'pmuCheckbox2':
        console.log('PMU 2 checked:', this.pmu2Checked);
        break;
      case 'pmuCheckbox3':
        console.log('PMU 3 checked:', this.pmu3Checked);
        break;
      case 'pmuCheckbox4':
        console.log('PMU 4 checked:', this.pmu4Checked);
        break;
      default:
        break;
    }
  }

  view: [number, number] = [window.innerWidth, 300];

// chart options
legend: boolean = true;
showLabels: boolean = true;
animations: boolean = true;
xAxis: boolean = true;
yAxis: boolean = true;
showYAxisLabel: boolean = true;
showXAxisLabel: boolean = true;
xAxisLabel: string = 'TIME';
yAxisLabel: string = 'CURRENT PHASE';
timeline: boolean = false;
autoScale: boolean = true;

colorScheme = {
  domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
};

customColors = (value: any) => {
  console.log(value);
  return ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'];
}

C1_phse = [
    {
      name: 'Phase 1',
      series: [
        {
          name: this.convertUTCTimeToHHMMSS(0),
          value: 1
        },
        {
          name: this.convertUTCTimeToHHMMSS(0),
          value: 2
        }
      ]
    },
  ];

  c2_phse = [
    {
      name: 'Phase 2',
      series: [
        {
          name: this.convertUTCTimeToHHMMSS(0),
          value: 1
        },
        {
          name: this.convertUTCTimeToHHMMSS(0),
          value: 2
        }
      ]
    },
  ];

  C3_phse = [
    {
      name: 'Phase 3',
      series: [
        {
          name: this.convertUTCTimeToHHMMSS(0),
          value: 1
        },
        {
          name: this.convertUTCTimeToHHMMSS(0),
          value: 2
        }
      ]
    },
  ];



  intervalId: any;
  seconds = 0
  time = 50

  updateGraph(val: number, seconds: number) {
    const newSeries = {
      name: this.convertUTCTimeToHHMMSS(seconds),
      value: val
    };

    this.C1_phse = [...this.C1_phse];
    this.C1_phse[0].series.push(newSeries);

    if (this.C1_phse[0].series.length > 200) {
      this.C1_phse[0].series.shift();
    }
  }


  updateGraph_ph2(val:number,seconds:number){
    const newSeries = {
      name: this.convertUTCTimeToHHMMSS(seconds),
      value: val
    };

    this.c2_phse = [...this.c2_phse];
    this.c2_phse[0].series.push(newSeries);

    if (this.c2_phse[0].series.length > 200) {
      this.c2_phse[0].series.shift()

    }
  }

  updateGraph_ph3(val:number,seconds:number){
    const newSeries = {
      name: this.convertUTCTimeToHHMMSS(seconds),
      value: val
    };
    this.C3_phse = [...this.C3_phse];
    this.C3_phse[0].series.push(newSeries);

    if (this.C3_phse[0].series.length > 200) {
      this.C3_phse[0].series.shift()
    }
  }


  onPause() {
    clearInterval(this.intervalId);
    this.isLiveData = false;

  }

  onResume() {

  }

  onLive() {
    this.isLiveData = true

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


   formatTime(date: Date): string {
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  convertUTCTimeToHHMMSSMilli(utcTimeInMilliseconds: number): string {
    const date = new Date(utcTimeInMilliseconds * 1000);
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
