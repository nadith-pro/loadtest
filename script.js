import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  stages: [
    { duration: '15s', target: 10000 },
    { duration: '30s', target: 10000 },
    { duration: '15s', target: 0 },
  ],
};
export default function() {
  let res = http.get('https://piratelk.com/');
  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
}