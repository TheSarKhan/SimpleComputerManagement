import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from '../contants';
import { Computer } from '../models/computer';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  computer:Computer=new Computer();
computers:Computer[]=[];
  
  constructor(private http:HttpClient) { this.loadAllComputers();}

  ngOnInit(): void {
  }
  loadAllComputers(){
    this.http.get<Computer[]>(API_URL + "/computers/get", {headers:new HttpHeaders({
Authorization:'Basic '+window.btoa("developia:1234")
    })}).subscribe(
    resp=>{
     this.computers=resp;
      
      console.log(resp)
    }
  );
    }
    
    deleteAll(){
      this.http.delete<Computer[]>(API_URL + "/computers/deleteAll", {headers:new HttpHeaders({
  Authorization:'Basic '+window.btoa("developia:1234")
      })}).subscribe(
      resp=>{
       this.computers=resp;
        
        console.log(resp)
      }
    );
      }
      deleteTaskById(id: Number) {

        this.http.delete(API_URL + '/computers/' + id,{headers:new HttpHeaders({
          Authorization:'Basic '+window.btoa("developia:1234")
              })}).subscribe(
          resp => {
            this.loadAllComputers();
          }
        );
  
    }
onDeleteComputer(computerId:number){
  this.http.delete<Computer[]>(API_URL + "/computers"+computerId, {headers:new HttpHeaders({
    Authorization:'Basic '+window.btoa("developia:1234")
        })}).subscribe(
        resp=>{
          
          this.loadAllComputers();
          
        }
      );
}
      }
