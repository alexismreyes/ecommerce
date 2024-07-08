import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
    exp: number; // Expiration time
    iat: number; // Issued at time    
}

export const isTokenValid = (token: string): boolean => {
    try {
        const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currentTime;
    } catch (error) {
        return false;
    }
};

export const getJwtToken = (): string | null => {
    const token = localStorage.getItem("jwt");
    return token && isTokenValid(token) ? token : null;
};
