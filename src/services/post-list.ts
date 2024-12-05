import { publicApiClient } from "@/request/api-client";

export const getPosts = ({ page }: { page: number }) => {
  return publicApiClient.content.post.queryPosts({
    size: 10,
    page,
    sort: ["spec.pinned,desc", "spec.publishTime,desc"],
  });
};
export const getRecentPost = ({ size }: { size: number }) => {
  return publicApiClient.content.post.queryPosts({
    size,
    page: 1,
    sort: ["spec.publishTime,desc"],
  });
};
