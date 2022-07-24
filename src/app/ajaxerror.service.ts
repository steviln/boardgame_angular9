import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AjaxerrorService implements HttpInterceptor {

  constructor() { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("intercepting ");
      console.log(request);
    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
                    let errorMsg = 'Noe gikk galt, vennligst forsøk igjen senere.';
                    if (error.error instanceof ErrorEvent) {

                    } else {

                        console.log("status is " + error.status);
                        if(error.status === 0){
                            errorMsg = "Får ikke kontakt med server, vennlist forsøk igjen senere.";
                            }
                    }
                    alert(errorMsg);
                    return throwError(errorMsg);
                })
    )
  }
  
  
}
