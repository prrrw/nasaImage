import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApodArray } from './apod-request-get';


@Component({
  selector: 'app-apod-request-get',
  templateUrl: './apod-request-get.component.html',
  styleUrls: ['./apod-request-get.component.css']
})
export class ApodRequestGetComponent implements OnInit {
  
  apodList: ApodArray[] = [];
  apodSearchResult: ApodArray = {
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: ''
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    // this.http.get<ApodArray[]>('https://api.nasa.gov/planetary/apod?api_key=dSY0Zt162OcXRYLWsManwjxu3qZF8pLbS7gAjfSA&count=10')
    // .subscribe(response=>{
    //   console.log('response', response);
    //   this.apodList = response;
    // });
  }
    
    searchApodList(date: string){
      this.http.get<ApodArray>('https://api.nasa.gov/planetary/apod?api_key=dSY0Zt162OcXRYLWsManwjxu3qZF8pLbS7gAjfSA&date='+date)
    .subscribe(response=>{
      console.log('response', response);
      this.apodSearchResult = response;
      console.log("Hello", date);
    });
    }
  }


