import type { AuthResponse, LoginRequest, RegisterRequest } from "../../types";
import baseApi from "./baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (loginReq) => ({
                url: '/auth/login',
                method: 'POST',
                body: loginReq
            })
        }),

        register: builder.mutation<AuthResponse, RegisterRequest>({
            query: (registerReq) => ({
                url: '/auth/register',
                method: 'POST',
                body: registerReq
            })
        })
    }),
})

export default authApi