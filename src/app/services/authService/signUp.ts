import { httpClient } from "../httpClient";

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  accessToken: string;
}

export async function signUp(params: SignUpParams) {
  const { data } = await httpClient.post<SignUpResponse>(
    "/auth/sign-up",
    params
  );

  return data;
}
