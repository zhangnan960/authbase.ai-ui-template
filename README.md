## Next.js 14 Fullstack AuthBase.AI UI SDK Example (with TypeScript)

A full-stack authentication demo built with Next.js 14 and AuthBase.AI UI SDK, featuring internationalization (i18n) and comprehensive authentication flows.

This project is a template project based on the AuthBase.AI UI SDK, demonstrating how to integrate AuthBase authentication services into a Next.js application.

## ✨ Features

- Email & Password Authentication: Sign-in with email and password.
- Email Verification: Ensure account validity by requiring users to confirm their email address.
- Forgot Password Flow: Allow users to reset their password through a email link.
- Internationalization (i18n) with Auth Integration: Built-in locale routing with authentication middleware support.
- AuthBase.AI UI Components: Pre-built authentication UI components for seamless integration.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🚀 Getting Started

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Environment Variables

Create a .env.local file in the project root and include the following:

```env
NEXT_PUBLIC_AUTHBASE_PROJECT_ID="YOUR_AUTHBASE_PROJECT_ID"
NEXT_PUBLIC_AUTHBASE_API_KEY="YOUR_AUTHBASE_API_KEY"
```

## 📚 Learn More

Explore these official resources to learn more:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [AuthBase.AI Documentation](https://authbase.ai/docs) - Learn how to implement authentication with AuthBase.AI UI SDK.
- [next-intl Documentation](https://next-intl.dev) - A internationalization solution for Next.js.

## ☁️ Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
