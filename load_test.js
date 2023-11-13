import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '5m', target: 100 }, // simulate traffic growth from 1 - 100 users over 5 minutes
        { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
        { duration: '5m', target: 0 }, // simulate trafic going to 0 users
    ],
    tresholds: {
        http_req_duration: ['p(99)<150'], // 99% of requests must complete below 150ms
    },
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