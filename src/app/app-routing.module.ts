import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  { path: 'advanced-components',
    loadChildren: './modules/advanced-components/advanced-components.module#AdvancedComponentsModule'
  },
  { path: 'data-architecture',
    loadChildren: './modules/data-architecture/data-architecture.module#DataArchitectureModule'
  },
  { path: 'dependency-injection',
    loadChildren: './modules/dep-injection/dep-injection.module#DepInjectionModule'
  },
  {
    path: 'forms',
    loadChildren: './modules/forms-test/forms-test.module#FormsTestModule'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(childRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
