"use client";

import { LocaleSwitcher } from "@authbase/auth-ui-nextjs/dist/components/button/locale-switcher";
import { routing, useRouter, usePathname } from "@/i18n/routing";

export function LocaleSwitcherClient({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <LocaleSwitcher 
      locale={locale} 
      router={router} 
      pathname={pathname} 
      locales={[...routing.locales]}
    />
  );
}
