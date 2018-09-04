import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrismModule } from '@ngx-prism/core';

import { ActivityComponent } from './components/activity/activity.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CodeComponent } from './components/code/code.component';
import { CodeStepsComponent } from './components/code-steps/code-steps.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { LayoutSidebarComponent } from './containers/layout-sidebar/layout-sidebar.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    RouterModule,
  ],
  declarations: [
    ActivityComponent,
    ButtonComponent,
    CardComponent,
    CodeComponent,
    CodeStepsComponent,
    CountryCardComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    PersonCardComponent,
    ResultComponent,
  ],
  exports: [
    ActivityComponent,
    ButtonComponent,
    CardComponent,
    CodeComponent,
    CodeStepsComponent,
    CountryCardComponent,
    PersonCardComponent,
    ResultComponent,
  ],
})
export class UiModule {
}
