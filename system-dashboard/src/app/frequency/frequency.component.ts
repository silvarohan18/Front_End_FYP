import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.css']
})
export class FrequencyComponent implements OnInit{

  constructor(private websocketService: WebsocketService) {
    this.websocketService.messages.subscribe((message: string) => {
      const part = message.split(',');
      //console.log(part[0])
      if (part[0] === 'v') {
        const timeString = part[5];
        //const timeFormatted = moment(timeString).format('HH:mm:ss')
        const d:Date = this.setTime(timeString);
        const timeFormatted = new Date(d);
        const ms = timeFormatted.getSeconds();
        //console.log(timeString)
        this.seconds_ph1 += d.getMilliseconds();
        this.updateGraph(parseFloat(part[4]),this.seconds_ph1);
        //console.log((part[3]))
      }

      else if (part[0] === 'f2') {
        const timeString = part[2];
        const d:Date = this.setTime_ph2(timeString);
        const timeFormatted = new Date(d);
        const ms = timeFormatted.getSeconds();
        //console.log(part[1])
       // this.seconds_ph1 += d.getMilliseconds();
        this.updateGraph_ph2(parseFloat(part[1]),this.seconds_ph1);
       // console.log((part[3]))
      }

      else if (part[0] === 'f3') {
        // const timeString = part[2];
        // const d:Date = this.setTime_ph2(timeString);
        // const timeFormatted = new Date(d);
        // const ms = timeFormatted.getSeconds();
        //console.log(part[1])
        //this.seconds_ph1 += d.getMilliseconds();
        this.updateGraph_ph3(parseFloat(part[1]),this.seconds_ph1);
       // console.log((part[3]))
      }



    });
  }

  isLiveData = true

  pmu1Checked: boolean = true;
  pmu2Checked: boolean = false;
  pmu3Checked: boolean = false;
  pmu4Checked: boolean = false;

  onPmuCheckboxChange(checkboxId: string) {
    switch (checkboxId) {
      case 'pmuCheckbox1':
        console.log('PMU 1 checked:', this.pmu1Checked);
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
animations: boolean = false;
xAxis: boolean = true;
yAxis: boolean = true;
showYAxisLabel: boolean = true;
showXAxisLabel: boolean = true;
xAxisLabel: string = 'Time';
yAxisLabel: string = 'Frequency';
timeline: boolean = false;

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
          name: 0,
          value: 1
        },
        {
          name: 1,
          value: 2
        }
      ]
    }
  ];

  multi_ph2 = [
    {
      name: 'Phase 2',
      series: [
        {
          name: 0,
          value: 1
        },
        {
          name: 1,
          value: 2
        }
      ]
    }
  ];

  multi_ph3 = [
    {
      name: 'Phase 3',
      series: [
        {
          name: 0,
          value: 1
        },
        {
          name: 1,
          value: 2
        }
      ]
    }
  ];

  intervalId: any;
  seconds_ph1 = 0
  seconds_ph2 = 0
  time = 50

  ngOnInit(): void {
    //this.startInterval()
  }

  onPause() {
    clearInterval(this.intervalId);
    this.isLiveData = false;

  }

  onResume() {
    //this.startInterval();
  }

  onLive() {
    this.isLiveData = true
    //this.startInterval();
  }

  updateGraph(val:number,seconds:number){

    const newSeries = {
      name: seconds,
      value: val
    };

    this.multi = [...this.multi];
    this.multi[0].series.push(newSeries);

    if (this.multi[0].series.length > 200) {
      this.multi[0].series.shift()
    }
  }

  updateGraph_ph2(val:number,seconds:number){

    const newSeries = {
      name: seconds,
      value: val
    };

    this.multi_ph2 = [...this.multi_ph2];
    this.multi_ph2[0].series.push(newSeries);

    if (this.multi_ph2[0].series.length > 200) {
      this.multi_ph2[0].series.shift()
    }
  }

  updateGraph_ph3(val:number,seconds:number){

    const newSeries = {
      name: seconds,
      value: val
    };

    this.multi_ph3 = [...this.multi_ph3];
    this.multi_ph3[0].series.push(newSeries);

    if (this.multi_ph3[0].series.length > 200) {
      this.multi_ph3[0].series.shift()
    }
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
  
  setTime_ph2(time:string):Date{
    const[h,m,sANDm] = time.split(":");
    const[s,ms] = sANDm.split(".");

    const newtime =  new Date();

    newtime.setHours(Number(h));
    newtime.setMinutes(Number(m));
    newtime.setSeconds(Number(s));
    newtime.setMilliseconds(Number(ms));

    return newtime;
  }

}