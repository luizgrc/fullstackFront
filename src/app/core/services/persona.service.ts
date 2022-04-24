import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Persona } from '~models/persona';

@Injectable({
	providedIn: 'root'
})
export class PersonaService {
	HOST = `${environment.HOST}`;

	constructor(private http: HttpClient) { }

	getEstudiantes() {
		return this.http.get<any>(`${this.HOST}`, {
			headers: {
				// Authorization: this.getBearerAuthorization()
			}
		}).pipe(
			catchError((err: HttpErrorResponse | any) => {

				if (err.status === 403) {
					console.log('catchError 403', err);
				}
				return throwError(err);
			})
		);

	}
	guardar(persona: Persona) {
		return this.http.post<any>(`${this.HOST}`, persona);
	}
	put(persona: Persona) {
		return this.http.put<any>(`${this.HOST}`, persona,
			{
				headers: {
					// Authorization: this.getBearerAuthorization()
				}
			}
		).pipe(
			catchError((err: HttpErrorResponse | any) => {

				if (err.status === 403) {
					console.log('catchError 403', err);
				}
				return throwError(err);
			})
		);

	}
	delete(id: number) {
		return this.http.delete<any>(`${this.HOST}/${id}`,

			{
				headers: {
					// Authorization: this.getBearerAuthorization()
				}
			}
		).pipe(tap(e => console.log('delete Persona', e)))
	}
	/*getBearerAuthorization() {
		const userToken = this.cookiesService.getItem(environment.idToken);
		const bearer = 'Bearer ' + userToken;
		return bearer;
	}*/
}


