import Cookies from "js-cookie";


export const tryLogin = async(email, password) => {
    const response = await fetch(`/api/session/`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password}),
    });
    const data = await response.json();
    if(data.status === 403){
        return data;
    } else {
        return data
    }
}


export function loadUser() {
    const authToken = Cookies.get("token");
    if (authToken) {
        try {
            const payload = authToken.split(".")[1];
            const decodedPayload = atob(payload);
            const payloadObj = JSON.parse(decodedPayload);
            const { data } = payloadObj;
            return data;
        } catch (e) {
            Cookies.remove("token");
        }
    }
    return { authentication: { message: '' }, token: authToken };
}