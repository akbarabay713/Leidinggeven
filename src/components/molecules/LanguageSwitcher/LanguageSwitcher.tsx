"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/src/components/atoms/Button/Button";

const LanguageSwitcher = () => {
  const router = useRouter();
  //   const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const newLocale = currentLocale === "en" ? "de" : "en";
    router.replace(`/${newLocale}`);
    // router.replace(`/${newLocale}${pathname}`); // Change the locale in the URL
  };

  return (
    <Button
      variant="primaryOutline"
      size="xl"
      onClick={toggleLocale}
      className="flex items-center gap-2"
    >
      {currentLocale === "de" ? "USA" : "DE"}
    </Button>
  );
};

export default LanguageSwitcher;
