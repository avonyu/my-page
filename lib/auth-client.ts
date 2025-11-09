import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient()

export const signInGithub = async () => {
  const data = await authClient.signIn.social({
    provider: "github"
  })
  return data;
}

export const signInGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google"
  })
  return data;
}

export const { signOut, useSession } = authClient;