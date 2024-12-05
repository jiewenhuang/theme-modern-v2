export interface LinksItem {
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
  url: string;
  displayName: string;
  logo: string;
  groupName: string;
  description?: string;
}

export interface Metadata {
  generateName?: string;
  name: string;
  annotations: Annotations;
  version: number;
  creationTimestamp: string;
}

export interface Annotations {
  is_request?: string;
  rss_uri?: string;
}
