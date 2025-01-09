import { useEffect, useState } from "preact/hooks";
import { publicApiClient } from "@/request/api-client.ts";
import type { ListedPostVoList } from "@halo-dev/api-client";

import { useLocation } from "preact-iso";

import preactLogo from "@/preact/assets/preact.svg";
import "@/preact/app.scss";

const Home = () => {
  const [count, setCount] = useState(0);
  const [postList, setPostList] = useState<ListedPostVoList>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await publicApiClient.content.post.queryPosts({
          page: 1,
          size: 10,
          sort: ["spec.publishTime,asc"],
        });
        console.log("data", data);
        setPostList(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoaded(true);
      }
    };
    fetchPosts();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  console.log("postList", postList);

  const { route } = useLocation();

  const navigateToPost = (slug: string) => {
    route(`/archives/${slug}`);
  };

  return (
    <>
      <div className="flex flex-row justify-center">
        <a href="https://www.halo.run" target="_blank">
          <img
            src="https://www.halo.run/upload/2021/03/Adaptive256-463ca9b92e2d40268431018c07735842.png"
            class="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1 className="text-green-600">Halo + Vite + Preact</h1>
      <div class="card flex items-center space-y-3">
        <button
          className="btn btn-soft btn-secondary mx-auto w-auto"
          onClick={() => navigateToPost(postList?.items[0].spec?.slug as string)}
        >
          Go To Post: {postList?.items[0].spec?.title}
        </button>

        <button className="btn btn-primary text text-w m-auto w-32" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>

        <p className="mt-4 text-stone-800 dark:text-white">
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="my-5 text-stone-800 dark:text-white">
        Check out{" "}
        <a href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app" target="_blank">
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
    </>
  );
};
export default Home;
