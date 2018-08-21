import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-request-make-table';
  data: any;
  error: string;
  
  constructor(private http: HttpClient) {
    this.makeCall();
  }
  
  makeCall(): void {
    const url = "http://dev.api.fooddocs.ee/testtask";

    this.http.get(url).subscribe((res: HttpResponse<object>) => {
      console.log(res);
      this.data = res;
    }, (err: HttpErrorResponse) => {
      console.log(err);

    })
  }

  hideRow(id: number): void {
    this.data.splice(id, 1);
  }

}
