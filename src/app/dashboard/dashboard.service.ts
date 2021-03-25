import { Injectable } from '@angular/core';
import { GetUserData, User } from 'src/data/userdata';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class DashboardService {

    constructor(private httpClient: HttpClient) {

    }
    // creating as a service call
    //    public getUserData() :Observable<User[]>{
    //         return of (GetUserData());
    //     }

    // reading json file using httpclient
    public getUserData(): Observable<User[]> {
        return this.httpClient.get("assets/user.json") as Observable<User[]>;
    }
}