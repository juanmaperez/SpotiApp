import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';


@Injectable()
export class SpotifyService {

  private token : string = "BQAOLfi1wPCxuFeq3XZCfIKeiR_4t4pzKGNiZc1y7hDwCIEUSu_WLPY2o1HEl8soUMtPip3Hpy_g1o7KG6U"
  
  constructor(public http: HttpClient) { }





}
