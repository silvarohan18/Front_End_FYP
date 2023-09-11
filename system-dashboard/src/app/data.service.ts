import { Injectable ,OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WebsocketService } from './websocket.service';
@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  tableData: any[] = [
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:00',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },
    {
      timestamp: '2023-06-25 10:00:01',
      voltage: 120,
      current: 5,
      frequency: 60,
      rocof: 0.1,
      gps: { lat: 40.7128, lon: -74.0060 }
    },

    // Add more data objects
  ];
  jsonData: any[] = [];
  livedata:any[] = [];
  constructor(private http: HttpClient, private websocketService:WebsocketService) { 
    setInterval(()=>{
      this.getData()
      // if(this.livedata.length>16){
      //   this.livedata.shift()
      // }
      // this.livedata.push({timestamp:new Date().toISOString().slice(0, 19).replace('T', ' '),voltage:(Math.random() * (240 - 225) + 225).toFixed(6),current:(Math.random() * (10 - 5) + 5).toFixed(6),frequency:(Math.random() * (52 - 48) + 48).toFixed(6),rocof:(Math.random() * (4) -2).toFixed(6),gps: { lat: 40.7128, lon: -74.0060 }})
    },2000)
  

  // getData(){
  //   const url = 'http://localhost:8080/'
  //   this.http.get(url).subscribe((res)=>{
  //     this.livedata = res
  //     console.log(this.livedata)
  //   },(error) => {
  //     console.error('Error:', error);
  //   })

  this.websocketService.messages.subscribe((message: string) => {
    const part = message.split(',');

    var voltage=0;
    var frequency=0;
    if (part[0] === 'v') {
      //this.topValues.voltage=parseFloat(part[1]);
      voltage=parseFloat(part[1]);
       
    }

    if(part[0]==='f2'){
     // this.topValues.frequency=parseFloat(part[1]);
     frequency=parseFloat(part[1]);
    }
    
    if(this.livedata.length>16){
      this.livedata.shift()
    }
    this.livedata.push({timestamp:new Date().toISOString().slice(0, 19).replace('T', ' '),voltage:voltage.toFixed(6),current:(Math.random() * (10 - 5) + 5).toFixed(6),frequency:frequency.toFixed(6),rocof:(Math.random() * (4) -2).toFixed(6),gps: { lat: 40.7128, lon: -74.0060 }})


  });

  }
  ngOnInit() {}
  getData() {
    this.http.get<any[]>('http://localhost:5000/api/datalat').subscribe(
      (data) => {
        for (const item of data) {
          
          this.livedata.push(item)
          // Here, 'item' represents each JSON object in the array
          console.log(item); // You can access properties of 'item' as needed
        }
    
         this.livedata = this.tableData;

         this.livedata.push({timestamp:new Date().toISOString().slice(0, 19).replace('T', ' '),voltage:(Math.random() * (240 - 225) + 225).toFixed(6),current:(Math.random() * (10 - 5) + 5).toFixed(6),frequency:(Math.random() * (52 - 48) + 48).toFixed(6),rocof:(Math.random() * (4) -2).toFixed(6),gps: { lat: 40.7128, lon: -74.0060 }})
    
        console.log(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
        console.error('Status:', error.status);
        console.error('Status Text:', error.statusText);
        console.error('Response:', error.error);
      }
    );
  }
  
  getAllData(){
    return this.tableData
  }

  
  getLiveData(){
    return this.livedata

  }
}
