import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private _router:Router,private _auth:AuthService){}
  

  mainCardImage: string = 'https://github.com/silvarohan18/test/blob/main/smartgrid.jpeg?raw=true';

  features = [
    { title: 'VOLTAGE', description: 'Voltage, often referred to as electrical potential difference, is a fundamental concept in electrical engineering and physics. It measures the force that drives electric current through a circuit.', imageURL: 'https://github.com/silvarohan18/test/blob/main/voltage.jpeg?raw=true' },
    { title: 'CURRENT', description: 'Current, an essential principle in electrical engineering, signifies the flow of electric charge in a circuit. It is measured in amperes (A) and is the dynamic counterpart to voltage, representing the rate at which electrons move through a conductor.  ', imageURL: 'https://github.com/silvarohan18/test/blob/main/power.jpg?raw=true' },
    { title: 'FREQUENCY', description: 'Frequency, a key concept in physics and engineering, characterizes the number of cycles or oscillations of a periodic phenomenon that occur in a unit of time. In the context of electrical systems.', imageURL: 'https://github.com/silvarohan18/test/blob/main/voltage.jpeg?raw=true' },
    { title: 'ROCOF', description: 'Rate of Change of Frequency (ROCOF) denotes the speed at which the frequency of an electrical system changes over time. It is pivotal in detecting grid disturbances and maintaining stability.', imageURL: 'https://github.com/silvarohan18/test/blob/main/voltage.jpeg?raw=true' },
    { title: 'PHASE', description: 'Phase, a fundamental concept in electrical engineering, signifies the temporal alignment of waveforms. It determines signal synchronization and aids in analyzing complex circuit interactions and relationships.', imageURL: 'https://github.com/silvarohan18/test/blob/main/voltage.jpeg?raw=true' },
  ];

  // Sample data for person cards
  persons = [
    { name: 'MADHURA', details: '"I, Madhura, am deeply passionate about Electrical and Electronic engineering. This is not merely an academic pursuit for me; it is an integral part of my professional identity. As the technological landscape continually evolves, I find myself engrossed in the detailed nuances of circuits, systems, and the broader spectrum of electronic innovations. An essential facet of my professional persona. In an ever-evolving technological milieu, I am captivated by intricate circuitry, system dynamics, and the vast realm of electronic advancements."', imageURL:'https://github.com/silvarohan18/test/blob/main/powel.jpg?raw=true'},
    { name: 'PIYUMAL', details: '"I, Piyumal Dassanayake, am deeply passionate about Electrical and Electronic engineering. This is not merely an academic pursuit for me; it is an integral part of my professional identity. As the technological landscape continually evolves, I find myself engrossed in the detailed nuances of circuits, systems, and the broader spectrum of electronic innovations. An essential facet of my professional persona. In an ever-evolving technological milieu, I am captivated by intricate circuitry, system dynamics, and the vast realm of electronic advancements."', imageURL: 'https://github.com/silvarohan18/test/blob/main/voli.jpg?raw=true' },
    { name: 'ROHAN', details: '"I am Rohan, an undergraduate student at the University of Ruhuna, Faculty of Engineering. My passion lies in the world of DevOps, where I find the perfect blend of innovative problem-solving and continuous learning. I am fascinated by the seamless integration of development and operations, and how it empowers teams to deliver high-quality software efficiently. Through my journey, I aim to not only master the technical aspects but also contribute to a culture of collaboration and agility."', imageURL: 'https://github.com/silvarohan18/test/blob/main/luka.jpg?raw=true' },
    
  ];

  showLoginModal: boolean = false;

openLoginModal() {
    this.showLoginModal = true;
}

closeLoginModal() {
    this.showLoginModal = false;
}

loginUserdata={"email":"","password":""}

onStartLog(){
  if(this._auth.loginUser(this.loginUserdata.email,this.loginUserdata.password)){
    this._router.navigate(['/home/main'])
   }else{
     alert('Login Failed')
   }
}

}
