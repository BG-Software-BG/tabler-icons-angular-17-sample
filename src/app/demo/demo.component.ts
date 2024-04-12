import { Component } from '@angular/core';
import { IconAd, TablerIconComponent } from '@tabler/icons-angular';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [TablerIconComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  iconAd = IconAd;
}
