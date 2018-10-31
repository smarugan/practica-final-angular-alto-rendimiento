import { Injectable, PLATFORM_ID, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment';

import { LoadedStatuses } from '../store/status/status.actions';

// 'https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000'
// environment.url + '/assets/launchlibrary.json'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: string) {}

  public getLaunches$ = (): Observable<any[]> => {
    return this.http
      .get('https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000')
      // .get(environment.url + '/assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches)
      );
  }

  public getAgencies = (): Observable<any[]> => {
    return this.http
      .get(environment.url + '/assets/launchagencies.json')
      .pipe(
        map((res: any) => res.agencies)
      );
    }

  public getMissionTypes$ = (): Observable<any[]> => {
    return this.http
    .get(environment.url + '/assets/launchmissions.json')
    .pipe(
      map((res: any) => res.types)
    );
  }

  public getStatusTypes$ = (): Observable<any[]> =>
    this.http.get(environment.url + '/assets/launchstatus.json').pipe(
      map((res: any) => res.types),
      map((res: any) => res.map(this.setStatusColor))
    )

  private setStatusColor = statusType => {
    switch (statusType.id) {
      case 1:
      case 3:
      case 6:
        statusType.color = 'accent';
        break;
      case 2:
      case 4:
      case 5:
      case 7:
        statusType.class = 'warn';
        break;
      default:
        break;
    }
    return statusType;
  }
}
