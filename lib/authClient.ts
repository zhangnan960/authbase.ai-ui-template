import { AuthApiSdk } from "@authbase/auth-api-nextjs";

export const createAuthClient = () => {
  return new AuthApiSdk({
    projectId: process.env.NEXT_PUBLIC_AUTHBASE_PROJECT_ID || '',
    apiKey: process.env.NEXT_PUBLIC_AUTHBASE_API_KEY || '',
  });
};
