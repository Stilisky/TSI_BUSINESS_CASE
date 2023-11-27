var createError = require('http-errors');
var express = require('express');
const cors = require('cors')
const connectDB = require('./configuration/db')
const swaggerUi = require('swagger-ui-express')
const swaggerSetup = require('./swagger.json')

const usersRouter = require('./routes/userRoute')
const playerRoute = require('./routes/playerRoute')
const gameRouter = require('./routes/gameRoute')

var app = express();
connectDB()

app.use(cors());
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
  res.send('TSI API v1.0');
});

app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup))
app.use('/api/v1/auth', usersRouter);
app.use('/api/v1/', playerRoute)
app.use('/api/v1/games', gameRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
