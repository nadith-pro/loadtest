import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  stages: [
    { duration: '300s', target: 20 },
    { duration: '300s', target: 20 },
    { duration: '500s', target: 0 },
  ],
};
export default function() {
  let res = http.get('https://www.tvzonelk.com/');
  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
}
