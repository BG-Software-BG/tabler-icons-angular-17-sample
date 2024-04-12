import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'demo',
        component: DemoComponent
      }
    ]
  }
];
