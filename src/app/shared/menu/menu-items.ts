export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/admin/vehicles',
    title: 'Vehicles',
    type: 'link',
    icontype: 'fas fa-car-side text-blue'
  },
  {
    path: '/admin/buildings',
    title: 'Buildings',
    type: 'link',
    icontype: 'fas fa-building text-green'
  },
  {
    path: '/admin/documents',
    title: 'Documents',
    type: 'link',
    icontype: 'fas fa-file-alt text-purple'
  },
  {
    path: '/admin/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-cogs text-purple'
  },
  {
    path: '/admin/analytics',
    title: 'Analytics',
    type: 'link',
    icontype: 'far fa-chart-bar text-blue'
  },
  {
    path: '/admin/profile',
    title: 'Profile',
    type: 'link',
    icontype: 'far fa-id-badge text-red'
  }
];

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/