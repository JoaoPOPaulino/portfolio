import { Routes } from '@angular/router';
import { Home } from './components/home/home';
export const routes: Routes = [
 {path:'',component:Home,pathMatch:'full'},
 {path:'projetos/estetica-agenda',loadComponent:()=>import('./components/case-study/case-study').then(m=>m.CaseStudy),data:{id:'estetica-agenda'}},
 {path:'projetos/desapego',loadComponent:()=>import('./components/case-study/case-study').then(m=>m.CaseStudy),data:{id:'desapego'}},
 {path:'**',redirectTo:''}
];
