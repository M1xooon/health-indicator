import getHealthStatus from '../healthStatus';

test('health > 50 → healthy', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health = 50 → wounded', () => {
  expect(getHealthStatus({ name: 'Воин', health: 50 })).toBe('wounded');
});

test('health = 15 → wounded', () => {
  expect(getHealthStatus({ name: 'Лучник', health: 15 })).toBe('wounded');
});

test('health < 15 → critical', () => {
  expect(getHealthStatus({ name: 'Разбойник', health: 10 })).toBe('critical');
});
