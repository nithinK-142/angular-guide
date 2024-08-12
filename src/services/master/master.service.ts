import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getWithParams<T>(url: string, obj: any): Observable<T> {
    const httpsParams = new HttpParams({ fromObject: obj });
    const httpOptions = {
      params: httpsParams,
    };
    return this.http.get<T>(url, httpOptions);
  }
  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
