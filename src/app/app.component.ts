import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconAB, TablerIconComponent, TablerIconModule } from '@tabler/icons-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablerIconModule, TablerIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-icons-sample';
  protected readonly iconAB = IconAB;
}
