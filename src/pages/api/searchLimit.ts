// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>, // Make sure the type is not `any`
) {
  throw new Error("This API route is not implemented yet");
}
