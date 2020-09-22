export interface PluginOptions {
  inputFiles: string[];
  docsRoot: string;
  out: string;
  sidebar: SidebarOptions | null;
  plugin: string[];
}

export interface SidebarOptions {
  fullNames: boolean;
  parentCategory: string;
  sidebarFile: string;
}

export interface Sidebar {
  [sidebarId: string]: SidebarItem[];
}

export interface SidebarCategory {
  type: string;
  label: string;
  items: SidebarItem[];
}

export type SidebarItem = SidebarCategory | string;
