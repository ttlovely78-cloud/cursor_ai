import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  extractEmails,
  isValidEmail,
  getValidEmails,
  getUniqueValidEmails,
} from './email.js';

test('extractEmails returns email strings from users', () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];

  assert.deepEqual(extractEmails(users), [
    'alice@example.com',
    'bob@example.com',
  ]);
});

test('isValidEmail accepts valid addresses and rejects invalid ones', () => {
  assert.equal(isValidEmail('alice@example.com'), true);
  assert.equal(isValidEmail('user+tag@example.com'), true);
  assert.equal(isValidEmail('not-an-email'), false);
  assert.equal(isValidEmail('missing@domain'), false);
  assert.equal(isValidEmail('@example.com'), false);
});

test('getValidEmails returns only valid emails', () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'invalid' },
    { name: 'Carol', email: 'carol@test.co' },
  ];

  assert.deepEqual(getValidEmails(users), [
    'alice@example.com',
    'carol@test.co',
  ]);
});

test('getUniqueValidEmails returns unique valid emails in order', () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'alice@example.com' },
    { name: 'Carol', email: 'invalid' },
    { name: 'Dave', email: 'carol@test.co' },
    { name: 'Eve', email: 'carol@test.co' },
  ];

  assert.deepEqual(getUniqueValidEmails(users), [
    'alice@example.com',
    'carol@test.co',
  ]);
});
