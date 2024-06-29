import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingService } from '../../core/services';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  loading = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {
  }
}
