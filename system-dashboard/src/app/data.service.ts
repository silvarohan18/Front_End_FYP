import { Injectable ,OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {

  tableData: any[] = [];
  jsonData: any[] = [];
  livedata:any[] = [];
  constructor(private http: HttpClient, private websocketService:WebsocketService) { 
    this.websocketService.messages.subscribe((message: string) => {
      const part = message.split(',');
      if (part[0] === 'v1') {
        const newData = {
          //phase 1 data
          timestamp:part[19],
          voltage: part[1],
          voltage_phase: part[4],
          current: part[13],
          current_phase: part[16],
          frequency: part[7],
          rocof: part[10],
          gps: { lat: 40.7128, lon: -74.0060 },
        };

        // Assuming you want to add the new data to the tableData array
        this.tableData.push(newData);
       
      }
    });
  }


  ngOnInit(){}


  getData() {
    this.http.get<any[]>('http://localhost:5000/api/datalat').subscribe(
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
    );
  }
  
  getAllData(){
    return this.tableData
  }

  
  getLiveData(){
    return this.livedata

  }
}
