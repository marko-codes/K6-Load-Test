import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '2m', target: 500 }, // simulate traffic growth from 1 - 400 users over 2 minutes
        { duration: '4h', target: 500 }, // stay at 100 users for 5 hours
        { duration: '2m', target: 0 }, // simulate trafic going to 0 users
    ],
};

const API_BASE_URL = 'https://localhost:5001';

export default () => {

    http.batch([
        ['Get', `${API_BASE_URL}/user`],
        ['Get', `${API_BASE_URL}/gym`],
        ['Get', `${API_BASE_URL}/member`],
        ['Get', `${API_BASE_URL}/post`],
    ]);

    sleep(1);
};