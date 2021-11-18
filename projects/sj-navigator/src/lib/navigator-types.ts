
export type RoutingModel = NavItem[];

export interface NavItem {
  name: string;
  path: string;
  children?: NavItem[];
}
