import { Layout } from "@/interfaces/interface";
import Head from "next/head";

export default function Layout(props: Layout) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/images/rajishyamji.jpg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      {props.children}
    </div>
  );
}
