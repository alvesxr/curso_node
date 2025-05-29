import jwt from 'jsonwebtoken';
import User from '../models/User'
export default async(req, res, next) => {
  //verifica se o usuário ta logado
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

    //checar se o id e email ainda pertencem ao usuário
    //(ele pode mudar o email, o token n pode ser o mesmo ainda)
    const user = await User.findOne({
      where: {
        id,
        email,
      }
    });

    if(!user){
      return res.status(401).json({errors: ['Usuário inválido']})
    }

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
