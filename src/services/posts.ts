import type { PostV1alpha1PublicApiQueryPostsRequest } from '@halo-dev/api-client'
import { publicApiClient } from "@/request/api-client";


export const getPosts = (
    queryParams?:PostV1alpha1PublicApiQueryPostsRequest ,
) => {
    return publicApiClient.content.post.queryPosts(queryParams)
}
export const getPostByMetaName = (name: string) => {
    return publicApiClient.content.post.queryPostByName({
        name
        })
}
