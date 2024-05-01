import { classNames } from './classNames';

// создаем обертку для пачки тестов
describe('classNames', () => {
  test('test', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  // проверяем работу функции с одним параметром
  test('test with one parameter', () => {
    expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe('someClass cls1 cls2');
  });

  // проверяем работу функции с несколькими параметрами
  test('test with multiple parameters', () => {
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['cls1', 'cls2'])).toBe(
      'someClass cls1 cls2 hovered scrollable'
    );
  });

  // проверяем работу функции с несколькими параметрами yно один = false
  test('test with multiple parameters', () => {
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['cls1', 'cls2'])).toBe(
      'someClass cls1 cls2 hovered'
    );
  });

  // проверяем работу функции с несколькими параметрами yно один = undefined
  test('test with multiple parameters', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: undefined }, ['cls1', 'cls2'])
    ).toBe('someClass cls1 cls2 hovered');
  });
});
