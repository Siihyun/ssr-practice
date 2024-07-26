import { renderToString } from "react-dom/server";
import { fakeFetch } from "@/utils/fakeFetch";

import App from "../client/App";

export const render = async ({
  req,
  template,
}: {
  req: any;
  template: string;
}) => {
  const innerHTML = renderToString(<App />);

  console.log("before ");
  const data = await fakeFetch({ url: "", delay: 2000 });
  const initialData = JSON.stringify(data);
  console.log("after");

  return template
    .replace("{{__SSR__PLACEHOLDER__}}", innerHTML)
    .replace("{{__INITIAL_DATA__}}", initialData);
};
