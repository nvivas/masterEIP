import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './elementos/formulario/formulario.component';
import { CurriculumVitaeComponent } from './elementos/curriculum-vitae/curriculum-vitae.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'curriculumVitae', component: CurriculumVitaeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
