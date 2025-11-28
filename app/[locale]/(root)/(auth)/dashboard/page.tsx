"use client";

import * as React from "react";
import { useCurrentUser } from "@authbase/auth-ui-nextjs/dist/lib/use-session";
import { SignOutButton } from "@authbase/auth-ui-nextjs/dist/components/button/signout-button";
import { SignInButton } from "@authbase/auth-ui-nextjs/dist/components/button/signin-button";

import { routes } from "@/routes";
import { Link, useRouter } from "@/i18n/routing";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io"
import { useTranslations } from "next-intl"
import { createAuthClient } from "@/lib/authClient";

const DashboardPage = () => {
    const router = useRouter();
    const authClient = createAuthClient();
    const { user } = useCurrentUser({
        authClient: authClient,
        defaultSignInPage: routes.defaultSignInPage,
        router
    });
    const tUi = useTranslations("Navbar.ui")

    return (
        <section className="w-full">
            <div className="mb-4">
                {user ? (
                    <>
                        <p>欢迎, {user.uname || user.providerEmail}!</p>
                        <div className="mt-4">
                            <SignOutButton authClient={authClient} defaultLogoutRedirect={routes.defaultLogoutRedirect}>
                                <IoMdLogOut className="h-4 w-4 mr-2"/>
                                {tUi("signout")}
                            </SignOutButton>
                        </div>
                    </>
                ) : (
                    <SignInButton Link={Link}>
                        <IoMdLogIn className="h-4 w-4 mr-2"/>
                        {tUi("signin")}
                    </SignInButton>
                )}
            </div>
        </section>
    )
}

export default DashboardPage
