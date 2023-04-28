import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import en from "@/lang/en.json";
import tr from "@/lang/tr.json";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import PublicLayout from "@/components/publicLayout";
import {
  Source_Sans_Pro,
  Sree_Krushnadevaraya,
  Yeseva_One,
} from "next/font/google";

const messages = {
  tr,
  en,
};

const yeseva = Sree_Krushnadevaraya({
  subsets: ["latin"],
  weight: ["400"],
});
const sourceSans = Source_Sans_Pro({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { locale } = useRouter();

  const getLayout =
    Component.getLayout ||
    function (page) {
      return <PublicLayout>{page}</PublicLayout>;
    };

  return (
    <>
      <style jsx global>
        {`
          :root {
            --yeseva-font: ${yeseva.style.fontFamily};
            --source-sans-pro-font: ${sourceSans.style.fontFamily};
          }
        `}
      </style>
      <SessionProvider session={session}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          {getLayout(<Component {...pageProps} />)}
        </IntlProvider>
      </SessionProvider>
    </>
  );
}
