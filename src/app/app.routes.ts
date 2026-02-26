import { Routes } from '@angular/router';
import { Home } from './home/home';
import { List } from './list/list';
import { About } from './about/about';
export const routes: Routes = [
    { path: "", component: Home },
    { path: "list", component: List },
    { path: "about", component: About }

];