const device = require("../../../lib/device");

exports.get = async ctx => {
    const d = device.get(ctx.params._id);
    if (!d) throw new Error("设备未上线")
    d.refresh()
    ctx.body = {data: '执行成功'}
}