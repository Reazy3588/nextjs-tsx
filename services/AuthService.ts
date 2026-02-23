import axios from "@/lib/axios";

export const BASH_URL = "https://fakestoreapi.com";

export interface LoginRequest {
    username?: string;
    password?: string;
    sysCode?: string;
    onlyExtend?: boolean;
}

export const login = async (payload: { data: string }) => {

    try {

        return await axios({
            method: 'post',
            url: `${BASH_URL}/auth/login`,
            data: payload
        });

    } catch(e) {

        console.log('Loin request error >>> ', e);
    }
}
