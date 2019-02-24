const wip = require('@codesherpas/wip');
const titleLint = require('@codesherpas/titlelint');

const apps = [
    {
        name: 'wip',
        handle: wip.handle,
        type: 'status'
    },
    {
        name: 'titleLint',
        handle: titleLint.handle,
        type: 'status'
    }
]

module.exports = { apps }
