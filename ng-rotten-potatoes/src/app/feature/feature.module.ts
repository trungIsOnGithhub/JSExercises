import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    StartRatingComponent
  ],
  imports: [
    NgbModule,
    CommonModule
  ],
  exports: [
    StartRatingComponent
  ]
})
export class FeatureModule { }
