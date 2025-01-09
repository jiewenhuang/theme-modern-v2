import { publicApiClient } from "@/request/api-client.ts";
import { PostVo } from "@halo-dev/api-client";
import { useState, useEffect } from "preact/hooks";

const Post = ({ slug }: { slug: string }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [post, setPost] = useState<PostVo>();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await publicApiClient.content.post.queryPosts({
          page: 1,
          size: 10,
          sort: ["spec.publishTime,desc"],
          fieldSelector: [`spec.slug=${slug}`],
        });
        console.log("data", data);
        const metadataName = data.items[0].metadata.name;
        const { data: postRes } = await publicApiClient.content.post.queryPostByName({
          name: metadataName,
        });
        setPost(postRes);
      } catch (err) {
        setError("Failed to fetch post");
        console.error(err);
      } finally {
        setIsLoaded(true);
      }
    };
    fetchPost();
  }, []);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full px-3 py-8">
      <div className="w-[80%] overflow-hidden">
        <div className="mx-auto flex flex-col items-center">
          <h1 className="text-2xl font-bold">{post?.spec?.title}</h1>
          <article
            id="content"
            dangerouslySetInnerHTML={{ __html: post?.content?.content || "" }}
            className="prose lg:prose-xl dark:!prose-invert !max-w-[80%]"
          ></article>
        </div>
      </div>
    </div>
  );
};

export default Post;
