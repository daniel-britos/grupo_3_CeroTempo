module.exports = (req, res, next) => {
  // if(!req.session.userLogin){
  //    next()
  // }else{
  //     res.redirect('/')
  // }
//----------------------CÓDIGO DE ABAJO FUNCIONA--------------//
  if (req.session.userLogin) {
    res.redirect("/");
  } else {
    next();
  }
};
