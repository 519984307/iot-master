const curd = require_plugin("curd");
exports.post = curd.list("group", {
    joins: [{
        from: 'user',
        fields: ['name']
    }, {
        from: 'company',
        fields: ['name']
    }]
});