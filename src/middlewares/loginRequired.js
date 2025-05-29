import jwt from 'jsonwebtoken';
export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization){
    return res.status(401).json({
      errors: ['Login required']
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    console.log("JWT_SECRET NO LOGIN REQUIRED:", process.env.JWT_SECRET);

    return next();
}catch (e){
  return res.status(401).json({
    errors: ['Invalid token', e]
  });
}

}
