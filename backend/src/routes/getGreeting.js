const GREETING = 'Hello Xunxun!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
