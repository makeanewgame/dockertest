import { useRouter } from "next/router";
import Link from "next/link";

const pathTranslation = {
  en: {},
  tr: {
    "/memberships": "/uyelik",
    "/privileges": "/ayricaliklar",
    "/events": "/etkinlikler",
    "/locations": "/lokasyonlar",
    "/contact": "/iletisim",
  },
};

export default function TranslateLink({ href, children, ...props }) {
  const { locale } = useRouter();
  let translatedPath;

  if (href === "/") {
  } else {
  }
  translatedPath = pathTranslation[locale]?.[href];

  const as = translatedPath ? `/${locale}${translatedPath}` : undefined;

  return (
    <Link href={href} as={as} {...props}>
      {children}
    </Link>
  );
}
