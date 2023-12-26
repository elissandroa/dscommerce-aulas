import { requestBackend } from "../utils/requests";
import * as authService from './auth-service';

const headers = {
    Authorization: "Bearer " +  authService.getAccessToken()
}

export function findMe() {
    return requestBackend({url: '/users/me', headers});
}