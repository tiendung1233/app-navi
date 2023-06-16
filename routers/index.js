import register from "./accounts/register.js"
import auth from "./accounts/auth.js"
export default async function Router(app) {
    app.use('/api/register', register)
    app.use('/api/auth', auth)
}