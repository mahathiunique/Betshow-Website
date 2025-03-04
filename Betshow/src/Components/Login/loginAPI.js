import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/login/';

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(BASE_URL, {
            uname: email,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.error('Login Error:', error);
        return 'Error logging in';
    }
};
