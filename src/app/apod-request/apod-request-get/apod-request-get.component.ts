import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ApodArray, MyBeModel} from './apod-request-get';
@Component({
  selector: 'app-apod-request-get',
  templateUrl: './apod-request-get.component.html',
  styleUrls: ['./apod-request-get.component.css']
})

  
export class ApodRequestGetComponent implements OnInit {

  isResponseIsArray: boolean = true;
  isShowFavoriteImage: boolean = false;

  beURL = 'http://localhost:8080/api/'
  beResponse: MyBeModel[] = [];
  
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
//get favorite image from be
  getFavImg(){
    this.isShowFavoriteImage = true;
    this.http.get<MyBeModel[]>(this.beURL + 'get')
    .subscribe(response=>{
      this.beResponse = response;
    });
  }

  //save favorite image to be
  addFavImg(data: ApodArray){
    let headers = { 'Content-Type' : 'application/json'};
    const body = {
      imgTitle: data.title,
      imgUrl: data.url,
      imgDate: data.date,
      imgDesc: data.explanation
    }
    this.http.post<MyBeModel>(this.beURL, body, {headers}).subscribe(data=> {
      this.beResponse[0] = data;
    })
  }

  //delete favorite image from be
  deleteFavImg(imgId: number){
    let headers = { 'Content-Type' : 'application/json'};
    this.http.delete<MyBeModel>(this.beURL + 'delete/' + imgId, {headers}).subscribe(data=> {
      this.beResponse[0] = data;
    })
  }
}