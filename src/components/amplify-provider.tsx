"use client";

import { Amplify } from "aws-amplify";
import type { ReactNode } from "react";

let isAmplifyConfigured = false;

function configureAmplify() {
  if (isAmplifyConfigured) {
    return;
  }

  const userPoolId = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID;
  const userPoolClientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;

  if (!userPoolId || !userPoolClientId) {
    console.error(
      "Amplify is missing Cognito env vars. Check NEXT_PUBLIC_COGNITO_USER_POOL_ID and NEXT_PUBLIC_COGNITO_CLIENT_ID.",
    );
    return;
  }

  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId,
        userPoolClientId,
        loginWith: {
          email: true,
          username: true,
        },
      },
    },
  });

  isAmplifyConfigured = true;
}

type AmplifyProviderProps = {
  children: ReactNode;
};

export default function AmplifyProvider({ children }: AmplifyProviderProps) {
  configureAmplify();
  return <>{children}</>;
}