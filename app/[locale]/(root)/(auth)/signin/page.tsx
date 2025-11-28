"use client";

import { SignInForm } from "@authbase/auth-ui-nextjs"
import { Link } from "@/i18n/routing"
import { createAuthClient } from "@/lib/authClient";

const SignInPage = () => {
  const authClient = createAuthClient();

  return (
    <section className="w-full">
        <SignInForm authClient={authClient} Link={Link}/>
    </section>
  )
}

export default SignInPage
