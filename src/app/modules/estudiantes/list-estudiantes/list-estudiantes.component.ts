import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonaService } from '~services/persona.service';
import { RegeditEstudiantesComponent } from '../regedit-estudiantes/regedit-estudiantes.component';

@Component({
	selector: 'list-estudiantes',
	templateUrl: './list-estudiantes.component.html',
	styleUrls: ['./list-estudiantes.component.scss']
})
export class ListEstudiantesComponent implements OnInit {

	listaPersonas = this.personaService.getEstudiantes();

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
			}
		})
	}

}
