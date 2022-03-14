import 'dotenv/config';
import mongoose from 'mongoose';
import { app } from './app'

const PORT = process.env.PORT || 3000;

const mongoConnect = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@rockman.hfo5p.mongodb.net/rockman?retryWrites=true&w=majority`
mongoose.connect(mongoConnect)
.then(() => {
  console.log('Database connected!!')
  app.listen(PORT, () => console.log(`User API working on port ${PORT}`));
})
.catch((err) => console.log(err))

