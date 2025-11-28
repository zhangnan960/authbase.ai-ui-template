"use client"

import { Link } from "@/i18n/routing"

import { Button } from "@/components/ui/button"

interface SignInButtonProps {
  children: React.ReactNode
}

export const SignInButton = ({
  children
}: SignInButtonProps) => {
  return (
    <Link href="/signin?tab=signup" className="w-full">
      <Button className="w-full justify-start bg-green-100 text-black hover:bg-green-200 border border-green-300">
        {children}
      </Button>
    </Link>
  )
}
