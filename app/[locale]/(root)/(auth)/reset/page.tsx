"use client";

import { ResetForm } from "@authbase/auth-ui-nextjs"
import { Link, useRouter } from "@/i18n/routing"
import { createAuthClient } from "@/lib/authClient";

const ResetPage = () => {
  const authClient = createAuthClient();
  const router = useRouter()

  return (
    <section className="w-full">
        <ResetForm authClient={authClient} router={router} Link={Link}/>
    </section>
  )
}
 
export default ResetPage
