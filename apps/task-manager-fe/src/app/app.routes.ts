import { Route } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectPage } from './pages/project-page/project-page';

export const appRoutes: Route[] = [
    {
        path: '',
        component: Home
    },{
        path: 'projects',
        component: ProjectPage
    }
];
