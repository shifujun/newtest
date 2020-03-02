const https = require('https')

const data = JSON.stringify({
    deviceNumber: "1"
})

const options = {
    hostname: 'newtest.21kunpeng.com',
    port: 18074,
    path: '/jyx-paas-provider-remote/deviceInfo/InsideSecret/adb/randomGetDevice',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Content-Length': data.length,
        'Authorization': '47185209'
    }
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(`statusMessage: ${res.statusMessage}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.write(data)
req.end()
