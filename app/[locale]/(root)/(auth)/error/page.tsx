"use client"

import { ErrorCard } from "@authbase/auth-ui-nextjs"
import { Link } from "@/i18n/routing"
import { createAuthClient } from "@/lib/authClient";

const AuthErrorPage = () => {
    const authClient = createAuthClient();
  return (
    <section>
        <ErrorCard authClient={authClient} Link={Link} />
    </section>
  )
}

export default AuthErrorPage
