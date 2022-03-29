const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
// dotenv must be called before app

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
  console.log('DB connection successful');
}


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message)
  console.log('UNHANDLED REJECTION, shutting down')
  server.close(() => {
    process.exit(1)
  })
})