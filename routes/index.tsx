import { Head } from "$fresh/runtime.ts";
import Form from "../islands/Form.tsx";

export default function Home() {


  return (
    <>
      <Head>
        <title>tarekomiForm on Ame-X-Build</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Form />
      </div>
    </>
  );
}
