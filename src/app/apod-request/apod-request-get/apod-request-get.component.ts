import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApodArray } from './apod-request-get';


@Component({
  selector: 'app-apod-request-get',
  templateUrl: './apod-request-get.component.html',
  styleUrls: ['./apod-request-get.component.css']
})
export class ApodRequestGetComponent implements OnInit {

  isResponseIsArray: boolean = true;
  
  baseURL = 'https://api.nasa.gov/planetary/apod?api_key=dSY0Zt162OcXRYLWsManwjxu3qZF8pLbS7gAjfSA'
  apodList: ApodArray[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ApodArray[]>(this.baseURL + '&count=10')
    .subscribe(response=>{
      this.apodList = response;
    });
  }
    
  searchApodList(specificDate: string, startedDate: string, endedDate: string){
    if(specificDate != ""){
      this.http.get<ApodArray>(this.baseURL +'&date='+specificDate)
      .subscribe(response=>{
          this.apodList[0] = response;
      });
    }else if(startedDate != "" && endedDate != ""){
      this.http.get<ApodArray[]>(this.baseURL + '&start_date='+ startedDate+'&end_date='+endedDate)
      .subscribe(response=>{
        this.apodList = response;
      });
    }
  }

  checkSearchResult(specificDate: string, startedDate: string, endedDate: string){
    if(specificDate != ""){
      this.isResponseIsArray = false
    }else{
      this.isResponseIsArray = true
    }
  }
}