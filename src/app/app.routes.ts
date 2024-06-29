import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'task-1' },
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: 'task-1',
        loadComponent: () => import('./pages/tasks/task-1/task-1.component').then((c) => c.Task1Component),
      },
      {
        path: 'task-2',
        loadComponent: () => import('./pages/tasks/task-2/task-2.component').then((c) => c.Task2Component),
      },
      {
        path: 'task-3',
        loadComponent: () => import('./pages/tasks/task-3/task-3.component').then((c) => c.Task3Component),
      },
      {
        path: 'task-4',
        loadComponent: () => import('./pages/tasks/task-4/task-4.component').then((c) => c.Task4Component),
      },
      {
        path: 'task-5',
        loadComponent: () => import('./pages/tasks/task-5/task-5.component').then((c) => c.Task5Component),
      },
    ]
  },

];
