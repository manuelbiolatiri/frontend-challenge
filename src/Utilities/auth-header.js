import { getUserToken } from '../Services/authenticationService';

function authHeader() {
    if (getUserToken) {
        return {
            Authorization: `${getUserToken}`,
            'Content-Type': 'application/json',
        };
    } else {
        return {};
    }
}

export default authHeader;
