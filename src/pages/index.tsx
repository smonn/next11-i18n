import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>{t("common:appName")}</title>
      </Head>
      <h1>{t("home:pageTitle")}</h1>
    </>
  );
}
