exports.BAD_COMMAND = 1
exports.BAD_TOKEN = 2

exports.TIMEOUT = new Error('Request timed out')
exports.TIMEOUT.code = 'ETIMEDOUT'

exports.DESTROY = new Error('Request destroyed')
exports.DESTROY.code = 'EDESTROYED'