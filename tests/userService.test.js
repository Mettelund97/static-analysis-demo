const { getUser, saveUser } = require('../src/userService');
describe('UserService', () => {
    test('getUser returns undefined for null id', () => {
        expect(getUser(null)).toBeUndefined();
    });
    test('getUser returns user for valid id', () => {
        const user = getUser(1);
        expect(user).toHaveProperty('name', 'John');
    });
    test('saveUser returns success', () => {
        const result = saveUser({ name: 'Test User' });
        expect(result).toBe(true);
    });
});
