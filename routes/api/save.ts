import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  let rq = await req.text();
  console.log("タレコミ : " + rq);
  return new Response("OK", { status: 200 });
};
