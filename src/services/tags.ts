import { coreApiClient, publicApiClient } from "@/request/api-client";

export const getTags = ({ page, size }: { page?: number; size?: number }) => {
  return coreApiClient.content.tag.listTag({
    page: page ?? 1,
    size: size ?? 10,
  });
};
export const getPostsByTag = ({ MetadataName, page, size }: { MetadataName: string; page?: number; size?: number }) => {
  return publicApiClient.content.post.queryPosts({
    size: size ?? 10,
    page: page ?? 1,
    sort: ["spec.publishTime,desc"],
    fieldSelector: [`spec.tags=${MetadataName}`],
  });
};
export const getTagNameBySlug = (slug: string) => {
  return coreApiClient.content.tag.listTag({
    page: 1,
    size: 1,
    fieldSelector: [`spec.slug=${slug}`],
  });
};
