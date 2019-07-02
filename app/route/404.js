exports.index = (req, res, next) => {
    try {
        return MISC.notFound(res);
    } catch (error) {
        console.log(error);
        return res.json({
            message: 'Something went wrong!'
        })
        
    }
}
