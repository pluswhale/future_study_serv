module.exports.homepage = async (req, res, next) => {
    return res.json({status: true, hello: 'world'});
}; 