// RFC 5322 addr-spec (canonical form, comments/folding whitespace excluded).
// Sources:
// - https://emailregex.com/ (RFC 5322 Official Standard)
// - https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
//   (accepted answer: IP-octet `00` bug fix applied)
const RFC5322_EMAIL_RE =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(?:2(?:5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(?:2(?:5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+\])$/i;

/**
 * 사용자 배열에서 이메일 문자열만 추출합니다.
 * @param {{ email: string }[]} users - email 속성을 가진 사용자 객체 배열
 * @returns {string[]} 추출된 이메일 목록
 */
export function extractEmails(users) {
  return users.map((user) => user.email);
}

/**
 * 이메일 주소가 RFC 5322 canonical 형식인지 검증합니다.
 * @param {string} email - 검증할 이메일 주소
 * @returns {boolean} 유효하면 true
 */
export function isValidEmail(email) {
  if (typeof email !== 'string' || email.length === 0) {
    return false;
  }
  return RFC5322_EMAIL_RE.test(email);
}

/**
 * 사용자 배열에서 유효한 이메일만 추출합니다.
 * @param {{ email: string }[]} users - email 속성을 가진 사용자 객체 배열
 * @returns {string[]} 유효한 이메일 목록
 */
export function getValidEmails(users) {
  return extractEmails(users).filter(isValidEmail);
}

/**
 * 사용자 배열에서 유효한 이메일만 추출하고 중복을 제거합니다.
 * @param {{ email: string }[]} users - email 속성을 가진 사용자 객체 배열
 * @returns {string[]} 중복이 제거된 유효 이메일 목록 (등장 순서 유지)
 */
export function getUniqueValidEmails(users) {
  return [...new Set(getValidEmails(users))];
}
