import { nameIsValid } from '../src/app.js'
import { fullTrim } from '../src/app.js'
import { getTotal } from '../src/app.js'

describe('test user name', () => {
    it('name consists of 2 letters', () => {
        expect(nameIsValid('li')).toBe(true)
    })
    it('throws an error when name consists capitals letters', function() {
        expect(nameIsValid('Li')).toBe(false)
    })
    it('throws an error when name consists less than 2 letters', function() {
        expect(nameIsValid('L')).toBe(false)
    })

    describe('test user name', () => {
        it('test one space', () => {
        expect(fullTrim('ss ss')).toBe('ssss')
    })
        it('test few spaces inside text', () => {
        expect(fullTrim('s s s    s')).toBe('ssss')
    })
        it('test spaces before and after text', () => {
        expect(fullTrim(' ssss ')).toBe('ssss')
    })
})

    describe('Check sum', () => {
        it('Проверка скидки равной 10', () => {
            expect(getTotal([{price: 10, quantity: 10}], 10)).toBe(90)
        })

        it('check discount is a number', () => {
            expect(() => getTotal([{price: 10, quantity: 10}], 'df', 10)).toThrow("Скидка должна быть числом")
        })
        it('check discount is positive number', () => {
            expect(() => getTotal([{price: 10, quantity: 10}], -10, 10)).toThrow("Процент скидки не может быть отрицательным")
        })
        it('check discount is 100%', () => {
            expect(() => getTotal([{price: 10, quantity: 10}], 100)).toThrow("Процент скидки не может быть больше 100")
        })
    })

    test.each([
        [[{ price: 10, quantity: 10 }], 100],
        [[{ price: 10, quantity: 1 }], 10],
        [
          [
            { price: 10, quantity: 1 },
            { price: 10, quantity: 9 },
          ],
          100,
        ],
        [
            [
              { price: 10, quantity: 0 },
              { price: 10, quantity: 9 },
            ],
            90,
          ]
      ])("%o = %s", (items, expectation) => {
        expect(getTotal(items)).toBe(expectation);
      })
    })

