import { NextApiRequest, NextApiResponse } from "next";
import getT from "next-translate/getT";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const locale = req.query.__nextLocale as string;
  const t = await getT(locale, "common");
  res.json({
    appName: t("common:appName"),
  });
}
