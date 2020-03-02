const sign = require('./sign_util');

test('test sign', () => {
    const data = {deviceNumber: "1"};
    sign(data, 'id123', 'key456')
})
