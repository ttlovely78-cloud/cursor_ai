# cursor-demo

사용자 데이터에서 이메일을 추출·검증하는 Node.js 유틸리티 프로젝트입니다.

## 시작하기

```bash
npm test
node src/index.js
```

## API

| 함수 | 설명 |
|------|------|
| `extractEmails(users)` | 사용자 배열에서 `email` 값만 추출 |
| `isValidEmail(email)` | RFC 5322 canonical 형식 검증 |
| `getValidEmails(users)` | 유효한 이메일만 반환 |
| `getUniqueValidEmails(users)` | 유효 이메일 중복 제거 후 반환 |

```javascript
import { getUniqueValidEmails } from './src/email.js';

const users = [
  { email: 'alice@example.com' },
  { email: 'alice@example.com' },
  { email: 'invalid' },
];

console.log(getUniqueValidEmails(users));
// → ['alice@example.com']
```

## 프로젝트 구조

```
src/
  index.js        # 진입점
  email.js        # 이메일 유틸 모듈
  email.test.js   # 테스트
.cursor/
  rules/          # Cursor Rules
  command/        # Cursor Commands
  skills/         # Agent Skills
```

---

## Release Notes

### v1.0.0

이메일 추출·검증 유틸 모듈과 테스트 스위트를 추가하고, Cursor 프로젝트 설정(Rules, Skills, Commands)을 정비한 첫 기능 릴리스입니다.

#### ✨ 기능

- `src/email.js` 이메일 유틸 모듈 추가
  - `extractEmails` — 사용자 배열에서 이메일 추출
  - `isValidEmail` — RFC 5322 canonical 형식 검증
  - `getValidEmails` — 유효한 이메일만 필터링
  - `getUniqueValidEmails` — 유효 이메일 중복 제거
- `src/email.test.js` 테스트 4개 추가 (`npm test`로 실행)
- `.cursor/rules/coding-style.mdc` — ESM, JSDoc, 한국어 주석 등 코딩 규칙 정의
- `.cursor/command/prep-pr.md` — PR 준비 커맨드 추가
- `.cursor/skills/release-notes/` — 릴리스 노트 작성 스킬 및 커밋 수집 스크립트 추가 (Windows용 `.ps1` 포함)

#### 🐛 버그 수정

- 해당 없음

#### 🧹 기타

- `package.json`을 CommonJS → **ESM**(`"type": "module"`)으로 전환
- `test` 스크립트를 Node 내장 test 러너로 연결
- `src/index.js` 진입점 정리
- GitHub 이슈 [#1](https://github.com/ttlovely78-cloud/cursor_ai/issues/1) — Cursor.AI Rules, Skills, MCP 기술 정리

#### 테스트

```
npm test
✔ 4 tests passed
```

---

## 라이선스

ISC
