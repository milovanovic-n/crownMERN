const jwt = require("jsonwebtoken");

module.exports = context => {
  // context = { ...headers }
  const authHeader =  context.headers.authorization;
  if(authHeader){
    // Bearer ...
    const token = authHeader.split("Bearer ")[1];
    if(token){
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return user;
      } catch(err) {
        throw new Error(err);
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};