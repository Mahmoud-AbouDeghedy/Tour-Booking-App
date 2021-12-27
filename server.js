const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', () => {
  // console.log('UNCAUGHT EXCEPTION! 🎇 Shutting down...');
  // console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!!'));
// .catch(err => console.log('ERROR'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  // console.log(`running on port ${port}...`);
});

process.on('unhandledRejection', () => {
  // console.log('UNHANDLED REJECTION! 🎇 Shutting down...');
  // console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
