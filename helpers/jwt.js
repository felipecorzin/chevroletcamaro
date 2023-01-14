const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {

    const payload = { uid, name };
    
    return new Promise( (resolve, reject) => {

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token ) => {
    
            if ( err ) {
                // TODO MAL
                console.log(err);
                reject(err);
    
            } else {
                // TODO BIEN
                resolve( token  )
            }
        })
    });
};

const comprobarTokenUsuario = ( req, res, next ) => {
    const token = req.get('x-token') || '';
    if (!token) {
        return res.status(403).send({ message: "No se proporcionó token!" });
    }
    jwt.verify(token, process.env.SECRET_JWT_SEED, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "No autorizado!" });
        }
        req.usuario = decoded.usuario;
        next();
    });
}

const isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      Role.find(
        {
          _id: { $in: user.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
  
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
              next();
              return;
            }
          }
  
          res.status(403).send({ message: "Require Admin Role!" });
          return;
        }
      );
    });
};

const isModerator = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      Role.find(
        {
          _id: { $in: user.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
  
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "moderator") {
              next();
              return;
            }
          }
  
          res.status(403).send({ message: "Require Moderator Role!" });
          return;
        }
      );
    });
};

module.exports = { generarJWT,comprobarTokenUsuario,isAdmin,isModerator }