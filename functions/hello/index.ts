console.log('start simple')

export default function name(e, ctx, cb) {
    console.log('processing event: %j', e);
    cb(null, { hello: e.hello });
}