import { childRoutes } from './app-routing.module';

describe('routes', () => {
  let routes;
  beforeEach(() => {
    routes = childRoutes;
  })
  it('should have path for ""', () => {
    expect(routes).toContain({
      path: '',
        loadChildren: './modules/home-module/home.module#HomeModule'
    });
  });
  it('should have path for "advanced-components"', () => {
    expect(routes).toContain({
      path: 'advanced-components',
      loadChildren: './modules/advanced-components/advanced-components.module#AdvancedComponentsModule'
    });
  });
  it('should have path for "data-architecture"', () => {
    expect(routes).toContain({
      path: 'data-architecture',
      loadChildren: './modules/data-architecture/data-architecture.module#DataArchitectureModule'
    });
  });
  it('should have path for "dependency-injection"', () => {
    expect(routes).toContain({
      path: 'dependency-injection',
      loadChildren: './modules/dep-injection/dep-injection.module#DepInjectionModule'
    });
  });
  it('should have path for "forms"', () => {
    expect(routes).toContain({
      path: 'forms',
      loadChildren: './modules/forms-test/forms-test.module#FormsTestModule'
    });
  });
  it('should have path for "redux"', () => {
    expect(routes).toContain({
      path: 'redux',
      loadChildren: './modules/redux/redux.module#ReduxModule'
    });
  });
  it('should have path for "http"', () => {
    expect(routes).toContain({
      path: 'http',
      loadChildren: './modules/http-part/http-part.module#HttpPartModule'
    });
  });
  it('should have path for "routing"', () => {
    expect(routes).toContain( {
      path: 'routing',
      loadChildren: './modules/routing/routing.module#RoutingModule'
    });
  });
  it('should have path for "structural-directives"', () => {
    expect(routes).toContain({
      path: 'structural-directives',
      loadChildren: './modules/structural-directives/structural-directives.module#StructuralDirectivesModule'
    });
  });
  it('should have path for "testing"', () => {
    expect(routes).toContain({
      path: 'testing',
      loadChildren: './modules/testing/testing.module#TestingModule'
    });
  });
});
