import { Injectable ,OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {

  tableData: any[] = [];
  jsonData: any[] = [];
  livedatap1:any[] = [];
  livedatap2:any[] = [];
  livedatap3:any[] = [];


  constructor(private http: HttpClient, private websocketService:WebsocketService) {
    this.websocketService.messages.subscribe((message: string) => {
      const part = message.split(',');
      if (part[0] === 'v1') {
        const newData = {
          //phase 1 data
          timestamp:this.convertUTCTimeToHHMMSS(parseFloat(part[19])),
          voltage: part[1],
          voltage_phase: part[4],
          current: part[13],
          frequency: part[7],
          rocof: part[10],
          gps: { lat:6.078155 , lon: 80.192199 },
        };

        const newDatap2 = {
          //phase 2 data
          timestamp:this.convertUTCTimeToHHMMSS(parseFloat(part[19])),
          voltage: part[2],
          voltage_phase: part[4],
          current: part[14],
          frequency: part[8],
          rocof: part[11],
          gps: { lat:6.078155 , lon: 80.192199  },
        };

        const newDatap3 = {
          //phase 3 data
          timestamp:this.convertUTCTimeToHHMMSS(parseFloat(part[19])),
          voltage: part[3],
          voltage_phase: part[4],
          current: part[15],
          frequency: part[9],
          rocof: part[12],
          gps: { lat:6.078155 , lon: 80.192199  },
        };

        // add the new data to the livedata array
        this.livedatap1.unshift(newData);
        this.livedatap2.unshift(newDatap2);
        this.livedatap3.unshift(newDatap3);


      }
    });
  }


  ngOnInit(){}


  getData() {
    /*this.http.get<any[]>('http://localhost:5000/api/datalat').subscribe(
      (data) => {
        for (const item of data) {


          this.livedata.push(item)
          // Here, 'item' represents each JSON object in the array
          console.log(item); // You can access properties of 'item' as needed
        }


         this.livedata = this.tableData;

         this.livedata.push()


        console.log(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
        console.error('Status:', error.status);
        console.error('Status Text:', error.statusText);
        console.error('Response:', error.error);
      }
    );*/
  }


  getAllData(){
    return this.tableData
  }

  getLiveDataP1(){
    return this.livedatap1
  }
  getLiveDataP2(){
    return this.livedatap2
  }

  getLiveDataP3(){
    return this.livedatap3
  }

  convertUTCTimeToHHMMSS(utcTimeInSeconds: number): string {
    const date = new Date(utcTimeInSeconds * 1000); // Convert seconds to milliseconds
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
}
