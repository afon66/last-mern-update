import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const authenticationToken = (req, res, next) => {
  const authHeader = req.headers['authorization']

  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' })
    }
    
    req.user = user 

    next()
  })
}

export default authenticationToken