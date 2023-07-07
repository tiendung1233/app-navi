import register from "./auth/register.js"
import login from "./auth/login.js"
import logout from "./auth/logout.js"
import users from "./accounts/users.js"
import refreshToken from "./auth/refreshToken.js"
import { middlewareController } from "../middleware/middleware.js"
export default async function Router(app) {
    app.use('/api/register', register)
    app.use('/api/login', login)
    app.use('/api/users', users)
    app.use('/api/logout', middlewareController.verifyToken, logout)
    app.use('/api/refresh', refreshToken)
}
