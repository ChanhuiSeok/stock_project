import axios from 'axios';

/** XML 데이터를 요청하고, 파싱하는 함수 */
/** 첫 번째 파라미터로 request URL을, 두 번째 파라미터로 요청할 프로퍼티 목록 */
export default function request(URL: string) {
  const response = axios.get('http://localhost:4000' + URL);
  return response;
}
