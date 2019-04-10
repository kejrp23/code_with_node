// section 5 video 23 this makes some sense but not there yet.
// reading material available. 
// section 5 video 24 helps explain deeper, it's still very confusing. re watch and read material.

module.exports = {
    errorHandler: (fn) => 
        (req,res,next) => {
            Promise.resolve(fn(req,res,next))
                .catch(next);
        }
};