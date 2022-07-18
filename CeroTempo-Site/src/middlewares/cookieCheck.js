module.exports = (req,res,next) =>{
    // if(req.cookies.userCeroTempo){
    //     req.session.userlogin = req.cookies.userCeroTempo
    // }
    // console.log('>>>>>>>>>>>>>>>>>>>',req.session.userlogin)
    // next()
///--------------------CÓDIGO DE ABAJO FUNCIONA---------------------//
    if(req.cookies.concesionarias){
        req.session.userlogin = req.cookies.userCeroTempo
        res.locals.userLogin = req.session.userLogin;
    }
    next()
}