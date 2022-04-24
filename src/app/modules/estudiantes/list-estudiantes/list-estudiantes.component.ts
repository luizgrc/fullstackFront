import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { PersonaService } from '~services/persona.service';
import { RegeditEstudiantesComponent } from '../regedit-estudiantes/regedit-estudiantes.component';

@Component({
	selector: 'list-estudiantes',
	templateUrl: './list-estudiantes.component.html',
	styleUrls: ['./list-estudiantes.component.scss']
})
export class ListEstudiantesComponent implements OnInit {

	listaPersonas = this.personaService.getEstudiantes().pipe(tap(console.log));

	constructor(
		public dialog: MatDialog,
		private personaService: PersonaService
	) { }

	ngOnInit(): void {
	}

	onClickNuevo() {
		const dialogRef = this.dialog.open(RegeditEstudiantesComponent, {
			width: '850px',
			disableClose: true
		});
		dialogRef.afterClosed().subscribe(res => {
			if (res) {
				this.listaPersonas = this.personaService.getEstudiantes().pipe(tap(console.log));
			}
		})
	}

	delete(id:number){
		this.personaService.delete(id).subscribe(
			res=>{
			  console.log('persona eliminada');
			  this.listaPersonas = this.personaService.getEstudiantes().pipe(tap(console.log));
			},
			err=> console.log(err)
			);
	}

}
