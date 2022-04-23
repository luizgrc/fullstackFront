import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEstudiantesModule } from './list-estudiantes/list-estudiantes.module';
import { RegeditEstudiantesModule } from './regedit-estudiantes/regedit-estudiantes.module';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		ListEstudiantesModule,
		RegeditEstudiantesModule
	],
	exports: [
		ListEstudiantesModule
	]
})
export class EstudiantesModule { }
