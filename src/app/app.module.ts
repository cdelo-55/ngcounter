import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterDetailComponentComponent } from './counter-detail-component/counter-detail-component.component';
import { SupercounterDetailComponent } from './supercounter-detail/supercounter-detail.component';
import { SuperdupercounterDetailComponent } from './superdupercounter-detail/superdupercounter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponentComponent,
    SupercounterDetailComponent,
    SuperdupercounterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
