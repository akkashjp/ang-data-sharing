import {Router,RouterModule,Routes} from'@angular/router';
import{UserformComponent}from'./userform/userform.component';
const appRoutes: Routes=[
    {path:'user',component:UserformComponent}
];

export const routing=RouterModule.forRoot(appRoutes);