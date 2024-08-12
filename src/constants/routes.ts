export interface RouteItem {
  title: string;
  link?: string;
  children?: RouteItem[];
}

export type Routes = RouteItem;

export const routes: Routes[] = [
  { title: 'Home', link: 'home' },
  {
    title: 'Components',
    children: [
      {
        title: 'Component1',
        link: 'components/component1',
      },
      {
        title: 'Component2',
        link: 'components/component2',
      },
    ],
  },
  { title: 'Data Binding', link: 'data-binding' },
  {
    title: 'Directive',
    children: [
      { title: 'Attribute Directive', link: 'directive/attribute-directive' },
      {
        title: 'Structural Directive',
        link: 'directive/structural-directive',
      },
      {
        title: 'Template Directive',
        children: [
          {
            title: 'Ng Template',
            link: 'directive/template-directive/ng-template',
          },
          {
            title: 'Ng Container',
            link: 'directive/template-directive/ng-container',
          },
        ],
      },
    ],
  },
  { title: 'Control Flow Statements', link: 'control-flow-statements' },
  { title: 'Pipe', link: 'pipe' },
  { title: 'API Call', link: 'api-call' },
  { title: 'LifeCycle', link: 'lifecycle' },
  { title: 'Viewchild', link: 'viewchild' },
  { title: 'Signal', link: 'signal' },
  { title: 'RxJS', link: 'rxjs' },
  { title: 'ZoneJs', link: 'zonejs' },
];
