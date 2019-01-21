import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    // {
    //     path: 'pages',
    //     loadChildren: 'app/pages/pages.module#PagesModule',
    // },
    {
        path: 'list',
        component: AppComponent,
        children: [{
            path: 'detail',
            component: DetailComponent,
        }],
    },
    // {
    //     path: 'auth',
    //     component: NbAuthComponent,
    //     children: [
    //         {
    //             path: '',
    //             component: NbLoginComponent,
    //         },
    //         {
    //             path: 'login',
    //             component: NbLoginComponent,
    //         },
    //         {
    //             path: 'logout',
    //             component: NbLogoutComponent,
    //         },
    //     ],
    // },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', redirectTo: 'list' },
];

const config: ExtraOptions = {
    useHash: true,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
