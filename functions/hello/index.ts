function main(e, ctx, cb) {
    console.log('processing event!: %j', e);
    cb(null, { hello: e.hello });
}

export default main;