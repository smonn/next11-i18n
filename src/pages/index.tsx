import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import getT from "next-translate/getT";

export default function HomePage({ appName }: { appName: string }) {
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
      <p>App Name from props: {appName}</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const t = await getT(context.locale, "common");
  return {
    props: {
      appName: t("appName"),
    },
  };
};
