const randomUuid = require('uuid/v4');

let sign = function (data, secretId, secretKey) {
    data.secretId = secretId;
    data.signTime = Date.now().toString();
    data.signNonce = randomUuid();
    data.signMethod = 'SHA256';

    const content = Object.entries(data)
        .push({secretKey: secretKey})
        .map(o => o.key + '=' + o.value).join('&');

    console.log('content==' + content);
}

module.exports = sign;
