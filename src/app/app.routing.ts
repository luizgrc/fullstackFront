import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		/** EJEMPLO LOAD LAZY MODULE - POR ROUTE */
		path: 'estudiantes',
		data: {
			title: 'Estudiantes | Prueba - Full Stack'
		},
		loadChildren: () => import('app/modules/estudiantes/estudiantes.module').then(m => m.EstudiantesModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
