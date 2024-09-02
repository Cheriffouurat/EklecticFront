import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentUrl = 'https://payment.eklectic.tn/API/subscription/oneshot';

  constructor(private http: HttpClient) {}

  makePayment(accessToken: string, offreId: string, msisdn: string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${accessToken}` };
    const body = { offre_id: offreId, msisdn: msisdn };

    return this.http.post<any>(this.paymentUrl, body, { headers });
  }
}
