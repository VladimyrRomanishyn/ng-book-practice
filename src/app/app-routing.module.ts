import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  {
    path: '',
    loadChildren: './modules/home-module/home.module#HomeModule'
  },
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
  },
  {
    path: 'http',
    loadChildren: './modules/http-part/http-part.module#HttpPartModule'
  },
  {
    path: 'redux',
    loadChildren: './modules/redux/redux.module#ReduxModule'
  },
  {
    path: 'routing',
    loadChildren: './modules/routing/routing.module#RoutingModule'
  },
  {
    path: 'structural-directives',
    loadChildren: './modules/structural-directives/structural-directives.module#StructuralDirectivesModule'
  },
  {
    path: 'testing',
    loadChildren: './modules/testing/testing.module#TestingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(childRoutes, { initialNavigation: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
