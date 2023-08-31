import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit{

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
yAxisLabel: string = 'Current';
timeline: boolean = true;

colorScheme = {
  domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
};

customColors = (value: any) => {
  console.log(value);
  return ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'];
}

  multi = [
    {
      name: 'PMU 1',
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
    },
    {
      name: 'PMU 2',
      series: [
        {
          name: 0,
          value: 2
        },
        {
          name: 1,
          value: 1
        }
      ]
    }

  ];


  intervalId: any;
  seconds = 0
  time = 50

  ngOnInit(): void {
    this.startInterval()
  }

  // Function to start the interval
  startInterval() {
    this.intervalId = setInterval(() => {
      this.updateSeconds();
    }, this.time);
  }

  updateSeconds(): void {

    this.seconds = this.seconds + 1
    this.updateMultiArray(this.seconds);



  }

  updateMultiArray(seconds: number): void {
    const newSeries = {
      name: seconds,
      value: (Math.random() * (10 - 5) + 5)
    };

    const newSeries2 = {
      name: seconds,
      value: (Math.random() * (10 - 5) + 5)
    };
    // Create a new array with the updated series and assign it to the 'multi' property
    this.multi = [...this.multi];
    this.multi[0].series.push(newSeries);
    this.multi[1].series.push(newSeries2);

    if (this.multi[0].series.length > 200) {
      this.multi[0].series.shift()
    }
    if (this.multi[1].series.length > 200) {
      this.multi[1].series.shift()
    }
  }



  onPause() {
    clearInterval(this.intervalId);
    this.isLiveData = false;

  }

  onResume() {
    this.startInterval();
  }

  onLive() {
    this.isLiveData = true
    this.startInterval();
  }


}