"use client";

import { UserButton } from "@authbase/auth-ui-nextjs/dist/components/button/user-button";
import { Link, useRouter } from "@/i18n/routing";
import { routes } from "@/routes";
import { useCurrentUser } from "@authbase/auth-ui-nextjs/dist/lib/use-session";
import { AuthSDK } from "@authbase/auth-api-nextjs";

export function UserButtonClient() {
  const authClient = new AuthSDK({
    projectId: process.env.NEXT_PUBLIC_AUTHBASE_PROJECT_ID || '',
    apiKey: process.env.NEXT_PUBLIC_AUTHBASE_API_KEY || '',
    baseUrl: "http://mg.ab.ai/auth/c",
  })
  const router = useRouter();
  const { user } = useCurrentUser({
    authClient: authClient,
    defaultSignInPage: routes.defaultSignInPage, 
    router 
  });
  
  return <UserButton
      authClient={authClient}
    Link={Link}
    defaultLogoutRedirect={routes.defaultLogoutRedirect} 
    defaultSignInPage={routes.defaultSignInPage}
    router={router}
    user={user}
  />;
}
