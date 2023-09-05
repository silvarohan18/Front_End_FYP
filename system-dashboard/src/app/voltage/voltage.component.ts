import { Component, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { WebsocketService } from '../websocket.service';


@Component({
  selector: 'app-voltage',
  templateUrl: './voltage.component.html',
  styleUrls: ['./voltage.component.css']
})
export class VoltageComponent implements OnInit {

  constructor(private websocketService: WebsocketService) {
    this.websocketService.messages.subscribe((message: string) => {
      const part = message.split(',');
      //console.log(part[0])
      if (part[0] === 'v') {
        const timeString = parseFloat(part[2]);
        // const d:Date = this.setTime(timeString);
        // const timeFormatted = new Date(d);
        // const ms = timeFormatted.getSeconds();
        //console.log(this.convertUTCTimeToHHMMSSMilli(timeString))
        //this.seconds += (parseFloat((this.convertUTCTimeToHHMMSSMilli(timeString))))/1000;
        this.updateGraph(parseFloat(part[1]),timeString);
        // this.updateGraph_ph2(parseFloat(part[2]),this.seconds);
        // this.updateGraph_ph3(parseFloat(part[3]),this.seconds);
      }
    }
    );

  }

  ngOnInit(): void {
    // this.websocketService.messages.subscribe((message: string) => {
    // });
    //this.seconds += 1;
    //this.updateGraph(230,this.seconds)
  //  this.startInterval();
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
        // Perform additional actions for PMU 1
        break;
      case 'pmuCheckbox2':
        console.log('PMU 2 checked:', this.pmu2Checked);
        // Perform additional actions for PMU 2
        break;
      case 'pmuCheckbox3':
        console.log('PMU 3 checked:', this.pmu3Checked);
        // Perform additional actions for PMU 3
        break;
      case 'pmuCheckbox4':
        console.log('PMU 4 checked:', this.pmu4Checked);
        // Perform additional actions for PMU 4
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
yAxisLabel: string = 'VOLTAGE';
timeline: boolean = false;
autoScale: boolean = true;

colorScheme = {
  domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
};

customColors = (value: any) => {
  console.log(value);
  return ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'];
}

  multi = [
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

  multi_ph2 = [
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

  multi_ph3 = [
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
      name: this.convertUTCTimeToHHMMSS(seconds), // Use the formatTime function to get HH:mm
      value: val
    };

    this.multi = [...this.multi];
    this.multi[0].series.push(newSeries);

    if (this.multi[0].series.length > 200) {
      this.multi[0].series.shift();
    }
  }


  updateGraph_ph2(val:number,seconds:number){
    const newSeries = {
      name: this.convertUTCTimeToHHMMSS(seconds), // Use the formatTime function to get HH:mm
      value: val
    };

    this.multi_ph2 = [...this.multi_ph2];
    this.multi_ph2[0].series.push(newSeries);

    if (this.multi_ph2[0].series.length > 200) {
      this.multi_ph2[0].series.shift()
      //this.seconds = 0;
    }
  }

  updateGraph_ph3(val:number,seconds:number){
    const newSeries = {
      name: this.convertUTCTimeToHHMMSS(seconds), // Use the formatTime function to get HH:mm
      value: val
    };
    this.multi_ph3 = [...this.multi_ph3];
    this.multi_ph3[0].series.push(newSeries);

    if (this.multi_ph3[0].series.length > 200) {
      this.multi_ph3[0].series.shift()
      //this.seconds = 0;
    }
  }


  onPause() {
    clearInterval(this.intervalId);
    this.isLiveData = false;

  }

  onResume() {
    // this.startInterval();
  }

  onLive() {
    this.isLiveData = true
    // this.startInterval();
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
    // const hours = String(date.getUTCHours()).padStart(2, '0');
    // const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    // const seconds = String(date.getUTCSeconds()).padStart(2, '0');
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
