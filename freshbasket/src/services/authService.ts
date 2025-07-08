const API_URL = 'http://localhost:5000/api';

export const authService = {
    async register(userData: { name: string; email: string; password: string }) {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('userToken', data.token);
            return data;
        }
        throw new Error(data.message);
    },

    async login(credentials: { email: string; password: string }) {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('userToken', data.token);
            return data;
        }
        throw new Error(data.message);
    },

    logout() {
        localStorage.removeItem('userToken');
    }
}; 