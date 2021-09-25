import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from '../contants';
import { Computer } from '../models/computer';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  
computer:Computer=new Computer();
computers:Computer[]=[];
  constructor(private http:HttpClient) {  }

  ngOnInit(): void {
  }
  onSaveComputer(){
    this.http.post<Computer>(API_URL + "/computers",this.computer,{headers:new HttpHeaders({
Authorization:'Basic '+window.btoa("developia:1234")
    })}).subscribe(
    resp=>{
      console.log(resp);
      
    }
  );
    }
    
}
