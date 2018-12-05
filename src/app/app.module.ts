import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { DevComponent } from './careers/dev/dev.component';
import { DesignComponent } from './careers/design/design.component';
import { ManagerComponent } from './careers/manager/manager.component';
import { RouterModule } from '@angular/router';
import { ChomeComponent } from './careers/chome/chome.component';
import { ElecComponent } from './products/elec/elec.component';
import { SoftComponent } from './soft/soft.component';
import { HardComponent } from './hard/hard.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutusComponent,
    CareersComponent,
    DevComponent,
    DesignComponent,
    ManagerComponent,
    ChomeComponent,
    ElecComponent,
    SoftComponent,
    HardComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: 'elec',
            component: ElecComponent
          },
          {
            path: 'soft',
            component: SoftComponent
          },
          {
            path: 'hard',
            component: HardComponent
          }
        ]
      },
      {
        path: 'careers',
        component: CareersComponent,
        children: [
          {
            path: '',
            component: ChomeComponent
          },
          {
            path: "dev",
            component: DevComponent
          },
          {
            path:'design',
            component: DesignComponent
          },
          {
            path: "manager",
            component: ManagerComponent
          }
        ]
      }
    ], {enableTracing: true}),
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
