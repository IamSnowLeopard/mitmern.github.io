/* Load HelloPerson */

const hello = require('./helloPerson');

// tests
describe('hello', () => {

    it('should greet name', () => {
        const names = 'Rahmat';
        const expectedGreeting = 'Hello Rahmat'; 
        expect(hello(names)).toBe(expectedGreeting);
    })

    it('should greet null', () => {
        const names = null;
        const expectedGreeting = 'Hello lovely human!';   
        expect(hello(names)).toBe(expectedGreeting);
    })

    it('should shout name', () => {
        const names = 'RAHMAT';
        const expectedGreeting = 'HELLO RAHMAT!';   
        expect(hello(names)).toBe(expectedGreeting);
    })

    it('should greet two people', () => {
        const names = ['Rahmat', 'Hawwa'];
        const expectedGreeting = 'Hello Rahmat, Hawwa!';   
        expect(hello(names)).toBe(expectedGreeting);
    })

    it('should greet the whole array of people', () => {
        const names = ['Rahmat', 'Hawwa', 'Fawziyya','Aisha'];
        const expectedGreeting = 'Hello Rahmat, Hawwa, Fawziyya, Aisha!';   
        expect(hello(names)).toBe(expectedGreeting);
    })

});