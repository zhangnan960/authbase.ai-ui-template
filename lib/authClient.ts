import { AuthSDK } from "@authbase/auth-api-nextjs";

export const createAuthClient = () => {
  return new AuthSDK({
    projectId: process.env.NEXT_PUBLIC_AUTHBASE_PROJECT_ID || '',
    apiKey: process.env.NEXT_PUBLIC_AUTHBASE_API_KEY || '',
  });
};
