import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaService } from '~services/persona.service';
import { Persona } from '../../../shared/models/persona';

@Component({
	selector: 'regedit-estudiantes',
	templateUrl: './regedit-estudiantes.component.html',
	styleUrls: ['./regedit-estudiantes.component.scss']
})
export class RegeditEstudiantesComponent implements OnInit {

	grados = [1, 2, 3, 4];
	form: FormGroup = this.fb.group({
		idgrado: [1],
		nombre: ['Pedro Pablo'],
		apellidoPaterno: ['Guzman'],
		apellidoMaterno: ['Girasol'],
		fecha_nacimiento: ['2021-01-10'],
		foto: ['']
	})

	constructor(
		private personaService: PersonaService,
		@Inject(MAT_DIALOG_DATA) data: any,
		public dialogRef: MatDialogRef<RegeditEstudiantesComponent>,
		private fb: FormBuilder
	) { }

	ngOnInit(): void {
	}

	guardar() {
		console.log(this.form.value);

		const persona: Persona = new Persona();
		persona.idgrado = this.form.controls.idgrado.value;
		persona.nombre = this.form.controls.nombre.value;
		persona.apellidoPaterno = this.form.controls.apellidoPaterno.value;
		persona.apellidoMaterno = this.form.controls.apellidoMaterno.value;
		persona.fecha_nacimiento = this.form.controls.fecha_nacimiento.value;
		persona.foto = this.form.controls.foto.value;

		//this.personaService.guardar(persona);
	}

	closeDialog() {
		this.dialogRef.close(false);

	}

}
