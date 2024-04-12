import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Home, LucideAngularModule } from 'lucide-angular';
import {
  TablerIconModule,
  IconAB,
  IconBadge8k,
  IconHome,
  IconAlertSmall,
  TablerIconConfig
} from '@tabler/icons-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ Home })),
    importProvidersFrom(TablerIconModule.pick({ IconAB, IconBadge8k, IconHome, IconAlertSmall })),
    {
      provide: TablerIconConfig, useValue: {
        size: 40,
        stroke: 1.5,
        color: 'brown'
      }
    }
  ]
};
