import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmutableService } from './immutable.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ImmutableService
  ]
})
export class ImmutableModule { }
