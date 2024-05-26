import authRouter from './modules/user/user.routes.js'

export const appRouter = (app, express) => {

app.use(express.json()) // parse data from cover to Json

//APIs for user
app.use('/auth', authRouter)

// Not Found Page 
app.use('/*', (req, res, next) => {
    return next(new Error('Not Found', { cause: 404 }));
})

//error handler
app.use((error, req, res, next) => {
    return res.status(error.cause || 500).json({
        success: false,
        message: error.message,
        stack: error.stack
    })
})

}