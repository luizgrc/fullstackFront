import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEstudiantesComponent } from './list-estudiantes.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';




@NgModule({
	declarations: [
		ListEstudiantesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		MatCardModule

	],
	exports: [
		ListEstudiantesComponent
	]
})
export class ListEstudiantesModule { }
