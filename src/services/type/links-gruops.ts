export interface LinksGroups {
  page: number;
  size: number;
  total: number;
  items: Item[];
  first: boolean;
  last: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  totalPages: number;
}

export interface Item {
  spec: Spec;
  apiVersion: string;
  kind: string;
  metadata: Metadata;
}

export interface Spec {
  displayName: string;
  priority: number;
  links: string[];
}

export interface Metadata {
  name: string;
  version: number;
  creationTimestamp: string;
  labels?: Labels;
}

export interface Labels {
  "plugin.halo.run/plugin-name": string;
}
