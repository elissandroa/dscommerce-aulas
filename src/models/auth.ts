export type RoleEnum = "ROLE_AMIN" | "ROLE_CLIENT";

export type CredentialsDTO = {
    username: string;
    password: string;
}

export type AccessTokenPayloadDTO = {
    exp: number;
    user_name: string;
    authorities: RoleEnum[];
}