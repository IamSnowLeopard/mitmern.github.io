/* Greet peopole */
function hello(names)  {
    if (names === null) {
        return 'Hello lovely human!';
    }

    if (Array.isArray(names)) {
        return 'Hello ' + names.join(', ') + '!';
    }

    if (names === names.toUpperCase()) {
        return 'HELLO ' + names + '!';
    }
    
    return 'Hello ' + names;
}

module.exports = hello;