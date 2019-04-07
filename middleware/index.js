// section 5 video 23 this makes some sense but not there yet.
// reading material available. 

module.exports = {
    errorHandler: (fn) => 
        (req,res,next) => {
            Promise.resolve(fn(req,res,next))
                .catch(next);
        }
};