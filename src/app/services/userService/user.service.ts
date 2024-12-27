import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // URL base de tu backend
  private baseUrl = 'http://localhost:8090/api/user';

  constructor(private http: HttpClient) { }

  getUserInfo(documentId: number, documentType: string): Observable<any> {
    const params = new HttpParams()
      .set('documentId', documentId)
      .set('documentType', documentType);

    return this.http.get(this.baseUrl, { params });
  }
}
